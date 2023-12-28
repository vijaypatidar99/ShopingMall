import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from './components/NotFound';
import { Login } from './components/Login';
import ProductList from './pages/ProductList';
import ProductForm from './pages/ProductForm'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="container">
      <Router>
        <Header/>
        <ProductForm/>
        <Routes>
          <Route path ="" element = {<Home/>}/>
          <Route path ="/about" element = {<About/>}/>
          <Route path ="/contact" element = {<Contact/>}/>
          <Route path ="/products" element = {<ProductList/>}/>
          <Route path = "*" element = {<NotFound/>}/>
          <Route path = "/login" element = {<Login/>}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
