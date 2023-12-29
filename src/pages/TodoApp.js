import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const [formVal, setFormVal] = useState({
    name: '',
    subject: '',
    description: '',
  });


  const handleForm = (event) => {
    const { id, value } = event.target;
    setFormVal({
      ...formVal,
      [id]: value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formVal);
  };

  const navigate = useNavigate();
  const navigateToUserDetails = () => {
   navigate('/userdetails', {state: {formData: formVal}})
  };

  return (
    <Box style={{
      border: '1px solid black',
      padding: '20px',
      borderRadius: '5px',
      justifyContent: 'center',
    }}>
      <form className=".MuiContainer-fixed " onSubmit={handleSubmit}>
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
            <label htmlFor="subject">Subject</label>
            <input
              onChange={handleForm}
              type="text"
              className="form-control"
              id="subject"
            />
          </div>
        </div>
        <div className="form-row mb-4">
          <div className="form-group col-md-6">
            <label htmlFor="description" rows="3">Description</label>
            <input
              onChange={handleForm}
              type="text"
              className="form-control "
              id="description"
            />
          </div>
        </div>
        <Button onClick={navigateToUserDetails} type="submit" variant="contained">Submit</Button>
      </form>
  
      {/* <UserDetails userDetails={formVal} /> */}

    </Box>
  );
};

export default ProductForm;
