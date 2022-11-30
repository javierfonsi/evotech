import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "./contact/Contact";
import Customers from "./customers/Customers";

//const AnimatedRoutes = () => {
export default function AnimatedRoutes() {
        const location = useLocation();
        
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/nosotros"} element={<About />} />
        <Route exact path={"/portafolio"} element={<Portfolio />} />
        <Route exact path={"/contacto"} element={<Contact />} />
        <Route exact path={"/clientes"} element={<Customers />} />
      </Routes>
    </AnimatePresence>
  );
};

//export default AnimatedRoutes;
