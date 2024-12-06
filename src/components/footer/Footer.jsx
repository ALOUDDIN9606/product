import React from 'react'
import image from '../../assets/footer.png'

const Footer = () => {
  return (
    <div className='bg-slate-900 py-20'>
        <div className='container border-t-2 flex flex-wrap justify-between'>
            <div className='w-[30%]'>
                <img src={image} alt="" />
                <p className='text-white text-[18px]'>Your natural candle made for your home and for your wellness.</p>
            </div>
            <div className='flex text-white flex-wrap gap-8 pt-10'>
                <div className='flex flex-wrap flex-col gap-4'>
                    <p>Discovery</p>
                    <p>New season</p>
                    <p>Most searched</p>
                    <p>Most selled</p>
                </div>
                <div className='flex flex-wrap flex-col gap-4'>
                    <p>Discovery</p>
                    <p>New season</p>
                    <p>Most searched</p>
                    <p>Most selled</p>
                </div>
                <div className='flex flex-wrap flex-col gap-4'>
                    <p>Discovery</p>
                    <p>New season</p>
                    <p>Most searched</p>
                    <p>Most selled</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer