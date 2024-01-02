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
import CartPage from './pages/cart/Index';
import CheckoutPage from './pages/checkout/Index';
import MyAccountRoot from './pages/myAccount/Index';
import Dashboard from './pages/myAccount/Dashboard';
import Others from './pages/myAccount/Others';
import Download from './pages/myAccount/Download';
import Address from './pages/myAccount/Address';
import AccountDetails from './pages/myAccount/AccountDetails';
import MarchantDashboard from './pages/marchantDashboard/Index';
import MarchantHome from './pages/marchantDashboard/Home';
import Login from './pages/login/Index';
import SignUp from './pages/registration/Index';


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
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route element={<MyAccountRoot/>}>
            <Route index path='/dashboard' element={<Dashboard/>}/>
            <Route path='/others' element={<Others/>}/>
            <Route path='/download' element={<Download/>}/>
            <Route path='/addresses' element={<Address/>}/>
            <Route path='/accountdetails' element={<AccountDetails/>}/>
        </Route>
        <Route path='*' element={<Error/>}/> 
      </Route>
      <Route element={<MarchantDashboard/>}>
          <Route path='/xyz' element={<MarchantHome/>}/>
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
