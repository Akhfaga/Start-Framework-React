import React from 'react'

export default function About() {
  return (
    <>
    <div className="start flex  flex-col items-center justify-center bg-emerald-400">
         
        <div className="  text-center m-5 text-white  ">
          <h1 className="font-extrabold capitalize text-3xl">about component</h1>
          <div className='  flex flex-wrap justify-between p-5'>
            <div className=' h-2 my-1 mx-2 w-36 bg-white  rounded  '> </div>
            
            
            <i className="   fa-solid fa-star"></i>
         
            <div className='mx-2 h-2 my-1 w-36  rounded  bg-white'> </div>

          </div>



         
        </div>
        <div>
          
        <div className=" flex p-0 mx-44  text-sm text-white  w-3/4">
            <div className='  mx-5   '>
              <p >Freelancer is a free bootstrap theme created by Route
              . The download includes the complete source files
               including HTML, CSS, and JavaScript as well as optional 
              SASS stylesheets for easy customization.</p>
            </div>



            <div className=''>
              <p>Freelancer is a free bootstrap theme created by Route
              . The download includes the complete source files
               including HTML, CSS, and JavaScript as well as optional 
              SASS stylesheets for easy customization.</p>
            </div>
            
          </div>
        </div>
      </div>
    </>
        
   )
}
