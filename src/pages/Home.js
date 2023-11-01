import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';
import Section6 from '../components/Section6';
import Section7 from '../components/Section7';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Box sx={{
        display: 'flex',
        margin: "0%",
        padding: "0%",

        '@media (max-width: 600px)': {

          width: '100%',
          margin: "0%",
          padding: "0%",

        },
        '@media (min-width: 768px) and (max-width: 1024px)': {

          width: '100%',
        },

      }}>
        <Grid container spacing={1}>
          <Grid item lg={12} xs={12} md={12}>

            <Box sx={{
              '@media (max-width: 600px)': {

                width: '100%',

              },
              '@media (min-width: 768px) and (max-width: 1024px)': {

                width: '100%',
              },
            }}>
              <Section1 />
            </Box>

            <Box sx={{
              '@media (max-width: 600px)': {

                width: '100%',

              },
              '@media (min-width: 768px) and (max-width: 1024px)': {

                width: '100%',
              },
            }}>
              <Section2 />
            </Box>

            <Box sx={{
              '@media (max-width: 600px)': {

                width: '100%',

              },
              '@media (min-width: 768px) and (max-width: 1024px)': {

                width: '100%',
              },
            }}>
              <Section3 />
            </Box>

            <Box sx={{
              '@media (max-width: 600px)': {

                width: '100%',

              },
              '@media (min-width: 768px) and (max-width: 1024px)': {

                width: '100%',
              },
            }}>
              <Section4 />
            </Box>

            <Box sx={{
              '@media (max-width: 600px)': {

                width: '100%',

              },
              '@media (min-width: 768px) and (max-width: 1024px)': {

                width: '100%',
              },
            }}>
              <Section5 />
            </Box>

            <Box sx={{
              '@media (max-width: 600px)': {

                width: '100%',

              },
              '@media (min-width: 768px) and (max-width: 1024px)': {

                width: '100%',
              },
            }}>
              <Section6 />
            </Box>

            <Box sx={{
              '@media (max-width: 600px)': {

                width: '100%',

              },
              '@media (min-width: 768px) and (max-width: 1024px)': {

                width: '100%',
              },
            }}>
              <Section7 />
            </Box>

            <Box sx={{
              '@media (max-width: 600px)': {

                width: '100%',

              },
              '@media (min-width: 768px) and (max-width: 1024px)': {

                width: '100%',
              },
            }}>
              <Footer />
            </Box>

           
          </Grid >

        </Grid >
      </Box >

    </>
  );
}

export default function App() {
  return (
    <div>
      <Home />
    </div>
  );
}
