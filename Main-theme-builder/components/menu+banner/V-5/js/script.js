// Shorthand for $( document ).ready()
$(function () {
  // -- calendar
  $(".js-datepicker").datepicker({
    format: "dd/mm/yyyy",
    autoclose: true,
    todayHighlight: true,
  });
});
