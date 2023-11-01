import React from 'react'
import { Box, Typography, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import logo19 from '../logo/logo19.svg';
import logo20 from '../logo/logo20.svg';
import logo21 from '../logo/logo21.svg';
import logo22 from '../logo/logo22.svg';
import logo23 from '../logo/logo23.svg';
import Button from '@mui/material/Button';

function Section4() {
  return (
    <Box
      sx={{
        bgcolor: "#FFFFFF",
        width: "100%",
        display: "flex",
        justifyContent: "center",


      }}
    >
      <Box
        sx={{
          width: "80%",

          bgcolor: "transparent",

        }}
      >

        <Grid container spacing={0} sx={{ fontFamily: "poppins", bgcolor: "#FFFFFF", }}>

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
                  fontFamily: "poppins", fontWeight: 600, fontSize: "30px", lineHeight: "42px", alignItems: "center", justifyContent: "center", display: "flex",

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
                  Explore Cities
                </Typography>
              </Box>

              <Box sx={{
                bgcolor: "#FFFFFF",
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
                  Viewing 3,437 Homes for Sale in United States 
                </Typography>
              </Box>
            </Box>

          </Grid>


        </Grid>


        <Grid container spacing={1} sx={{
          bgcolor: "#FFFFFF",
          fontFamily: "poppins",
          marginTop: "5%", marginBottom: "10%",
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

          <Grid item lg={4} xs={12} md={6} sx={{ bgcolor: "#FFFFFF", }}>


            <Box sx={{ height: "364px", bgcolor: "#FFFFFF", padding: "0px 10px 10px 10px", width: "304px", boxShadow: "0px 5px 10px  0px rgba(0, 0, 0, 0.1)", marginBottom: "10px" }}>
              <Box sx={{
                height: "50%",
                backgroundImage: `url(${logo21})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                bgcolor: "",

              }}>


                <Box
                  sx={{
                    bgcolor: "transparent",
                    display: "flex",

                    flexDirection: "column",
                    justifyContent: "flex-end",
                    width: "200%",
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

                </Box>

              </Box>
              <Box sx={{ bgcolor: "#FFFFFF", display: "flex" }}>

                <Box sx={{ bgcolor: "#FFFFFF", marginTop: "20px" }}>

                  <Box sx={{ bgcolor: "#FFFFFF", marginTop: "10px" }}>
                    <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", fontWeight: 600, fontSize: "15px", lineHeight: "25px", color: "rgba(0, 0, 0, 1)" }}>
                      Chicago
                    </Typography>
                  </Box>

                </Box>

                <Box sx={{ bgcolor: "#FFFFFF", marginTop: "20px", marginLeft: "90px" }}>

                  <Box sx={{ bgcolor: "#FFFFFF", marginTop: "10px" }}>
                    <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", fontWeight: 300, fontSize: "13px", lineHeight: "19px", color: "rgba(0, 0, 0, 1)" }}>
                      36 Properties
                    </Typography>
                  </Box>
                </Box>

              </Box>
              <img src={logo20} alt="logo20" style={{ width: "100%", marginTop: "20px" }} />

              <Box sx={{ height: "50px", justifyContent: "center", alignItems: "center", display: "flex", marginTop: "20px", bgcolor: "rgba(244, 239, 251, 1)", borderRadius: "5px" }}>

                <Button sx={{ textAlign: "center", bgcolor: "rgba(244, 239, 251, 1)", borderRadius: "5px" }}>
                  <Typography sx={{ bgcolor: "rgba(244, 239, 251, 1)", fontFamily: "poppins", fontWeight: 500, fontSize: "15px", lineHeight: "25px", color: "rgba(106, 21, 204, 1)" }}>
                    More Details
                  </Typography>
                </Button>
              </Box>

            </Box>

          </Grid>

          <Grid item lg={4} xs={12} md={6} sx={{ bgcolor: "#FFFFFF", }}>


            <Box sx={{ height: "364px", bgcolor: "#FFFFFF", padding: "0px 10px 10px 10px", width: "304px", boxShadow: "0px 5px 10px  0px rgba(0, 0, 0, 0.1)", marginBottom: "10px" }}>
              <Box sx={{
                height: "50%",
                backgroundImage: `url(${logo22})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                bgcolor: "",

              }}>


                <Box
                  sx={{
                    bgcolor: "transparent",
                    display: "flex",

                    flexDirection: "column",
                    justifyContent: "flex-end",
                    width: "200%",
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

                </Box>

              </Box>
              <Box sx={{ bgcolor: "#FFFFFF", display: "flex" }}>

                <Box sx={{ bgcolor: "#FFFFFF", marginTop: "20px" }}>

                  <Box sx={{ bgcolor: "#FFFFFF", marginTop: "10px" }}>
                    <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", fontWeight: 600, fontSize: "15px", lineHeight: "25px", color: "rgba(0, 0, 0, 1)" }}>
                      Los Angeles
                    </Typography>
                  </Box>

                </Box>

                <Box sx={{ bgcolor: "#FFFFFF", marginTop: "20px", marginLeft: "90px" }}>

                  <Box sx={{ bgcolor: "#FFFFFF", marginTop: "10px" }}>
                    <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", fontWeight: 300, fontSize: "13px", lineHeight: "19px", color: "rgba(0, 0, 0, 1)" }}>
                      13 Properties
                    </Typography>
                  </Box>
                </Box>

              </Box>
              <img src={logo20} alt="logo20" style={{ width: "100%", marginTop: "20px" }} />

              <Box sx={{ height: "50px", justifyContent: "center", alignItems: "center", display: "flex", marginTop: "20px", bgcolor: "rgba(244, 239, 251, 1)", borderRadius: "5px" }}>

                <Button sx={{ textAlign: "center", bgcolor: "rgba(244, 239, 251, 1)", borderRadius: "5px" }}>
                  <Typography sx={{ bgcolor: "rgba(244, 239, 251, 1)", fontFamily: "poppins", fontWeight: 500, fontSize: "15px", lineHeight: "25px", color: "rgba(106, 21, 204, 1)" }}>
                    More Details
                  </Typography>
                </Button>
              </Box>

            </Box>

          </Grid>

          <Grid item lg={4} xs={12} md={6} sx={{ bgcolor: "#FFFFFF", }}>


            <Box sx={{ height: "364px", bgcolor: "#FFFFFF", padding: "0px 10px 10px 10px", width: "304px", boxShadow: "0px 5px 10px  0px rgba(0, 0, 0, 0.1)", marginBottom: "10px" }}>
              <Box sx={{
                height: "50%",
                backgroundImage: `url(${logo23})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                bgcolor: "",

              }}>


                <Box
                  sx={{
                    bgcolor: "transparent",
                    display: "flex",

                    flexDirection: "column",
                    justifyContent: "flex-end",
                    width: "200%",
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

                </Box>

              </Box>
              <Box sx={{ bgcolor: "#FFFFFF", display: "flex" }}>

                <Box sx={{ bgcolor: "#FFFFFF", marginTop: "20px" }}>

                  <Box sx={{ bgcolor: "#FFFFFF", marginTop: "10px" }}>
                    <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", fontWeight: 600, fontSize: "15px", lineHeight: "25px", color: "rgba(0, 0, 0, 1)" }}>
                      New York
                    </Typography>
                  </Box>

                </Box>

                <Box sx={{ bgcolor: "#FFFFFF", marginTop: "20px", marginLeft: "90px" }}>

                  <Box sx={{ bgcolor: "#FFFFFF", marginTop: "10px" }}>
                    <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", fontWeight: 300, fontSize: "13px", lineHeight: "19px", color: "rgba(0, 0, 0, 1)" }}>
                      15 Properties
                    </Typography>
                  </Box>
                </Box>

              </Box>
              <img src={logo20} alt="logo20" style={{ width: "100%", marginTop: "20px" }} />

              <Box sx={{ height: "50px", justifyContent: "center", alignItems: "center", display: "flex", marginTop: "20px", bgcolor: "rgba(244, 239, 251, 1)", borderRadius: "5px" }}>

                <Button sx={{ textAlign: "center", bgcolor: "rgba(244, 239, 251, 1)", borderRadius: "5px" }}>
                  <Typography sx={{ bgcolor: "rgba(244, 239, 251, 1)", fontFamily: "poppins", fontWeight: 500, fontSize: "15px", lineHeight: "25px", color: "rgba(106, 21, 204, 1)" }}>
                    More Details
                  </Typography>
                </Button>
              </Box>

            </Box>

          </Grid>


        </Grid>


      </Box>


    </Box >
  )
}

export default Section4