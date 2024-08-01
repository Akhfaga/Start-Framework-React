import React from 'react'
import { Link, NavLink } from 'react-router-dom'

 export default function Nav() {
  return (

 
 <>
  <div className='bg-slate-700 absolute p-6 top-0 right-0 left-0'>
    <ul className=' text-white  flex justify-between'>
      <li className='text-3xl mx-32' ><Link to="">StartFramework</Link></li>
      <div className='flex gap-10'>
        <li><NavLink NavLink to ="About">About</NavLink></li>
        <li><NavLink to="portfolio">Portfolio</NavLink></li>
        <li><NavLink to="Conatct">Contact</NavLink></li>
      </div>
    </ul>
  </div>
</>

    
    
     
  )
}
