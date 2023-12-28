import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

const ProductForm = () => {
  const [formVal, setFormVal] = useState({
    id: 0,
    name: '',
    age: '',
    contact: '',
  });
  const [open, setOpen] = useState(false);

  const handleForm = (event) => {
    const { id, value } = event.target;
    // setFormVal((prevFormVal) => ({
    //   ...prevFormVal,
    //   [name]: value,
    // }));

    setFormVal({
      ...formVal,
      [id]: value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formVal);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Box style={{
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '5px',
    }}>
      <form className=".MuiContainer-fixed" onSubmit={handleSubmit}>
        <div className="form-row mb-4">
          <div className="form-group col-md-6">
            <label htmlFor="id">ID</label>
            <input
              onChange={handleForm}
              type="text"
              className="form-control"
              id="id"
            />
          </div>
        </div>
        <div className="form-row mb-4">
          <div className="form-group col-md-6">
            <label htmlFor="name">Name</label>
            <input
              onChange={handleForm}
              type="text"
              className="form-control"
              id="name"
            />
          </div>
        </div>
        <div className="form-row mb-4">
          <div className="form-group col-md-6">
            <label htmlFor="age">Age</label>
            <input
              onChange={handleForm}
              type="text"
              className="form-control"
              id="age"
            />
          </div>
        </div>
        <div className="form-row mb-4">
          <div className="form-group col-md-6">
            <label htmlFor="contact">Contact</label>
            <input
              onChange={handleForm}
              type="text"
              className="form-control"
              id="contact"
            />
          </div>
        </div>
        <Button type="submit" variant="contained">Submit</Button>
      </form>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Users Details youe have entered above"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography variant="subtitle1" component="div">
              ID: {formVal.id} <hr />
              Name: {formVal.name} <hr />
              Age: {formVal.age} <hr />
              Contact: {formVal.contact} <hr />
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProductForm;
