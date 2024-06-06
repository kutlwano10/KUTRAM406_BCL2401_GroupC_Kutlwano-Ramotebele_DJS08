import React from "react";
import { useState, useEffect } from "react";

export const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => setVans(data.vans));
  }, []);

  /**
   * changed {} - () for the vans.map to not return anything
   * when using {} it must return something
   */
  const vansElements = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <img src={van.imageUrl} alt={van.name} />
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>
          ${van.price}
          <span>/day</span>
        </p>
      </div>
      <i className={`van-type ${van.type} Selected`}>{van.type}</i>
    </div>
  ));

  return (
    <div className="van-list-container">
        <h1>Explore Our Vans options</h1>
      <div className="van-list">{vansElements}</div>
    </div>
  );
};
