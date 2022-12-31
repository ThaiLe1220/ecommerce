import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

// const notHover = { background: 'white' };
// const hover = { background: "red" };
// const firstLink = 1;
// const secondLink = 2;
const Header = () => {

   return (
      <>
         <header className="header-top-strip py-3">
            <div className="container-xxl">
               <div className="row">
                  <div className="col-6">
                     <Link href = "/" className="text-white"> Huy Thái Spirits</Link>
                     <span className="text-white px-2">|</span>
                     <Link href = "/" class="active" className="text-white"> Huy Thái Online Store</Link>
                  </div>

                  <div className="col-6">
                     <p className="text-end text-white mb-0">
                        <Link className="text-white px-2" href="tel+84349087318">
                           VN Hotline: +84349087318
                        </Link>
                        <Link className="text-white" href="tel+13062098773">
                           CA Hotline: +13062098773
                        </Link>
                     </p>
                  </div>
               </div>
            </div>
         </header>

         <header className="header-upper py-3">
            <div className="container-xxl">
               <div className="row justify-content-center">
                  <div className="menu-bar col-6 row align-items-center text-center">
                     <div className="logo col-3">
                        <NavLink to="/" className="text-white text-uppercase">Huy Thái <br /> Online Store</NavLink>
                     </div>

                     <div className="search input-group col">
                        <input type="text" className="form-control" placeholder="Search Product ..." aria-label="Search Product" aria-describedby="basic-addon2" />
                        <span class="input-group-text p-3" id="basic-addon2">
                           <BsSearch className="fs-6" />
                        </span>
                     </div>
                  </div>

                  <div className="menu-bar col-6 row align-items-center text-center">
                     <div class="dropdown col-4">
                        <button class="btn btn-secondary dropdown-toggle bg-transparent align-items-center border-0 gap-15" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                           <span className="pe-3">Categories</span>
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

                     <div className="contact col">
                        <NavLink className="text-white text-uppercase" to="/contact">Contact</NavLink>
                     </div>

                     <div className="about col">
                        <NavLink className="text-white text-uppercase" to="/about">About Us</NavLink>
                     </div>

                     <div className="login col-2 row">
                        <Link className="text-white text-uppercase">
                           {/* <img src="images/user.svg" alt="user" /> */}
                           <span>Login</span>
                        </Link>
                     </div>
                     <div className="cart col-2">
                        <Link>
                           <img src="images/cart.svg" alt="cart" />
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </header>
      </>
   );
};

export default Header;
