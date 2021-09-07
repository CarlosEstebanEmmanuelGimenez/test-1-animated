import React, { useState } from 'react';
import image from './images/goku-vegeta.jpg'
import './App.css';
function App() {
  const [animated, setAnimated] = useState(false)
  const [contador, setContador] = useState(0)
  const [ocultar, setOcultar] = useState(false)


  const sumar = () => {
    if (!animated) {
      setContador(contador + 1)
    }
  }
  const animar = () => {
    console.log("click")
    console.log('animated en la funcion :>> ', animated);
    console.log('')
    setAnimated(!animated)
  }
  console.log('animated :>> ', animated);


  const hide = () => {
    setOcultar(!ocultar,)
  }


  return (
    <div className="App">
      <header className="App-header">
       
        {
          !ocultar && animated ? (
            <img src='https://i.pinimg.com/originals/0d/a1/e0/0da1e00997d4e3b74ff40d06b7e3cf6a.gif' className="App-logo" alt="Goku y Vegeta" />
            ) : !ocultar && !animated ? (
            <img src={image} className="App-logo" alt="Goku y Vegeta" />
          ) : ( <div />) 
        }

        <p>
          Animación
        </p>

        <div>
          <button className="click" onClick={() => {
            animar()
            sumar()
          }}>
            {
              animated ? (
                <p>Detener</p>
              ) : (
                <p>Animar</p>
              )
            }
          </button>
          <p>
            Contador
          </p>
          <div>
            {contador}
          </div>
          <p>
            Ocultar imagen
          </p>
          <button className="click" onClick={() => {
            hide()
          }}>


            {
              ocultar ? (
                <p>Habilitar</p>
              ) : (
                <p>Desabilitar</p>
              )
            }
          </button>
        </div>
      </header>
    </div>
  );
}
export default App;