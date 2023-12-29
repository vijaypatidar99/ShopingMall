import React from 'react'
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';

function UserDetails(props) {
 const location = useLocation();
 const formData = location.state && location.state.formData

  console.log(UserDetails.id)


  return (
    <div className='container'>
      <div className='text-center border card '>
      <h1 className='border-bottom'>TODO APP</h1>
      <Typography variant="subtitle1" component="div">
        Name: {formData.name} <hr />
        Subject: {formData.subject} <hr />
        Description: {formData.description} <hr />
      </Typography>
      </div>
      
    </div>
  )
}

export default UserDetails
