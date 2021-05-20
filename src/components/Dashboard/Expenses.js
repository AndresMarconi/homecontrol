import React from 'react';
import { compose } from "redux"

import moment from 'moment'
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { firestoreConnect } from 'react-redux-firebase'
import { removeExpense, addExpense, updateExpense } from '../../store/actions/expenseActions'


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

const Expenses = ({ expenses }) => {
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
          {expenses && expenses.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{moment(row.date.toDate()).calendar()}</TableCell>
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

const mapStateToProps = state => {
  const pageTitle = state.pageConfig.title;
  const expenses = state.firestore.ordered.expense;
  return { expenses: expenses, title: pageTitle };
}

const mapDispatchToProps = dispatch => {
  return {
    deleteExpense: expense => dispatch(removeExpense(expense)),
    setTitle: (title) => dispatch({
      type: "SET_TITLE",
      title
    })
  };
}

export default compose(connect(mapStateToProps, mapDispatchToProps), firestoreConnect(ownProps => [{ collection: "expense" }]))(Expenses);
