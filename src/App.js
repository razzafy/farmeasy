import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import About from './Components/About';
import SignUp from './Components/SignUp';
import Results from './Components/Results';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path ="/signup" element={<SignUp/>} /> 
        <Route path ="/results" element={<Results/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;