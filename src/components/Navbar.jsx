import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
        const {user} = useContext(AuthContext   )
        console.log(user.name)
    
  return (
    <nav className="bg-white text-black px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">MyWebsite</div>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-gray-200">Home</a></li>
          <li><a href="#" className="hover:text-gray-200">About</a></li>
          <li><a href="#" className="hover:text-gray-200">Services</a></li>
          <li><a href="#" className="hover:text-gray-200">{user.name}</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar