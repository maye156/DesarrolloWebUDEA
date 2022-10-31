import { Fragment } from "react";

//Componente
export const App = () =>{
    return (
    <>
    <h1>Hola Clase</h1>
    <p> Aprendamos React</p>
    <button onClick={Activar}>Activar botón</button>
    </>
    );
      }


function Activar(){
 alert ("El botón ha sido activado")
}
      
  