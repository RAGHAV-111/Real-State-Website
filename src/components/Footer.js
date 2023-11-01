import React from 'react'
import { Box, Typography, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';

function Footer() {
    return (
        <>

            <Grid container spacing={1} sx={{    bgcolor: "#00335A",}}>

                <Grid item lg={12} xs={12} md={12} sx={{   bgcolor: "#00335A",}}>
                    <Box>

                        <Box sx={{
                            bgcolor: "#00335A", display: "flex", textAlign: "center", justifyContent: "center", marginTop: "1%", marginBottom: "1%",

                        }}>
                            <Typography sx={{ fontFamily: "poppins", fontWeight: 500, fontSize: "16px", lineHeight: "25px", color: "#FFFFFF" }}>
                                © Retrex - All rights reserved
                            </Typography>

                        </Box>
                    </Box>

                </Grid>


            </Grid>

        </>

    )
}

export default Footer