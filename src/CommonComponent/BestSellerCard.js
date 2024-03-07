import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import chinese from "./img1.png";
const BestSellerCard = () => {
  return (
    <Box className="veg">
      <img width={200} src={chinese} alt="img" style={{ margin: "0 auto" }} />
      <Grid container>
        <Grid item className="flexItem" columnGap={8} alignItems="center">
          <Typography fontSize={24} fontWeight={"900"}>
            Chinese Tadka
          </Typography>
          <label className="veglabel">🥑 Veg</label>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BestSellerCard;
