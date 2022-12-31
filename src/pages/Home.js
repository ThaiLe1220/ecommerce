import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { GoQuote } from "react-icons/go";

const Home = () => {
   return (
      <>
         <section className="home-wrapper-1 p-0">
            <div className="container-xxl">

               <div className="row">
                  <div className="col-6 p-0 hover-fade">
                     <div className="main-banner-1 position-relative">
                        <Link href="" title="">
                           <img className="img-fluid" src="images/new_whiskey.jpg" alt="main banner" />
                        </Link>
                        <div className="main-banner-content position-absolute">
                           <h5>Whiskey</h5>
                           <span>Shop Now</span>
                        </div>
                     </div>
                  </div>

                  <div className="col-6 p-0 hover-fade">
                     <div className="main-banner-2 position-relative">
                        <Link href="" title="">
                           <img className="img-fluid" src="images/champagne_image_editted.png" alt="main banner" />
                        </Link>
                        <div className="main-banner-content position-absolute">
                           <h5>Champagne</h5>
                           <span>Shop Now</span>
                        </div>
                     </div>
                  </div>

                  <div className="col-12 p-0 hover-fade">
                     <div className="main-banner-3 position-relative">
                        <Link href="" title="">
                           <img className="img-fluid" src="images/vodka_image_editted.png" alt="vodka" />

                        </Link>
                        <div className="main-banner-content position-absolute">
                           <h5>Vodka</h5>
                           <span>Shop Now</span>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="home-wrapper-3 p-0">
            <div className="container-xxl">
               <div className="row">
                  <h1 className="text-center">BestSellers</h1>
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
               </div>
            </div>
         </section>

         <section className="home-wrapper-4 p-0">
            <div className="container-xxl">
               <div className="row">
                  <h1 className="text-center">Reviews</h1>
                  <div className="swiper-banner">
                     <Swiper
                        style={{ "--swiper-navigation-color": "#fff", "--swiper-pagination-color": "#fff" }}
                        speed={700}
                        autoplay={{ delay: 3300, disableOnInteraction: false }}
                        spaceBetween={15}
                        loop={true}
                        navigation={true}
                        pagination={{ clickable: true }}
                        modules={[Autoplay, Navigation, Pagination]}
                        className="d-flex flex-column px-5 pb-4">
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

         {/* <section className="home-wrapper-5 py-5">
            <div className="container-xxl">
               <div className="row">
                  <div>
                     <h1></h1>
                  </div>
               </div>
            </div>
         </section> */}
      </>
   );
};

export default Home;

// https://www.img2go.com/
