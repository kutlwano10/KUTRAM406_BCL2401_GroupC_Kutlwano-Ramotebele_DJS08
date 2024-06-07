import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Vans } from "./pages/Vans";
import "/server";
import { VansDetails } from "./pages/VansDetails";
import { Layout } from "../components/Layout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VansDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
