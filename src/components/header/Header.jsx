import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { iconsPage, LINKS } from '../../static'
import logo from '../../assets/logo.png'

const Header = () => {

  return (
    <div>
        <header id='header' className='bg-white py-1 border-b-2'>
            <nav className='flex flex-wrap justify-between gap-4 p-4 container'>
              <img src={logo} alt="logo" />
              <div className='flex flex-wrap gap-7 text-[18px]'>
                {
                  LINKS?.map((link)=> (
                    <NavLink key={link.id} className='text-slate-800 flex items-center gap-1' to={link.path}>
                      {link.icon}
                      <span>{link.name}</span>
                    </NavLink>
                  ))
                }
              </div>
              <div className='flex gap-4 text-[20px]'>
                {
                  iconsPage?.map((inx)=> (
                    <NavLink key={inx.id} className='text-slate-800 flex items-center gap-1' to={inx.path}>
                      {inx.icon}
                    </NavLink>
                  ))
                }
              </div>
              
            </nav>
        </header>

    </div>
  )
}

export default Header