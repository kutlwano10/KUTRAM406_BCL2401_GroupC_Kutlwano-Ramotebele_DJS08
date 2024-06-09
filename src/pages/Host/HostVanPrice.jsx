import React from "react";
import { useOutletContext } from "react-router-dom";

export const HostVanPrice=()=> {
    const { currentVan } = useOutletContext()
    return (
        <h3 className="host-van-price">${currentVan.price}<span>/day</span></h3>
    )
}