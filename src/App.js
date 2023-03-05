import './App.css';
import { Route, Routes,  } from 'react-router-dom';
import Home from './Components/Content/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Login from './Components/Content/Login/Login';
import Register from './Components/Content/Register/Register';
import Portfolio from './Components/Content/Portfolio/Portfolio';
import Addstock from './Components/Content/Addstock/Addstock';
import Tutorial from './Components/Content/Tutorial/Tutorial';
import Footer from "./Components/Footer/footer"
import { useState ,createContext} from 'react';
import ForgotPassword from './Components/Content/ForgotPassword/ForgotPassword';
export const AppContext=createContext();

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <AppContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
    <div className="App">
      <NavBar/>
      <div className="content">
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Portfolio/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/Addstock" element={<Addstock/>}/>
        <Route path="Tutorial" element={<Tutorial/>}/>
        <Route path="/forgotPassword" element={<ForgotPassword/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
