 import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/Nav';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import Layout from './components/Layout/Layout';
import Portfolio from './components/Portfolio/Portfolio';
import StartFramework from './components/StartFramewor/StartFramework';
import Conatct from './components/Conatct/Conatct';
 




let x=createBrowserRouter([
  {path :"",element:<Layout/> ,children:[

  {index:true  ,element:<StartFramework/>},
  {path :"About",element:<About/>},
  {path :"Portfolio",element:<Portfolio/>},
  {path :"Conatct",element:<Conatct/>}

  ]},
  
])

function App() {
  return (
    <RouterProvider router={x}></RouterProvider>
  
  )
}

export default App
