import React, { useEffect, useState } from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import Navbar from "../Component/Navbar"
import { useNavigate, useParams } from 'react-router-dom'
import { BestSellerData } from "../assets/data/BestSellerData";
import { SimplePopUp } from '../CommonComponent/SimplePopUp';
const ProductDetailPage = () => {
  const navigate = useNavigate()
  const {id}=useParams()
  const [filteredCard,setFilteredCard]=useState(null)
  const [open,setOpen]=useState(false)
  
  useEffect(()=>{
   handleFilterFoodCard()
  },[id])

  const handleFilterFoodCard=()=>{
    const filteredData=BestSellerData.filter((item)=>item.id==id)
    setFilteredCard(filteredData[0])
  }
  // const handleAddtoCart = () => {
  //   navigate("/cart")
  // }
  const handleDialogueBoxOpen=()=>{
    setOpen(true)
  }
  const handleClose=()=>{
    setOpen(false)
  }
  return (
   <>
   <Navbar/>
   <Box>
    <Container>
      {
        filteredCard ? <Grid container direction='row'>
        <Grid xs={6} item>
          <img width={"100%"} className='productImage' src={filteredCard.image} alt='Dish'/>
        </Grid>
        <Grid xs={6} item>
          <Typography variant='h4' fontWeight="bold">{filteredCard.title}</Typography>
         <Typography>
         {filteredCard.desc}
         </Typography>
         <Typography>Rating : ❤{filteredCard.rating}</Typography>
         <Box display={'flex'} justifyContent='space-between' alignItems="center">
          <Typography>{filteredCard.price}</Typography>
          <Button className='AddBtn' variant="contained" color="success" onClick={handleDialogueBoxOpen}>Add</Button>
         </Box>
        </Grid>
        <SimplePopUp
        selectedValue={filteredCard}
        open={open}
        onClose={handleClose}
        />
      </Grid>:"Loading"
      }
    </Container>
   </Box>
   </>
  )
}

export default ProductDetailPage