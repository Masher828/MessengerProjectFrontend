import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import Foot from "./components/foot";
import Home from "./components/home";
import ContactUs from "./components/contactUs";
import AboutUs from "./components/aboutUs";
import Auth from "./components/auth";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/login" element={<Auth />} />
      </Routes>

      <Foot />
    </>
  );
}

export default App;
