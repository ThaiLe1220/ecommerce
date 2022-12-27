import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { GoQuote } from "react-icons/go";

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

         <section className="home-wrapper-4 py-5">
            <div className="container-xxl">
               <div className="row">
                  <div className="swiper-banner py-3 px-3">
                     <Swiper
                        style={{ "--swiper-navigation-color": "#fff", "--swiper-pagination-color": "#fff" }}
                        speed={700}
                        autoplay={{ delay: 3300, disableOnInteraction: false }}
                        spaceBetween={15}
                        loop={true}
                        navigation={true}
                        pagination={{ clickable: true }}
                        modules={[Autoplay, Navigation, Pagination]}
                        className="d-flex flex-column">
                        <SwiperSlide className="text-white text-center pb-4 px-3">
                           <span><GoQuote /></span>
                           <h5 className="py-3 px-4 lh-base">This is the best wine shopping site I have ever seen in my whole life. This is the best wine shopping site I have ever seen in my whole life</h5>
                           <h6>Thai Le (5-years customer)</h6>
                        </SwiperSlide>
                        <SwiperSlide className="text-white text-center pb-4 px-3">
                           <span><GoQuote /></span>
                           <h5 className="py-3 px-4">This is the best wine shopping site I have ever seen in my whole life</h5>
                           <h6>Thai Le (5-years customer)</h6>
                        </SwiperSlide>
                        <SwiperSlide className="text-white text-center pb-4 px-3">
                           <span><GoQuote /></span>
                           <h5 className="py-3 px-4 lh-base">This is the best wine shopping site I have ever seen in my whole life. This is the best wine shopping site I have ever seen in my whole life</h5>
                           <h6>Huy Nguyen (2-years customer)</h6>
                        </SwiperSlide>
                        <SwiperSlide className="text-white text-center pb-4 px-3">
                           <span><GoQuote /></span>
                           <h5 className="py-3 px-4">This is the best wine shopping site I have ever seen in my whole life</h5>
                           <h6>Huy Nguyen (2-years customer)</h6>
                        </SwiperSlide>
                     </Swiper>
                  </div>
               </div>
            </div>
         </section>

         <section className="home-wrapper-5 py-5">
            <div className="container-xxl">
               <div className="row">
                  <div>
                     <h1></h1>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Home;

// https://www.img2go.com/
