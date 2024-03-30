import { Box, Checkbox, Dialog, DialogTitle, FormControlLabel, FormGroup, Grid, List, ListItem } from "@mui/material"
import React from "react"
const ShowExtraDetail = (name, price) => {
    return (<Box>
        <Grid container direction="row" columnGap={16}>
            <Grid item>{name}</Grid>
            <Grid item>{price}</Grid>
        </Grid>
    </Box>)
}
export const SimplePopUp = (props) => {
    const { onClose, selectedValue, open } = props;
    const handleClose = () => {
        return onClose(1)
    }
    return (
        <Dialog  onClose={handleClose} open={open}>
            <DialogTitle>{selectedValue.title}</DialogTitle>
            <FormGroup>
                {
                    selectedValue.extras.map((item) => {
                        return (
                            <FormControlLabel key={item.subId} control={<Checkbox defaultChecked />} label={ShowExtraDetail(item.name, item.price)} />
                        )
                    })
                }

            </FormGroup>

        </Dialog>
    )
}

