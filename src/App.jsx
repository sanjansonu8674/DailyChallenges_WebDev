
import React, { useState, Suspense, lazy } from "react";
import { Route, Router, Routes } from "react-router-dom";
import axios from "axios";


import Reg_Form from './form.jsx'
import Manu from './ManuBar.jsx'
import LandingPage from './component/ladingPage.jsx'
import FourthDay from './component/FourthDay.jsx'
import UseStateFunction from './component/useSate.jsx'
import Demo from './component/Demo.jsx'
import FifthDay from './component/FifthDay.jsx'
import Balloon from './component/Balloon.jsx'
import Todo from "./component/Todo.jsx";
import Axios from "./component/Axios.jsx";
import Countries from "./component/countries.jsx";
import LoginPage from "./component/LoginPage.jsx";
import Footer from "./component/Footer.jsx";
import Home from './component/Home.jsx';
import Navbar from "./component/Navbar.jsx";
import About from "./component/About.jsx";
import Dashboard from "./component/Dashboard.jsx";
import Pratices from "./component/Pratices.jsx";

const App = () => {
  return (
    <div>
        <Pratices/>
      {/* <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes> */}

    </div>
  );
};

export default App;
