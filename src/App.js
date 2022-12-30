import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Shared/Footer/Footer";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Services from "./Pages/Services/Services";
import Login from "./Pages/Login/Login";
import Details from "./Pages/Details/Details";
import Signup from "./Pages/Login/Signup/Signup";
import RequiredAuth from "./Pages/RequiredAuth/RequiredAuth";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/" element={<About></About>}></Route>
        <Route
          path="/contact"
          element={
            <RequiredAuth>
              <Contact></Contact>
            </RequiredAuth>
          }
        ></Route>
        <Route path="/" element={<Portfolio></Portfolio>}></Route>
        <Route path="/" element={<Services></Services>}></Route>
        <Route path="/details/:detailsId" element={<Details></Details>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
