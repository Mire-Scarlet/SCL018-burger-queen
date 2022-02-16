import React, { Fragment, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';
import WaitersNavBar from './WaitersNavBar';



const Waiters = () => {
  
  const [menu, setMenu] = useState(null);

  useEffect(() => {
     console.log('useEffect')
     openMenu()
   }, [])

   const openMenu = async () => {
     const menuData = await fetch('./menu.json')
     const renderData = await menuData.json()
     console.log(renderData)
     setMenu(renderData)    
   }


  return (

    <Fragment>

     <WaitersNavBar />

     <button>Platos principales</button>
  <div>
   {menu && menu.food.map(item => ( 
    <ul key={item.id}>
     <li>{item.name}</li>
     <li>$ {item.price}</li>
     <button type='button'>Agregar</button>
     </ul>
 
))}
   </div>
    
   <button>Bebidas</button>
  <div>
   {menu && menu.drinks.map(item => ( 
    <ul key={item.id}>
     <li>{item.name}</li>
     <li>$ {item.price}</li>
     <button type='button'>Agregar</button>
     </ul>
 
))}
   </div>
    {/*<button onClick={() => setFood(foodClick)}>Platos de fondo</button>
       
       <div>
        {foodClick.map(menuItem => (
         <li key={menuItem.id}>{ menuItem.item } {menuItem.price}</li>
      ))}     
        </div>       

        <button onClick={() => setDrinks(drinksClick)}>Bebidas</button>
        
        <div>
        {drinksClick.map(menuItem  => (
         <li key={menuItem.id}>{ menuItem.item } {menuItem.price}</li>
     ))}
        </div> 

        <button onClick={() => setSideDishes(sideDishesClick)}>Acompañamientos</button>
       
       <div>
        {sideDishesClick.map(menuItem => (
         <li key={menuItem.id}>{ menuItem.item } {menuItem.price}</li>
      ))}     
        </div>       

        <button onClick={() => setPastries(pastriesClick)}>Postres</button>
        
        <div>
        {pastriesClick.map(menuItem => (
         <li key={menuItem.id}>{ menuItem.item } {menuItem.price}</li>
     ))}
     </div>
     {/*
        
      <aside>

      </aside>
    </div>*/}

    </Fragment>
    
   
  )
};

export default Waiters;

