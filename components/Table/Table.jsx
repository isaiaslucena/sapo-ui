import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const FoodsTable = ({ foods }) => {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      variant="outlined"
      style={{ marginBottom: 60 }}
    >
      <Table aria-label="food table">
        <TableHead>
          <TableRow style={{ backgroundColor: "#eff2f7" }}>
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">Quantidade</TableCell>
            <TableCell align="center">Proteínas</TableCell>
            <TableCell align="center">Carboidratos</TableCell>
            <TableCell align="center">Gorduras</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {foods.map((food, index) => (
            <TableRow
              key={`foodRow${index}`}
              style={index % 2 ? { backgroundColor: "#eff2f7" } : null}
            >
              <TableCell component="th" scope="row" align="center">
                {food.name}
              </TableCell>
              <TableCell align="center">{food.quantity}g</TableCell>
              <TableCell align="center">{food.protein}g</TableCell>
              <TableCell align="center">{food.carbohydrate}g</TableCell>
              <TableCell align="center">{food.fat}g</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default FoodsTable;