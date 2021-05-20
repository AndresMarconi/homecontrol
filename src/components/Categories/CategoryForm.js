import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { addCategory, updateCategory } from '../../store/actions/categoryActions'

const CategoryForm = ({ category, editCategory, createCategory }) => {
  const [open, setOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (category) {
      setCategoryName(category.name)
      setEdit(true)
    }
  }, [category])

  const handleNamechange = (event) => {
    setCategoryName(event.target.value)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    category ? setCategoryName(categoryName) : setCategoryName("")
    setOpen(false);
  };

  const handleAccept = () => {
    if (edit) {
      const cat = { ...category, name: categoryName }
      editCategory(cat)
    } else {
      //addCategory({ name: categoryName })
      createCategory({ name: categoryName })
    }
    handleClose()
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {edit ? "Editar" : "Agregar"}
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{edit ? "Editar" : "Agregar"} Categoria</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre"
            type="text"
            fullWidth
            value={categoryName}
            onChange={handleNamechange}
          />
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
  category: ownProps.category
})

const mapDispatchToProps = dispatch => ({
  addNewCategory(category) {
    dispatch({
      type: "ADD_CATEGORY",
      category
    })
  },
  editCategory: category => dispatch(updateCategory(category)),
  createCategory: category => dispatch(addCategory(category))
}
)

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm)