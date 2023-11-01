import React, { useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import logo6 from '../logo/logo6.svg';
import logo7 from '../logo/logo7.svg';
import logo8 from '../logo/logo8.svg';
import logo9 from '../logo/logo9.svg';
import logo10 from '../logo/logo10.svg';
import logo11 from '../logo/logo11.svg';
import logo18 from '../logo/logo18.svg';


import {
  Card,
  CardContent,
  Button,
} from '@mui/material';


const cardData = [
  {
    title: 'New apartment nice view',
    address: '8100 S Ashland Ave, Chicago, IL 60620, USA',
    bedrooms: 5,
    bathrooms: 2,
    garage: 1,
    area: '25,00 Sq Ft',
    price: '$11,000/mo',
    propertyType: 'Apartment',
    agent: 'Samuel Palmer',
    timeAgo: '3 years ago',
    picture:'../logo/logo6.svg'
  },
  {
    title: 'New apartment nice view',
    address: '8100 S Ashland Ave, Chicago, IL 60620, USA',
    bedrooms: 6,
    bathrooms: 3,
    garage: 1,
    area: '25,00 Sq Ft',
    price: '$12,000/mo',
    propertyType: 'Apartment',
    agent: 'Samuel Palmer',
    timeAgo: '3 years ago',
    picture:'../logo/logo6.svg'
  },
  {
    title: 'New apartment nice view',
    address: '8100 S Ashland Ave, Chicago, IL 60620, USA',
    bedrooms: 5,
    bathrooms: 2,
    garage: 1,
    area: '25,00 Sq Ft',
    price: '$13,000/mo',
    propertyType: 'Apartment',
    agent: 'Samuel Palmer',
    timeAgo: '3 years ago',
    picture:'../logo/logo18.svg'
  },
  {
    title: 'New apartment nice view',
    address: '8100 S Ashland Ave, Chicago, IL 60620, USA',
    bedrooms: 5,
    bathrooms: 2,
    garage: 1,
    area: '25,00 Sq Ft',
    price: '$14,000/mo',
    propertyType: 'Apartment',
    agent: 'Samuel Palmer',
    timeAgo: '3 years ago',
    picture:'../logo/logo18.svg'
  },
  {
    title: 'New apartment nice view',
    address: '8100 S Ashland Ave, Chicago, IL 60620, USA',
    bedrooms: 5,
    bathrooms: 2,
    garage: 1,
    area: '25,00 Sq Ft',
    price: '$15,000/mo',
    propertyType: 'Apartment',
    agent: 'Samuel Palmer',
    timeAgo: '3 years ago',
    picture:'../logo/logo18.svg'
  },

  // Add more cards here
];

function Section1() {
  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    setCurrentCard((currentCard + 1) % cardData.length);
  };

  const prevCard = () => {
    setCurrentCard((currentCard - 1 + cardData.length) % cardData.length);
  };


  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "",
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
          width: "80%",
        }}
      >

        <Grid container spacing={0} sx={{ fontFamily: "poppins", }}>
          <Grid item lg={12} xs={12} md={12} sx={{}}>
            <Box sx={{}}>
              <Typography sx={{
                fontFamily: "poppins", fontWeight: 600, fontSize: "30px", lineHeight: "42px",
                alignItems: "center", justifyContent: "center", display: "flex",

              }}>
                Discover Our Featured Listings
              </Typography>
            </Box>

            <Box sx={{

            }}>
              <Typography sx={{ height: "42px", fontFamily: "poppins", fontWeight: 500, fontSize: "18px", lineHeight: "25px", alignItems: "center", justifyContent: "center", display: "flex", color: "rgba(122, 122, 122, 1)" }}>
              Find a new source of inspiration in one of the world's most sought after destinations.
              </Typography>
            </Box>

            <Box sx={{
              width: "90%", display: "flex", textAlign: "right", justifyContent: "right",
              '@media (min-width: 320px) and (max-width: 600px)': {
                // Media query for medium-sized screens
                width: "50%", display: "flex", textAlign: "right", justifyContent: "right",
              },
              '@media (min-width: 600px) and (max-width: 768px)': {
                // Media query for medium-sized screens
                width: "50%", display: "flex", textAlign: "right", justifyContent: "right",
              },
              '@media (min-width: 768px) and (max-width: 900px)': {
                // Media query for medium-sized screens
                width: "50%", display: "flex", textAlign: "right", justifyContent: "right",
              }
            }}>
              <Box sx={{
                width: "15%", display: "flex", textAlign: "right", justifyContent: "right",
                '@media (min-width: 320px) and (max-width: 600px)': {
                  // Media query for medium-sized screens
                  width: "90%", display: "flex", textAlign: "right", jjustifyContent: "right",
                },
                '@media (min-width: 600px) and (max-width: 768px)': {
                  // Media query for medium-sized screens
                  width: "50%", display: "flex", textAlign: "right", justifyContent: "right",
                },
                '@media (min-width: 768px) and (max-width: 900px)': {
                  // Media query for medium-sized screens
                  width: "50%", display: "flex", textAlign: "right", justifyContent: "right",
                }
              }}>
                <Box display="flex" justifyContent="center" mt={2} sx={{ borderRadius: "5%" }}>
                  <Box style={{ flex: 1 }}>
                    <Button onClick={prevCard} style={{
                      display: "flex",
                      textAlign: "center",
                      justifyContent: "center",
                      color: "#FFFFFF",
                      backgroundColor: "rgba(255, 255, 255, 1)",
                      marginLeft: "5%",
                      fontFamily: "roboto",
                      fontWeight: 300,
                      fontSize: "12px",
                      alignContent: "center"
                    }}>
                      <Typography sx={{
                        color: "#6C2AD2", bgcolor: "rgba(255, 255, 255, 1)", fontFamily: "roboto",
                        fontWeight: 300, fontSize: "12px", alignContent: "center", marginTop: "5%", marginBottom: "5%", marginRight: "5%"
                      }}>
                        Prev
                      </Typography>
                    </Button>
                  </Box>
                  <Box style={{ flex: 1, marginLeft: "5%" }}>
                    <Button onClick={nextCard} style={{
                      display: "flex",
                      textAlign: "center",
                      justifyContent: "center",
                      color: "#FFFFFF",
                      backgroundColor: "#6C2AD2",
                      marginLeft: "5%",
                      fontFamily: "roboto",
                      fontWeight: 300,
                      fontSize: "12px",
                      alignContent: "center"
                    }}>
                      Next
                    </Button>
                  </Box>
                </Box>

              </Box>
            </Box>

          </Grid>


        </Grid>



        <Grid container spacing={1} sx={{ display: 'flex', textAlign: "center", justifyContent: "center", fontFamily: "poppins", marginTop: "10px", }}>

          <Grid item lg={4} xs={12} md={6} sx={{ bgcolor: "" }}>


            <Card sx={{ height: '512px', marginTop: '0px', bgcolor: '#FFFFFF', marginBottom: '10px' }}>
              <Box
                sx={{ height: '300px', backgroundImage: `url(${logo6})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", position: 'relative' }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    height: '150px',
                  }}
                >
                  <Grid item lg={6} xs={6} md={6}>
                    <Box
                      sx={{
                        display: 'flex',
                        bgcolor: '#77C720',
                        color: '#FFFFFF',
                        width: '73px',
                        height: '25px',
                        marginTop: '20px',
                        marginLeft: '20px',
                        borderRadius: '4px',
                      }}
                    >
                      <Typography
                        sx={{
                          bgcolor: "transparent",
                          fontFamily: 'roboto',
                          fontWeight: 500,
                          fontSize: '10px',
                          lineHeight: '11px',
                          marginTop: '5px',
                          
                        }}
                      >
                        Featured
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={6} xs={6} md={6} sx={{ display: 'flex', justifyContent: 'right', marginRight: '20px' }}>
                    <Box
                      sx={{
                        display: 'flex',
                        bgcolor: '#383837',
                        color: '#FFFFFF',
                        width: '73px',
                        height: '25px',
                        marginTop: '20px',
                        marginLeft: '20px',
                        borderRadius: '4px',
                      }}
                    >
                      <Typography
                        sx={{
                          bgcolor: "transparent",
                          fontFamily: 'roboto',
                          fontWeight: 500,
                          fontSize: '10px',
                          lineHeight: '11px',
                          marginTop: '5px',
                          
                        }}
                      >
                        For Rent
                      </Typography>
                    </Box>
                  </Grid>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    height: '150px',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Grid item lg={6} xs={6} md={6}>
                    <Box
                      sx={{
                        display: 'flex',
                        color: '#FFFFFF',
                        width: '73px',
                        marginTop: '20px',
                        marginLeft: '20px',
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: 'poppins',
                          fontWeight: 700,
                          fontSize: '12px',
                          lineHeight: '24px',
                          marginTop: '5px',
                        }}
                      >
                        {cardData[currentCard].price}
                      </Typography>
                    </Box>
                  </Grid>
                </Box>
              </Box>
              <Box sx={{}}>
                <Box sx={{ marginTop: '10px', display:"flex",textAlign:"left",marginLeft:"5%"}}>
                  <Typography
                    sx={{
                      bgcolor: '#FFFFFF',
                      fontFamily: 'poppins',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '19px',
                      color: '#222222',
                    }}
                  >
                    {cardData[currentCard].title}
                  </Typography>
                </Box>
                <Box sx={{ height: '25px', marginTop: '10px',display:"flex",textAlign:"left",marginLeft:"5%" }}>
                  <Typography
                    sx={{
                      bgcolor: '#FFFFFF',
                      fontFamily: 'poppins',
                      fontWeight: 400,
                      fontSize: '10px',
                      lineHeight: '25px',
                      color: '#636363',
                    }}
                  >
                    {cardData[currentCard].address}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', marginRight: "10%", }}>

                  <img src={logo7} alt="logo7" style={{ bgcolor: '#FFFFFF', marginLeft: '10px' , }} />
                  <Typography sx={{ bgcolor: '#FFFFFF', marginLeft: '10px', color: '#585858', marginTop: '3%' }}>
                    {cardData[currentCard].bedrooms}
                  </Typography>
                  <img src={logo8} alt="logo8" style={{ bgcolor: '#FFFFFF', marginLeft: '20px' }} />
                  <Typography sx={{ bgcolor: '#FFFFFF', marginLeft: '10px', color: '#585858', marginTop: '3%' }}>
                    {cardData[currentCard].bathrooms}
                  </Typography>
                  <img src={logo9} alt="logo9" style={{ bgcolor: '#FFFFFF', marginLeft: '20px' }} />
                  <Typography sx={{ bgcolor: '#FFFFFF', marginLeft: '10px', color: '#585858', marginTop: '3%' }}>
                    {cardData[currentCard].garage}
                  </Typography>
                  <img src={logo10} alt="logo10" style={{ bgcolor: '#FFFFFF', marginLeft: '20px' }} />
                  <Typography
                    sx={{
                      bgcolor: '#FFFFFF',
                      color: '#585858',
                      marginTop: '5px',
                      marginLeft: '10px',
                      fontFamily: 'poppins',
                      fontWeight: 500,
                      fontSize: '10px',
                      lineHeight: '21px', marginRight: "5%"
                    }}
                  >
                    {cardData[currentCard].area}
                  </Typography>
                </Box>
                <Box sx={{ marginTop: '10px' ,display:"flex",textAlign:"left",marginLeft:"5%"}}>
                  <Typography
                    sx={{
                      bgcolor: '#FFFFFF',
                      fontFamily: 'roboto',
                      fontSize: '12px',
                      fontWeight: 500,
                      lineHeight: '16px',
                      color: '#222222',
                    }}
                  >
                    {cardData[currentCard].propertyType}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', bgcolor: '#FFFFFF', borderTop: "1px solid rgba(220, 224, 224, 1)", marginTop: "2%" }}>
                <Grid item lg={6} xs={12} md={12} sx={{ bgcolor: '#FFFFFF', marginTop: "1%" }}>
                  <Box sx={{ display: 'flex', bgcolor: '#FFFFFF', }}>
                    <Box
                      sx={{
                        borderRadius: '0px 0px 4px 4px',
                        bgcolor: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <img src={logo11} alt="logo11" style={{ marginLeft: '10px', height: '24px' }} />
                      <Typography
                        sx={{
                          bgcolor: '#FFFFFF',
                          fontFamily: 'poppins',
                          fontWeight: 400,
                          fontSize: '10px',
                          lineHeight: '25px',
                          marginLeft: '10px',
                        }}
                      >
                        {cardData[currentCard].agent}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={6} xs={12} md={12} sx={{ marginTop: "1%" }}>
                  <Box
                    sx={{
                      height: '40px',
                      borderRadius: '0px 0px 4px 4px',
                      bgcolor: '#FFFFFF',
                      display: 'flex',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      sx={{
                        bgcolor: '#FFFFFF',
                        fontFamily: 'roboto',
                        fontWeight: 300,
                        fontSize: '12px',
                        lineHeight: '25px',
                        marginRight: '10px',
                      }}
                    >
                      {cardData[currentCard].timeAgo}
                    </Typography>
                  </Box>
                </Grid>
              </Box>

            </Card>


          </Grid>
        </Grid>


      </Box>
    </Box >
  )
}

export default Section1