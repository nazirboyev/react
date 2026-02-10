import "./App.css"
import { Routes, Route, Link } from "react-router";
import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Payments from "./pages/Payments";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/shop">shop</Link>
          </li>
          <li>
            <Link to="/payments">payments</Link>
          </li>
        </ul>
      </nav>


      <Routes>
        <Route path="/Home" element={ <Home />}></Route>
        <Route path="/about" element={ <About />}></Route>
        <Route path="/contact" element={ <Contact/>}></Route>
        <Route path="/payments" element={ <Payments/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
      </Routes>

    </>
  );
}

export default App; 