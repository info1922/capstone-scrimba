import React, {useContext, useState} from 'react';
import CartItem from '../components/CartItem';
import {Context} from '../Context'



const Car = () => {

  const [order, setOrder] = useState('Place Order');


  const {cartItems, emptyCart} = useContext(Context);
  const totalCost = 5.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("es-MX", {style: 'currency', currency: 'MXN'})

  // console.log('Items cart: ', cartItems);

  const cartItemElements = cartItems.map(item => <CartItem key={item.id} item={item} />)

  
  function placeOrder() {
    setOrder('Ordering... ')
    setTimeout(() => {
      // console.log('Order placed!');
      setOrder('Place Order')
      emptyCart()
    }, 3000);
  }
  
  const existItems = cartItems.length > 0 ? <div className='order-button' >
      <button onClick={placeOrder}>{order}</button>
    </div> : <p>You have no items in your cart.</p>

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className='total-cost'>Total: {totalCostDisplay}</p>

      {
        existItems
      }
      
    </main>
  );
};

export default Car;
