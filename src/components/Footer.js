import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="footer-top-data d-flex gap-15 align-items-center">
                  <h2 className="">NewsLetter SignUp</h2>
                </div>
                <div className="footer-top-input input-group">
                  <input type="text" className="form-control text-white " placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2" />
                  <span class="input-group-text p-2" id="basic-addon2">
                    Subcribe
                  </span>
                </div>
              </div>
            </div>

            <div className="col-3">
              <h4>Contact Us</h4>
              <div className="footer-links d-flex flex-column">
                <address className="text-white py-2">
                  Vinhomes Central Park, <br /> Ho Chi Minh City <br /> Pincode: 70000 <br />
                  <a href="tel:+84 349087318" className="d-block py-2 text-white">
                    +84349087318
                  </a>
                  <a href="mailto:lehongthai2000@gmail.com" className="d-block py-2 text-white">
                    lehongthai2000@gmail.com
                  </a>
                </address>
              </div>
            </div>
            <div className="col-3">
              <h4>Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2">Home</Link>
                <Link className="text-white py-2">Account</Link>
                <Link className="text-white py-2">About Us</Link>
                <Link className="text-white py-2">Products</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className=" py-4">
        <div className="container-xxl">
          <div className="row text-center text-white mb-0">
            <p className="text-left">Copyright &copy; {new Date().getFullYear()} Huy Thái Spirits. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
