import React from "react";
import { Link } from "react-router-dom";
// npm install react-stars --save
import ReactStars from 'react-stars'

const ProductCard = () => {
   return (
      <>
         <div className="col-3">
            <div className="product-card position-relative">
               <div className="product-image">
                  <img src="images/champagne-product-0-editted.png" alt="watch image" />
               </div>
               <div className="product-details">
                  <h6 className="product-brand">Veuve Clicquot</h6>
                  <h5 className="product-title">Veuve Clicquot Yellow Label Brut <br/> A well-balanced melange of fruity aromas</h5>
                  <p className="price">$1000</p>
                  <ReactStars count={5} size={24} value={3} edit="false" activeColor="ffd700"></ReactStars>
               </div>
               <div className="product-actions position-absolute">
                  <div className="d-flex flex-column gap-15">
                     <Link>
                        <img src="images/prodcompare.svg" alt="compare"></img>
                     </Link>
                     <Link>
                        <img src="images/view.svg" alt="view"></img>
                     </Link>
                     <Link>
                        <img src="images/add-cart.svg" alt="addcart"></img>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ProductCard;
