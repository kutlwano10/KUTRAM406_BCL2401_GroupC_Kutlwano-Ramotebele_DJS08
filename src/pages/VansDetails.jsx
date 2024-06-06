import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Container } from "postcss"
export const VansDetails=()=> {
    const params = useParams()
    const [van, setVan] =useState(null)

    /**
     * fetch the van using params since it searches for 
     * any element containing ':' and direct you to that certain
     * page
     */
    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
          .then((response) => response.json())
          .then((data) => setVan(data.vans));
      }, [params.id]);

    return (
        <div className="van-detail-container">
            {van ?(
                <div className="van-detail">
                    <img src={van.imageUrl}/>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <h2>{van.name}</h2>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>

                </div>
            ) : <h2>Loading...</h2>}

        </div>
    )
}