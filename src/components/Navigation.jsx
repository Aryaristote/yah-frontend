import Login from "../pages/Login";
import Contact from "../pages/Contact";
import React, { useState } from "react";
import Projects from "../pages/Projects";
import WelcomPage from "../pages/Welcome"; 
import Dashboard from "../pages/Dashboard";
import Portofolio from "../pages/Portofolio";
import UserDetails from "../pages/UserDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Navigations = () => {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<WelcomPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/portofolio" element={<Portofolio />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/user-details/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
};

export default Navigations;