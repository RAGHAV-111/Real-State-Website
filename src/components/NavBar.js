import React from 'react';
import { Box, Typography, TextField } from '@mui/material';
import logo40 from '../logo/logo40.svg';
import logo1 from '../logo/logo1.svg';
import logo2 from '../logo/logo2.svg';
import logo3 from '../logo/logo3.svg';
import logo4 from '../logo/logo4.svg';
import logo5 from '../logo/logo5.svg';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function NavBar() {
  return (
    <Box sx={{
      fontFamily: "poppins", backgroundImage: `linear-gradient(#77D4FF37,#77D4FF80),url(${logo1})`,
      backgroundSize: 'cover', width: '100%', justifyContent: "center",
      alignItems: "center",

      '@media (max-width: 600px)': {

        width: '100%',
        justifyContent: "center",
        alignItems: "center",
      },

      '@media (min-width: 768px) and (max-width: 1024px)': {

        justifyContent: "center",
        alignItems: "center",
      },

    }} >

      <Grid container spacing={0} sx={{ fontFamily: "poppins", bgcolor: 'rgba(255, 255, 255, 0.8)' }}>
        <Grid item lg={2} xs={12} md={12} sx={{

          fontFamily: "poppins", height: "90px",

          '@media (max-width: 600px)': {
            width: '100%',
            justifyContent: "center",
            alignItems: "center",

          },


          '@media (min-width: 768px) and (max-width: 1024px)': {
            width: '100%',
            justifyContent: "center",
            alignItems: "center",

          },
        }}>
          <Box
            sx={{
              fontFamily: "poppins",
              height: "90px",

              '@media (max-width: 600px)': {
                justifyContent: "center",
                alignItems: "center",

              },
              '@media (min-width: 768px) and (max-width: 1024px)': {
                justifyContent: "center",
                alignItems: "center",

              },
            }}
          >
            <img src={logo40} alt="logo40" style={{ height: "90%" }} />
          </Box>

        </Grid>
        <Grid item lg={5} xs={12} md={12} sx={{ fontFamily: "poppins", height: "90px", display: "flex", }}>
          <Button variant="outlined" sx={{
            fontFamily: "poppins", margin: "4% 5% 4% 5%",

            marginLeft: "20%",

            '@media (max-width: 600px)': {
              marginLeft: "10%",

            },

            '@media (min-width: 768px) and (max-width: 1024px)': {
              marginLeft: "10%",

            },

          }}>
            <Typography sx={{ fontFamily: "poppins", color: "#6A15CC", fontWeight: 500, fontSize: "16px", }}>Home</Typography>
          </Button>
          <Button variant="outlined" sx={{
            fontFamily: "poppins", margin: "4% 0% 4% 0%",

            '@media (max-width: 600px)': {
              marginLeft: "10px",
            },

            '@media (min-width: 768px) and (max-width: 1024px)': {
              marginLeft: "50px",

            },
          }}>
            <Typography sx={{ fontFamily: "poppins", color: "#000000", fontWeight: 500, fontSize: "16px", }}>Property</Typography>
          </Button>

          <Button variant="outlined" sx={{
            fontFamily: "poppins", margin: "4% 5% 4% 5%",


            '@media (max-width: 600px)': {
              marginLeft: "10px",
            },

            '@media (min-width: 768px) and (max-width: 1024px)': {
              marginLeft: "50px",

            },

          }}>
            <Typography sx={{ fontFamily: "poppins", color: "#000000", fontWeight: 500, fontSize: "16px", }}>Realtor</Typography>
          </Button>
        </Grid>

        <Grid item lg={5} xs={12} md={12} sx={{ fontFamily: "poppins", height: "90px", display: "flex", justifyContent: "space-between" }}>

          <Button variant="outlined" sx={{
            fontFamily: "poppins", margin: "4% 5% 4% 5%",
            marginLeft: "20%",

            '@media (max-width: 600px)': {
              marginLeft: "10%",

            },

            '@media (min-width: 768px) and (max-width: 1024px)': {
              marginLeft: "10%",

            },
          }}>
            <Typography
              sx={{
                fontFamily: "poppins",
                color: "#000000",
                fontWeight: 500,
                fontSize: "16px",

              }}
            >
              Others
            </Typography>
          </Button>
          <Button variant="outlined" sx={{
            fontFamily: "poppins", margin: "4% 0% 4% 0%",
            '@media (max-width: 600px)': {},
            '@media (min-width: 768px) and (max-width: 1024px)': {
              marginLeft: "50px",
            },

          }}>
            <Typography sx={{ fontFamily: "poppins", color: "#000000", fontWeight: 500, fontSize: "16px", }}>+522-9789</Typography>
          </Button>
          <Button variant="contained" sx={{
            fontFamily: "poppins", margin: " 4% 3% 4% 3%", bgcolor: "#6C2AD2", borderRadius: "4px", textAlign: "center", justifyContent: "center",
          }}>
            <Typography sx={{ backgroundColor: "transparent", fontFamily: "poppins", fontWeight: 500, fontSize: "12px",  color: "#FFFFFF" }}>Register</Typography>
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={0} sx={{ fontFamily: "poppins", bgcolor: "transparent", justifyContent: "center", alignItems: "center" }}>
        <Grid item lg={8} xs={12} md={12} sx={{
          fontFamily: "poppins", bgcolor: "transparent",
          marginTop: "50px", display: 'flex', justifyContent: "center", alignItems: "center",


        }} >

          <Box sx={{ fontFamily: "poppins", bgcolor: "transparent", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ fontFamily: "poppins", bgcolor: "transparent", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Box sx={{ fontFamily: "poppins", bgcolor: "transparent", }}>
                <Box sx={{ fontFamily: "poppins", bgcolor: "transparent", display: "flex", justifyContent: "center", alignItems: "center", }}>

                  <Typography sx={{
                    fontFamily: "poppins",
                    display: "flex", justifyContent: "center",

                    '@media (max-width: 600px)': {
                      fontSize: "22px",
                    },
                    '@media (min-width: 768px) and (max-width: 1024px)': {
                      fontSize: "32px",
                    }, marginTop: "100.8px",
                    color: "#FFFFFF", bgcolor: "transparent", fontWeight: 700, fontSize: "42px", alignItems: "center"
                  }}>
                    Find your new House here
                  </Typography>

                </Box>
                <Box
                  sx={{
                    fontFamily: "poppins",

                    bgcolor: "transparent",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "poppins",
                      width: "700px",
                      bgcolor: "transparent",
                      color: "#FFFFFF",
                      fontWeight: 500,
                      fontSize: "20px",
                      lineHeight: "30px",
                      '@media (max-width: 600px)': {
                        width: "300px",
                      },
                      '@media (min-width: 768px) and (max-width: 1024px)': {
                        width: "700px",
                      },
                    }}
                  >
                    Retrex is an innovative real estate theme that helps to ensure your website’s success in this super-competitive market.
                  </Typography>
                </Box>

              </Box>
            </Box>

          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={0} sx={{ bgcolor: "transparent", fontFamily: "poppins", justifyContent: "center", alignItems: "center", marginTop: "100px" }}>
        <Grid item lg={8} xs={12} md={12} sx={{ fontFamily: "poppins", bgcolor: "#FFFFFF", }}>

          <Box sx={{ fontFamily: "poppins", borderRadius: "10px 10px 0px 0px", marginBottom: "2%" }}>

            <Grid container spacing={0} sx={{ fontFamily: "poppins", bgcolor: "transparent", }}>
              <Grid item lg={12} xs={12} md={12} sx={{ fontFamily: "poppins", bgcolor: "#FFFFFF", }}>

                <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", fontWeight: 500, fontSize: "12px", lineHeight: "25px", marginTop: "20px", marginLeft: "20px" }}>
                  Location
                </Typography>

                <Box sx={{
                  fontFamily: "poppins", bgcolor: "#FFFFFF", display: "flex", marginTop: "20px",
                  justifyContent: "center", alignItems: "center",
                }}>

                  <Grid container spacing={0} sx={{ fontFamily: "poppins", bgcolor: "transparent", }}>
                    <Grid item lg={8} xs={12} md={12} sx={{
                      fontFamily: "poppins", bgcolor: "#FFFFFF",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>

                      <TextField
                        id="outlined-basic"
                        label="Search your dream location here..."
                        variant="outlined"
                        sx={{
                          fontFamily: "poppins",
                          color: "#A1A7A8",
                          width: "90%",

                          position: "relative",
                          '@media (max-width: 600px)': {
                            width: '80%',
                          },
                          '@media (min-width: 768px) and (max-width: 1024px)': {
                            width: "80%",
                          },
                        }}
                        InputProps={{
                          endAdornment: (
                            <img
                              src={logo2}
                              alt="logo2"
                              style={{
                                position: "absolute",
                                top: "50%",
                                right: "5px",
                                transform: "translateY(-50%)",
                                width: "24px",
                                height: "24px",
                                marginRight: "20px"
                              }}
                            />
                          ),
                        }}
                      />

                    </Grid>
                    <Grid item lg={4} xs={12} md={12} sx={{
                      fontFamily: "poppins", bgcolor: "#FFFFFF", display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>

                      <Button variant="outlined" sx={{
                        fontFamily: "poppins", margin: "0% 5% 3% 5%",

                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: "#965CF0",
                        width: "217px",
                        height: "42px",
                        borderRadius: "5px",
                        border: "1px solid #AF05FF",
                        textAlign: "center",
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
                        <Typography
                          sx={{
                            fontFamily: "poppins",
                            bgcolor: "transparent",
                            fontWeight: 500,
                            fontSize: "16px",
                            lineHeight: "24px",
                            color: "#FFFFFF",
                          }}
                        >
                          Search
                        </Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Box>

                <Typography sx={{ fontFamily: "poppins", bgcolor: "#FFFFFF", fontWeight: 500, fontSize: "12px", lineHeight: "25px", marginTop: "20px", marginLeft: "20px" }}>
                  Recent searches
                </Typography>

              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ fontFamily: "poppins", bgcolor: '#FFFFFF', justifyContent: "center", marginTop: "10px" }}>
              <Grid item lg={4.5} xs={12} md={8} sx={{ fontFamily: "poppins", bgcolor: "#FFFFFF", height: "141px" }}>
                <Box sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", borderRadius: "10px", border: "1px solid #D9D9D9", }}>
                  <Box sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", display: "flex" }}>
                    <Box sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", marginTop: "10px", marginLeft: "10px", gap: "1px", display: "flex", justifyContent: "right" }}>
                      <Box sx={{ fontFamily: "poppins", bgcolor: "", display: "flex", }}>
                        <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", width: "150px", fontWeight: 500, fontSize: "17px", lineHeight: "36px" }}>
                          All Flats
                        </Typography>
                        <Box sx={{ fontFamily: "poppins", width: "50px", height: "40px", bgcolor: "#6C2AD2", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "10px", marginLeft: "5%" }}>
                          <Typography sx={{ fontFamily: "poppins", bgcolor: "transparent", marginLeft: "10%" }}>
                            2K+
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box sx={{
                      bgcolor: "#FFFFFF",
                      fontFamily: "poppins", height: "55px", display: "flex", marginRight: "10px", gap: "10%",
                      marginLeft: "10%", marginTop: "10px", justifyContent: "right",

                      '@media (max-width: 600px)': {
                        marginLeft: "10%",

                      },
                      '@media (min-width: 768px) and (max-width: 1024px)': {
                        marginLeft: "10%",
                      },

                    }}>
                      <img src={logo3} alt="logo3" style={{ height: "30px", width: "30px" }} />
                      <img src={logo4} alt="logo4" style={{ height: "30px", width: "30px" }} />
                    </Box>

                  </Box>
                  <Box sx={{ fontFamily: "poppins", height: "30px", marginLeft: "43%", marginTop: "5%", bgcolor: "#FFFFFF", display: "flex", justifyContent: "right" }}>
                    <img src={logo5} alt="logo5" style={{}} />
                  </Box>


                </Box>
              </Grid>

              <Grid item lg={4.5} xs={12} md={8} sx={{ fontFamily: "poppins", bgcolor: "#FFFFFF", height: "141px" }}>
                <Box sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", borderRadius: "10px", border: "1px solid #D9D9D9", }}>
                  <Box sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", display: "flex" }}>
                    <Box sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", marginTop: "10px", marginLeft: "10px", gap: "1px", display: "flex", justifyContent: "right" }}>
                      <Box sx={{ fontFamily: "poppins", bgcolor: "", display: "flex", }}>
                        <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", width: "150px", fontWeight: 500, fontSize: "17px", lineHeight: "36px" }}>
                          All Houses
                        </Typography>
                        <Box sx={{ fontFamily: "poppins", width: "50px", height: "40px", bgcolor: "#6C2AD2", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "10px", marginLeft: "5%" }}>
                          <Typography sx={{ fontFamily: "poppins", bgcolor: "transparent", marginLeft: "10%" }}>
                            9K+
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box sx={{
                      bgcolor: "#FFFFFF",
                      fontFamily: "poppins", height: "55px", display: "flex", marginRight: "10px", gap: "10%",
                      marginLeft: "10%", marginTop: "10px", justifyContent: "right",

                      '@media (max-width: 600px)': {
                        marginLeft: "10%",

                      },
                      '@media (min-width: 768px) and (max-width: 1024px)': {
                        marginLeft: "10%",
                      },

                    }}>
                      <img src={logo3} alt="logo3" style={{ height: "30px", width: "30px" }} />
                      <img src={logo4} alt="logo4" style={{ height: "30px", width: "30px" }} />
                    </Box>

                  </Box>
                  <Box sx={{ fontFamily: "poppins", height: "30px", marginLeft: "43%", marginTop: "5%", bgcolor: "#FFFFFF", display: "flex", justifyContent: "right" }}>
                    <img src={logo5} alt="logo5" style={{}} />
                  </Box>


                </Box>
              </Grid>

              <Grid item lg={2} xs={8} md={5} sx={{ fontFamily: "poppins", bgcolor: "#FFFFFF", }}>
                <Box sx={{
                  boxShadow: "0px 1px 15px 0px #00000026", fontFamily: "poppins",
                  bgcolor: "#FFFFFF", display: "flex",
                  alignItems: "center", justifyContent: "center",
                  borderRadius: "10px",
                  marginBottom: "5%", marginTop: "0%",


                  '@media (min-width: 600px) and (max-width: 768px)': {
                    // Media query for medium-sized screens
                    marginTop: "0%",
                  },
                  '@media (min-width: 768px) and (max-width: 900px)': {
                    // Media query for medium-sized screens
                    marginTop: "0%",
                  },
                  '@media (min-width: 1440px) and (max-width: 2560px)': {
                    // Media query for medium-sized screens
                    marginTop: "20%",
                  },
                }}>
                  <Button  sx={{
                   
                    textAlign: "center", bgcolor: "#FFFFFF", fontFamily: "poppins",
                    borderRadius: "5px", padding: "10px", gap: "10px", boxShadow: "0px 1px 4px 0px #00000026",
                    '@media (min-width: 600px) and (max-width: 768px)': {
                      // Media query for medium-sized screens

                    },
                    '@media (min-width: 768px) and (max-width: 900px)': {
                      // Media query for medium-sized screens

                    },
                    '@media (min-width: 1440px) and (max-width: 2560px)': {
                      // Media query for medium-sized screens

                    },
                  }}>
                    <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", fontWeight: 400, fontSize: "16px", lineHeight: "24px", color: "#666666" }}>
                      View Saved
                    </Typography>
                  </Button>
                </Box>
              </Grid>

            </Grid>
          </Box>
        </Grid >
      </Grid >
    </ Box >
  );
}

export default NavBar;
