import Head from 'next/head'
import React from 'react';
import {CssBaseline, Container, Grid} from '@material-ui/core';
import Header from '../components/Header/Header';
import Body from '../components/Body/Body';

const Home = () => {
  return (
    <>
      <Head>
        <title>sapo-ui</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
        <Grid
          container
          justify="center"
          alignItems="center"
        >
          <Grid item lg={12}>
            <Header />
          </Grid>
          <Grid item lg={12}>
            <Body />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home;