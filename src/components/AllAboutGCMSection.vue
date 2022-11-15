<template>
  <section id="About" class="pt-5 pb-3 container-xxl about">
    <div class="container text-center">
      <h1 class="section-heading">All About GCM</h1>
      <div class="about-section-content">
        <!-- <div class="about-image">
          <img src="../assets/images/logo.png" alt="">
        </div> -->
        <div class="about-description">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo modi adipisci cum assumenda ea ut, veritatis voluptatibus minima similique atque maxime velit vero repellat eaque enim deserunt voluptate impedit temporibus ab harum nulla magni. Perferendis fugit blanditiis alias sequi ipsum magnam, nam odit et adipisci natus similique officiis iusto rem!</p>
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-6">
          <div id="Follow" class="social-media">
            <h1 class="follow-us-heading">Follow Us</h1>
            <div>
              <h3 class="follow-us-gcm mt-4">G Centric Music</h3>
              <p class="d-flex align-items-center justify-content-center">
                <i class="bi bi-youtube gcm-sm-youtube me-3"></i>
                <i class="bi bi-facebook gcm-sm-facebook"></i>
              </p>
              
            </div>
            
            <h4 class="follow-us-audiominded">AudioMinded</h4>
            <p>
              <!-- make div a link to the facebook page -->
              <div>
                <i class="bi bi-instagram me-2"></i>
                <i class="bi bi-twitter me-2"></i>
                <i class="bi bi-facebook me-2"></i>
                <br>
                <span class="social-media-handle">AudioMinded</span>
              </div>
            </p>
          </div>
        </div> 

        <div class="col-md-6">
          <div id="Bookings" class="bookings">
            <h1 class="bookings-heading">For Bookings</h1>
            <div>
              <h3 class="artist-name mt-4">AudioMinded</h3>
              <div>
                <!-- make this a link, linking to the social media section of AudioMindied above -->
                <span class="social-media-dm">DM on Social Media</span>
              </div>
              <div class="py-1">
                <!-- add mailto: -->
                <!-- <i class="bi bi-envelope me-1 g"></i> -->
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope me-1 text-white" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
              	</svg>
                <span class="artist-email">thulanisitho@gmail.com</span>
              </div>
              <div class="pb-1">
                <!-- add telephone attribute <a href="tel:+4733378901">+47 333 78 901</a> -->
                <i class="bi bi-whatsapp me-1 g"></i>
                <span class="artist-number artist-whatsapp-number">067 806 8671</span>
              </div>
              <div class="">
                <i class="bi bi-phone me-1 g"></i>
                <span class="artist-number artist-phonecall-number">067 933 5610</span>
              </div>
            </div>
          </div>    
        </div>  
      </div>
      

    </div>

  </section>
</template>



<style lang="scss" scoped>

   

  .about {
    // background-color: #e07902;
    // background: rgb(255,51,0);
    // background: linear-gradient(104deg, rgba(255,51,0,1) 0%, rgba(236,77,29,1) 51%, rgba(241,146,59,1) 100%, rgba(222,185,120,1) 100%);
    // color: #fff;
    background-color: #010101; 
    
    // border-bottom: 3px solid rgb(255,51,0);
    border-top: 1px solid rgb(255,51,0);
    
    
    // height: 95vh;

    .section-heading,
    .follow-us-heading,
    .bookings-heading,
    .follow-us-gcm,
    .follow-us-audiominded,
    .artist-name {
      color: white;
    }

    .about-description,
    .bi,
    .social-media-dm,
    .artist-email,
    .artist-number,
    .social-media-handle {
      background: rgb(255,51,0);
      background: linear-gradient(104deg, rgba(255,51,0,1) 0%, rgba(236,77,29,1) 51%, rgba(241,146,59,1) 100%, rgba(222,185,120,1) 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    .gcm-sm-youtube {
      font-size: 3rem;
    }

    .gcm-sm-facebook {
      font-size: 2.3rem;
    }

    .g {
      font-size: 5vw;;
    }
  }
</style>