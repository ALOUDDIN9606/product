import React from 'react'
import { FaRegHeart, FaHeart  } from "react-icons/fa";
import { useStateValue } from '../../context';
import { productList } from '../../static';
import { NavLink } from 'react-router-dom'



const Products = ({data}) => {
  const { setWishlist, wishlist } = useStateValue()

  const handLike = (product) => {
    const index = wishlist.findIndex(item => item.id === product.id)
    if(index < 0){
      setWishlist(prev => [...prev, product])
    }else{
      setWishlist(prev => prev.filter(item => item.id !== product.id))
    }
  }

  const productItems = data?.map(product=> (
    <div key={product.id} className='shadow'>
      <div className='w-full relative'>
        <div className='bg-slate-100'>
          <img className='w-full h-full object-contain' src={product.thumbnail} alt="" />
        </div>
        <button onClick={() => handLike(product)} className='absolute top-3 right-3 text-xl'>
          {
            wishlist?.some(item => item.id === product.id) ?
            <FaHeart/> : <FaRegHeart/>
          }
        </button>
      </div>
      <div className='p-4 font-bold'>
       <h3>{product.title}</h3>
        <p className='flex flex-wrap justify-end'>{product.price}💲</p>
      </div>
    </div>
  ))


  

  return (
    <div className='py-20'>
          <div >
          <div className='grid container gap-8 grid-cols-4'>
            {productItems}
          </div>
        </div>
    </div>
  )
}

export default Products