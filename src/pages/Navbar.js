import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {Context} from '../Context';






function Navbar() {

  const {cartItems} = useContext(Context)
  const carClassName = cartItems.length > 0 ? "ri-shopping-cart-2-fill" : "ri-shopping-cart-2-line"

  function activo(isActive) {
    return isActive ? 'active' : 'blue'
  }

  return (
      <>

        <nav>
            <div className="navbar">
                    <NavLink to='/' className={({isActive}) => activo(isActive)}><h1 className='titlenav'>Pic Some</h1></NavLink>
                <div className="iconCar">
                    <NavLink to='car' className={({isActive}) => activo(isActive)}><i className={carClassName}></i></NavLink>
                </div>
            </div>
        </nav>

      </>
  );
}

export default Navbar;
