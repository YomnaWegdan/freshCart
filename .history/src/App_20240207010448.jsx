import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';

function App() {
  const routs = createBrowserRouter([
    {path:'' , element:<Layout/> , children:[
      {index:true , element:<Home/>},
      {path:'/cart', element:<Cart/>}


    ]}
  ])
  return (
    <div className="App">
      <RouterProvider router={routs}/>
    </div>
  );
}

export default App;
