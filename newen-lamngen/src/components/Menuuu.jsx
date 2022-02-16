const drinks = menu.drinks;
  const food = menu.food;
  const sideDish = menu.sidedish;
  const pastry = menu.pastry;



return (
    <div>
    <section>
         <h1>Menu</h1>
         <h2>Platos</h2>
         <div>
           {food.map((e,index)=> {
             return(
               <button key={index}>
                 {/* <img src={e.img} alt={e.name}/> */}
                 <h2>{e.item}</h2>
                 {/* <p>{e.description}</p> */}
                 <p>$ {e.price}</p>
               </button>
             )
           })}
         </div>
       </section>
 
 
 
 <section>
      <h2>Bebidas</h2>
      <div>
        {drinks.map((e,index)=> {
          return(
            <button key={index}>
              {/* <img src={e.img} alt={e.name}/> */}
              <h2>{e.item}</h2>
              {/* <p>{e.description}</p> */}
              <p>$ {e.price}</p>
            </button>
          )
        })}
      </div>
    </section>
 
 
 
 <section>
      <h2>Acompañamientos</h2>
      <div>
        {sideDish.map((e,index)=> {
          return(
            <button key={index}>
              {/* <img src={e.img} alt={e.name}/> */}
              <h2>{e.item}</h2>
              {/* <p>{e.description}</p> */}
              <p>$ {e.price}</p>
            </button>
          )
        })}
      </div>
    </section>
 
 
 
 <section>
      <h2>Postres</h2>
      <div>
        {pastry.map((e,index)=> {
          return(
            <button key={index}>
              {/* <img src={e.img} alt={e.name}/> */}
              <h2>{e.item}</h2>
              {/* <p>{e.description}</p> */}
              <p>$ {e.price}</p>
            </button>
          )
        })}
      </div>
    </section>
 </div>
 )