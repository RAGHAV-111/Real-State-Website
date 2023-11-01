import React from 'react'
import { Box, Typography, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function Section7() {


    return (
        <Box
            sx={{

                bgcolor: "#F5F5F5",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "0%",
                '@media (min-width: 320px) and (max-width: 600px)': {
                    // Media query for medium-sized screens
                    marginTop: "0%",
                },
                '@media (min-width: 600px) and (max-width: 768px)': {
                    // Media query for medium-sized screens
                    marginTop: "0%",
                },
                '@media (min-width: 768px) and (max-width: 900px)': {
                    // Media query for medium-sized screens
                    marginTop: "0%",
                },

            }}
        >
            <Box
                sx={{
                    width: "80%",
                    bgcolor: "##F5F5F5",

                }}
            >

                <Grid container spacing={1} sx={{

                    bgcolor: "#F5F5F5",
                    fontFamily: "poppins",
                    marginTop: "50px",


                    '@media (max-width: 600px)': {
                        // Media query for smaller screens
                        marginTop: "100px",

                    },
                    '@media (min-width: 768px) and (max-width: 1024px)': {
                        // Media query for medium-sized screens
                        marginTop: "100px",
                    },
                }}>

                    <Grid item lg={3} xs={12} md={6} sx={{}}>

                        <Box sx={{
                            bgcolor: "#F5F5F5",
                            width: "95%",
                        }}>


                            <Box sx={{
                                bgcolor: "#F5F5F5",
                                width: "95%",
                                height: "200px", padding: "0px 10px 10px 10px",

                            }}>
                                <Box sx={{ marginTop: "20px" }}>
                                    <Typography sx={{ bgcolor: "#F5F5F5", fontFamily: "poppins", fontWeight: 600, fontSize: "18px", lineHeight: "24px", color: "#000000" }}>
                                        Discover
                                    </Typography>
                                    <Typography sx={{ bgcolor: "#F5F5F5", fontFamily: "poppins", fontWeight: 500, fontSize: "14px", lineHeight: "21px", color: "#000000", marginTop: "30px" }}>
                                        Miami
                                    </Typography>
                                    <Typography sx={{ bgcolor: "#F5F5F5", fontFamily: "poppins", fontWeight: 500, fontSize: "14px", lineHeight: "21px", color: "#000000", marginTop: "10px" }}>
                                        Los Angeles
                                    </Typography>
                                    <Typography sx={{ bgcolor: "#F5F5F5", fontFamily: "poppins", fontWeight: 500, fontSize: "14px", lineHeight: "21px", color: "#000000", marginTop: "10px" }}>
                                        Chicago
                                    </Typography>
                                    <Typography sx={{ bgcolor: "#F5F5F5", fontFamily: "poppins", fontWeight: 500, fontSize: "14px", lineHeight: "21px", color: "#000000", marginTop: "10px" }}>
                                        New York
                                    </Typography>

                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item lg={3} xs={12} md={6} sx={{}}>

                        <Box sx={{
                            bgcolor: "#F5F5F5",
                            width: "95%",
                        }}>
                            <Box sx={{
                                bgcolor: "#F5F5F5",
                                width: "95%",
                                padding: "0px 10px 10px 10px",
                            }}>
                                <Box sx={{ marginTop: "20px" }}>
                                    <Typography sx={{ bgcolor: "#F5F5F5", fontFamily: "poppins", fontWeight: 600, fontSize: "18px", lineHeight: "24px", color: "#000000" }}>
                                        Contact Us
                                    </Typography>
                                    <Typography sx={{ bgcolor: "#F5F5F5", fontFamily: "poppins", fontWeight: 300, fontSize: "14px", lineHeight: "25px", color: "#000000", marginTop: "30px" }}>
                                        774 NE 84th St Miami, FL 33879
                                    </Typography>
                                    <Typography sx={{ bgcolor: "#F5F5F5", fontFamily: "poppins", fontWeight: 300, fontSize: "14px", lineHeight: "25px", color: "#000000", marginTop: "10px" }}>
                                        987 654 9875
                                    </Typography>
                                    <Typography sx={{ bgcolor: "#F5F5F5", fontFamily: "poppins", fontWeight: 300, fontSize: "14px", lineHeight: "25px", color: "#000000", marginTop: "10px" }}>
                                        879 456 1349
                                    </Typography>
                                    <Typography sx={{ bgcolor: "#F5F5F5", fontFamily: "poppins", fontWeight: 300, fontSize: "14px", lineHeight: "25px", color: "#000000", marginTop: "10px" }}>
                                        email@houzez.com
                                    </Typography>

                                </Box>
                            </Box>
                        </Box>

                    </Grid>


                    <Grid item lg={6} xs={12} md={12} sx={{}}>

                        <Box sx={{
                            bgcolor: "#F5F5F5",
                            width: "95%",
                        }}>


                            <Box sx={{
                                bgcolor: "#F5F5F5",
                                width: "95%",
                                padding: "0px 10px 10px 10px",


                            }}>
                                <Box sx={{ marginTop: "20px" }}>
                                    <Typography sx={{ bgcolor: "#F5F5F5", fontFamily: "poppins", fontWeight: 600, fontSize: "18px", lineHeight: "24px", color: "#000000" }}>
                                        Newsletter
                                    </Typography>


                                </Box>


                                <Box sx={{ marginTop: "20px", }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Enter your email"
                                        variant="outlined"
                                        sx={{
                                            fontFamily: "poppins",
                                            bgcolor:"#FFFFFF",
                                            width: "100%",
                                            marginLeft: "0px",
                                            position: "relative",
                                            '@media (min-width: 320px) and (max-width: 600px)': {
                                                // Media query for medium-sized screens
                                                width: "100%",
                                            },
                                            '@media (min-width: 600px) and (max-width: 768px)': {
                                                // Media query for medium-sized screens
                                                width: "100%",
                                            },
                                            '@media (min-width: 768px) and (max-width: 900px)': {
                                                // Media query for medium-sized screens
                                                width: "100%",
                                            },
                                        }}

                                    />
                                </Box>

                                <Button
                                    sx={{
                                        fontFamily: "poppins",
                                        display: "flex",
                                        marginTop: "25px",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        bgcolor: "#00AEFF",
                                        width: "20%",
                                        borderRadius: "5px",
                                        border: "1px solid #00AEFF",
                                        textAlign: "center",
                                        marginLeft: "40%",

                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontFamily: "poppins",
                                            bgcolor: "transparent",
                                            fontWeight: 500,
                                            fontSize: "10px",
                                            lineHeight: "24px",
                                            color: "#FFFFFF",
                                            marginTop: "5%",
                                            marginBottom: "5%"
                                        }}
                                    >
                                        Search
                                    </Typography>
                                </Button>


                                <Typography sx={{ bgcolor: "#F5F5F5", fontFamily: "poppins", fontWeight: 300, fontSize: "14px", lineHeight: "25px", color: "#000000", marginTop: "10px" }}>
                                    Houzez is a premium WordPress theme for Designers & Real Estate Agents.
                                </Typography>



                            </Box>
                        </Box>

                    </Grid>


                </Grid>



            </Box>




        </Box >

    )
}

export default Section7