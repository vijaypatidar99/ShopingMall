import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
const navigate = useNavigate();
const handleCLick = () => {
  navigate('/login');
}

  return (
    <div>
      <h1> Welcome home</h1>
      <button onClick={handleCLick} >Login</button>
    </div>
  )
}

export default Home
