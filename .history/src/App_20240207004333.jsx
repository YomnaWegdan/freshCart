import logo from './logo.svg';
import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';

function App() {
  const routs = createBrowserRouter([
    {path:'' , element:<Layout/> , children:[{

    }]}
  ])
  return (
    <div className="App">
      <Ro
    </div>
  );
}

export default App;
