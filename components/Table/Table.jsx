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
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow style={{ backgroundColor: "#eff2f7" }}>
            <TableCell>Nome</TableCell>
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
              style={ index % 2 ? { backgroundColor: "#eff2f7" } : null}
            >
              <TableCell component="th" scope="row">
                {food.name}
              </TableCell>
              <TableCell align="center">{food.quantity}</TableCell>
              <TableCell align="center">{food.protein}</TableCell>
              <TableCell align="center">{food.carbohydrate}</TableCell>
              <TableCell align="center">{food.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default FoodsTable;