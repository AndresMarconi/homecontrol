import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import {
  addDestination,
  updateDestination,
} from '../../store/actions/destinationActions';

const DestinationForm = ({
  destination,
  editDestination,
  createDestination,
}) => {
  const [open, setOpen] = useState(false);
  const [destinationName, setDestinationName] = useState('');
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (destination) {
      setDestinationName(destination.name);
      setEdit(true);
    }
  }, [destination]);

  const handleNamechange = (event) => {
    setDestinationName(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    destination ? setDestinationName(destinationName) : setDestinationName('');
    setOpen(false);
  };

  const handleAccept = () => {
    if (edit) {
      const dest = { ...destination, name: destinationName };
      editDestination(dest);
    } else {
      createDestination({ name: destinationName });
    }
    handleClose();
  };

  return (
    <div>
      <Button
        style={{ marginLeft: 5 }}
        variant='contained'
        color='primary'
        onClick={handleClickOpen}
      >
        {edit ? 'Editar' : 'Agregar'}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>
          {edit ? 'Editar' : 'Agregar'} Destino
        </DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Nombre'
            type='text'
            fullWidth
            value={destinationName}
            onChange={handleNamechange}
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
  destination: ownProps.destination,
});

const mapDispatchToProps = (dispatch) => ({
  addNewDestination(destination) {
    dispatch({
      type: 'ADD_DESTINATION',
      destination,
    });
  },
  editDestination: (destination) => dispatch(updateDestination(destination)),
  createDestination: (destination) => dispatch(addDestination(destination)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DestinationForm);
