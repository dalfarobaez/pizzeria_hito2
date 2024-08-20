import React from 'react'
import precioChileno from '../utils/utils.js'

const Cardpizza = ({name,price,ingredients,img}) => {

  return (
        <div key={name} className="cardPizza">
          <div className='fotoPizzaContainer'>
            <img src = {img} alt={name} />
          </div>
          <h3 className='p-2'>Pizza {name}</h3>
          <div className='ingredientesContainer'>
            <h4>Ingredientes:</h4> 
            <p>🍕 {ingredients.join(', ')}</p>            
          </div>
          <div className='priceContainer'>
            <h2>Precio: {precioChileno(price)}</h2>
            <div className='botonContainer'>
              <div className='botonVer'>Ver Más 👀</div>
              <div className='botonCompra'>Añadir 🛒</div>
            </div>
          </div>
        </div>
  )
}

export default Cardpizza