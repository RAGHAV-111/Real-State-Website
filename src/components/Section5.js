import React from 'react'
import { Box, Typography, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import logo24 from '../logo/logo24.svg';
import logo50 from '../logo/logo50.webp';
import logo51 from '../logo/logo51.webp';
import Button from '@mui/material/Button';

function Section5() {
  const semicircleStyles = {

  };
  return (

    <Box
      sx={{

        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "80%",
        }}
      >

        <Grid container spacing={1} sx={{ fontFamily: "poppins", }}>

          <Grid item lg={12} xs={12} md={12} sx={{}}>
            <Box sx={{}}>
              <Box sx={{}}>
                <Typography sx={{

                  fontFamily: "poppins", fontWeight: 600, fontSize: "30px",
                  lineHeight: "42px", alignItems: "center", justifyContent: "center", display: "flex",

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
                  Meet Our Agents
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
                <Typography sx={{ fontFamily: "poppins", fontWeight: 500, fontSize: "18px", lineHeight: "25px", alignItems: "center", justifyContent: "center", display: "flex", color: "rgba(122, 122, 122, 1)" }}>
                  Our local experts will guide you on your journey.
                </Typography>
              </Box>
            </Box>

          </Grid>


        </Grid>


        <Grid container spacing={2} sx={{

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

          <Grid item lg={4} xs={12} md={6} sx={{}}>

            <Box sx={{ width: "95%", }}>

              < Box sx={{
                background: 'linear-gradient(to top, #FFFFFF 0%, #FFFFFF 50%, transparent 50%, transparent  100%)',
                width: "95%",
                height: "100%",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>

                <img src={logo50} alt="logo50" style={{ height: "100px", width: "30%", borderRadius: "50%" }} />


              </Box>

              <Box sx={{
                bgcolor: "#FFFFFF",
                width: "95%",
                padding: "0px 10px 10px 10px",

              }}>

                <Box sx={{ bgcolor: "#FFFFFF", }}>

                  <Typography sx={{ marginTop: "10%", bgcolor: "#FFFFFF", font: "poppins", fontWeight: 500, fontSize: "15px", lineHeight: "25px", color: "rgba(151, 151, 151, 1)" }}>
                    Frances Anderton-Denby
                  </Typography>

                </Box>

                <Box sx={{ marginTop: "20px" }}>
                  <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", fontWeight: 600, fontSize: "15px", lineHeight: "25px" }}>
                    REAL ESTATE PROFESSIONAL
                  </Typography>

                </Box>

                <Box sx={{ marginTop: "20px" }}>
                  <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", fontWeight: 400, fontSize: "15px", lineHeight: "25px", color: "rgba(99, 99, 99, 1)" }}>
                    Local Expertise. Global Connections.
                    Frances Anderton-Denby is one of the leading real estate agents in North-Central Massachusetts having negotiated successful residential sales and purchase agreements for over 20 years.
                  </Typography>
                </Box>

                <Button sx={{ marginTop: "20px" }}>
                  <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", fontWeight: 500, fontSize: "15px", lineHeight: "25px", color: "rgba(106, 21, 204, 1)" }}>
                    View Profile

                  </Typography>

                </Button>

              </Box>
            </Box>

          </Grid>

          <Grid item lg={4} xs={12} md={6} sx={{}}>

            <Box sx={{ width: "95%", }}>

              <Box sx={{
                background: 'linear-gradient(to top, #FFFFFF 0%, #FFFFFF 50%, transparent 50%, transparent  100%)',
                display: 'flex', width: "95%",
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <img src={logo51} alt="logo51" style={{ height: "100px", width: "30%", borderRadius: "50%" }} />
              </Box>

              <Box sx={{
                bgcolor: "#FFFFFF",
                width: "95%",
                padding: "0px 10px 10px 10px",

              }}>

                <Box sx={{ bgcolor: "#FFFFFF", }}>

                  <Typography sx={{ marginTop: "10%", bgcolor: "#FFFFFF", font: "poppins", fontWeight: 500, fontSize: "15px", lineHeight: "25px", color: "rgba(151, 151, 151, 1)" }}>
                    Rosy Babbar
                  </Typography>

                </Box>

                <Box sx={{ marginTop: "20px" }}>
                  <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", fontWeight: 600, fontSize: "15px", lineHeight: "25px" }}>
                    REAL ESTATE PROFESSIONAL
                  </Typography>

                </Box>

                <Box sx={{ marginTop: "20px" }}>
                  <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", fontWeight: 400, fontSize: "15px", lineHeight: "25px", color: "rgba(99, 99, 99, 1)" }}>
                    Hello, my name is Rosy Babbar, and I am excited to introduce myself as a new real estate agent. Prior to joining the real estate industry, I worked as a business analyst, where I developed a keen eye for identifying opportunities for improvement .
                  </Typography>
                </Box>

                <Button sx={{ marginTop: "20px" }}>
                  <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", fontWeight: 500, fontSize: "15px", lineHeight: "25px", color: "rgba(106, 21, 204, 1)" }}>
                    View Profile

                  </Typography>

                </Button>

              </Box>
            </Box>

          </Grid>

          <Grid item lg={4} xs={12} md={6} sx={{}}>

            <Box sx={{ width: "95%", }}>

              <Box sx={{
                background: 'linear-gradient(to top, #FFFFFF 0%, #FFFFFF 50%, transparent 50%, transparent  100%)',
                display: 'flex', width: "95%",
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <img src={logo24} alt="logo24" style={{ height: "100px" }} />
              </Box>

              <Box sx={{
                bgcolor: "#FFFFFF",
                width: "95%",
                padding: "0px 10px 10px 10px",

              }}>

                <Box sx={{ bgcolor: "#FFFFFF", }}>

                  <Typography sx={{ marginTop: "10%", bgcolor: "#FFFFFF", font: "poppins", fontWeight: 500, fontSize: "15px", lineHeight: "25px", color: "rgba(151, 151, 151, 1)" }}>
                    Vincent Fuller
                  </Typography>

                </Box>

                <Box sx={{ marginTop: "20px" }}>
                  <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", fontWeight: 600, fontSize: "15px", lineHeight: "25px" }}>
                    REAL ESTATE PROFESSIONAL

                  </Typography>

                </Box>

                <Box sx={{ marginTop: "20px" }}>
                  <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", fontWeight: 400, fontSize: "15px", lineHeight: "25px", color: "rgba(99, 99, 99, 1)" }}>
                    Jack joins Barrett Sotheby’s with over 16 years of real estate. As a former senior mortgage underwriter for both large and small lending institutions, he has an intimate knowledge of the financing process that will benefit the first time home-buyer.
                  </Typography>
                </Box>

                <Button sx={{ marginTop: "20px" }}>
                  <Typography sx={{ bgcolor: "#FFFFFF", fontFamily: "poppins", fontWeight: 500, fontSize: "15px", lineHeight: "25px", color: "rgba(106, 21, 204, 1)" }}>
                    View Profile

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

export default Section5