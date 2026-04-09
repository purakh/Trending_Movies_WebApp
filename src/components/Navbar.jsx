import React from 'react'
import Logo from '../assets/movieLogo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md'>
      
      {/* Logo */}
<div className='flex items-center space-x-3'>
  <div className='bg-white p-1 rounded-lg'>
    <img className='w-10' src={Logo} alt='logo'/>
  </div>
  <h1 className='text-xl font-bold'>MovieApp</h1>
</div>

      {/* Navigation Buttons */}
      <div className='flex items-center space-x-4'>
        
        <Link 
          to='/' 
          className='px-5 py-2 border border-red-500 text-red-500 rounded-lg 
          hover:bg-red-500 hover:text-white transition duration-300 font-medium'
        >
          Home
        </Link>

        <Link 
          to='/watchlist' 
          className='px-5 py-2 border border-blue-500 text-blue-500 rounded-lg 
          hover:bg-blue-500 hover:text-white transition duration-300 font-medium'
        >
          Watchlist
        </Link>

      </div>

    </nav>
  )
}

export default Navbar