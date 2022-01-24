import React from 'react';
import {NavLink} from 'react-router-dom';



function Navbar() {

  function activo(isActive) {
    return isActive ? 'active' : 'blue'
  }

  return (
      <>

        <nav>
            <div className="navbar">
                    <NavLink to='/' className={({isActive}) => activo(isActive)}><h1 className='titlenav'>Pic Some</h1></NavLink>
                <div className="iconCar">
                    <NavLink to='car' className={({isActive}) => activo(isActive)}><i className="ri-shopping-cart-2-line"></i></NavLink>
                </div>
            </div>
        </nav>

      </>
  );
}

export default Navbar;
