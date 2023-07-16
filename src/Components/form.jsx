import { Alert } from 'bootstrap';
import React, { Component } from 'react';

function Form(){
    const[username,setUsername]=React.useState('');
    const isLowerCase= username===username.toLocaleLowerCase();
    const error= isLowerCase?null:'type in lowercase';
function handleSubmit(event){
   event.preventDefault();
  // console.dir(event.target)
   //const username=event.target.username.value;
    alert(`you entered ${username}`);
}

function handleCasing(event){
    setUsername(event.target.value.toLocaleLowerCase());
}

    return ( 
        <form className='m-4' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username"><strong>Username:</strong></label>
                <input onChange={handleCasing} id='username' type="text" value={username} />
                
            </div>
            <div style={{color:'red'}}>{error}</div> 
            <button disabled={Boolean(error)} >Cancel</button>
        </form>
     );
}

export default Form;