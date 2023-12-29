import './App.css';
import React from 'react';
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
import GridDemo from './pages/GridDemo';
import UserDetails from './pages/UserDetails';
import TodoApp from './pages/TodoApp';

function App() {
  return (
    <div className="">
      <Router>
        <Header/>
        <Routes>
          <Route path ="" element = {<Home/>}/>
          <Route path ="/about" element = {<About/>}/>
          <Route path ="/contact" element = {<Contact/>}/>
          <Route path ="/products" element = {<ProductList/>}/>
          <Route path = "*" element = {<NotFound/>}/>
          <Route path = "/login" element = {<Login/>}/> 
          <Route path = "/userform" element = {<ProductForm/>}/> 
          <Route path = "/griddemo" element = {<GridDemo/>}/> 
          <Route path="/userdetails" element ={<UserDetails/>} />
          <Route path="/todoapp" element ={<TodoApp/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
