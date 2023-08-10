<?php 
 include '../../../generic.php';

$menus = getDataApi('menu');
$profile = getDataApi('general');

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
    <title>Navbar 4</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-dark py-lg-0 py-2">
      <div class="container">
        <a class="navbar-brand" href="#">
          ITours <span class="text-dark">.</span>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasScrolling"
          aria-controls="offcanvasScrolling"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbar-content">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                >Group Tour <i class="fa fa-angle-down" aria-hidden="true"></i
              ></a>
              <ul class="dropdown-menu dropdownMenu">
                <li class="dropend">
                  <a
                    href="#"
                    class="dropdown-item dropdown-toggle submenu"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    >International
                    <i class="fa fa-angle-right" aria-hidden="true"></i
                  ></a>
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
                    class="dropdown-item dropdown-toggle submenu"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    >Domestic
                    <i class="fa fa-angle-right" aria-hidden="true"></i
                  ></a>
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
                >Holiday <i class="fa fa-angle-down" aria-hidden="true"></i
              ></a>
              <ul class="dropdown-menu dropdownMenu">
                <li class="dropend">
                  <a
                    href="#"
                    class="dropdown-item dropdown-toggle submenu"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    >International
                    <i class="fa fa-angle-right" aria-hidden="true"></i
                  ></a>
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
                    class="dropdown-item dropdown-toggle submenu"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    >Domestic
                    <i class="fa fa-angle-right" aria-hidden="true"></i
                  ></a>
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
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                >Others <i class="fa fa-angle-down" aria-hidden="true"></i
              ></a>
              <ul class="dropdown-menu dropdownMenu">
                <li class="dropend">
                  <a href="#" class="dropdown-item">Hotels </a>
                </li>

                <li class="dropend">
                  <a href="#" class="dropdown-item">Activities </a>
                </li>

                <li class="dropend">
                  <a href="#" class="dropdown-item">Visa </a>
                </li>

                <li class="dropend">
                  <a href="#" class="dropdown-item">Transport </a>
                </li>

                <li class="dropend">
                  <a href="#" class="dropdown-item">Cruise </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Contact us</a>
            </li>
          </ul>
        </div>

         <!-- mobile case responsive code-->
        <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
          <div class="offcanvas-header justify-content-end me-3">
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                >Group Tour <i class="fa fa-angle-down" aria-hidden="true"></i
              ></a>
              <ul class="dropdown-menu dropdownMenu">
                <li class="dropend">
                  <a
                    href="#"
                    class="dropdown-item dropdown-toggle submenu"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    >International
                    <i class="fa fa-angle-right" aria-hidden="true"></i
                  ></a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href=""> Dubai</a></li>
                    <li><a class="dropdown-item" href=""> Singapore</a></li>
                    <li>
                      <a class="dropdown-item border-0" href=""> Thailand</a>
                    </li>
                  </ul>
                </li>

                <li class="dropend">
                  <a
                    href="#"
                    class="dropdown-item dropdown-toggle submenu"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    >Domestic
                    <i class="fa fa-angle-right" aria-hidden="true"></i
                  ></a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href=""> Kerala</a></li>

                    <li>
                      <a class="dropdown-item border-0" href=""> Skkim</a>
                    </li>
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
                >Holiday <i class="fa fa-angle-down" aria-hidden="true"></i
              ></a>
              <ul class="dropdown-menu dropdownMenu">
                <li class="dropend">
                  <a
                    href="#"
                    class="dropdown-item dropdown-toggle submenu"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    >International
                    <i class="fa fa-angle-right" aria-hidden="true"></i
                  ></a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href=""> Dubai</a></li>
                    <li><a class="dropdown-item" href=""> Singapore</a></li>
                    <li>
                      <a class="dropdown-item border-0" href=""> Thailand</a>
                    </li>
                  </ul>
                </li>

                <li class="dropend">
                  <a
                    href="#"
                    class="dropdown-item dropdown-toggle submenu"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    >Domestic
                    <i class="fa fa-angle-right" aria-hidden="true"></i
                  ></a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href=""> Kerala</a></li>

                    <li>
                      <a class="dropdown-item border-0" href=""> Skkim</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Service</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
         <!-- mobile case responsive code end-->
      </div>
    </nav>

    <script src="js/navbar.js"></script>
  </body>
</html>
