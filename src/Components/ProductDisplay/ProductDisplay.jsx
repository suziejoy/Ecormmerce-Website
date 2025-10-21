import React from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';

const ProductDisplay = ({ product }) => {
  // Defensive check: prevent crashes if product is undefined
  if (!product) {
    return (
      <div className="productdisplay-error">
        <h2>Product not found 😅</h2>
        <p>Try going back to the shop and selecting another item.</p>
      </div>
    );
  }

  return (
    <div className='productdisplay'>
      {/* LEFT SECTION - Images */}
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
          {[...Array(4)].map((_, i) => (
            <img key={i} src={product.image} alt={`${product.name} preview ${i + 1}`} />
          ))}
        </div>
        <div className='productdisplay-img'>
          <img
            className='productdisplay-main-img'
            src={product.image}
            alt={`${product.name} main view`}
          />
        </div>
      </div>

      {/* RIGHT SECTION - Details */}
      <div className='productdisplay-right'>
        <h1>{product.name || 'Unnamed Product'}</h1>

        {/* Stars */}
        <div className='productdisplay-right-star'>
          {[...Array(4)].map((_, i) => (
            <img key={i} src={star_icon} alt='star' />
          ))}
          <img src={star_dull_icon} alt='unfilled star' />
          <p>(122)</p>
        </div>

        {/* Price */}
        <div className='productdisplay-right-prices'>
          <div className='productdisplay-right-price-old'>
            ${product.old_price || '—'}
          </div>
          <div className='productdisplay-right-price-new'>
            ${product.new_price || '—'}
          </div>
        </div>

        {/* Description */}
        <div className='productdisplay-right-description'>
          A lightweight, usually knitted pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
        </div>

        {/* Sizes */}
        <div className='productdisplay-right-size'>
          <h1>Select Size</h1>
          <div className='productdisplay-right-size-options'>
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <div key={size}>{size}</div>
            ))}
          </div>
        </div>

        {/* Add to Cart */}
        <button className='productdisplay-right-addtocart'>ADD TO CART</button>

        {/* Category + Tags */}
        <p className='productdisplay-right-category'>
          <span>Category:</span> Women, T-shirt, Crop top
        </p>
        <p className='productdisplay-right-category'>
          <span>Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
