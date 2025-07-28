
import {RouterProvider } from 'react-router-dom'
import router from './router'
import Navbar from './globals/components/navbar/Navbar'
import Footer from './globals/components/footer/Footer'
import Form from './globals/components/form/Form'




function App() {

  return (

    <>
    <Navbar/>
    
    <RouterProvider router = {router}/>
    <Footer/>    
    
    </>
 

  )
}

export default App
