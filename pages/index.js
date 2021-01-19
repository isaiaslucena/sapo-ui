import Head from 'next/head'
import React, { useState } from 'react';
import {CssBaseline, Container, Grid} from '@material-ui/core';
import Header from '../components/Header/Header';
import Body from '../components/Body/Body';

const Home = ({ foods }) => {
  const [currentFoods, setCurrentFoods] = useState(foods);

  return (
    <>
      <Head>
        <title>sapo-ui</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid
          container
          justify="center"
          alignItems="center"
        >
          <Grid item lg={12}>
            <Header setCurrentFoods={setCurrentFoods} />
          </Grid>
          <Grid item lg={12}>
            <Body foods={currentFoods} />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SAPO_API_HOST}/foods`);
  const foods = await res.json();

  return { props: { foods } }
}

export default Home;