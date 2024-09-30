import React from "react";
import { useGlobalContext } from "./Context";

function Stories() {
  const { products } = useGlobalContext();// product is a array tht contain all the data from api

  return (
    
      <div className="stories-div">
        {products.map((curr) => {
          const { title,description,id,category} = curr;
          return (
            <div className="card" key={id}>
              <h2>{title}</h2>
              <p>Category: {category}</p>
              <p>
                {description}
              </p>
              <div className="card-button">
                <a href='#' target="_blank">
                  Read more
                </a>
              </div>
            </div>
          );
        })}
      </div>
    
  );
}

export default Stories;
