import { Box } from "@mui/material";
import React from "react";
import Navbar from "../Component/Navbar";
import HeroSection from "../Component/HeroSection";
import BestSeller from "../Component/BestSeller";
// import NewLanuch from "../Component/NewLanuch";
import Allcategories from "../Component/Allcategories";
import AllVeg from "../Component/AllVeg";
import AllNonVeg from "../Component/AllNonVeg";
import Dessert from "../Component/Dessert";
import Footer from "../Component/Footer";
const Homepage = () => {
  return (
    <>
      <Box>
        <Navbar />
        <HeroSection />
        <BestSeller />
        {/* <NewLanuch /> */}
        <Allcategories />
        <AllVeg />
        <AllNonVeg />
        <Dessert />
        <Footer />
      </Box>
    </>
  );
};

export default Homepage;
