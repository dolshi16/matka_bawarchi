import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import chinese from "./img1.png";
import { useNavigate } from "react-router-dom";
const BestSellerCard = (props) => {
  const {id,title,desc,foodtype,price,image}=props.data
  const navigate=useNavigate()
  const handleProductDetail=(e)=>{
    navigate('/productDetail');
    
  }
  return (
    <Box className={foodtype} onClick={(e)=>handleProductDetail(e)}>
      <img width={200} src={image} alt="img" style={{ margin: "0 auto" }} />
      <Grid container direction="column">
        <Grid item className="flexItem" columnGap={8} alignItems="center">
          <Typography fontSize={20} fontWeight={"900"}>
            {title}
          </Typography>
          <label className="veglabel flexItem">🥑 {foodtype}</label>
        </Grid>
        <Grid item>
          {desc}
        </Grid>
         <Grid item className="flexItem space-between" >
         <Typography fontSize={24} fontWeight={"900"}>
            {price}
          </Typography>
          <button className="addCart">Add to Cart</button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BestSellerCard;
