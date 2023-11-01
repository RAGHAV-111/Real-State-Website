
import React from 'react'
import { Box, Typography, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import logo12 from '../logo/logo12.svg';
import logo13 from '../logo/logo13.svg';
import logo14 from '../logo/logo14.svg';
import logo15 from '../logo/logo15.svg';
import logo16 from '../logo/logo16.svg';
import logo17 from '../logo/logo17.svg';
import logo18 from '../logo/logo18.svg';
import Button from '@mui/material/Button';

function Section2() {
    return (
        <Box sx={{
            bgcolor: "#FFFFFF", justifyContent: "center", display: "flex", textAlign: "center", width: "100%",
        }} >
            <Box sx={{ width: "1200px", bgcolor: "#FFFFFF", marginTop: "10px", }}>

                <Grid container spacing={1} sx={{ fontFamily: "poppins", bgcolor: "#FFFFFF" }}>
                    <Grid item lg={4} xs={12} md={6} sx={{ bgcolor: "#FFFFFF", }}>
                        <Box sx={{
                            boxShadow: "0px 10px 10px 0px #00000026",
                            height: "288px", bgcolor: "#FFFFFF",
                            display: "flex", textAlign: "left",
                        }}>
                            <Box sx={{ bgcolor: "#FFFFFF", marginTop: "50px" }}>
                                <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", fontWeight: 500, fontSize: "24px", lineHeight: "36px", marginLeft: "20px" }}>
                                    Residential
                                </Typography>
                                <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", fontWeight: 400, fontSize: "16px", lineHeight: "27px", width: "300px", marginLeft: "20px", color: "#7A7A7A" }}>
                                    From East Coast to West—with Texas in between—these distinctive homes have foyers that welcome visitors and introduce them to the unique character.
                                </Typography>
                                <img src={logo12} alt="logo12" style={{ marginLeft: "20px", marginTop: "20px" }} />

                            </Box>
                        </Box>

                        <Box sx={{
                            textAlign: "left", marginTop: "30px",
                            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 1)),url(${logo13})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: 'cover',
                            '@media (min-width: 320px) and (max-width: 600px)': {
                                // Media query for medium-sized screens
                                backgroundRepeat: "no-repeat",
                                backgroundSize: 'cover',
                            },
                            '@media (min-width: 600px) and (max-width: 768px)': {
                                // Media query for medium-sized screens
                                backgroundRepeat: "no-repeat",
                                backgroundSize: 'cover',
                            },
                            '@media (min-width: 768px) and (max-width: 900px)': {
                                // Media query for medium-sized screens
                                backgroundRepeat: "no-repeat",
                                backgroundSize: 'cover',
                            },
                        }}>
                            <Grid container spacing={1} sx={{ fontFamily: "poppins", }}>
                                <Grid item lg={12} xs={12} md={12} sx={{}}>

                                    <Box sx={{
                                        marginTop: "60%", marginLeft: "5%",
                                        '@media (min-width: 320px) and (max-width: 600px)': {
                                            // Media query for medium-sized screens
                                            marginTop: "50%", marginLeft: "5%"
                                        },
                                        '@media (min-width: 600px) and (max-width: 768px)': {
                                            // Media query for medium-sized screens
                                            marginTop: "100%", marginLeft: "5%"
                                        },
                                        '@media (min-width: 768px) and (max-width: 900px)': {
                                            // Media query for medium-sized screens
                                            marginTop: "50%", marginLeft: "5%"
                                        },


                                    }}>

                                        <Typography sx={{ fontFamily: "poppins", fontWeight: 600, fontSize: "12px", lineHeight: "25px", color: "rgba(121, 121, 121, 1)" }}>
                                            12 Properties
                                        </Typography>
                                    </Box>

                                    <Box sx={{
                                        width: "190%", marginLeft: "5%"
                                        ,
                                        '@media (max-width: 600px)': {
                                            // Media query for smaller screens
                                            marginTop: "0%", marginLeft: "5%",
                                            width: "90%",

                                        },
                                        '@media (min-width: 768px) and (max-width: 1024px)': {
                                            // Media query for medium-sized screens

                                            marginTop: "0%", marginLeft: "5%", width: "100%",
                                        },
                                    }}>
                                        <Box sx={{ display: "flex", bgcolor: "", width: "50%", alignItems: "center", justifyContent: "space-between" }}>

                                            <Typography sx={{ fontFamily: "poppins", fontWeight: 500, fontSize: "10px" }}>
                                                Single Family Home
                                            </Typography>
                                            <Button>


                                                <Typography
                                                    sx={{
                                                        bgcolor: "transparent",
                                                        fontFamily: "poppins",
                                                        fontWeight: 600,
                                                        fontSize: "12px",
                                                        lineHeight: "25px",
                                                        color: "rgba(108, 42, 210, 1)",
                                                        textAlign: "right", marginRight: "10%",
                                                        '@media (min-width: 320px) and (max-width: 600px)': {
                                                            // Media query for medium-sized screens
                                                            bgcolor: "transparent",
                                                            fontFamily: "poppins",
                                                            fontWeight: 600,
                                                            fontSize: "12px",
                                                            lineHeight: "25px",
                                                            color: "rgba(108, 42, 210, 1)",
                                                            textAlign: "right", marginRight: "10%",

                                                        },
                                                        '@media (min-width: 600px) and (max-width: 768px)': {
                                                            // Media query for medium-sized screens
                                                            textAlign: "right", marginRight: "10%",

                                                        },
                                                        '@media (min-width: 768px) and (max-width: 900px)': {
                                                            // Media query for medium-sized screens
                                                            textAlign: "right", marginRight: "10%",

                                                        },

                                                    }}
                                                >
                                                    More Details
                                                </Typography>
                                            </Button>

                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>

                        </Box>

                        <Box sx={{
                            boxShadow: "0px 0px 10px 10px #00000026", height: "288px",
                            marginTop: "10%", bgcolor: "#FFFFFF", display: "flex", textAlign: "left",
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
                            <Box sx={{
                                bgcolor: "#FFFFFF", marginTop: "50px"
                                , '@media (max-width: 600px)': {
                                    // Media query for smaller screens
                                    marginTop: "10%",

                                },
                                '@media (min-width: 768px) and (max-width: 1024px)': {
                                    // Media query for medium-sized screens
                                    marginTop: "10%",
                                },
                            }}>
                                <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", fontWeight: 500, fontSize: "24px", lineHeight: "36px", marginLeft: "20px" }}>
                                    Commercial
                                </Typography>
                                <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", fontWeight: 400, fontSize: "16px", lineHeight: "27px", width: "300px", marginLeft: "20px", color: "#7A7A7A" }}>
                                    This spacious two-story home offers you features seen typically in more expensive homes. With 2,938 square feet, this home design features a two story great room.
                                </Typography>
                                <img src={logo12} alt="logo12" style={{ bgcolor: "#FFFFFF", marginLeft: "20px", marginTop: "20px" }} />

                            </Box>
                        </Box>

                    </Grid>

                    <Grid item lg={4} xs={12} md={6} sx={{}}>

                        <Box sx={{
                            textAlign: "left", marginTop: "0%",
                            backgroundRepeat: "no-repeat", backgroundSize: 'cover',
                            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 1)),url(${logo14})`,

                            '@media (min-width: 320px) and (max-width: 600px)': {
                                // Media query for medium-sized screens
                                backgroundRepeat: "no-repeat", width: "97%",
                                backgroundSize: 'cover',
                            },
                            '@media (min-width: 600px) and (max-width: 768px)': {
                                // Media query for medium-sized screens
                                backgroundRepeat: "no-repeat", width: "97%",
                                backgroundSize: 'cover',
                            },
                            '@media (min-width: 768px) and (max-width: 900px)': {
                                // Media query for medium-sized screens
                                backgroundRepeat: "no-repeat",
                                backgroundSize: 'cover',
                            },
                        }}>
                            <Grid container spacing={1} sx={{ fontFamily: "poppins", }}>
                                <Grid item lg={12} xs={12} md={12} sx={{}}>

                                    <Box sx={{
                                        marginTop: "140%", marginLeft: "5%"
                                        ,
                                        '@media (min-width: 320px) and (max-width: 600px)': {
                                            // Media query for medium-sized screens
                                            marginTop: "140%", marginLeft: "5%"
                                        },
                                        '@media (min-width: 600px) and (max-width: 768px)': {
                                            // Media query for medium-sized screens
                                            marginTop: "100%", marginLeft: "5%"
                                        },
                                        '@media (min-width: 768px) and (max-width: 900px)': {
                                            // Media query for medium-sized screens
                                            marginTop: "100%", marginLeft: "5%"
                                        },
                                        '@media (min-width: 900px) and (max-width: 1024px)': {
                                            // Media query for medium-sized screens
                                            marginTop: "120%", marginLeft: "5%"
                                        },

                                    }}>

                                        <Typography sx={{ fontFamily: "poppins", fontWeight: 600, fontSize: "12px", lineHeight: "25px", color: "rgba(121, 121, 121, 1)" }}>
                                            12 Properties
                                        </Typography>
                                    </Box>

                                    <Box sx={{
                                        width: "190%", marginLeft: "5%"
                                        ,
                                        '@media (max-width: 600px)': {
                                            // Media query for smaller screens
                                            marginTop: "0%", marginLeft: "5%",
                                            width: "90%",

                                        },
                                        '@media (min-width: 768px) and (max-width: 1024px)': {
                                            // Media query for medium-sized screens

                                            marginTop: "0%", marginLeft: "5%", width: "100%",
                                        },
                                    }}>
                                        <Box sx={{ display: "flex", bgcolor: "", width: "50%" }}>

                                            <Typography sx={{ fontFamily: "poppins", fontWeight: 500, fontSize: "10px" }}>
                                                Single Family Home
                                            </Typography>
                                            <Button>
                                                <Typography
                                                    sx={{
                                                        bgcolor: "transparent",
                                                        fontFamily: "poppins",
                                                        fontWeight: 600,
                                                        fontSize: "12px",
                                                        lineHeight: "25px",
                                                        color: "rgba(108, 42, 210, 1)",
                                                        textAlign: "right",
                                                        marginRight: "5%",
                                                    }}
                                                >
                                                    More Details
                                                </Typography>
                                            </Button>

                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>



                        </Box>

                        <Box sx={{
                            textAlign: "left", marginTop: "30px",
                            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 1)),url(${logo15})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: 'cover',
                            '@media (min-width: 320px) and (max-width: 600px)': {
                                // Media query for medium-sized screens
                                backgroundRepeat: "no-repeat",
                                backgroundSize: 'cover',
                            },
                            '@media (min-width: 600px) and (max-width: 768px)': {
                                // Media query for medium-sized screens
                                backgroundRepeat: "no-repeat",
                                backgroundSize: 'cover',
                            },
                            '@media (min-width: 768px) and (max-width: 900px)': {
                                // Media query for medium-sized screens
                                backgroundRepeat: "no-repeat",
                                backgroundSize: 'cover',
                            },
                        }}>
                            <Grid container spacing={1} sx={{ fontFamily: "poppins", }}>
                                <Grid item lg={12} xs={12} md={12} sx={{}}>

                                    <Box sx={{
                                        marginTop: "60%", marginLeft: "5%",
                                        '@media (min-width: 320px) and (max-width: 600px)': {
                                            // Media query for medium-sized screens
                                            marginTop: "50%", marginLeft: "5%"
                                        },
                                        '@media (min-width: 600px) and (max-width: 768px)': {
                                            // Media query for medium-sized screens
                                            marginTop: "100%", marginLeft: "5%"
                                        },
                                        '@media (min-width: 768px) and (max-width: 900px)': {
                                            // Media query for medium-sized screens
                                            marginTop: "50%", marginLeft: "5%"
                                        },


                                    }}>

                                        <Typography sx={{ fontFamily: "poppins", fontWeight: 600, fontSize: "12px", lineHeight: "25px", color: "rgba(121, 121, 121, 1)" }}>
                                            12 Properties
                                        </Typography>
                                    </Box>

                                    <Box sx={{
                                        width: "190%", marginLeft: "5%"
                                        ,
                                        '@media (max-width: 600px)': {
                                            // Media query for smaller screens
                                            marginTop: "0%", marginLeft: "5%",
                                            width: "90%",

                                        },
                                        '@media (min-width: 768px) and (max-width: 1024px)': {
                                            // Media query for medium-sized screens

                                            marginTop: "0%", marginLeft: "5%", width: "100%",
                                        },
                                    }}>
                                        <Box sx={{ display: "flex", bgcolor: "", width: "50%" }}>

                                            <Typography sx={{ fontFamily: "poppins", fontWeight: 500, fontSize: "10px" }}>
                                                Single Family Home
                                            </Typography>
                                            <Button>


                                                <Typography
                                                    sx={{
                                                        bgcolor: "transparent",
                                                        fontFamily: "poppins",
                                                        fontWeight: 600,
                                                        fontSize: "12px",
                                                        lineHeight: "25px",
                                                        color: "rgba(108, 42, 210, 1)",
                                                        textAlign: "right", marginRight: "10%",
                                                        '@media (min-width: 320px) and (max-width: 600px)': {
                                                            // Media query for medium-sized screens
                                                            bgcolor: "transparent",
                                                            fontFamily: "poppins",
                                                            fontWeight: 600,
                                                            fontSize: "12px",
                                                            lineHeight: "25px",
                                                            color: "rgba(108, 42, 210, 1)",
                                                            textAlign: "right", marginRight: "10%",

                                                        },
                                                        '@media (min-width: 600px) and (max-width: 768px)': {
                                                            // Media query for medium-sized screens
                                                            textAlign: "right", marginRight: "10%",

                                                        },
                                                        '@media (min-width: 768px) and (max-width: 900px)': {
                                                            // Media query for medium-sized screens
                                                            textAlign: "right", marginRight: "10%",

                                                        },

                                                    }}
                                                >
                                                    More Details
                                                </Typography>
                                            </Button>

                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>

                        </Box>


                    </Grid>

                    <Grid item lg={4} xs={12} md={6} sx={{}}>
                        <Box sx={{
                            textAlign: "left",
                            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 1)),url(${logo16})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: 'cover',
                            '@media (min-width: 320px) and (max-width: 600px)': {
                                // Media query for medium-sized screens
                                backgroundRepeat: "no-repeat",
                                backgroundSize: 'cover',
                            },
                            '@media (min-width: 600px) and (max-width: 768px)': {
                                // Media query for medium-sized screens
                                backgroundRepeat: "no-repeat",
                                backgroundSize: 'cover',
                            },
                            '@media (min-width: 768px) and (max-width: 900px)': {
                                // Media query for medium-sized screens
                                backgroundRepeat: "no-repeat",
                                backgroundSize: 'cover',
                            },
                        }}>
                            <Grid container spacing={1} sx={{ fontFamily: "poppins", }}>
                                <Grid item lg={12} xs={12} md={12} sx={{}}>

                                    <Box sx={{
                                        marginTop: "60%", marginLeft: "5%",
                                        '@media (min-width: 320px) and (max-width: 600px)': {
                                            // Media query for medium-sized screens
                                            marginTop: "50%", marginLeft: "5%"
                                        },
                                        '@media (min-width: 600px) and (max-width: 768px)': {
                                            // Media query for medium-sized screens
                                            marginTop: "100%", marginLeft: "5%"
                                        },
                                        '@media (min-width: 768px) and (max-width: 900px)': {
                                            // Media query for medium-sized screens
                                            marginTop: "50%", marginLeft: "5%"
                                        },


                                    }}>

                                        <Typography sx={{ fontFamily: "poppins", fontWeight: 600, fontSize: "12px", lineHeight: "25px", color: "rgba(121, 121, 121, 1)" }}>
                                            12 Properties
                                        </Typography>
                                    </Box>

                                    <Box sx={{
                                        width: "190%", marginLeft: "5%"
                                        ,
                                        '@media (max-width: 600px)': {
                                            // Media query for smaller screens
                                            marginTop: "0%", marginLeft: "5%",
                                            width: "90%",

                                        },
                                        '@media (min-width: 768px) and (max-width: 1024px)': {
                                            // Media query for medium-sized screens

                                            marginTop: "0%", marginLeft: "5%", width: "100%",
                                        },
                                    }}>
                                        <Box sx={{ display: "flex", bgcolor: "", width: "50%" }}>

                                            <Typography sx={{ fontFamily: "poppins", fontWeight: 500, fontSize: "10px" }}>
                                                Single Family Home
                                            </Typography>
                                            <Button>


                                                <Typography
                                                    sx={{
                                                        bgcolor: "transparent",
                                                        fontFamily: "poppins",
                                                        fontWeight: 600,
                                                        fontSize: "12px",
                                                        lineHeight: "25px",
                                                        color: "rgba(108, 42, 210, 1)",
                                                        textAlign: "right", marginRight: "10%",
                                                        '@media (min-width: 320px) and (max-width: 600px)': {
                                                            // Media query for medium-sized screens
                                                            bgcolor: "transparent",
                                                            fontFamily: "poppins",
                                                            fontWeight: 600,
                                                            fontSize: "12px",
                                                            lineHeight: "25px",
                                                            color: "rgba(108, 42, 210, 1)",
                                                            textAlign: "right", marginRight: "10%",

                                                        },
                                                        '@media (min-width: 600px) and (max-width: 768px)': {
                                                            // Media query for medium-sized screens
                                                            textAlign: "right", marginRight: "10%",

                                                        },
                                                        '@media (min-width: 768px) and (max-width: 900px)': {
                                                            // Media query for medium-sized screens
                                                            textAlign: "right", marginRight: "10%",

                                                        },

                                                    }}
                                                >
                                                    More Details
                                                </Typography>
                                            </Button>

                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>

                        </Box>

                        <Box sx={{
                            textAlign: "left", marginTop: "30px",
                            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 1)),url(${logo17})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: 'cover',
                            '@media (min-width: 320px) and (max-width: 600px)': {
                                // Media query for medium-sized screens
                                backgroundRepeat: "no-repeat",
                                backgroundSize: 'cover',
                            },
                            '@media (min-width: 600px) and (max-width: 768px)': {
                                // Media query for medium-sized screens
                                backgroundRepeat: "no-repeat",
                                backgroundSize: 'cover',
                            },
                            '@media (min-width: 768px) and (max-width: 900px)': {
                                // Media query for medium-sized screens
                                backgroundRepeat: "no-repeat",
                                backgroundSize: 'cover',
                            },
                        }}>
                            <Grid container spacing={1} sx={{ fontFamily: "poppins", }}>
                                <Grid item lg={12} xs={12} md={12} sx={{}}>

                                    <Box sx={{
                                        marginTop: "60%", marginLeft: "5%",
                                        '@media (min-width: 320px) and (max-width: 600px)': {
                                            // Media query for medium-sized screens
                                            marginTop: "50%", marginLeft: "5%"
                                        },
                                        '@media (min-width: 600px) and (max-width: 768px)': {
                                            // Media query for medium-sized screens
                                            marginTop: "100%", marginLeft: "5%"
                                        },
                                        '@media (min-width: 768px) and (max-width: 900px)': {
                                            // Media query for medium-sized screens
                                            marginTop: "50%", marginLeft: "5%"
                                        },


                                    }}>

                                        <Typography sx={{ fontFamily: "poppins", fontWeight: 600, fontSize: "12px", lineHeight: "25px", color: "rgba(121, 121, 121, 1)" }}>
                                            12 Properties
                                        </Typography>
                                    </Box>

                                    <Box sx={{
                                        width: "190%", marginLeft: "5%"
                                        ,
                                        '@media (max-width: 600px)': {
                                            // Media query for smaller screens
                                            marginTop: "0%", marginLeft: "5%",
                                            width: "90%",

                                        },
                                        '@media (min-width: 768px) and (max-width: 1024px)': {
                                            // Media query for medium-sized screens

                                            marginTop: "0%", marginLeft: "5%", width: "100%",
                                        },
                                    }}>
                                        <Box sx={{ display: "flex", bgcolor: "", width: "50%" }}>

                                            <Typography sx={{ fontFamily: "poppins", fontWeight: 500, fontSize: "10px" }}>
                                                Single Family Home
                                            </Typography>
                                            <Button>


                                                <Typography
                                                    sx={{
                                                        bgcolor: "transparent",
                                                        fontFamily: "poppins",
                                                        fontWeight: 600,
                                                        fontSize: "12px",
                                                        lineHeight: "25px",
                                                        color: "rgba(108, 42, 210, 1)",
                                                        textAlign: "right", marginRight: "10%",
                                                        '@media (min-width: 320px) and (max-width: 600px)': {
                                                            // Media query for medium-sized screens
                                                            bgcolor: "transparent",
                                                            fontFamily: "poppins",
                                                            fontWeight: 600,
                                                            fontSize: "12px",
                                                            lineHeight: "25px",
                                                            color: "rgba(108, 42, 210, 1)",
                                                            textAlign: "right", marginRight: "10%",

                                                        },
                                                        '@media (min-width: 600px) and (max-width: 768px)': {
                                                            // Media query for medium-sized screens
                                                            textAlign: "right", marginRight: "10%",

                                                        },
                                                        '@media (min-width: 768px) and (max-width: 900px)': {
                                                            // Media query for medium-sized screens
                                                            textAlign: "right", marginRight: "10%",

                                                        },

                                                    }}
                                                >
                                                    More Details
                                                </Typography>
                                            </Button>

                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>

                        </Box>

                        <Box sx={{
                            textAlign: "left", marginTop: "30px",
                            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0),rgba(255, 255, 255, 1)),url(${logo18})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: 'cover',
                            '@media (min-width: 320px) and (max-width: 600px)': {
                                // Media query for medium-sized screens
                                backgroundRepeat: "no-repeat",
                                backgroundSize: 'cover',
                            },
                            '@media (min-width: 600px) and (max-width: 768px)': {
                                // Media query for medium-sized screens
                                backgroundRepeat: "no-repeat",
                                backgroundSize: 'cover',
                            },
                            '@media (min-width: 768px) and (max-width: 900px)': {
                                // Media query for medium-sized screens
                                backgroundRepeat: "no-repeat",
                                backgroundSize: 'cover',
                            },
                        }}>
                            <Grid container spacing={1} sx={{ fontFamily: "poppins", }}>
                                <Grid item lg={12} xs={12} md={12} sx={{}}>

                                    <Box sx={{
                                        marginTop: "60%", marginLeft: "5%",
                                        '@media (min-width: 320px) and (max-width: 600px)': {
                                            // Media query for medium-sized screens
                                            marginTop: "50%", marginLeft: "5%"
                                        },
                                        '@media (min-width: 600px) and (max-width: 768px)': {
                                            // Media query for medium-sized screens
                                            marginTop: "100%", marginLeft: "5%"
                                        },
                                        '@media (min-width: 768px) and (max-width: 900px)': {
                                            // Media query for medium-sized screens
                                            marginTop: "50%", marginLeft: "5%"
                                        },


                                    }}>

                                        <Typography sx={{ fontFamily: "poppins", fontWeight: 600, fontSize: "12px", lineHeight: "25px", color: "rgba(121, 121, 121, 1)" }}>
                                            12 Properties
                                        </Typography>
                                    </Box>

                                    <Box sx={{
                                        width: "190%", marginLeft: "5%"
                                        ,
                                        '@media (max-width: 600px)': {
                                            // Media query for smaller screens
                                            marginTop: "0%", marginLeft: "5%",
                                            width: "90%",

                                        },
                                        '@media (min-width: 768px) and (max-width: 1024px)': {
                                            // Media query for medium-sized screens

                                            marginTop: "0%", marginLeft: "5%", width: "100%",
                                        },
                                    }}>
                                        <Box sx={{ display: "flex", bgcolor: "", width: "50%" }}>

                                            <Typography sx={{ fontFamily: "poppins", fontWeight: 500, fontSize: "10px" }}>
                                                Single Family Home
                                            </Typography>
                                            <Button>


                                                <Typography
                                                    sx={{
                                                        bgcolor: "transparent",
                                                        fontFamily: "poppins",
                                                        fontWeight: 600,
                                                        fontSize: "12px",
                                                        lineHeight: "25px",
                                                        color: "rgba(108, 42, 210, 1)",
                                                        textAlign: "right", marginRight: "10%",
                                                        '@media (min-width: 320px) and (max-width: 600px)': {
                                                            // Media query for medium-sized screens
                                                            bgcolor: "transparent",
                                                            fontFamily: "poppins",
                                                            fontWeight: 600,
                                                            fontSize: "12px",
                                                            lineHeight: "25px",
                                                            color: "rgba(108, 42, 210, 1)",
                                                            textAlign: "right", marginRight: "10%",

                                                        },
                                                        '@media (min-width: 600px) and (max-width: 768px)': {
                                                            // Media query for medium-sized screens
                                                            textAlign: "right", marginRight: "10%",

                                                        },
                                                        '@media (min-width: 768px) and (max-width: 900px)': {
                                                            // Media query for medium-sized screens
                                                            textAlign: "right", marginRight: "10%",

                                                        },

                                                    }}
                                                >
                                                    More Details
                                                </Typography>
                                            </Button>

                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>

                        </Box>


                    </Grid>

                </Grid >
            </Box >

        </Box >
    )
}

export default Section2