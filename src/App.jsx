import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Vans } from "./pages/Vans";
import "/server";
import { VansDetails } from "./pages/VansDetails";
import { Layout } from "../components/Layout";
import { Income } from "./pages/Host/Income";
import { Reviews } from "./pages/Host/Reviews";
import { Dashboard } from "./pages/Host/Dashboard";
import { HostLayout } from "../components/HostLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VansDetails />} />
          {/*Used HostLayoout to nest Dashboard, income & reviews */}
          <Route element={<HostLayout />}>
            <Route path="/host" element={<Dashboard />} />
            <Route path="/host/income" element={<Income />} />
            <Route path="/host/reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
