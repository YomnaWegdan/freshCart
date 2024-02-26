import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Products from './Components/Products/Products';
import Brands from './Components/Brands/Brands';
import Categories from './Components/Categories/Categories';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import { useContext, useEffect } from 'react';
import { userContext } from './Context/UserContext';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ProductDetails from './Components/ProductDetails/ProductDetails';

import { Toaster } from 'react-hot-toast';
import { Offline, Online } from "react-detect-offline";
import Loading from './Components/Loading';
import BrandDetails from './Components/BrandDetails/BrandDetails';
import CategoryDetails from './Components/CategoryDetails/CategoryDetails';



function App() {
  const routs = createBrowserRouter([
    {path:'' , element:<Layout/> , children:[
      {index:true , element:<ProtectedRoute><Home/></ProtectedRoute> },
      {path:'/cart', element: <ProtectedRoute><Cart/></ProtectedRoute>},
      {path:'/products', element:<ProtectedRoute><Products/></ProtectedRoute>},
      {path:'/productDetails/:id', element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
      {path:'/brands', element:<ProtectedRoute><Brands/></ProtectedRoute>},
      {path:'/brandDetails/:id', element:<ProtectedRoute><BrandDetails/></ProtectedRoute>},
      {path:'/categories', element:<ProtectedRoute><Categories/></ProtectedRoute>},
      {path:'/categoryDetails/:id', element:<ProtectedRoute><CategoryDetails/></ProtectedRoute>},
      {path:'/register', element:<Register/>},
      {path:'/register', element:<Register/>},

      {path:'/login', element:<Login/>},
      {path:'*', element:<NotFound/>},
    ]}
  ])
  //when refresh => get the token again
  let {setUserToken} =useContext(userContext)
  useEffect(()=>{
  if(localStorage.getItem('userToken')){
    setUserToken(localStorage.getItem('userToken'))
  }
  },[])
  

  return (
    <div className="App">
    <Toaster/>
      <RouterProvider router={routs}/>

      <Online>  Only shown when you're online</Online>
      <Offline><Loading>Only shown offline (surprise!)</Loading> </Offline>
    </div>
  );
}

export default App;
