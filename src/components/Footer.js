import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return <>
    <footer className="py-4">
      <div className="container-xxl">
        <div className='row'>
          <div className="col-6">
            <div className='row'>
              <div className="footer-top-data d-flex gap-15 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0">Sign Up for Latest News</h2>
              </div>
              <div className="footer-top-input input-group">
                <input type="text" className="form-control" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2" />
                <span class="input-group-text p-2" id="basic-addon2">
                  Subcribe
                </span>
              </div>
            </div>
          </div>

          <div className="col-3">
            <h4 className='text-white mb-4'>Contact Us</h4>
            <div className='footer-links d-flex flex-column'>
              <address className="text-white fs-6">
                Vinhomes Central Park, <br /> Ho Chi Minh City <br /> Pincode: 70000 <br />
                <a href="tel:+84 349087318" className='mt-3 d-block mb-1 text-white'>+84349087318</a>
                <a href="mailto:lehongthai2000@gmail.com" className="mt-3 d-block mb-3 text-white">lehongthai2000@gmail.com</a>
              </address>
            </div>
          </div>
          <div className="col-3">
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Home</Link>
              <Link className='text-white py-2 mb-1'>Products</Link>
              <Link className='text-white py-2 mb-1'>Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <footer className=" py-4">
      <div className="container-xxl">
        <div className="row justify-content-center text-white mb-0">
          <p className="text-left">Copyright &copy; {new Date().getFullYear()} Huy Thái Spirits. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  </>
};

export default Footer