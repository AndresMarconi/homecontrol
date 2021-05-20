import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { addExpense, updateExpense } from '../../store/actions/expenseActions'

const ExpenseForm = ({ expense, editExpense, createExpense }) => {
  const [open, setOpen] = useState(false);
  const [expensePlace, setExpensePlace] = useState({date: "", amount: 0, category: { docId: "", name: "" }, destination: { docId: "", name: "" }, description: ""});
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (expense) {
      setExpensePlace(expense)
      setEdit(true)
    }
  }, [expense])

  const handleNamechange = (event) => {
    switch (event.target.id) {
      case 'amount':
        setExpensePlace({...expensePlace, amount: event.target.value})
        break;
      case 'description':
        setExpensePlace({...expensePlace, description: event.target.value})
        break;
      case 'category':
        setExpensePlace({...expensePlace, category: event.target.value})
        break;
      case 'destination':
        setExpensePlace({...expensePlace, destination: event.target.value})
        break;
      case 'date':
        setExpensePlace({...expensePlace, date: event.target.value})
        break;
      default:
        break;
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    expense ? setExpensePlace(expensePlace) : setExpensePlace({date: "", amount: 0, category: { docId: "", name: "" }, destination: { docId: "", name: "" }, description: ""})
    setOpen(false);
  };

  const handleAccept = () => {
    console.log(edit, expense, expensePlace)
    if (edit) {
      //const exp = { ...expense, amount: ExpensePlace.amount }
      editExpense(expensePlace)
    } else {
      createExpense(expensePlace)
    }
    handleClose()
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {edit ? "Editar" : "Agregar"}
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{edit ? "Editar" : "Agregar"} Gasto</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField autoFocus margin="dense" id="date" label="Fecha" type="text" fullWidth
            value={expensePlace.date}
            onChange={handleNamechange}/>
          <TextField autoFocus margin="dense" id="category" label="Categoria" type="text" fullWidth
            value={expensePlace.category.name}
            onChange={handleNamechange}/>
          <TextField autoFocus margin="dense" id="destination" label="Destinatario" type="text" fullWidth
            value={expensePlace.destination.name}
            onChange={handleNamechange}/>
          <TextField autoFocus margin="dense" id="amount" label="Monto" type="text" fullWidth
            value={expensePlace.amount}
            onChange={handleNamechange}/>
          <TextField autoFocus margin="dense" id="description" label="Descripcion" type="text" fullWidth
            value={expensePlace.description}
            onChange={handleNamechange}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleAccept} color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  expense: ownProps.expense
})

const mapDispatchToProps = dispatch => ({
  editExpense: expense => dispatch(updateExpense(expense)),
  createExpense: expense => dispatch(addExpense(expense))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm)