import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {
   return (
      <>
      <div id="img-wrapper">
         <div className="head-text">
            <div className="whiskey-image">
               <img src="images/new_whiskey.jpg" />
            </div>
            <div className="text-on-whiskey-image">
               <h6 className="shop-now-text">SHOP NOW</h6>
               <h5 className="whiskey-text">WHISKEY</h5>
            </div>
         </div>
         {/* <div className="head-text">
            <div className="vodka-image">
               <img src="images/vodka_image.jpg" />
            </div>
            <div className="text-on-vodka-image">
            <h6 className="shop-now-text">SHOP NOW</h6>
            <h5 className="vodka-text">VODKA</h5>
            </div>
         </div> */}
         {/* <div className="head-text">
            <div className="head-image">
               <img src="images/champagne_image.webp" />
            </div>
            <div className="text-on-image">
               <h5>CHAMPAGNE</h5>
            </div>
         </div> */}
      </div>
         {/* <section className="home-wrapper-1 py-5">
            <div className="container-xxl">
               <div className="row">
                  <div className="col-6">
                     <div className="main-banner position-relative">
                        <img className="img-fluid rounded-3" src="images/champagne-editted.png" alt="main banner" />
                        <div className="main-banner-content position-absolute">
                           <h5>CHAMPAGNE</h5>
                        </div>
                     </div>
                  </div>
                  <div className="col-6">
                     <div className="main-banner position-relative">
                        <img className="img-fluid rounded-3" src="images/champagne-editted.png" alt="main banner" />
                        <div className="main-banner-content position-absolute">
                           <h5>CHAMPAGNE</h5>
                        </div>
                     </div>
                  </div>
                  <div className="col-6">
                     <div className="main-banner position-relative">
                        <img className="img-fluid rounded-3" src="images/champagne-editted.png" alt="main banner" />
                        <div className="main-banner-content position-absolute">
                           <h5>CHAMPAGNE</h5>
                        </div>
                     </div>
                  </div>

                  <div className="col-6">
                     <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                        <div className="sub-banner position-relative">
                           <img className="img-fluid rounded-3" src="images/whisky-editted.png" alt="main banner" />
                           <div className="main-banner-content position-absolute">
                              <h5>Whisky</h5>
                           </div>
                        </div>

                        <div className="sub-banner position-relative">
                           <img className="img-fluid rounded-3" src="images/whisky-editted.png" alt="main banner" />
                           <div className="main-banner-content position-absolute">
                              <h5>Vodka</h5>
                           </div>
                        </div> */}

                        {/* <div className="sub-banner position-relative">
                           <img className="img-fluid rounded-3" src="images/whisky-editted.png" alt="sub banner" />
                           <div className="sub-banner-content position-absolute">
                              <h5>Cognac</h5>
                              <p>
                                 From $599.00 
                              </p>
                           </div>
                        </div>

                        <div className="sub-banner position-relative">
                           <img className="img-fluid rounded-3" src="images/whisky-editted.png" alt="sub banner" />
                           <div className="sub-banner-content position-absolute">
                           <h5>Liquer</h5>
                              <p>
                                 From $599.00
                              </p>
                           </div>
                        </div> */}
                     {/* </div>
                  </div>
               </div>
            </div>
         </section> */}

         {/* <section className="home-wrapper-2 py-5"> */}
            {/* <div className="container-xxl"> */}
               {/* <div className="row">
                  <div className="col-12">
                     <div className="service d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-15">
                           <img src="images/service.png" alt="services" />
                           <div>
                              <h6>Free Shipping</h6>
                              <p className="mb-0">From all orders over $100</p>
                           </div>
                        </div>
                        <div className="d-flex align-items-center gap-15">
                           <img src="images/service-02.png" alt="services" />
                           <div>
                              <h6>Daily Offer</h6>
                              <p className="mb-0">Save upto 25% off</p>
                           </div>
                        </div>
                        <div className="d-flex align-items-center gap-15">
                           <img src="images/service-03.png" alt="services" />
                           <div>
                              <h6>Support 24/7</h6>
                              <p className="mb-0">Shop with an expert</p>
                           </div>

                           <div />
                        </div>

                        <div className="d-flex align-items-center gap-15">
                           <img src="images/service-04.png" alt="services" />
                           <div>
                              <h6>Affordable Prices</h6>
                              <p className="mb-0">Get Factory Default Price</p>
                           </div>
                        </div>
                        <div className="d-flex align-items-center gap-15">
                           <img src="images/service-05.png" alt="services" />
                           <div>
                              <h6>Secure Payments</h6>
                              <p className="mb-0">100% Protected Payments</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div> */}
            {/* </div> */}
         {/* </section> */}

         <section className="home-wrapper-3 py-5">
            <div className="container-xxl">
               <div className="row">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
               </div>
            </div>
         </section>
      </>
   );
};

export default Home;


// https://www.img2go.com/
// https://www.img2go.com/
