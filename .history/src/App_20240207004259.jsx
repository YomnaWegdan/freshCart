import logo from './logo.svg';
import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';

function App() {
  const routs = createBrowserRouter([
    {path:'' , element:<Layout/>}
  ])
  return (
    <div className="App">
  
    </div>
  );
}

export default App;
