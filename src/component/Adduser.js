import React from 'react'
import { FormControl, FormGroup, Input, InputLabel, Typography, Button, styled } from '@mui/material'
import { useState } from 'react'
import { addUser } from './service/Api'
import { useNavigate } from 'react-router-dom'
import validator from 'validator'
import { object, string, number, date, InferType } from 'yup';

const Containers = styled(FormGroup)`
width:50%;
margin:5% auto 0 auto; 
& >  div {
    margin-top:20px;
} 
`
const intialValues = {
    name: '',
    password:  '',
    email: '',
    phone: ''
}
function Adduser() {
    const [user, setUser] = useState(intialValues)
    const navigate=useNavigate();
    const [emailError, setEmailError] = useState('')

    const onValueChange = (e) => {
        if (!isValidEmail(e.target.value)) {
            setEmailError('Email is invalid');
          } else {
            setEmailError(null);
          }
      
         setUser({ ...user, [e.target.name]: e.target.value })
         
  
    }
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }
    //await chlta hai async function me
    const AddUserDetails =async ()=>{
       await addUser(user);
       navigate('/all');
    }
    return (
        <Containers>
            <Typography variant='h3'>Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>Password</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="password" type='password' />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" type='email'/> <br/>
                    <span style={{
                        fontWeight: 'bold',
                        color: 'red',
                    }}>{emailError}
                    </span>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" type='number'/>
            </FormControl>
            <FormControl>
                <Button onClick={()=>AddUserDetails()} variant="contained">Submit</Button>
            </FormControl>
        </Containers>

    )
}

export default Adduser