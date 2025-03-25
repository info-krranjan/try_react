import { useState } from "react";
import "./App.css";
import NavBar from "./header/NavBar";
import Footer from "./header/Footer";
import About from "./About";
import Scrolll from "./Scrolll";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <NavBar />
      <div className="container border border-primary mt-3 p-3 main-content">
        <h2 class="d-flex justify-content-center align-items-center">
          User Login Page
        </h2>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="scrolll">
        <Scrolll />
      </div>
      <About />

      <Footer />
    </div>
  );
}

export default App;
