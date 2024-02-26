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
import { useContext } from 'react';


function App() {
  const routs = createBrowserRouter([
    {path:'' , element:<Layout/> , children:[
      {index:true , element:<Home/>},
      {path:'/cart', element:<Cart/>},
      {path:'/products', element:<Products/>},
      {path:'/brands', element:<Brands/>},
      {path:'/categories', element:<Categories/>},
      {path:'/register', element:<Register/>},
      {path:'/login', element:<Login/>},
      {path:'*', element:<NotFound/>},
    ]}
  ])

  let {setUserToken} =useContext()
  return (
    <div className="App">
      <RouterProvider router={routs}/>
    </div>
  );
}

export default App;
