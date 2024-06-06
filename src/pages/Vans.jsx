import React from "react";

export const Vans =()=> {
    React.useEffect(()=> {
        fetch("/api/vans")
        .then(response=> response.json())
        .then(data=>console.log(data))
    }, [])
    return(
        <h1>Vans page goes here</h1>
    )
}