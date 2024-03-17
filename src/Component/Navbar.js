import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {phoneIcon,cartIcon,searchIcon,userIcon} from "./assets"


const Navbar = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box sx={{ background: "#E8E8E8" }}>
      <Container>
        <Grid container direction={"row"} justifyContent="space-between">
          <Grid item className="flexItem" columnGap={3}>
            <img alt="logo" />
            <Box>
              <Typography fontSize={12}>Delvering At</Typography>
              <Typography fontSize={14} fontWeight="700">
                Surat
              </Typography>
            </Box>
          </Grid>
          <Grid item className="flexItem" columnGap={3}>
            <Box className="flexItem" alignItems="center" columnGap={1}>
              <img width={"30px"} alt="Call" src={phoneIcon} />
              <Typography fontSize={14} fontWeight="700">
                Call Us At
                <br />
                180020067
              </Typography>
            </Box>
            <Box display="grid" justifyContent="center">
              <img src= {searchIcon} alt="search" />
              <Typography>Search</Typography>
            </Box>
            <Box>
              <img alt="cart" src={cartIcon} />
              <Typography>cart</Typography>
            </Box>
            <Box>
              <img alt="profile" src={userIcon} />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ background: "#06C167 " }}>
        <Container>
          <FormControl fullWidth>
            <InputLabel
              sx={{ fontSize: 12, display: "grid" }}
              id="demo-simple-select-label"
              className="inputText"
            >
              Delivery
            </InputLabel>
            <Select
              sx={{
                width: 100,
                height: 40,
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Delivery"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
