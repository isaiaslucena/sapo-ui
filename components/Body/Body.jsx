import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FoodsTable from "../Table/Table";

const Body = () => (
  <Grid
    container
    justify="space-around"
    alignItems="flex-start"
    style={{ backgroundColor: "#e5e9f2" }}
  >
    <Grid item lg={8}>
      <Box p={5}>
        <Typography component="h3" variant="h3" align="center">
          Bem-vindo ao Sapo Alimentício, aqui você irá encontrar informações
          nutricional dos principais alimentos do mercado
        </Typography>
      </Box>
    </Grid>
    <Grid item lg={12}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ExpandMoreIcon style={{ fontSize: 40 }} />
        <Typography component="span" variant="span">
          Scroll
        </Typography>
      </div>
    </Grid>
    <Grid item lg={10}>
      <FoodsTable />
    </Grid>
  </Grid>
);

export default Body;