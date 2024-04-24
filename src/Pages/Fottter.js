import React from 'react'
import { NavLink } from 'react-router-dom'

const Fottter = () => {
  return (
    

<footer class="rounded-lg shadow m-4 bg-orange-600 ">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm  sm:text-center text-white">© 2024 <a href="#" class="hover:underline">Aktu-Quantum</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white  sm:mt-0">
        <li>
        <NavLink to='./home' className="me-4 md:me-6">Home</NavLink>
            {/* <a href="#" class="hover:underline me-4 md:me-6">About</a> */}
        </li>
        <li>
        <NavLink to='./about' className="me-4 md:me-6">About</NavLink>
        </li>
        <li>
        <NavLink to='./Contact' className="me-4 md:me-6">Contact us</NavLink>
        </li>
        <li>
             <NavLink to='./privacy' className="me-4 md:me-6">Privacy Policy </NavLink>
        </li>
        <li>
             <NavLink to='./disclaimer' className="me-4 md:me-6">Disclaimer</NavLink>
        </li>
        {/* <li>
             <NavLink to='./about' className="me-4 md:me-6">About</NavLink>
        </li> */}
    </ul>
    </div>
</footer>

  )
}

export default Fottter