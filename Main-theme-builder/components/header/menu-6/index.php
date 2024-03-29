<?php 
 include '../../../generic.php';

$menus = getDataApi('menu');
$profile = getDataApi('general');
$social = getDataApi('social');
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <title>Navbar 6</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <div class="sub-menu">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-sm-12 col-md-6">
                            <div class="sub-menu-right-content">
                                <span>Top destinations</span>
                                <a href="#">Asia</a>
                                <a href="#">Europe</a>
                                <a href="#">America</a>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-12 col-md-6">
                            <div class="sub-menu-social-icon">
                                <a href="<?= $social['fb'] ?>"><i class="fa fa-facebook"></i></i></a>
                                <a href="<?= $social['tw'] ?>"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href="<?= $social['wa'] ?>"><i class="fa fa-whatsapp" aria-hidden="true"></i></i></a>
                                <a href="<?= $social['inst'] ?>"><i class="fa fa-instagram"></i></a>
                                <span><i class="fa fa-volume-control-phone" aria-hidden="true"></i>  <?= $profile['app_contact_no'] ?></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    <nav class="navbar navbar-expand-lg navbar-light py-lg-0 py-2">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="images/logo.png" />
        </a>
        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-content">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                >Group Tour <i class="fa fa-angle-down ms-2" aria-hidden="true"></i></a
              >
              <ul class="dropdown-menu dropdownMenu">
                <li class="dropend">
                  <a
                    href="#"
                    class="dropdown-item dropdown-toggle submenu"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    >International</a
                  >
                  <ul class="dropdown-menu">
                      <?php 
                        foreach($menus['group']['International'] as $menu)
                        {
                    ?>
                    <li>
                      <a class="dropdown-item" href=""><?= $menu['dest_name'] ?></a>
                    </li>
                    
                    <?php } ?>
                  </ul>
                </li>
                <li class="dropend">
                  <a
                    href="#"
                    class="dropdown-item dropdown-toggle submenu border-0"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    >Domestic</a
                  >
                  <ul class="dropdown-menu">
                     <?php 
                        foreach($menus['group']['Domestic'] as $menu)
                        {
                    ?>
                    <li>
                      <a class="dropdown-item" href=""><?= $menu['dest_name'] ?></a>
                    </li>
                    
                    <?php } ?>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                >Holiday <i class="fa fa-angle-down ms-2" aria-hidden="true"></i></a
              >
              <ul class="dropdown-menu dropdownMenu">
                <li class="dropend">
                  <a
                    href="#"
                    class="dropdown-item dropdown-toggle submenu"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    >International</a
                  >
                  <ul class="dropdown-menu">
                      <?php 
                        foreach($menus['International'] as $menu)
                        {
                    ?>
                    <li>
                      <a class="dropdown-item" href=""><?= $menu['dest_name'] ?></a>
                    </li>
                    
                    <?php } ?>
                  </ul>
                </li>
                <li class="dropend">
                  <a
                    href="#"
                    class="dropdown-item dropdown-toggle submenu border-0"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    >Domestic</a
                  >
                  <ul class="dropdown-menu">
                     <?php 
                        foreach($menus['Domestic'] as $menu)
                        {
                    ?>
                    <li>
                      <a class="dropdown-item" href=""><?= $menu['dest_name'] ?></a>
                    </li>
                    
                    <?php } ?>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Others <i class="fa fa-angle-down ms-1" aria-hidden="true"></i> </a>
              <ul class="dropdown-menu dropdownMenu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Hotels</a></li>
                <li><a class="dropdown-item" href="#">Activities</a></li>
                <li><a class="dropdown-item" href="#">Visa</a></li>
                <li><a class="dropdown-item" href="#">Transport</a></li>
                <li><a class="dropdown-item border-bottom-lg-0" href="#">Cruise</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Contact Us</a>
            </li>
          </ul>
          <a href="#" class="btn-book d-none d-lg-block">Offers</a>
        </div>
      </div>
    </nav>


    <script src="js/navbar.js"></script>
  </body>
</html>
