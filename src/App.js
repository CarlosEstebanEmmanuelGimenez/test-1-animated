import React, { useState } from 'react';
import image from './images/goku-vegeta.jpg'
import './App.css';

function App() {
  const [animated, setAnimated] = useState(false)

  const animar = () => {
    console.log("click")
    console.log('animated en la funcion :>> ', animated);
    console.log('')
    setAnimated(!animated)
  }

  console.log('animated :>> ', animated);

  return (
    <div className="App">
      <header className="App-header">
        {
          animated ? (
            <img src='https://i.pinimg.com/originals/0d/a1/e0/0da1e00997d4e3b74ff40d06b7e3cf6a.gif' className="App-logo" alt="Goku y Vegeta" />
          ) : (
            <img src={image} className="App-logo" alt="Goku y Vegeta" />
          )
        }

        <p>
          Pulse este boton para cambiar imagen
        </p>
        <div>
          <button onClick={animar}>
            {
              animated ? (
                <p>Detener</p> 
              ) : (
                <p>Animar</p>
              )
            }
          </button>

        </div>
      </header>
    </div>
  );
}

export default App;
