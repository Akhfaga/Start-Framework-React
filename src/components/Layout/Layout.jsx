import React from 'react'
import Nav from './../Nav/Nav';
import Foter from '../Foter/Foter';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
   
   <>
   <Nav/>

  <div className='container '>
    <Outlet/>
  </div>

   
    
  

   <Foter/>
   
 </>
  )
}
