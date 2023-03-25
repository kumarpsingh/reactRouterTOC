import React from "react";
import { Routes, Route } from "react-router-dom";
import "./style.css";
import Layout from "./components/Layout/Layout";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route exact path="/contact" element={<Contact />} />
      </Route>
      </Routes>
    </>
  );
}
