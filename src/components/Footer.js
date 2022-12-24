import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return <>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-30 align-items-center">
              <img src="images/newsletter.png" alt="newsletter" />
              <h2 className="mb-0">Sign Up for Latest News</h2>
            </div>

          </div>
          <div className="col-7">
            <div className="input-group">
              <input type="text" className="form-control py-2" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2" />
              <span class="input-group-text p-2" id="basic-addon2">
                Subcribe
              </span>
            </div>
          </div>

        </div>

      </div>
    </footer>

    <footer className="py-4">
      <div className="container-xxl">
        <div className='row'>
          <div className="col-3">
            <h4 className='text-white mb-4'>Contact Us</h4>
            <div className='footer-links d-flex flex-column'>
              <address className="text-white fs-6">
                Vinhomes Central Park, <br /> Ho Chi Minh City <br /> Pincode: 70000 <br />
                <a href="tel:+84 349087318" className='mt-3 d-block mb-1 text-white'>+84349087318</a>
                <a href="mailto:lehongthai2000@gmail.com" className="mt-3 d-block mb-3 text-white">lehongthai2000@gmail.com</a>
                <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                  <a className='text-white' href=''>
                    <BsLinkedin className='fs-4' />
                  </a>
                  <a className='text-white' href=''>
                    <BsInstagram className='fs-4' />
                  </a>
                  <a className='text-white' href=''>
                    <BsGithub className='fs-4' />
                  </a>
                  <a className='text-white' href=''>
                    <BsYoutube className='fs-4' />
                  </a>
                </div>
              </address>
            </div>
          </div>
          {/* <div className="col-3">
            <h4 className='text-white mb-4'>Information</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
              <Link className='text-white py-2 mb-1'>Refund Policy</Link>
              <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
              <Link className='text-white py-2 mb-1'>Terms & Conditions</Link>
              <Link className='text-white py-2 mb-1'>Blogs</Link>
            </div>
          </div>
          <div className="col-3">
            <h4 className='text-white mb-4'>Account</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>About Us</Link>
              <Link className='text-white py-2 mb-1'>Faq</Link>
              <Link className='text-white py-2 mb-1'>Contact</Link>
            </div>
          </div> */}
          <div className="col-3">
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Champagne</Link>
              <Link className='text-white py-2 mb-1'>Vodka</Link>
              <Link className='text-white py-2 mb-1'>Cognac</Link>
              <Link className='text-white py-2 mb-1'>Whisky</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>

    <footer className=" py-4">
      <div className="container-xxl">
        <div className="row justify-content-center text-white mb-0">
          <p className="text-center">&copy; {new Date().getFullYear()}; Powered by Huy & Thai</p>
        </div>
      </div>
    </footer>
  </>
};

export default Footer