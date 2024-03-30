import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate} from "react-router-dom";

const BestSellerCard = (props) => {
  const {id,title,desc,foodtype,price,image}=props.data
  const navigate=useNavigate()
  const handleProductDetail=()=>{
    navigate(`/productDetail/${id}`);
  }
  return (
    <Box className={foodtype} onClick={handleProductDetail}>
      <img width={200} src={image} alt="img" style={{ margin: "auto" }} />
      <Grid  direction="column" className="gridItemBottom">
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
