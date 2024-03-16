import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import Navbar from "../Component/Navbar"
import { useNavigate } from 'react-router-dom'
const ProductDetailPage = () => {
  const navigate=useNavigate()
    const handleAddtoCart=()=>{
      navigate("/cart")
    }
  return (
   <>
   <Navbar/>
   <Box>
    <Container>
      <Grid container direction='row'>
        <Grid xs={6} item>
          <img width={"100%"} className='productImage' src="https://rp-media.faasos.io/catalog/images/WHTP0IVCRM.jpeg" alt='Dish'/>
        </Grid>
        <Grid xs={6} item>
          <Typography variant='h4' fontWeight="bold">Lazeez Bhuna Murgh Biryani (Dum Chicken Biryani - Serves 1)</Typography>
         <Typography>
         (Boneless, Served with 1 Gulab Jamun & Mint Raita) In this culinary jewel from Behrouz, Tender chicken pieces are marinated 
          with exuberant bhuna spices that are freshly ground and dum pukht with aromatic rice.Read Less
         </Typography>
         <Typography>Rating : ❤4.3</Typography>
         <Box display={'flex'} justifyContent='space-between' alignItems="center">
          <Typography>Rs 329</Typography>
          <Button className='AddBtn' onClick={handleAddtoCart}>Add</Button>
         </Box>
        </Grid>
      </Grid>
    </Container>
   </Box>
   </>
  )
}

export default ProductDetailPage