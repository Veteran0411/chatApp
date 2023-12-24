import React from 'react';
import axios from 'axios';
const AuthPage=(props)=>{
    const onSubmit=(e)=>{
        e.preventDefault();
        const {value}=e.target[0];
        axios.post(
            'http://localhost:3001/authenticate',
            {username:value}
            )
            .then(r=>props.onAuth({...r.data,secret:value}))
            .catch(e=>console.log("error occured",e))
        // const {value:value1}=e.target[1];  // im accessing the value property of the element so i have to destructure it properly the value of element is assigned to value1
        // console.log(value,"value received",value1,"another v1");
        props.onAuth({username:value,secret:value})
    };

  return (
    <div className='background'>
        <form action="" onSubmit={onSubmit} className='form-card'>
            <div className='form-title'>Welcome</div>
            <div className='form-subtitle'>set username to get started</div>
            <div className="auth">
                <div className="auth-label">Username</div>
                <input className="auth-input" name="username" required placeholder='Username'/>
                {/* <input className="auth-input" name="none"/> */}
                <button className='auth-button' type='submit'>Enter</button>
            </div>
        </form>
    </div>
  )
}

export default AuthPage;

