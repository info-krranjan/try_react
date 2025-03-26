
import "./App.css";
import NavBar from "./header/NavBar";
import Footer from "./header/Footer";
import About from "./About";
import Scrolll from "./Scrolll";
import Login from "./Login";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Marquee from "./Marquee";
function App() {
  

  return (
    <>
    <div>
      {/* <Marquee/> */}
      <BrowserRouter>
      <Routes>
        <Route path='' element={<NavBar/>}></Route>
        <Route path='/' element={<NavBar/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Marquee" element={<Marquee/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
    </>
    // <div className="app-container">
    //   <NavBar />
    //   <Login />
    //   <div className="scrolll">
    //     <Scrolll />
    //   </div>
    //   <About />

    //   <Footer />
    // </div>
  );
}

export default App;
