import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';

import { addExpense, updateExpense } from '../../store/actions/expenseActions';

const ExpenseForm = ({ expense, editExpense, createExpense }) => {
  const [open, setOpen] = useState(false);
  const [expensePlace, setExpensePlace] = useState({
    date: '',
    amount: 0,
    category: { docId: '', name: '' },
    destination: { docId: '', name: '' },
    description: '',
  });
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (expense) {
      setExpensePlace(expense);
      setEdit(true);
    }
  }, [expense]);

  const handleNameChange = (event) => {
    console.log(event);
    switch (event.target.id) {
      case 'amount':
        setExpensePlace({ ...expensePlace, amount: event.target.value });
        break;
      case 'description':
        setExpensePlace({ ...expensePlace, description: event.target.value });
        break;
      case 'category':
        setExpensePlace({ ...expensePlace, category: event.target.value });
        console.log('Cat');
        break;
      case 'destination':
        setExpensePlace({ ...expensePlace, destination: event.target.value });
        console.log('Des');
        break;
      case 'date':
        setExpensePlace({ ...expensePlace, date: event.target.value });
        break;
      default:
        break;
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    expense
      ? setExpensePlace(expensePlace)
      : setExpensePlace({
          date: '',
          amount: 0,
          category: { docId: '', name: '' },
          destination: { docId: '', name: '' },
          description: '',
        });
    setOpen(false);
  };

  const handleAccept = () => {
    console.log(edit, expense, expensePlace);
    if (edit) {
      //const exp = { ...expense, amount: ExpensePlace.amount }
      editExpense(expensePlace);
    } else {
      createExpense(expensePlace);
    }
    handleClose();
  };

  return (
    <div>
      <Button variant='contained' color='primary' onClick={handleClickOpen}>
        {edit ? 'Editar' : 'Agregar'}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>
          {edit ? 'Editar' : 'Agregar'} Gasto
        </DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='date'
            label='Fecha'
            type='date'
            fullWidth
            value={expensePlace.date}
            onChange={handleNameChange}
          />
          <InputLabel shrink id='category-input-label'>
            Categoria
          </InputLabel>
          <Select
            autoFocus
            // margin='dense'
            onChange={handleNameChange}
            id='category'
            labelId='category-input-label'
            fullWidth
            displayEmpty
            value={expensePlace.category.name}
          >
            <MenuItem value='' disabled>
              <em>Seleccione una categoria</em>
            </MenuItem>
            <MenuItem value='10'>Ten</MenuItem>
            <MenuItem value='20'>Twenty</MenuItem>
            <MenuItem value='30'>Thirty</MenuItem>
          </Select>
          <InputLabel shrink id='destinatary-input-label'>
            Destinatario
          </InputLabel>
          <InputLabel id='demo-simple-select-label'>Age</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={expensePlace.destination.name}
            onChange={handleNameChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <TextField
            autoFocus
            margin='dense'
            id='amount'
            label='Monto'
            type='text'
            fullWidth
            value={expensePlace.amount}
            onChange={handleNameChange}
          />
          <TextField
            autoFocus
            margin='dense'
            id='description'
            label='Descripcion'
            type='text'
            fullWidth
            value={expensePlace.description}
            onChange={handleNameChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancelar
          </Button>
          <Button onClick={handleAccept} color='primary'>
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  expense: ownProps.expense,
});

const mapDispatchToProps = (dispatch) => ({
  editExpense: (expense) => dispatch(updateExpense(expense)),
  createExpense: (expense) => dispatch(addExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
