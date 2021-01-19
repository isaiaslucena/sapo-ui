import React, { useState } from 'react';
import Image from 'next/image';
import { Grid, Typography, AppBar, Tabs } from "@material-ui/core";

const menuItems = [
  { title: "Proteínas", value: "protein" },
  { title: "Carboidratos", value: "carbohydrate" },
  { title: "Gorduras", value: "fat" },
];

const menuItemStyle = { color: "white", cursor: "pointer" };
const activeMenuItemStyle = {
  color: "black",
  borderBottom: "solid 2px black",
  cursor: "pointer",
};

const Header = ({ setCurrentFoods }) => {
  const [activeMenuItem, setActiveMenuItem] = useState('');


  const handleClick = async (event) => {
    const dataValue = event.currentTarget.getAttribute("data-value");

    setActiveMenuItem(dataValue);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SAPO_API_HOST}/${
        dataValue ? `${dataValue}_foods` : `foods`
      }`
    );

    const foods = await res.json();
    setCurrentFoods(foods);
  };

  return (
    <Grid
      container
      justify="space-around"
      alignItems="center"
      style={{ backgroundColor: "#8190a5", borderRadius: 5 }}
    >
      <Grid item container spacing={3} alignItems="center" lg={5}>
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
            <Typography
              onClick={handleClick}
              component="h5"
              variant="h5"
              style={{ color: "white", cursor: "pointer" }}
            >
              Home
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Grid item container spacing={3} lg={5} justify="flex-end">
        {menuItems.map((menuItem, index) => (
          <Grid item key={`menuItem${index}`}>
            <Typography
              onClick={handleClick}
              data-value={menuItem.value}
              component="h6"
              variant="h6"
              style={
                activeMenuItem == menuItem.value
                  ? activeMenuItemStyle
                  : menuItemStyle
              }
            >
              {menuItem.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Header;