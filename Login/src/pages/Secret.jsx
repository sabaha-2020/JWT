import React from 'react';
import { useNavigate } from 'react-router-dom';

function Secret() {
  const navigate = useNavigate();
  const logOut = ()=>{
  navigate("/register");
  }
  return (
    <div className='private'>
      <h1>Super Secret Page</h1>
      <button onClick={logOut}>LogOut</button>
    </div>

  )
}

export default Secret