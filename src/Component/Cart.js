import React from "react";
import Navbar from "./Navbar";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import GoogleMap from "./GoogleMap";
import ChoosePayment from "./ChoosePayment";

const Cart = () => {
  return (
    <>
      <Navbar />
      <Box>
        <Container>
          <Grid container direction={'row'}>
            <Grid item xs={6}>
              <Box display="flex" bgcolor="lightblue" justifyContent="space-between">
                <TextField
                  placeholder="Enter phone Number"
                  value="91987654323"
                />
                <Button>Send OTP</Button>
              </Box>
              <Box>
                <GoogleMap/>
              </Box>
              <Box>
                <ChoosePayment/>
              </Box>
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Cart;
