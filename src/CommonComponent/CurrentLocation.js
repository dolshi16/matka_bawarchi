import React, { useEffect } from "react";
export const CurrentLocation=()=>{
    useEffect(()=>{
        // console.log(navigator.geolocation,,"navigator")
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("postion",position.coords.latitude,position.coords.longitude)
            },
            (error) => {
                // display an error if we cant get the users position
                console.error('Error getting user location:', error);
            }
        );
    },[])
    return (
        <p>Surat</p>
    )
}