import React from "react";
import { Outlet, Link,NavLink } from "react-router-dom";

export const HostLayout = () => {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "161616"
    }


  return (
    <>
      <nav className="host-nav">
        <NavLink style={({isActive})=> isActive? activeStyle: null} to="/host" end>Dashboard</NavLink>
        <NavLink style={({isActive})=> isActive? activeStyle: null} to="income">Income</NavLink>
        <NavLink style={({isActive})=> isActive? activeStyle: null} to="vans">Vans</NavLink>
        <NavLink style={({isActive})=> isActive? activeStyle: null} to="reviews">Reviews</NavLink>
      </nav>

      <Outlet />
    </>
  );
};
