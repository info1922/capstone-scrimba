import React, {useState, useContext} from 'react';
import useHover from '../hooks/useHover';
import {Context} from '../Context';

function Image({className, img}){
    // console.log('Imagen: ', img);

    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)

    // const [hovered, setHovered] = useState(false);
    const [hovered, ref] = useHover()
    // const heartIconn = hovered && <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
    // const cartIcon = hovered && <i className="ri-shopping-cart-line cart" onClick={() => addToCart(img)}></i>


    function heartIcon() {
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }


    function carrtIcon() {

        const existe = cartItems.some(el => el.id === img.id)

        if (existe) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-shopping-cart-line cart" onClick={() => addToCart(img)}></i>
        }
    }


  return (
      <div className={`${className} image-container`} 
        ref={ref}>
          <img src={img.url} className="image-grid" alt=''/>

          {heartIcon()}
          {carrtIcon()}
      </div>
  );
};

export default Image;
