import React from 'react';

const Main = () => {
    const mangelClick = () => {
        console.log('ruteado a menu pedidos')
    };
    const kutralClick = () => {
        console.log('ruteado a menu cocina')
    };


const logo = 'https://user-images.githubusercontent.com/65975589/150434393-8449bceb-2354-4e84-943b-95e8eec4c82e.png';
const bgimg= 'https://user-images.githubusercontent.com/65975589/150434836-17aadb7e-5326-4698-ba8d-fe201f0226eb.png';
 
 return <>
<h1>Cocinería Newen Lamngen</h1>
<img src= {logo} alt= 'logo-newen-lamngen' />
<img src= {bgimg} alt='araucaria'/>
<button onClick={ () => mangelClick() }>Mangel</button> 
<button onClick={ () => kutralClick() }>Kütral</button> 
  </>;
};

export default Main;
