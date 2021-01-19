import React from 'react';
import Image from 'next/image';
import { Grid, Typography } from '@material-ui/core';
import FoodsTable from "../Table/Table";

const Body = ({ foods }) => (
  <Grid
    container
    spacing={0}
    justify="space-around"
    alignItems="flex-start"
    style={{ backgroundColor: "#e5e9f2" }}
  >
    <Grid item lg={10}>
      <Typography
        component="h3"
        variant="h3"
        align="center"
        style={{
          color: "#49535e",
          fontWeight: 500,
          padding: "80px 10px 20px 10px",
        }}
      >
        {`Bem-vindo ao `}
        <span style={{ fontStyle: "italic", color: "#5b6977" }}>
          Sapo Alimentício
        </span>
        {`, aqui você irá encontrar informações nutricional dos principais alimentos do mercado.`}
      </Typography>
    </Grid>
    <Grid item lg={12} align="center" style={{ marginBottom: 40 }}>
      <Image src="/images/scroll.png" width={80} height={70} />
    </Grid>
    <Grid item lg={10}>
      <FoodsTable foods={foods} />
    </Grid>
  </Grid>
);

export default Body;