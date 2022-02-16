import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import '../index.css';
import logo from '../img/logo.png';
//import bgimg from '../img/bgimg.png';

const MainMenu = () => {

 return (
 <Fragment >
     <div className='container d-flex flex-row text-center'>
<h1 className= 'titles'>Cocinería Newen Lamngen</h1>
<div className='center-block col-lg-4 col-md-4 col-xs-4'>
<img src= {logo} alt= 'logo-newen-lamngen'className="rounded mx-auto d-block img-responsive center-block"/>
</div>
</div>
{/*<img  alt='araucaria' className='bg-img'/>*/}
<div className='center-block col-lg-4 col-md-4 col-xs-4'>
<Link to="/waiters" className="other-text btn btn-success">Mangel</Link>
<Link to="/kitchen" className="other-text btn btn-success">Kütral</Link>
</div>

</Fragment>
)
};

export default MainMenu;

