//import logo from './logo.svg';
import Navbar from "./MyComponents/Navbar/Navbar";
import Signup from './MyComponents/Signup/Signup';
import About from "./MyComponents/About/About";
import Footer from "./MyComponents/Footer/Footer";
import Main from "./MyComponents/Main/Main";
import Cn from './MyComponents/Cn/Cn';
import Company from './MyComponents/Company/Company';
import Login from "./MyComponents/Login/Login";
import Company_login from './MyComponents/Company_login/login';
import Englishyaari from "./MyComponents/Englishyaari/Englishyaari";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/About" element={<About/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/company" element={<Company/>}/>
          <Route exact path="/Company_login" element={<Company_login/>}/>
          <Route exact path="/englishyaari" element={<Englishyaari/>}/>
          <Route exact path="/" element={<Main/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
