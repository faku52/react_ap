import React from "react";
import { CartState } from "../context/Context";

export const Home = () => {
    
    const { state: { products }  } = CartState();
    console.log(products);

    return (
      <div className="home">
      {/*filters*/}
        <div className="productContainer">
        {
          products.map((prod) =>{
           return <span>{prod.name}</span>

            })}
        </div>
      </div>
    );
};
