import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import {useState} from "react"
const notHover = {background: 'white'};
const hover = {background: "red"};
const firstLink = 1;
const secondLink = 2;
const Header = () => {
   
   return (
      <>
         <header className="header-top-strip py-3">
            <div className="container-xxl">
               <div className="row">
                  <div className="col-6">
                     <a onClick={event => window.location.href="/"} id="blogpage"className="firstWeb"> Huy Thái Spirits</a>
                     <span className="text-white">  |  </span>
                     <a onClick={event => window.location.href="/official"} id="shoppage" class="active" className="text-white"> Huy Thái Online Store</a>
                  </div>

                  <div className="col-6">
                     <p className="text-end text-white mb-0">
                        <a className="text-white" href="tel+84349087318">
                           VN Hotline: +84349087318
                        </a>
                        <a className="text-white" href="tel+13062098773">
                           CA Hotline: +13062098773
                        </a>
                     </p>
                  </div>
               </div>
            </div>
         </header>

         <header className="header-upper py-3">
            <div className="container-xxl">
               <div className="row d-flex align-items-center">
                  <div className="col-2">
                     <h2>
                        <a href="/" className="logo">
                           <p>Huy Thái Online Store</p>
                        </a>
                        {/* <div className="logo">
                           <Link>
                              <svg id="logo-70" width="78" height="30" viewBox="0 0 78 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 {" "}
                                 <path
                                    d="M18.5147 0C15.4686 0 12.5473 1.21005 10.3934 3.36396L3.36396 10.3934C1.21005 12.5473 0 15.4686 0 18.5147C0 24.8579 5.14214 30 11.4853 30C14.5314 30 17.4527 28.7899 19.6066 26.636L24.4689 21.7737C24.469 21.7738 24.4689 21.7736 24.4689 21.7737L38.636 7.6066C39.6647 6.57791 41.0599 6 42.5147 6C44.9503 6 47.0152 7.58741 47.7311 9.78407L52.2022 5.31296C50.1625 2.11834 46.586 0 42.5147 0C39.4686 0 36.5473 1.21005 34.3934 3.36396L15.364 22.3934C14.3353 23.4221 12.9401 24 11.4853 24C8.45584 24 6 21.5442 6 18.5147C6 17.0599 6.57791 15.6647 7.6066 14.636L14.636 7.6066C15.6647 6.57791 17.0599 6 18.5147 6C20.9504 6 23.0152 7.58748 23.7311 9.78421L28.2023 5.31307C26.1626 2.1184 22.5861 0 18.5147 0Z"
                                    class="ccustom"
                                    fill="#394149"></path>{" "}
                                 <path
                                    d="M39.364 22.3934C38.3353 23.4221 36.9401 24 35.4853 24C33.05 24 30.9853 22.413 30.2692 20.2167L25.7982 24.6877C27.838 27.8819 31.4143 30 35.4853 30C38.5314 30 41.4527 28.7899 43.6066 26.636L62.636 7.6066C63.6647 6.57791 65.0599 6 66.5147 6C69.5442 6 72 8.45584 72 11.4853C72 12.9401 71.4221 14.3353 70.3934 15.364L63.364 22.3934C62.3353 23.4221 60.9401 24 59.4853 24C57.0498 24 54.985 22.4127 54.269 20.2162L49.798 24.6873C51.8377 27.8818 55.4141 30 59.4853 30C62.5314 30 65.4527 28.7899 67.6066 26.636L74.636 19.6066C76.7899 17.4527 78 14.5314 78 11.4853C78 5.14214 72.8579 0 66.5147 0C63.4686 0 60.5473 1.21005 58.3934 3.36396L39.364 22.3934Z"
                                    class="ccustom"
                                    fill="#394149"></path>{" "}
                              </svg>
                           </Link>
                        </div> */}
                     </h2>
                  </div>

                  <div className="col-5">
                     <div className="input-group">
                        <input type="text" className="form-control py-2" placeholder="Search Product ..." aria-label="Search Product" aria-describedby="basic-addon2" />
                        <span class="input-group-text p-3" id="basic-addon2">
                           <BsSearch className="fs-6" />
                        </span>
                     </div>
                  </div>

                  <div className="col-5">
                     <div className="header-upper-links d-flex align-items-center justify-content-between">
                        <div>
                           <Link className="d-flex align-items-center gap-10 text-white">
                              <img src="images/user.svg" alt="user" />
                              <p className="mb-0">
                                 Login/ Register
                              </p>
                           </Link>
                           
                        </div>
                        <div>
                           <Link className="d-flex align-items-center gap-10 text-white">
                              <img src="images/cart.svg" alt="cart" />
                              <div className="d-flex flex-column">
                                 {/* <span className="badge bg-white text-dark">0</span>
                                 <p className="mb-0">$$$</p> */}
                              </div>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>

         <header className="header-bottom py-3">
            <div className="container-xxl">
               <div className="row">
                  <div className="col-12">
                     <div className="menu-bottom d-flex align-items-center gap-30">
                        <div>
                           <div class="dropdown">
                              <button class="btn btn-secondary dropdown-toggle bg-transparent d-flex align-items-center border-0 gap-15" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                 <img src="images/menu.svg" alt="menu" />
                                 <span className="me-5 d-inline-block">Categories</span>
                              </button>
                              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                 <li>
                                    <Link className="dropdown-item" to="">
                                       Champagne
                                    </Link>
                                 </li>
                                 <li>
                                    <Link className="dropdown-item" to="">
                                       Vodka
                                    </Link>
                                 </li>
                                 <li>
                                    <Link className="dropdown-item" to="">
                                       Whisky
                                    </Link>
                                 </li>
                                 <li>
                                    <Link className="dropdown-item" to="">
                                       Cognac
                                    </Link>
                                 </li>
                                 <li>
                                    <Link className="dropdown-item" to="">
                                       Liquer
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="menu-links">
                           <div className="d-flex align-items-center gap-15">
                              <NavLink className="text-white" to="/">
                                 Home
                              </NavLink>
              

                              <NavLink className="text-white" to="/contact">
                                 Contact
                              </NavLink>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
      </>
   );
};

export default Header;
