import React from "react";
import BestSellerCard from "../CommonComponent/BestSellerCard";
import {BestSellerData} from "../assets/data/BestSellerData"
const BestSeller = () => {
  return (
    <div>
      {
        BestSellerData.map((foodcard)=>{  
          <BestSellerCard key={foodcard.id} data={foodcard} />
        })
      }
    </div>
  );
};

export default BestSeller;
