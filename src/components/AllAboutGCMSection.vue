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
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div id="Follow" class="social-media">
              <h1 class="follow-us-heading">Follow Us</h1>
              <div>
                <h3 class="follow-us-gcm">G Centric Music</h3>
                <p>
                  <i class="bi bi-youtube"></i>
                  <i class="bi bi-facebook"></i>
                </p>
                
              </div>
              
              <h4 class="follow-us-audiominded">AudioMinded</h4>
              <p>
                <!-- make div a link to the facebook page -->
                <div>
                  <i class="bi bi-instagram"></i>
                  <span class="social-media-handle">AudioMided Instagram</span>
                </div>
              </p>
              <p>
                <!-- make div a link to the facebook page -->
                <div>
                  <i class="bi bi-facebook"></i>
                  <span class="social-media-handle">AudioMided Facebook</span>
                </div>
              </p>
              <p>
                <!-- make div a link to the facebook page -->
                <div>
                  <i class="bi bi-twitter"></i>
                  <span class="social-media-handle">AudioMided Twitter</span>
                </div>
              </p>
            </div> 
          </div> 
        </div>
        
        <div class="row">
          <div class="col-md-6">
            <div id="Bookings" class="bookings">
              <h1 class="bookings-heading">For Bookings</h1>
              <h3 class="artist-name">AudioMinded</h3>
              <!-- make this a link, linking to the social media section of AudioMindied above -->
              <span class="social-media-dm">DM on Social Media</span>
              <br>
              <!-- add mailto: -->
              <span class="artist-email">email@email.com</span>
              <br>
              <!-- add telephone attribute <a href="tel:+4733378901">+47 333 78 901</a> -->
              <span class="artist-number">000 000 0000</span>
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
    
    
    // height: 100vh;

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
  }
</style>