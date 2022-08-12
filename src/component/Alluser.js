import { Button, styled, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import { getUsers,deleteUser } from './service/Api';
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

const StyledTable=styled(Table)`
    width:80%;
    margin:50px auto 0 auto;
`
const Thead=styled(TableRow)`
      background:#000;
      & > th{
          color:#fff;
          font-size:20px;
      }
`
const Tbody=styled(TableRow)`
      & > td{
          font-size:20px;
      }
`
function Alluser() {
    const[users,setUsers]=useState([])
    useEffect(()=>{
        getUserDetails();
    },[])

    const getUserDetails=async()=>{
        let response=await getUsers();
        console.log(response);
        setUsers(response.data)
    }

    const deleteUserData=async(id)=>{
        await deleteUser(id)
        getUserDetails();
    }
  return (
    <StyledTable>
        <TableHead>
            <Thead>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Password</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell></TableCell>
            </Thead>
        </TableHead>
        <TableBody>
            {
                users.map(user=>(
                    <Tbody>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.password}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button variant='contained' style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                            <Button variant='contained' color='secondary' onClick={()=>deleteUserData(user.id)}>Delete</Button>
                        </TableCell>
                    </Tbody>
                ))
            }
        </TableBody>
    </StyledTable>
  )
}

export default Alluser