import React, { useState } from 'react'
import { useStateValue } from '../../context'
import Products from '../../components/products/Products';

const Wishes = () => {
  const {wishlist} = useStateValue()
  console.log(wishlist);
  
  return (
    <div>
      <Products data={wishlist}/>
    </div>
  )
}

export default Wishes

