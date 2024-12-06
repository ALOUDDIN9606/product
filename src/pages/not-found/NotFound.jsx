import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
  return (
      <div className='flex flex-wrap justify-center py-24 bg-slate-200'>
          <div className='text-center w-[40%] bg-red-400 p-24 rounded-lg flex flex-wrap flex-col gap-4'>
            <h2 className=' text-[65px]'>404</h2>
            <p className='text-[45px]'>Not Fount</p>
            <button onClick={()=> navigate("/")} className='bg-green-400 px-12 py-3 rounded-md text-[20px]'>Go home</button>
          </div>
      </div>
  )
}

export default NotFound