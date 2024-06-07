<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./loader.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
  <link rel="stylesheet" href="faq-website.css">
  <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <link href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <link rel="stylesheet" href="styles.css" />
  <link rel="stylesheet" href="./Image-Gallery/style.css">
  <link rel="stylesheet" href="./Image-Gallery/stylecaptions.css">
  <link rel="stylesheet" href="explore.css">
  <title>Tourguide</title>
  <!-- adding a fav-icon -->
  <link rel="icon" type="image/x-icon" href="favicon.ico"/>

  <script src="index.js" defer></script>
  <script src="mouseEffect.js"></script>
  <link rel="stylesheet" href="mouseEffect.css">
  <script src="Theme.js" defer></script>

  <link rel="stylesheet" href="path/to/aos.css">
  <script src="path/to/aos.js"></script>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
  </script>
  <script type="text/javascript">
    (function () {
      emailjs.init("WB9rAyWwwLZube-er");
    })();

    function planTrip() {

      window.location.href = 'plantrip.html';
    }
    // const menuButton = document.getElementsByClassName('link');
    //function closeNav() {
    //  let list = document.querySelector('.navLinks');
    //  list.classList.toggle('activeHamburger');
    //}
    // menuButton.forEach((button) => (button.onclick = () => closeNav()));


  </script>


  <style>
    html {
      scroll-behavior: smooth;
    }
  </style>
  <style>
    .active {
      color: red !important;
    }
    @media screen and (max-width:390px){
      .nav__logo{
        position: relative;
        right: 1.9rem;
      }
      .contact-btn{
        position: relative;
        right: 2.5rem;
      }
      .toggle-container{
        position: relative;
        right: 2.5rem;

      }
      .toggle{
        width: 130%;
      } 
      .line{
        width: 130%;
      }
      .hamburger{
        position: relative;
        right: 1rem;
      }
    }
    @media screen and (max-width:364px) {
      .toggle{
        width:190%;
      }
      .line{
        width: 190%;
      }
    }
    .gallery-rotate-image .image-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px; /* Adjust the gap between images */
}

.gallery-rotate-image .image-container span {
  display: inline-block;
}

.trip-gallery-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px; /* Adjust the gap between images */
}

.trip-gallery-container .image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.trip-gallery-container .image-container img {
  max-width: 100%;
  height: auto;
}

.btn-container {
  display: flex;
  justify-content: center;
  gap: 8px; /* Adjust the gap between buttons */
}
  </style>
<link rel="stylesheet" href="imstyle.css">
<link rel="stylesheet" href="jquery.flipster.min.css">

</head>


<body style="background-color: var(--secondary-color);">

  <body>

    <div id="pre-loader">
      <h1>TourGuide . . .</h1>
    </div>
    <div id="bg">
      <canvas></canvas>
      <canvas></canvas>
      <canvas></canvas>
    </div>
    <div id="progressbar"></div>
    <div id="scrollPath"></div>
    <!-- <canvas id="canvas"></canvas> -->
    <!-- <nav>

    <a href="#" class="nav__logo" data-aos="fade-right">Tourguide<span>.</span></a>
    <ul class="nav__links">
      <li class="link" data-aos="fade-down"><a href="#Home">Home</a></li>
      <li class="link" data-aos="fade-down"><a href="#AboutUs">AboutUs</a></li>
      <li class="link" data-aos="fade-down"><a href="#Destinations">Destinations</a></li>
      <li class="link" data-aos="fade-down"><a href="#trip">Pricing</a></li>
      <li class="link" data-aos="fade-down"><a href="#testimonials">Testimonials</a></li>
      <li class="link" data-aos="fade-down"><a href="#ReviewGallery">Reviews</a></li>
      <li class="link" data-aos="fade-down"><a href="feedback.html">Rate Us?</a></li>
      <li class="link" data-aos="fade-down"><a href="login.html">Login</a></li>

    </ul>
    <button id="toggle" data-aos="fade-down">Dark Theme</button>
    <a href="#contact"><button class="btn" id="btn-style">Contact Us</button></a>
  </nav> -->
    <div class="nav-container" id="top">
      <nav class="newNav">
        <a href="#" class="nav__logo" data-aos="fade-right">Tourguide<span>.</span></a>

        <ul class="navLinks">

          <li class="link" data-aos=""><a href="#Home">Home</a></li>
          <li class="link" data-aos=""><a href="#AboutUs"> AboutUs</a></li>
          <li class="link" data-aos=""><a href="#Destinations">Destinations</a></li>
          <li class="link" data-aos=""><a href="#trip">Pricing</a></li>
          <li class="link" data-aos=""><a href="#ReviewGallery">Trip Gallery</a></li>
          <li class="link" data-aos=""><a href="#testimonials">Testimonials</a></li>
          <li class="link" data-aos=""><a href="feedback.html">Rate Us?</a></li>
          <li class="link" data-aos=""><a href="#contact">Contact Us</a></li>


        </ul>


        <a href="loginPage.html" class="contact-btn"><button class="btn" id="btn-style" style="margin: 0;"
            data-aos="fade-down">Login</button></a>



        <!-- <a href="login-modified.html" class="contact-btn"><button class="btn" id="btn-style"
            style="margin: 0; box-shadow:1.5px 1.5px 6px red;" data-aos="fade-down">Login</button></a> -->

        <div class="toggle-container" data-aos="fade-down">
          <input id="themeToggle" class="toggle" type="checkbox">
        </div>
        <div class="hamburger" data-aos="fade-down">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </nav>
    </div>
    <header>
      <section class="section__container header__container" id="Home">
        <div class="header__image" data-aos="fade-down-right">
          <img src="https://i.ibb.co/88Qnjxg/pexels-josh-hild-2422259.jpg" alt="header" />
          <img src="https://i.ibb.co/w4Jqjdf/pexels-andrei-tanase-1271619.jpg" alt="header" />
        </div>
        <div class="header__content">
          <div>
            <h1 data-aos="fade-in">Find Your Perfect Getaway<br />Discover the World's Best Kept <span
                class="auto-typed" style="color: var(--head-text);"></span></h1>
            <p class="section__subtitle" data-aos="fade-in">
              Make your travel more enjoyable with us. We are the best travel
              agency and we are providing the best travel services for our
              clients.
            </p>
            <div class="action__btns">
              <a href="pricing/index.html"><button class="btn" data-aos="fade-in" id="btn-style"
                  style="box-shadow: 2px 2px 8px red;">Membership</button></a>
              <button class="btn" data-aos="fade-in" id="btn-style" onclick="planTrip()"
                style="box-shadow: 2px 2px 8px red;">Plan a Trip</button>
              <a href="./payment.html"><button class="btn" data-aos="fade-in" id="btn-style"
                  style="box-shadow: 2px 2px 8px red;">Book Now</button></a>
            </div>



            <br>
            <div class="story">
              <div class="video">
                <img src="https://i.ibb.co/KwHd8PQ/pexels-stijn-dijkstra-2499699.jpg" type="video/mp4"
                  style="box-shadow:2px 2px 8px blue;">
                <!-- link to the hmtl page with the video -->
                <a href="story.html" class="btn_video">
                  <span><i class="ri-play-fill"></i></span>
              </div>
            </div>
            <span data-aos="fade-in">Watch our story</span>
          </div>
        </div>
      </section>
    </header>

    <br>
    <!-- Section of About Us -->
    <section class="About" id="AboutUs">
      <div class="color col-12">
        <div class="section__container about__container">
          <!-- Left background color column -->
          <div class="col-8 bg primary"></div>
          <!-- Right content container -->
          <div
            class="section__container gallary__container relative z-10 max-w-screen-xl px-4 mx-auto text-center pb-14">
            <div class="aboutcon">
              <div class="col-span-2 mx-auto lg:mx-0 lg:text-left">
                <h1 class="headingofAbout section__title " data-aos=" fade-in"><b>About Us</b></h1>
                <!-- Article with about us content -->
                <article class="w-full text-left format sm:format-base lg:format-lg format-blue dark:format-invert">
                  <!-- Adding the content -->
                  <style>
                    /* CSS for hover effect */
                    .aboutcontent:hover {
                      transform: scale(1.8);
                      transition: transform 0.8s ease;
                    }
                  </style>
                  <p class="aboutcontent" data-aos="fade-in" style="text-align: justify;">
                    <span style="margin-left: 80px;"></span>Welcome to TourGuide, where we firmly believe that life's
                    true purpose unfolds amidst the thrill of exploration, the embrace of the unfamiliar, and the
                    pursuit of the extraordinary! Our mission is to embolden you, the intrepid traveler, to unveil this
                    purpose and elevate your journey by providing unparalleled assistance and guidance. Let us be your
                    compass as you navigate through the wonders of the world, forging unforgettable memories and
                    discovering the essence of travel!
                  </p>

                  <p class="aboutcontent" data-aos="fade-in" style="text-align: justify;">
                    <span style="margin-left: 80px;"></span> At TourGuide, our local guides serve as your passport to
                    effortlessly navigate through local
                    languages, customs, and traditions that often make traveling to a foreign place overwhelming. We
                    provide curated travel itineraries, once-in-a-lifetime experiences, valuable travel advice, and the
                    freedom to customize itineraries to ensure everything aligns with your wishlist.
                  </p>

                  <p class="aboutcontent" data-aos="fade-in" style="text-align: justify;">
                    <span style="margin-left: 80px;"></span>Since our inception in 2024, TourGuide has cultivated a
                    dynamic travel community, with 30,000+
                    guides hailing from over 200+ countries globally. We continue to grow each day, expanding the
                    horizons of possibilities for discovering the world. With TourGuide by your side, there's no limit
                    to the different ways you can embark on an unforgettable journey!
                  </p>

                  <p class="aboutcontent" data-aos="fade-in" style="text-align: justify;">
                    <strong><span style="margin-left: 80px;"></span> We welcome you to the TourGuide family - where
                      every journey becomes a story worth
                      sharing!</strong>
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    </div>
    <!-- Right statistics container -->
    <div data-aos="fade-left" class="col-6">

      <div class="space-y-4 sm:grid sm:grid-cols-2 lg:grid-cols-1 sm:gap-4 xl:gap-8 sm:space-y-0 md:mt-12">
        <!-- Box 1 - Number of Guides -->
        <div class="box1">
          <div class="iconss">

            <svg class="w-12 h-12 mx-auto dark:text-gray-100 group-hover:text-pink-500 group-hover:dark:text-pink-500"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <!-- SVG Path for the icon -->
              <circle cx="8.5" cy="7" r="4" />
              <polyline points="17 11 19 13 23 9" />
            </svg>
            <h3
              class="font-semibold text-4xl md:text-3xl group-hover:text-thq_green-500 text-gray-900 dark:text-white mt-3.5"
              data-aos="fade-in">25000</h3>
            <p
              class="text-base font-semibold text-gray-600 dark:text-gray-300 group-hover:text-gray-900 group-hover:dark:text-gray-300">
              Guides</p>
          </div>
        </div>
        <!-- Box 2 - Number of Tours -->
        <div class="box1">
          <div class="iconss">
            <svg class="w-12 h-12 mx-auto dark:text-gray-100 group-hover:text-pink-500 group-hover:dark:text-pink-500"
              viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="12" cy="10" r="4" />
              <!-- SVG Path for the icon -->
              <path d="M6.75 16a8.015 8.015 0 1 0 9.25 -13" />
              <line x1="12" y1="18" x2="12" y2="22" />
              <line x1="8" y1="22" x2="16" y2="22" />
            </svg>
            <h3
              class="font-semibold text-4xl md:text-3xl  group-hover:text-thq_green-500 text-gray-900 dark:text-white mt-3.5"
              data-aos="fade-in">20000</h3>
            <p class="text-base font-semibold text-gray-600 dark:text-gray-300 group-hover:text-gray-900 group-hover:dark:text-gray-300"
              data-aos="fade-in">Tours</p>
          </div>
        </div>
        <!-- Box 3 - Number of Destinations -->
        <div class="box1">
          <a href="affordable-destinations.html" class="iconss">
            <svg class="w-12 h-12 mx-auto group-hover:text-pink-500 dark:text-gray-100 group-hover:dark:text-pink-500"
              viewBox="0 0 24 24" stroke-width="2" stroke="black" fill="none" stroke-linecap="round"
              stroke-linejoin="round">
              <!-- SVG Path for the icon -->
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="18" y2="6.01" />
              <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
              <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />
              <line x1="9" y1="4" x2="9" y2="17" />
              <line x1="15" y1="15" x2="15" y2="20" />
            </svg>
            <h3
              class="font-semibold text-4xl md:text-3xl  group-hover:text-thq_green-500 text-black-900 dark:text-black mt-3.5"
              data-aos="fade-in">10994</h3>
            <p class="text-base font-semibold text-gray-600 dark:text-gray-300 group-hover:text-gray-900 group-hover:dark:text-gray-300"
              data-aos="fade-in">Destinations</p>
          </a>
        </div>
      </div>
    </div>

    </div>
    </div>
    </div>
    </div>

    </section>
    </header>
    <br><br>
    <!-- ending the section of About Us -->

    <!-- Newsletter Modal -->

    <div class="modal-container">
      <div class="modal-wrapper">
        <div class="cross-container">
          <i class="fas fa-times close-btn" onclick="closeModal()"></i>
        </div>
        <div class="modal-newsletter">
          <div class="modal-header">
            <div style="display: flex;flex-flow: column;">
              <a href="#" class="nav__logo"
                style="pointer-events:none;color:#000;scale: 0.75;">Tourguide<span>.</span></a>
              <h3 style="font-weight: 600;font-size: 24px;">Get Flat 15% OFF</h3>
              <span style="color: #939393; padding: .5rem; font-size: 13px;">Sign up and grab your discount.</span>
            </div>
          </div>
          <div class="modal-content">
            <form id="modal-form">
              <input type="email" id="modal-email" placeholder="Email Address" required>
              <button class="modal-btn" id="news-subscribe" type="submit">Subscribe</button>
            </form>
            <span style="color: #3950ac; padding: 1rem 0 0 0; font-weight: 600;cursor:pointer;font-size: 16px;"
              onclick="closeModal()">No, thanks</span>
            <span style="color: #939393; padding: 1rem; font-size: 13px;">You are signing up to receive our newsletters
              via
              email and can unsubscribe at any time.</span>
          </div>
        </div>
        <div>
          <img src="./img/pexels-sam-kolder-2387871.jpg" class="modal-image" alt="maldives">
        </div>
      </div>
    </div>

    <section class="destination" id="Destinations" data-aos="fade-up">
    <div class="section__container destination__container">
      <div class="section__header">
        <div>
          <h2 class="section__title" data-aos="fade-in">Explore top destinations</h2>
          <p class="section__subtitle" data-aos="fade-in">
          Explore your suitable and dream places around the world. Here you
          can find your right destination.
          </p>
        </div>
      </div>
    </div>
    </section>

    <!-- slideshow -->
<!-- <div class="slideshow-container" data-aos="fade-up"> -->

<!-- Next and previous buttons -->
<!-- <div class="destination__nav">
      <span onclick="pullSlide(-1)"><i class="ri-arrow-left-s-line"></i></span>
      <span onclick="pullSlide(1)"><i class="ri-arrow-right-s-line"></i></span>
    </div> -->

<!-- Full-width images with number and caption text -->
<!-- <div class="mySlides">
      <img src="./img/eiffelTower.webp" style="width:100%">
    </div>

    <div class="mySlides">
      <img src="./img/london.jpg" style="width:100%">
    </div>

    <div class="mySlides">
      <img src="./img/goa.jpg" style="width:100%">
    </div>

    <div class="mySlides">
      <img src="./img/maldives.jpg" style="width:100%">
    </div>
    <div class="imageDots">
      <span class="active"></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div> -->
<div class="outer-box">
  <div class="containers">
    
    <div class="card active" style="
      background-image: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 7%, rgba(255, 255, 255, 0) 50%),
        url('./img/eiffelTower.webp')
    ">
      <div class="info">
        <img src="./img/eiffelTower.webp" alt="Eiffel Tower" style="width:100%">
        <p>||Eiffel Tower||</p>
        <h3>PARIS</h3>
      </div>
    </div>

    <div class="card" style="
      background-image: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 7%, rgba(255, 255, 255, 0) 50%),
        url('./img/london.jpg')
    ">
      <div class="info">
        <img src="./img/london.jpg" alt="Giant Wheel" style="width:100%">
        <p>||Giant Wheel||</p>
        <h3>LONDON</h3>
      </div>
    </div>

    <div class="card" style="
      background-image: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 7%, rgba(255, 255, 255, 0) 50%),
        url('./img/goa.jpg')
    ">
      <div class="info">
        <img src="./img/goa.jpg" alt="Goa Beach" style="width:100%">
        <p>||Goa Beach||</p>
        <h3>GOA</h3>
      </div>
    </div>

    <div class="card" style="
      background-image: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 7%, rgba(255, 255, 255, 0) 50%),
        url('./img/maldives.jpg')
    ">
      <div class="info">
        <img src="./img/maldives.jpg" alt="Male Beach" style="width:100%">
        <p>||Male Beach||</p>
        <h3>MALDIVES</h3>
      </div>
    </div>

  </div>
</div>

    <script src="explore.js"></script>
    </section>

    <section class="trip" id="trip" data-aos="zoom-in" data-aos-offset="100">
      <div class="section__container trip__container">
        <h2 class="section__title">Best trip packages</h2>
        <p>
          Explore your suitable and dream places around the world. Here you can
          find your right destination.
        </p>
        <div class="trip__grid">
          <div class="trip__card">
            <img src="https://i.ibb.co/60nvYwQ/Screenshot-2023-07-14-173347.png" alt="trip" height="250" width="45" />
            <div class="trip__details">
              <p>Santorini, Aegean Sea</p>
              <div class="rating"><i class="ri-star-fill"></i> 4.2</div>
              <div class="booking__price">
                <div class="price"><span>From</span> $300</div>
                <a href="./dedicated-destinations/santorini-aegean-sea/start.html"><button class="book__now btn-style"
                    style="box-shadow: 2px 2px 8px red;">Book
                    Now</button></a>
              </div>
            </div>
          </div>
          <div class="trip__card">
            <img src="https://i.ibb.co/h1WgH8B/Screenshot-2023-07-14-173807.png" alt="trip" height="250" width="45" />
            <div class="trip__details">
              <p>Machu Picchu, Peru</p>
              <div class="rating"><i class="ri-star-fill"></i> 4.5</div>
              <div class="booking__price">
                <div class="price"><span>From</span> $450</div>
                <a href="./dedicated-destinations/machu-picchu-peru/Machu_start.html"><button
                    class="book__now btn-style" style="box-shadow: 2px 2px 8px red;">Book
                    Now</button></a>
              </div>
            </div>
          </div>
          <div class="trip__card">
            <img src="https://i.ibb.co/vc2W0wN/Screenshot-2023-07-14-174151.png" alt="trip" height="250" width="45" />
            <div class="trip__details">
              <p>Grand Canyon National Park, Arizona</p>
              <div class="rating"><i class="ri-star-fill"></i> 4.7</div>
              <div class="booking__price">
                <div class="price"><span>From</span> $400</div>
                <a href="./dedicated-destinations/grand-canyon-national-park-arizona/Grand_start.html"><button
                    class="book__now btn-style" style="box-shadow: 2px 2px 8px red;">Book Now</button></a>
              </div>
            </div>
          </div>
        </div>
        <div class="view__all">
          <a href="./package.html"><button class="btn" id="btn-style" style="box-shadow: 2px 2px 8px red;">View
              All</button></a>
        </div>
      </div>
    </section>
    <div class="hero">
      <div class="carousel">
        <ul>
            <li><img src="https://i.ibb.co/ZYDJ6vv/pexels-spencer-davis-4356144.jpg"></li>
            <li><img src="https://i.ibb.co/W3HTbYG/pexels-zakaria-boumliha-2827374.jpg"></li>
            <li><img src="https://i.ibb.co/KwHd8PQ/pexels-stijn-dijkstra-2499699.jpg"></li>
            <li><img src="https://www.shutterstock.com/image-photo/attractive-young-female-tourist-exploring-260nw-2206967581.jpg"></li>
            <li><img src="https://thumbs.dreamstime.com/b/young-man-tourist-sail-long-tail-thailand-boat-ocean-sea-vacation-travel-trip-beautiful-nature-87331931.jpg"></li>
            <li><img src="https://www.tourmyindia.com/blog//wp-content/uploads/2020/11/Feature-Akshardham-Temple.jpg"></li>
            <li><img src="https://etimg.etb2bimg.com/photo/106124800.cms"></li>
            <li><img src="https://i.insider.com/5dcc2f02e94e860aff271137?width=700"></li>
            <li><img src="https://static01.nyt.com/images/2022/03/23/multimedia/23-virus-briefing-capitol/23-virus-briefing-capitol-articleLarge.jpg?quality=75&auto=webp&disable=upscale"></li>
            <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWh9aGHycWhRya4V6ZiJFL26LyIHheiu-EoQ&s"></li>
        
        </ul>
      </div>
    
     

</div>

    <script
    src="https://code.jquery.com/jquery-3.7.1.min.js"
    integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
    crossorigin="anonymous"></script>
    <script src="jquery.flipster.min.js"></script>
<script>
$('.carousel').flipster({
    style:'carousel',
    spacing: -0.3,
});
</script>
<section class="gallary" id="ReviewGallery">
  <div class="section__container gallary__container">
    <div class="section__container gallary__container" id="originalDiv">
      <!-- <div class="gallary__content"> -->
        <div>
          <h2 class="section__title" data-aos="zoom-in">
            Our trip gallery that will inspire you
          </h2>
          <p class="section__subtitle" data-aos="zoom-in">
            Explore your suitable and dream places around the world. Here you
            can find your right destination.
          </p>
          <button class="btn btn-style" id="btn-page" onclick="replaceDivs()" data-aos="zoom-in"
            style="box-shadow: 2px 2px 8px rgb(0, 191, 255);">View All</button>
        </div>
      <!-- </div> -->
    </div>
  </div>
      <br><br>
      <!-- New div components (hidden initially) -->
      <div id="newDiv" style="display: none;" data-aos="zoom-in">
        <!-- Sliding Animated Gallery -->
        <div class="gallery-rotate-image">
          <div class="image-container">
            <span style="--i : 1">
              <img src="./img/pexels-ajay-donga-2174656.jpg">
            </span>
            <span style="--i : 2">
              <img src="./img/pexels-alex-azabache-3214958.jpg">
            </span>
            <span style="--i : 3">
              <img src="./img/pexels-andrei-tanase-1271619.jpg">
            </span>
            <span style="--i : 4">
              <img src="./img/pexels-josh-hild-2422259.jpg">
            </span>
            <span style="--i : 5">
              <img src="./img/pexels-paulo-marcelo-martins-2412606.jpg">
            </span>
            <span style="--i : 6">
              <img src="./img/pexels-quang-nguyen-vinh-2132126.jpg">
            </span>
            <span style="--i : 7">
              <img src="./img/pexels-sam-kolder-2387871.jpg">
            </span>
            <span style="--i : 8">
              <img src="./img/pexels-spencer-davis-4356144.jpg">
            </span>
            <span style="--i : 9">
              <img src="./img/pexels-stijn-dijkstra-2499699.jpg">
            </span>
            <span style="--i : 10">
              <img src="./img/pexels-zakaria-boumliha-2827374.jpg">
            </span>
          </div>
        </div>
        <div class="btn-container">
          <button class="btn btn-style" id="prev">Prev</button>
          <button class="btn btn-style" id="next">Next</button>
        </div>
        <!-- Trip Photo Gallery -->
        <div class="trip-gallery-container">

          <figure class="image-container">
            <img src="./img/Trip_Photos/photo1.png" height="250" width="200">
            <p><a href="https://maps.app.goo.gl/4ULWYJxSVD8AcUin6" target="_blank">LADAKH</a></p>
          </figure>
          <figure class="image-container">
            <img src="./img/Trip_Photos/photo2.png" height="250" width="200">
            <p><a href="https://maps.app.goo.gl/zrA5UgDQoeUtRhhn7" target="_blank">RANNERDALE KNOTTS</a></p>
          </figure>
          <figure class="image-container">
            <img src="./img/Trip_Photos/photo3.jpg" height="250" width="200">
            <p><a href="https://maps.app.goo.gl/eTfvw4peKN3AcMUy8" target="_blank">AMALPHI COAST</a></p>
          </figure>
          <figure class="image-container">
            <img src="./img/Trip_Photos/photo4.png" height="220" width="230">
            <p><a href="https://maps.app.goo.gl/tBZLQcZbCHRWsgGX7" target="_blank">THE GOLDEN TEMPLE,PERIYAPATTNA</a>
            </p>
          </figure>
          <figure class="image-container">
            <img src="./img/Trip_Photos/photo5.jpg" height="220" width="230">
            <p><a href="https://maps.app.goo.gl/8Y3rnjtxU563KVvE9" target="_blank">MALSHEJ GHAT</a></p>
          </figure>
          <figure class="image-container">
            <img src="./img/Trip_Photos/photo6.png" height="220" width="230">
            <p><a href="https://maps.app.goo.gl/cj2UZZoyCTzeoQjEA" target="_blank">SAHARA DESERT</a></p>
          </figure>
          <figure class="image-container">
            <img src="./img/Trip_Photos/photo7.png" height="220" width="230">
            <p><a href="https://maps.app.goo.gl/Gk1fQts4zeVRdAWu6" target="_blank">MALDIVES</a></p>
          </figure>
          <figure class="image-container">
            <img src="./img/Trip_Photos/photo8.jpg" height="220" width="230">
            <p><a href="https://maps.app.goo.gl/DbWvrFgfwwwTWuBT8" target="_blank">PUNAKHA SUSPENSION BRIDGE</a></p>
          </figure>
          <figure class="image-container">
            <img src="./img/Trip_Photos/photo9.jpg" height="220" width="230">
            <p><a href="https://maps.app.goo.gl/gBGuxUNXXemiZ2Td8" target="_blank">ARU VALLEY</a></p>
          </figure>
          <figure class="image-container">
            <img src="./img/Trip_Photos/photo10.jpg" height="220" width="230">
            <p><a href="https://maps.app.goo.gl/tQ4BT4gDoFtauReM9" target="_blank">THE GOLDEN BRIDGE</a></p>
          </figure>
          <figure class="image-container">
            <img src="./img/Trip_Photos/photo11.jpg" height="220" width="230">
            <p><a href="https://maps.app.goo.gl/oqDnmF2pCqRxV5Cp6" target="_blank">LAKE DISTRICT</a></p>
          </figure>
          <figure class="image-container">
            <img src="./img/Trip_Photos/photo13.jpg" height="220" width="230">
            <p><a href="https://maps.app.goo.gl/pHjaA4aqP41JxdAh9" target="_blank">MUNNAR</a></p>
          </figure>
          <figure class="image-container">
            <img src="./img/Trip_Photos/photo19.jpg" height="220" width="230">
            <p><a href="https://maps.app.goo.gl/84rV6GhhginGXgbc8" target="_blank">STATUE OF LIBERTY</a></p>
          </figure>
          <figure class="image-container">
            <img src="./img/Trip_Photos/photo20.png" height="220" width="230">
            <p><a href="https://maps.app.goo.gl/GzVALHoLp4MgFmgw5" target="_blank">NAKKI LAKE</a></p>
          </figure>

          <!-- <img src="./img/Trip_Photos/photo3.jpg" height="240" width="200"> -->

        </div>
      </div>
    </section>
    <script>
      function replaceDivs() {
    document.querySelector('.hero').style.display = 'none';
    document.getElementById('originalDiv').style.display = 'none';
    document.getElementById('newDiv').style.display = 'block';
  }
    </script>
    <br /><br /><br /><br /><br /><br />

    <!-- Testimonials Section -->

    <section class="testimonials" id="testimonials">
      <h2 class="testimonial-heading section__title" align-items="center" data-aos="fade-in">Testimonials</h2>
      <div class="testimonial-container">
        <div class="testimonial-user" data-aos="fade-up">
          <img class="testi-img" src="./img/testimonial1.jpg" alt="">
          <div>
            <p><sup><i class="fas fa-quote-left"></i></sup>TourGuide made our dream vacation a reality! From the
              breathtaking landscapes to the seamless logistics, every moment was a new adventure. The personalized
              itinerary and expert guides added a special touch to our journey. We can't wait to book our next trip with
              TourGuide!<sup><i class="fas fa-quote-right"></i></sup></p>
            <div class="user-info">
              <h3>Joseph</h3>
            </div>
          </div>
        </div>
        <div class="testimonial-user" data-aos="fade-up">
          <img class="testi-img" src="./img/Abhisek Tamang.jpg" alt="">
          <div>
            <p><sup><i class="fas fa-quote-left"></i></sup>Our cultural tour with TourGuide exceeded all expectations.
              The
              immersive experiences, knowledgeable guides, and carefully curated activities allowed us to connect with
              the
              local culture in a way we never thought possible. Thanks to TourGuide.<sup><i
                  class="fas fa-quote-right"></i></sup></p>
            <div class="user-info">
              <h3>Charles</h3>
            </div>
          </div>
        </div>
        <div class="testimonial-user" data-aos="fade-up">
          <img class="testi-img" src="./img/testimonial2.jpg" alt="">
          <div>
            <p><sup><i class="fas fa-quote-left"></i></sup>Traveling with the family has never been easier! TourGuide
              took
              care of every detail, ensuring a stress-free and enjoyable vacation for all. The kid-friendly activities
              and
              family-oriented guides made our trip unforgettable.<sup><i class="fas fa-quote-right"></i></sup></p>
            <div class="user-info">
              <h3>Katie</h3>
            </div>
          </div>
        </div>
      </div>
    </section>



    <!----------------------------------------------------- FAQ section ---------------------- -->

    <section>
      <h2 class="section__title" data-aos="zoom-in">
        Frequently asked questions
      </h2>
      <div class="faq-container">
        <div class="faq active" data-aos="zoom-in">
          <h3 class="faq-title">How do I book my travel arrangements through your website?</h3>
          <p class="faq-text">Booking your travel with us is simple and convenient. Start by entering your destination,
            travel dates, and other relevant details on our homepage. Browse through the available options, including
            flights, hotels, and car rentals. Once you find the perfect combination for your trip, follow the easy
            step-by-step process to confirm your booking. If you encounter any issues or have questions during the
            booking process, our customer support team is available 24/7 to assist you.</p>
          <button class="faq-toggle">
            <i class="fas fa-chevron-down"></i>
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="faq" data-aos="zoom-in">
          <h3 class="faq-title">What measures are in place to ensure the safety of my personal information?</h3>
          <p class="faq-text">We take the security of your personal information seriously. Our website employs
            state-of-the-art encryption technology to safeguard your data during the booking process. Additionally, we
            adhere to strict privacy policies and comply with industry standards to protect your information. Rest
            assured that your details are used solely for the purpose of facilitating your travel arrangements, and we
            do not share your information with third parties without your consent. For more details, please refer to our
            Privacy Policy.</p>
          <button class="faq-toggle">
            <i class="fas fa-chevron-down"></i>
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="faq" data-aos="zoom-in">
          <h3 class="faq-title">Can I make changes to my booking or cancel it if needed?</h3>
          <p class="faq-text">Yes, we understand that plans can change. Depending on the terms and conditions of your
            specific booking, you may be able to make modifications or cancel your reservation. Log in to your account
            on our website, navigate to the "Manage Booking" section, and follow the provided instructions. Keep in mind
            that there may be associated fees or restrictions depending on the type of booking and the time of the
            requested changes. For further assistance, feel free to contact our customer support team, and they will
            guide you through the process.</p>
          <button class="faq-toggle">
            <i class="fas fa-chevron-down"></i>
            <i class="fas fa-times"></i>
          </button>
        </div>

      </div>
    </section>

    <!-- Swiper JS -->
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

    <!-- Initialize Swiper -->
    <script>
      var swiper = new Swiper(".swiper-container", {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        },
        loop: true,
      });
    </script>




    <!--------------------------------------- Updated Contact Us Section ----------------------------------------------->

    <!-- <section class="contact" id="contact">
    <h2 class="section__title" align-items="center" data-aos="slide-right">Contact Us</h2>
    <div class="contact-form" data-aos="fade-in">
      <div class="left">
        Add your image here
        <img src="./img/flat-design-illustration-customer-support_23-2148887720.avif" alt="Contact Image"
          style="max-width: 100%; width: 500px;">
      </div>
      <div class="right">
        <form>
          <div class="mb-3">

            <label for="exampleInputName" style="color:black;">Name</label>
            <input type="text" class="form-control" id="exampleInputName" placeholder="Enter your name">
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail2" style="color:black;">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"
              placeholder="Enter your email">
            <div id="emailHelp" style="color:black;">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputMessage" style="color:black;">Message</label>

            <textarea class="form-control" id="exampleInputMessage" rows="4"
              placeholder="feel free to ask your queries!"></textarea>
          </div>
          <button type="submit" class="btn btn-primary" onclick="sendMail()">Submit</button>
        </form>
        <br>
        <button type="submit" class="btn btn-primary" onclick="window.location.href='feed.html'">
          Go to Feedback Page
        </button>
      </div>
    </div>



  </section> -->

    <section>
      <div class="container" id="cnt-form">
        <div class="items" style="box-shadow:rgba(50,50,93,0.25) 0px 50px 100px -20px,rgba(0,0,0,0.3) 0px 30px 60px -30px,rgba(10,37,64,0.35) 0px -2px 6px 0px inset;">
          <div class="contact" data-aos="slide-right">
            <div>
              <h1 class="section__title" style="height: 90px;">Contact Us</h1>
              <p>Feel Free to drop us a message with any inquiries or feedback.We're here to assist you!</p>
              <img src="./img/flat-design-illustration-customer-support_23-2148887720.avif">
            </div>
          </div>
          <div class="contact-form" data-aos="fade-in">
            <h1>Contact Us</h1>
            <form id="contact-form" name="CalcDiverse Contact" autocomplete="off">
              <div class="one" style="position: relative;">
                <i class="icon1 fa-solid fa-user"></i>
                <input type="text" id="Name" placeholder="Name"  style="padding-left: 6%;">
              </div>
              <div style="position: relative;">
                <i class="icon2 fa-solid fa-envelope" ></i>
                <input type="email" id="email" placeholder="Email"style="padding-left:6%;" required>
              </div>
              <div style="position: relative;">
                <i class="icon3 fa-solid fa-message"></i>
                <textarea id="message" placeholder="Type your message here.." style="padding-left:6%;" required></textarea><br>
              </div>
              <button type="submit" class="btn btn-style" data-aos="fade-in" id="btn-style"
              style="margin-right: 40px;box-shadow: 2px 2px 8px red;">Send</button>
              <button onclick="window.location.href='feed.html'" class="btn  btn-style" data-aos="fade-in"
                id="btn-style" style="box-shadow: 2px 2px 8px red;">Feedback</button>
            </form>
          </div>
        </div>
      </div>
    </section>




    <section class="subscribe" id="Contact">
      <div class="section__container subscribe__container">
        <div class="subscribe__content">
          <h2 class="section__title" data-aos="fade-up">Subscribe to get special prize</h2>
          <p class="section__subtitle" data-aos="fade-up">
            Explore your suitable and dream places around the world. Here you
            can find your right destination.
          </p>
        </div>
        <div class="subscribe__form" data-aos="fade-up">
          <form>
            <input type="email" placeholder="Your email here" id="emailInput" required />
            <button class="btn-send" id="send" type="submit" style="box-shadow: 2px 2px 8px blue;">Subscribe</button>
          </form>
        </div>
      </div>
    </section>

    <footer class="footer" data-aos="fade-up">
      <div class="section__container footer__container">
        <div class="footer__col">
          <h3 class="footer__title">Tourguide<span>.</span></h3>
          <p class="footer__text">
            Explore your suitable and dream places around the world. Here you
            can find your right destination.
          </p>
        </div>
        <div class="footer__col">
          <div class="footer__area">
            <h4 class="footer__subtitle">Support</h4>
          <p><a href="./faq.html" class="footer__link">FAQs</a></p>
          <p><a href="./tnc.html" class="footer__link">Terms & Conditions</a></p>
          <p><a href="./privacy.html" class="footer__link">Privacy Policy</a></p>
          <p><a href="#cnt-form" class="footer__link">Contact Us</a></p>
          </div>
        </div>
        
        <div class="footer__col">
          <h4>Address</h4>
          <div class="mapouter">
            <div class="gmap_canvas"><iframe width="200" height="200" id="gmap_canvas"
                src="https://maps.google.com/maps?q=wellington%20street%20kolkata&t=k&z=11&ie=UTF8&iwloc=&output=embed"
                frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a
                href="https://embedgooglemap.net/124/">invincible 123movies</a><br>
              <style>
                .mapouter {
                  position: relative;
                  text-align: right;
                  height: 200px;
                  width: 200px;
                }
              </style><a href="https://www.embedgooglemap.net">embed google map on website</a>
              <style>
                .gmap_canvas {
                  overflow: hidden;
                  background: none !important;
                  height: 200px;
                  width: 200px;
                }
              </style>
            </div>
          </div>
        </div>
        <div class="footer__col">
          <div class="footer__area">
          <h4>Reach Out To Us</h4>
          <p><span>Email:</span><a href="mailto:tour@tourguide.com">tour@tourguide.com</a></p>
          <p><span>Phone:</span><a href="tel:8562145852">+91 8562145852</a></p>
        </div>
        </div>
        <div class="footer__col">
          <div id="google_element"></div>
          <script src="https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate"></script>
          <script>
            function loadGoogleTranslate() {
              new google.translate.TranslateElement({
                pageLanguage: 'en'
              }, 'google_element');
            }
          </script>
      </div>


      <!--  New copyright code to make it dynamic and display current year -->
      <div class="footer__bar">
        <div>
          <li>Copyright &copy;<span id="year"></span> </span> Arpan Chowdhury. All rights reserved. </li>
        </div>
      </div>

      <!--   Previous copyright code
<!--  <div class="footer__bar">
        Copyright © 2023 Arpan Chowdhury. All rights reserved.
      </div> -->

    </footer>

    <!-- adding a scrollup btn -->
    <a class="goupbtn" href="#"><i class="fa-solid fa-arrow-up"></i></a>


    <script>
      // Get the button
      var mybutton = document.getElementById("goToTopBtn");

      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function () {
        scrollFunction();
      };

      function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }

      // When the user clicks on the button, scroll to the top of the document
      function goToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    </script>

    <script>
      let hamburger = document.querySelector('.hamburger');
      hamburger.addEventListener('click', () => {
        let list = document.querySelector('.navLinks');
        list.classList.toggle('activeHamburger');
      })
    </script>


    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
      AOS.init({
        duration: 1500,
        offset: 120
      });
    </script>

    <!-- typing animation -->
    <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
    <script>
      var typed = new Typed(".auto-typed", {
        strings: ["Wonders", "Gems", "Secrets"],
        typeSpeed: 150,
        backSpeed: 50,
        loop: true
      })
    </script>

    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
    <script>
        //initailizing emailjs 

        (function () {
          emailjs.init("kHyqhzLTyzP0cw1px");
        })();

      document.getElementById("contact-form").addEventListener('submit', function (event) {
        event.preventDefault();
        var email = document.getElementById("email").value;
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
          alert("Please enter a valid email");
          return;
        }
        sendEmail(email);
        event.target.reset();
      });

      function sendEmail(email) {
        var params = {
          name: document.getElementById("Name").value,
          email: email,
          message: document.getElementById("message").value
        }

        const serviceID = "service_txp05dc";
        const templateID = "template_16rbum9";

        emailjs.send(serviceID, templateID, params)
          .then(function (response) {
            console.log("Success!", response.status, response.text);
            alert("Email sent successfully!");
          },
            function (error) {
              console.log("Failed to send email...", error);
              alert("Failed to send Email. Please try again later.");
            });
      }
    </script>

    <script src="index.js"></script>


    <script>
      window.embeddedChatbotConfig = {
        chatbotId: "yDQ_EheFvX0HAPr9beQ5L",
        domain: "www.chatbase.co"
      }
    </script>
    <script src="https://www.chatbase.co/embed.min.js" chatbotId="yDQ_EheFvX0HAPr9beQ5L" domain="www.chatbase.co" defer>
    </script>



    <!-- Start of Conferbot Script 

    <script type="text/javascript">
        (function (d, s, id) {
          var js, el = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s);
          js.async = true;
          js.src = 'https://s3.ap-south-1.amazonaws.com/conferbot.defaults/dist/v1/widget.min.js';
          js.id = id;
          js.charset = 'UTF-8';
          el.parentNode.insertBefore(js, el);
          js.onload = function () {
            var w = window.ConferbotWidget("65b80765988633d43148e80e", "live_chat");
          };
        })(document, 'script', 'conferbot-js');
    </script>
    End of Conferbot Script
  -->




    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
      integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
      crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <!-- 
    <script>
      (function ($) {
        var isDarkMode = false; // Assuming initially in light mode

        var canvas = $('#bg').children('canvas'),
          background = canvas[0],
          foreground1 = canvas[1],
          foreground2 = canvas[2],
          config = {
            circle: {
              amount: 18,
              layer: 3,
              color: [157, 97, 207],
              alpha: 0.3
            },
            line: {
              amount: 12,
              layer: 3,
              color: [255, 255, 255],
              alpha: 0.3
            },
            speed: 0.5,
            angle: 20
          };

        if (background.getContext) {
          var bctx = background.getContext('2d'),
            fctx1 = foreground1.getContext('2d'),
            fctx2 = foreground2.getContext('2d'),
            M = window.Math, // Cached Math
            degree = config.angle / 360 * M.PI * 2,
            circles = [],
            lines = [],
            wWidth, wHeight, timer;

          requestAnimationFrame = window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            function (callback, element) { setTimeout(callback, 1000 / 60); };

          cancelAnimationFrame = window.cancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.msCancelAnimationFrame ||
            window.oCancelAnimationFrame ||
            clearTimeout;

          var setCanvasHeight = function () {
            wWidth = $(window).width();
            wHeight = $(window).height(),

              canvas.each(function () {
                this.width = wWidth;
                this.height = wHeight;
              });
          };

          var drawCircle = function (x, y, radius, color, alpha) {
            var gradient = fctx1.createRadialGradient(x, y, radius, x, y, 0);
            gradient.addColorStop(0, 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + alpha + ')');
            gradient.addColorStop(1, 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + (alpha - 0.1) + ')');

            fctx1.beginPath();
            fctx1.arc(x, y, radius, 0, M.PI * 2, true);
            fctx1.fillStyle = gradient;
            fctx1.fill();
          };

          var drawLine = function (x, y, width, color, alpha) {
            var endX = x + M.sin(degree) * width,
              endY = y - M.cos(degree) * width,
              gradient = fctx2.createLinearGradient(x, y, endX, endY);
            gradient.addColorStop(0, 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + alpha + ')');
            gradient.addColorStop(1, 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + (alpha - 0.1) + ')');

            fctx2.beginPath();
            fctx2.moveTo(x, y);
            fctx2.lineTo(endX, endY);
            fctx2.lineWidth = 3;
            fctx2.lineCap = 'round';
            fctx2.strokeStyle = gradient;
            fctx2.stroke();
          };

          var drawBack = function () {
            bctx.clearRect(0, 0, wWidth, wHeight);

            var gradient = [];

            if (isDarkMode) {
              gradient[0] = bctx.createRadialGradient(wWidth * 0.3, wHeight * 0.1, 0, wWidth * 0.3, wHeight * 0.1, wWidth * 0.9);
              gradient[0].addColorStop(0, '#0e1525');
              gradient[0].addColorStop(1, 'transparent');

              bctx.translate(wWidth, 0);
              bctx.scale(-1, 1);
              bctx.beginPath();
              bctx.fillStyle = gradient[0];
              bctx.fillRect(0, 0, wWidth, wHeight);
            } else {
              gradient[0] = bctx.createRadialGradient(wWidth * 0.3, wHeight * 0.1, 0, wWidth * 0.3, wHeight * 0.1, wWidth * 0.9);
              gradient[0].addColorStop(0, 'rgb(0, 26, 77)');
              gradient[0].addColorStop(1, 'transparent');

              bctx.translate(wWidth, 0);
              bctx.scale(-1, 1);
              bctx.beginPath();
              bctx.fillStyle = gradient[0];
              bctx.fillRect(0, 0, wWidth, wHeight);
            }

            gradient[1] = bctx.createRadialGradient(wWidth * 0.1, wHeight * 0.1, 0, wWidth * 0.3, wHeight * 0.1, wWidth);
            gradient[1].addColorStop(0, 'rgb(0, 150, 240)');
            gradient[1].addColorStop(0.8, 'transparent');

            bctx.translate(wWidth, 0);
            bctx.scale(-1, 1);
            bctx.beginPath();
            bctx.fillStyle = gradient[1];
            bctx.fillRect(0, 0, wWidth, wHeight);

            gradient[2] = bctx.createRadialGradient(wWidth * 0.1, wHeight * 0.5, 0, wWidth * 0.1, wHeight * 0.5, wWidth * 0.5);
            gradient[2].addColorStop(0, 'rgb(40, 20, 105)');
            gradient[2].addColorStop(1, 'transparent');

            bctx.beginPath();
            bctx.fillStyle = gradient[2];
            bctx.fillRect(0, 0, wWidth, wHeight);
          };

          var animate = function () {
            var sin = M.sin(degree),
              cos = M.cos(degree);

            if (config.circle.amount > 0 && config.circle.layer > 0) {
              fctx1.clearRect(0, 0, wWidth, wHeight);
              for (var i = 0, len = circles.length; i < len; i++) {
                var item = circles[i],
                  x = item.x,
                  y = item.y,
                  radius = item.radius,
                  speed = item.speed;

                if (x > wWidth + radius) {
                  x = -radius;
                } else if (x < -radius) {
                  x = wWidth + radius
                } else {
                  x += sin * speed;
                }

                if (y > wHeight + radius) {
                  y = -radius;
                } else if (y < -radius) {
                  y = wHeight + radius;
                } else {
                  y -= cos * speed;
                }

                item.x = x;
                item.y = y;
                drawCircle(x, y, radius, item.color, item.alpha);
              }
            }

            if (config.line.amount > 0 && config.line.layer > 0) {
              fctx2.clearRect(0, 0, wWidth, wHeight);
              for (var j = 0, len = lines.length; j < len; j++) {
                var item = lines[j],
                  x = item.x,
                  y = item.y,
                  width = item.width,
                  speed = item.speed;

                if (x > wWidth + width * sin) {
                  x = -width * sin;
                } else if (x < -width * sin) {
                  x = wWidth + width * sin;
                } else {
                  x += sin * speed;
                }

                if (y > wHeight + width * cos) {
                  y = -width * cos;
                } else if (y < -width * cos) {
                  y = wHeight + width * cos;
                } else {
                  y -= cos * speed;
                }

                item.x = x;
                item.y = y;
                drawLine(x, y, width, item.color, item.alpha);
              }
            }

            timer = requestAnimationFrame(animate);
          };

          var createItem = function () {
            circles = [];
            lines = [];

            if (config.circle.amount > 0 && config.circle.layer > 0) {
              for (var i = 0; i < config.circle.amount / config.circle.layer; i++) {
                for (var j = 0; j < config.circle.layer; j++) {
                  circles.push({
                    x: M.random() * wWidth,
                    y: M.random() * wHeight,
                    radius: M.random() * (20 + j * 5) + (20 + j * 5),
                    color: config.circle.color,
                    alpha: M.random() * 0.2 + (config.circle.alpha - j * 0.1),
                    speed: config.speed * (1 + j * 0.5)
                  });
                }
              }
            }

            if (config.line.amount > 0 && config.line.layer > 0) {
              for (var m = 0; m < config.line.amount / config.line.layer; m++) {
                for (var n = 0; n < config.line.layer; n++) {
                  lines.push({
                    x: M.random() * wWidth,
                    y: M.random() * wHeight,
                    width: M.random() * (20 + n * 5) + (20 + n * 5),
                    color: config.line.color,
                    alpha: M.random() * 0.2 + (config.line.alpha - n * 0.1),
                    speed: config.speed * (1 + n * 0.5)
                  });
                }
              }
            }

            cancelAnimationFrame(timer);
            timer = requestAnimationFrame(animate);
            drawBack();
          };

          $(document).ready(function () {
            setCanvasHeight();
            createItem();
          });

          $(window).resize(function () {
            setCanvasHeight();
            createItem();
          });

          // Add an event listener for toggling dark mode
          $('#toggleDarkMode').on('click', function () {
            isDarkMode = !isDarkMode;
            createItem(); // Recreate the canvas elements with updated colors
          });

        }
      })(jQuery);
    </script> -->

    <script>
      let pre = document.querySelector('#pre-loader');
      window.addEventListener("load", function () {
        pre.style.display = "none";
      })
    </script>

    <script>

      // To highlight active navbar
      document.addEventListener("DOMContentLoaded", function () {
        const navLinks = document.querySelectorAll('.navLinks a');

        function highlightNavLink() {
          const scrollPosition = window.scrollY;

          navLinks.forEach(link => {
            const sectionId = link.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);

            // Adjust this value to control when the link should be highlighted
            const offsetPercentage = 20;

            if (section.offsetTop - window.innerHeight * (offsetPercentage / 100) <= scrollPosition &&
              section.offsetTop + section.offsetHeight > scrollPosition) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }

        document.addEventListener('scroll', highlightNavLink);
        window.addEventListener('resize', highlightNavLink);

        // Initialize AOS library
        AOS.init();
      });</script>
    <script>

      let progress = document.getElementById("progressbar");

      let totalHeight = document.body.scrollHeight - window.innerHeight;
      window.onscroll = function () {
        let progressHeight = (window.pageYOffset / totalHeight) * 100;
        progress.style.height = progressHeight + "%";
      }

    </script>




  </body>
  <script>
    function replaceDivs() {
      // Get references to the original and new divs
      var originalDiv = document.getElementById("originalDiv");
      var newDiv = document.getElementById("newDiv");

      // Check if the original div exists
      if (originalDiv) {
        // Hide the original div
        originalDiv.style.display = "none";

        // Show the new div
        newDiv.style.display = "block";
      }
    }
  </script>
  <script src="./Image-Gallery/script.js"></script>
  <script src="./index.js"></script>

  <script src="faq-website.js"></script>

  <script>
    window.onload = function() {
        var link = top.document.createElement("link");
        link.type = "image/x-icon";
        link.rel = "icon";
        link.href = "favicon.ico?v=1";
        top.document.getElementsByTagName("head")[0].appendChild(link);
    }
</script>
  =======

  <!--  Adding copyright javascript code to make it dynamic and display current year -->
  <script>
    document.getElementById("year").innerHTML = new Date().getFullYear();
  </script>


</html><!-- New bubble background start -->


<div class="bubbles">
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>


  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>



</div>
<!-- New bubble background end -->
