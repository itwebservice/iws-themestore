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
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>
    <title>Navbar 5</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-dark py-lg-0 py-2 ps-lg-4">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="images/logo.png" />
        </a>
        <div class="seach-icon-mobile">
          <a data-bs-toggle="modal" href="#exampleModalToggle" href="#">
            <i class="fa fa-search"></i>
          </a>
        </div>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-content"
        >
          <i class="fa fa-bars" aria-hidden="true"></i>
        </button>
        <div class="collapse navbar-collapse ps-lg-5" id="navbar-content">
          <ul class="navbar-nav me-auto">
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
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Others
                <i class="fa fa-angle-down ms-1" aria-hidden="true"></i>
              </a>
              <ul
                class="dropdown-menu dropdownMenu"
                aria-labelledby="navbarDropdown"
              >
                <li><a class="dropdown-item" href="#">Hotels</a></li>
                <li><a class="dropdown-item" href="#">Activities</a></li>
                <li><a class="dropdown-item" href="#">Visa</a></li>
                <li><a class="dropdown-item" href="#">Transport</a></li>
                <li>
                  <a class="dropdown-item border-bottom-lg-0" href="#"
                    >Cruise</a
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Contact Us</a>
            </li>
          </ul>
          <div class="d-none d-xl-block">
            <div
              class="social-icon d-flex align-items-center justify-content-end"
            >
              <div class="number pe-2">
                <p class="m-0"><i class="fa fa-phone"></i>  <?= $profile['app_contact_no'] ?></p>
              </div>
              <div class="social-links pe-5">
                <ul>
                  <li>
                    <a href="<?= $social['inst'] ?>"> <i class="fa fa-instagram"></i> </a>
                  </li>
                  <li>
                    <a href="<?= $social['li'] ?>"> <i class="fa fa-linkedin"></i> </a>
                  </li>
                  <li>
                    <a href="<?= $social['fb'] ?>"> <i class="fa fa-facebook"></i> </a>
                  </li>
                  <li>
                    <a href="<?= $social['wa'] ?>"> <i class="fa fa-whatsapp"></i> </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <script src="js/navbar.js"></script>
  </body>
</html>
