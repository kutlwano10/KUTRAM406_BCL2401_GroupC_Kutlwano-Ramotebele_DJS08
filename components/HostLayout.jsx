import React from "react";
import { Outlet, Link } from "react-router-dom";

export const HostLayout = () => {
  return (
    <>
      <div className="host-nav">
        <Link to="/host" >Dashboard</Link>
        <Link to="/host/income">Income</Link>
        <Link to="/host/reviews">Reviews</Link>
      </div>

      <Outlet />
    </>
  );
};
