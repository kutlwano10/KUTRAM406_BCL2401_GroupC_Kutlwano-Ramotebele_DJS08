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
import { HostVans } from "./pages/Host/HostVans";
import { HostVansDetails } from "./pages/Host/HostVansDetails";
import { HostVanPrice } from "./pages/Host/HostVanPrice";
import { HostVanPhotos } from "./pages/Host/HostVanPhotos";
import { HostVanInfo } from "./pages/Host/HostVanInfo";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VansDetails />} />
          </Route>
          {/*Used HostLayoout to nest Dashboard, income & reviews */}
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />

            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVansDetails />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPrice />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
