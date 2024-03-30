import { Box } from "@mui/material";
import React from "react";
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetailPage from "./Pages/ProductDetailPage";
import Cart from "./Component/Cart";
const App = () => {
  
  return (
    <BrowserRouter>
     <Routes>
     <Route exact path="/" element={<Homepage />} />
      <Route path="/productDetail/:id" element={<ProductDetailPage />} />
      <Route path="/cart" element={<Cart />} />
      </Routes>
     <Box>
 
    </Box>
    </BrowserRouter>
   
  );
};

export default App;
