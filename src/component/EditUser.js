import React from 'react'
import { FormControl, FormGroup, Input, InputLabel, Typography, Button, styled } from '@mui/material'
import { useState,useEffect } from 'react'
import { getUser,editUser } from './service/Api'
import { useNavigate,useParams } from 'react-router-dom'

const Containers = styled(FormGroup)`
width:50%;
margin:5% auto 0 auto; 
& >  div {
    margin-top:20px;
} 
`
const intialValues = {
    name: '',
    password: '',
    email: '',
    phone: ''
}
function EditUser() {
    const [user, setUser] = useState(intialValues)
    const navigate=useNavigate();
    const {id}=useParams();

    useEffect(()=>{
        getUserData();
    },[])
    const getUserData=async()=>{
      let response=  await getUser(id)
      setUser(response.data)
    }

    const onValueChange = (e) => {
         setUser({ ...user, [e.target.name]: e.target.value })
    }
    //await chlta hai async function me
    const AddUserDetails =async ()=>{
       await editUser(user,id);
       navigate('/all');
    }
    return (
        <Containers>
            <Typography variant='h3'>Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" value={user.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Password</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="password" value={user.password} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" value={user.email} />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone} />
            </FormControl>
            <FormControl>
                <Button onClick={()=>AddUserDetails()} variant="contained">Edit</Button>
            </FormControl>
        </Containers>

    )
}

export default EditUser;