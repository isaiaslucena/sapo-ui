import React from 'react';
import Image from 'next/image';
import { Grid, Typography, AppBar, Tabs } from "@material-ui/core";

const menuItems = ["Proteínas", "Carboidratos", "Gorduras"];

const Header = () => (
  <Grid
    container
    justify="space-around"
    alignItems="center"
    style={{ backgroundColor: "#8190a5", borderRadius: 5 }}
  >
    <Grid item container spacing={3} alignItems="center" lg={6}>
      <Grid item>
        <Image src="/images/frog-logo.png" width={98} height={98} />
      </Grid>
      <Grid item>
        <div
          style={{
            paddingLeft: 30,
            borderLeft: "4px solid white",
            height: 70,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography component="h5" variant="h5" style={{ color: "white" }}>
            Home
          </Typography>
        </div>
      </Grid>
    </Grid>
    <Grid item container spacing={3} lg={6}>
      {menuItems.map((menuItem, index) => (
        <Grid item key={`menuItem${index}`}>
          <Typography component="h6" variant="h6" style={{ color: "white" }}>
            {menuItem}
          </Typography>
        </Grid>
      ))}
    </Grid>
  </Grid>
);

export default Header;