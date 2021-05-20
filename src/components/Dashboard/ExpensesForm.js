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
  const [expenseName, setExpenseName] = useState("");
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (expense) {
      setExpenseName(expense.name)
      setEdit(true)
    }
  }, [expense])

  const handleNamechange = (event) => {
    setExpenseName(event.target.value)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    expense ? setExpenseName(expenseName) : setExpenseName("")
    setOpen(false);
  };

  const handleAccept = () => {
    if (edit) {
      const cat = { ...expense, name: expenseName }
      editExpense(cat)
    } else {
      createExpense({ name: expenseName })
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
          <TextField autoFocus margin="dense" id="name" label="Nombre" type="text" fullWidth
            value={expenseName}
            onChange={handleNamechange}/>
          <TextField autoFocus margin="dense" id="name" label="Nombre" type="text" fullWidth
            value={expenseName}
            onChange={handleNamechange}/>
          <TextField autoFocus margin="dense" id="name" label="Nombre" type="text" fullWidth
            value={expenseName}
            onChange={handleNamechange}/>
          <TextField autoFocus margin="dense" id="name" label="Nombre" type="text" fullWidth
            value={expenseName}
            onChange={handleNamechange}/>
          <TextField autoFocus margin="dense" id="name" label="Nombre" type="text" fullWidth
            value={expenseName}
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
  addNewExpense(expense) {
    dispatch({
      type: "ADD_CATEGORY",
      expense
    })
  },
  editExpense: expense => dispatch(updateExpense(expense)),
  createExpense: expense => dispatch(addExpense(expense))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm)