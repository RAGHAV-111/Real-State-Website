import React from 'react'
import { Box, Typography, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import logo25 from '../logo/logo25.svg';
import logo26 from '../logo/logo26.svg';
import logo55 from '../logo/logo55.webp';
import logo56 from '../logo/logo56.webp';
import logo57 from '../logo/logo57.webp';


function Section6() {

    const starStyle = {
        color: 'gold',
        fontSize: '24px',
        backgroundColor: "#FFFFFF"
    };

    return (
        <Box
            sx={{
                bgcolor: "#FFFFFF",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "5%",
                '@media (min-width: 320px) and (max-width: 600px)': {
                    // Media query for medium-sized screens
                    marginTop: "5%",
                },
                '@media (min-width: 600px) and (max-width: 768px)': {
                    // Media query for medium-sized screens
                    marginTop: "5%",
                },
                '@media (min-width: 768px) and (max-width: 900px)': {
                    // Media query for medium-sized screens
                    marginTop: "5%",
                },
            }}
        >
            <Box
                sx={{
                    width: "80%", bgcolor: "#FFFFFF",
                }}
            >

                <Grid container spacing={1} sx={{ fontFamily: "poppins", bgcolor: "#FFFFFF", }}>

                    <Grid item lg={12} xs={12} md={12} sx={{
                        bgcolor: "#FFFFFF",
                    }}>
                        <Box sx={{
                            bgcolor: "#FFFFFF",
                        }}>
                            <Box sx={{
                                bgcolor: "#FFFFFF",
                            }}>
                                <Typography sx={{
                                    bgcolor: "#FFFFFF",
                                    fontFamily: "poppins", fontWeight: 600, fontSize: "30px",
                                    lineHeight: "42px", alignItems: "center", justifyContent: "center",
                                    display: "flex",

                                    marginTop: "5%",
                                    '@media (min-width: 320px) and (max-width: 600px)': {
                                        // Media query for medium-sized screens
                                        marginTop: "5%",
                                    },
                                    '@media (min-width: 600px) and (max-width: 768px)': {
                                        // Media query for medium-sized screens
                                        marginTop: "5%",
                                    },
                                    '@media (min-width: 768px) and (max-width: 900px)': {
                                        // Media query for medium-sized screens
                                        marginTop: "5%",
                                    },

                                }}>
                                    Testimonials
                                </Typography>
                            </Box>

                            <Box sx={{
                                marginTop: "5%",
                                '@media (min-width: 320px) and (max-width: 600px)': {
                                    // Media query for medium-sized screens
                                    marginTop: "5%",
                                },
                                '@media (min-width: 600px) and (max-width: 768px)': {
                                    // Media query for medium-sized screens
                                    marginTop: "5%",
                                },
                                '@media (min-width: 768px) and (max-width: 900px)': {
                                    // Media query for medium-sized screens
                                    marginTop: "5%",
                                },
                            }}>
                                <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", fontWeight: 500, fontSize: "18px", lineHeight: "25px", alignItems: "center", justifyContent: "center", display: "flex", color: "rgba(122, 122, 122, 1)" }}>
                                    Feedback of our clients
                                </Typography>
                            </Box>
                        </Box>

                    </Grid>


                </Grid>


                <Grid container spacing={2} sx={{

                    bgcolor: "#FFFFFF",
                    fontFamily: "poppins", marginBottom: "10%",
                    marginTop: "5%",
                    '@media (min-width: 320px) and (max-width: 600px)': {
                        // Media query for medium-sized screens
                        marginTop: "5%",
                    },
                    '@media (min-width: 600px) and (max-width: 768px)': {
                        // Media query for medium-sized screens
                        marginTop: "5%",
                    },
                    '@media (min-width: 768px) and (max-width: 900px)': {
                        // Media query for medium-sized screens
                        marginTop: "5%",
                    },
                }}>

                    <Grid item lg={4} xs={12} md={6} sx={{ bgcolor: "#FFFFFF", marginBottom: "10px" }}>

                        <Box sx={{
                            bgcolor: "#FFFFFF",
                            width: "95%", marginBottom: "10px"
                        }}>



                            <Box sx={{
                                bgcolor: "#FFFFFF",
                                width: "95%",
                                padding: "0px 10px 10px 10px",
                                boxShadow: "0px 5px 10px  0px rgba(0, 0, 0, 0.1)",
                                marginBottom: "10px"

                            }}>
                                <Box sx={{
                                    background: 'linear-gradient(to top, #FFFFFF 0%, #FFFFFF 50%,  50%, 100%)',
                                    display: 'flex', width: "105%",

                                }}>
                                    <Box sx={{ flex: 1, textAlign: "left", bgcolor: "#FFFFFF" }}>
                                        <img src={logo26} alt="logo26" style={{ bgcolor: "#FFFFFF", height: "25px", marginTop: '25px', marginRight: "20%" }} />
                                    </Box>
                                    <Box sx={{ flex: 1, textAlign: "center", bgcolor: "#FFFFFF", marginRight: "40%" }}>
                                        <img src={logo55} alt="logo25" style={{ bgcolor: "#FFFFFF", height: "90px", borderRadius: "50%" }} />
                                    </Box>
                                </Box>


                                <Box sx={{ marginTop: "20px" }}>
                                    <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", fontWeight: 400, fontSize: "15px", lineHeight: "25px", color: "rgba(99, 99, 99, 1)" }}>
                                        Great location for walking to everywhere.
                                       
                                        Well appointed and very comfortable, and stylish.
                                        Patricia have us some great ideas for visiting and eating.
                                    </Typography>
                                </Box>



                                <Box style={{ backgroundColor: "#FFFFFF" }}>
                                    <span style={starStyle}>&#9733;</span>
                                    <span style={starStyle}>&#9733;</span>
                                    <span style={starStyle}>&#9733;</span>
                                    <span style={starStyle}>&#9733;</span>

                                </Box>


                                <Box sx={{ bgcolor: "#FFFFFF", textAlign: "right" }}>

                                    <Box sx={{ marginTop: "20px" }}>

                                        <Typography sx={{ bgcolor: "#FFFFFF", font: "poppins", fontWeight: 600, fontSize: "15px", lineHeight: "25px", color: "#000000" }}>
                                            by Frances Aaron

                                        </Typography>


                                    </Box>
                                    <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", fontWeight: 300, fontSize: "15px", lineHeight: "25px", color: "#000000" }}>
                                        CTO, Billyq Inc.
                                    </Typography>


                                </Box>

                            </Box>
                        </Box>

                    </Grid>

                    <Grid item lg={4} xs={12} md={6} sx={{ bgcolor: "#FFFFFF", marginBottom: "10px" }}>

                        <Box sx={{
                            bgcolor: "#FFFFFF",
                            width: "95%", marginBottom: "10px"
                        }}>



                            <Box sx={{
                                bgcolor: "#FFFFFF",
                                width: "95%",
                                padding: "0px 10px 10px 10px",
                                boxShadow: "0px 5px 10px  0px rgba(0, 0, 0, 0.1)",
                                marginBottom: "10px"

                            }}>
                                <Box sx={{
                                    background: 'linear-gradient(to top, #FFFFFF 0%, #FFFFFF 50%,  50%, 100%)',
                                    display: 'flex', width: "105%",

                                }}>
                                    <Box sx={{ flex: 1, textAlign: "left", bgcolor: "#FFFFFF" }}>
                                        <img src={logo26} alt="logo26" style={{ bgcolor: "#FFFFFF", height: "25px", marginTop: '25px', marginRight: "20%" }} />
                                    </Box>
                                    <Box sx={{ flex: 1, textAlign: "center", bgcolor: "#FFFFFF", marginRight: "40%" }}>
                                        <img src={logo56} alt="logo56" style={{ bgcolor: "#FFFFFF", height: "90px", borderRadius: "50%" }} />
                                    </Box>
                                </Box>


                                <Box sx={{ marginTop: "20px" }}>
                                    <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", fontWeight: 400, fontSize: "15px", lineHeight: "25px", color: "rgba(99, 99, 99, 1)" }}>
                                        Top flat was a lovely apartment with a beautiful view of the river--patricia was a wonderful and very helpful host--we will definitely recommend this place to others!
                                    </Typography>
                                </Box>



                                <Box style={{ backgroundColor: "#FFFFFF" }}>
                                    <span style={starStyle}>&#9733;</span>
                                    <span style={starStyle}>&#9733;</span>
                                    <span style={starStyle}>&#9733;</span>
                                    <span style={starStyle}>&#9733;</span>
                                    <span style={starStyle}>&#9733;</span>
                                </Box>


                                <Box sx={{ bgcolor: "#FFFFFF", textAlign: "right" }}>

                                    <Box sx={{ marginTop: "20px" }}>

                                        <Typography sx={{ bgcolor: "#FFFFFF", font: "poppins", fontWeight: 600, fontSize: "15px", lineHeight: "25px", color: "#000000" }}>
                                            by Matthew Aaronson
                                        </Typography>


                                    </Box>
                                    <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", fontWeight: 300, fontSize: "15px", lineHeight: "25px", color: "#000000" }}>
                                        CEO, Crome Inc.
                                    </Typography>


                                </Box>

                            </Box>
                        </Box>

                    </Grid>

                    <Grid item lg={4} xs={12} md={6} sx={{ bgcolor: "#FFFFFF", marginBottom: "10px" }}>

                        <Box sx={{
                            bgcolor: "#FFFFFF",
                            width: "95%", marginBottom: "10px"
                        }}>



                            <Box sx={{
                                bgcolor: "#FFFFFF",
                                width: "95%",
                                padding: "0px 10px 10px 10px",
                                boxShadow: "0px 5px 10px  0px rgba(0, 0, 0, 0.1)",
                                marginBottom: "10px"

                            }}>
                                <Box sx={{
                                    background: 'linear-gradient(to top, #FFFFFF 0%, #FFFFFF 50%,  50%, 100%)',
                                    display: 'flex', width: "105%",

                                }}>
                                    <Box sx={{ flex: 1, textAlign: "left", bgcolor: "#FFFFFF" }}>
                                        <img src={logo26} alt="logo26" style={{ bgcolor: "#FFFFFF", height: "25px", marginTop: '25px', marginRight: "20%" }} />
                                    </Box>
                                    <Box sx={{ flex: 1, textAlign: "center", bgcolor: "#FFFFFF", marginRight: "40%" }}>
                                    <img src={logo25} alt="logo25" style={{ bgcolor: "#FFFFFF", height: "90px", borderRadius: "50%" }} />
                                    </Box>
                                </Box>


                                <Box sx={{ marginTop: "20px" }}>
                                    <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", fontWeight: 400, fontSize: "15px", lineHeight: "25px", color: "rgba(99, 99, 99, 1)" }}>
                                        Clean and streamlined apartment. The view is gorgeous and the balcony is the perfect spot to relax. It was raining during our stay and we still enjoyed it.
                                    </Typography>
                                </Box>



                                <Box style={{ backgroundColor: "#FFFFFF" }}>
                                    <span style={starStyle}>&#9733;</span>
                                    <span style={starStyle}>&#9733;</span>
                                    <span style={starStyle}>&#9733;</span>
                                    <span style={starStyle}>&#9733;</span>
                                    <span style={starStyle}>&#9733;</span>
                                </Box>


                                <Box sx={{ bgcolor: "#FFFFFF", textAlign: "right" }}>

                                    <Box sx={{ marginTop: "20px" }}>

                                        <Typography sx={{ bgcolor: "#FFFFFF", font: "poppins", fontWeight: 600, fontSize: "15px", lineHeight: "25px", color: "#000000" }}>
                                            by Roy Bennett
                                        </Typography>


                                    </Box>
                                    <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", fontWeight: 300, fontSize: "15px", lineHeight: "25px", color: "#000000" }}>
                                        Manager, Logot Inc.
                                    </Typography>


                                </Box>

                            </Box>
                        </Box>

                    </Grid>



                </Grid>


            </Box>


        </Box >
    )
}

export default Section6