import { AppBar, Toolbar, styled } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header=styled(AppBar)`
   background:#111111;
`
const Tabs=styled(NavLink)`
   font-size:20px;
   margin-right:20px;
   color: inherit;
   text-decoration:none;
`
function Navbar() {
  return (
     < Header position='static'>
         <Toolbar>
             <Tabs to='/'>Sajjan</Tabs>
             <Tabs to='/add'>Add User</Tabs>
             <Tabs to='/all'>All User</Tabs>
         </Toolbar>
     </ Header>
  )
}

export default Navbar