import React, { useRef } from "react";
import BestSellerCard from "../CommonComponent/BestSellerCard";
import { BestSellerData } from "../assets/data/BestSellerData";
import { Box, Container, Typography } from "@mui/material";
import styled from "styled-components";

const BestSellerBoxWrapper = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  gap: 12px;
  overflow-x: auto;
  margin-top: 12px;
  padding-bottom: 16px;
  -ms-overflow-style: none; 
  scrollbar-width: none; 
  &::-webkit-scrollbar {
    display: none;
  }
  max-width:1400px;
  margin-inline:auto;
`;

const BestSeller = () => {
  const bestSellerRef = useRef(null);

  const scrollLeft = () => {
    if (bestSellerRef.current) {
      bestSellerRef.current.scrollBy({
        left: -500,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (bestSellerRef.current) {
      bestSellerRef.current.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box marginTop={"16px"} position={"relative"}>
      <Container>
        <Typography variant="h3" fontWeight="bold">
          BestSeller
        </Typography>
      </Container>
      <BestSellerBoxWrapper ref={bestSellerRef}>
        {BestSellerData.map((foodcard) => (
          <BestSellerCard key={foodcard.id} data={foodcard} />
        ))}
      </BestSellerBoxWrapper>
        <button className="scrollbtnLeft" onClick={scrollLeft}>Left</button>
        <button className="scrollbtnRight" onClick={scrollRight}>Right</button>

    </Box>
  );
};

export default BestSeller;
