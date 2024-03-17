import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import chinese from "./img1.png";
import { useNavigate } from "react-router-dom";
const BestSellerCard = () => {
  const navigate=useNavigate()
  const handleProductDetail=(e)=>{
    navigate('/productDetail');
    
  }
  return (
    <Box className="veg" onClick={(e)=>handleProductDetail(e)}>
      <img width={200} src={chinese} alt="img" style={{ margin: "0 auto" }} />
      <Grid container direction="column">
        <Grid item className="flexItem" columnGap={8} alignItems="center">
          <Typography fontSize={20} fontWeight={"900"}>
            Chinese Tadka
          </Typography>
          <label className="veglabel flexItem">🥑 Veg</label>
        </Grid>
        <Grid item>
          Chinese food flowered with lost of spices an curd .Feeling hungry ,taste and try it
        </Grid>
         <Grid item className="flexItem space-between" >
         <Typography fontSize={24} fontWeight={"900"}>
            14.99
          </Typography>
          <button className="addCart">Add to Cart</button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BestSellerCard;
