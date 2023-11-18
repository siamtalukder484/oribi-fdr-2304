import { useState } from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Home from './pages/home/Home';
import RootLayout from './layout/RootLayout';
import Error from './components/errors/Error';
import Shop from './pages/shop/Index';
import About from './pages/about/Index';
import Contacts from './pages/contacts/Index';
import Journal from './pages/journal/Index';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route element={<RootLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/journal' element={<Journal/>}/>
        <Route path='*' element={<Error/>}/> 
      </Route>
      </>
    )
  );

  return (
    <RouterProvider
      router={router}
    />
  )
}

export default App
