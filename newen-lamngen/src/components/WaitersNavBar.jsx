import React, { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, NavLink } from 'react-bootstrap';
import '../index.css';
import logo from '../img/logo.png';


const WaitersNavBar = () => {
  return (

    <Fragment>
    
    <Navbar.Brand bg='success' className='HeaderOptions'>
      <img src={logo} width="100px" height="100px" alt= 'logo-newen-lamngen'/>
      <h1 className= 'text-center titles' style = {{textAlignVertical : "bottom" }}> Cliente 
      <input className='border-0' type='text' style={{ textDecoration: 'none' }}></input> 
      </h1>
      
      <Navbar className='d-flex flex-row-reverse' bg="success" text-variant=""sticky="top">
      
        <NavLink bg="success" text-variant=""
        sticky="top" href="/kitchen" style={{ color: 'white', textDecoration: 'none' }}>Cocina</NavLink>
        
        <NavLink  href="/" style={{ color: 'white', textDecoration: 'none' }} >Menú principal</NavLink>
        </Navbar>
    </Navbar.Brand>

    </Fragment>
  )
}

export default WaitersNavBar