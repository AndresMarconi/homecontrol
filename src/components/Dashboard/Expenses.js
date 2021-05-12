import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
//import {Expense} from '../../model/Expense'

import { connect } from "react-redux";

function preventDefault(event) {
  event.preventDefault();
} 

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const Expenses = ({expenses}) => {
  const classes = useStyles()
  
  return (
    <React.Fragment>
      <Title>Ultimos gastos</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Categoria</TableCell>
            <TableCell>Destino</TableCell>
            <TableCell align="right">Monto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.category.name}</TableCell>
              <TableCell>{row.destination.name}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  expenses: state.expenses
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps) (Expenses)