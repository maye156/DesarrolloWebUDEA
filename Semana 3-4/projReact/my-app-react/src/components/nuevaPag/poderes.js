import React from "react";
//import nuevaPag from '../nuevaPag/nuevaPag.js';

/*

function obtenerDato(){
    let poderfrm = document.getElementById('poder').value;
    let cod = document.getElementById('codigo').value;
    let params = {
        "poder":poderfrm
    } 
     changeJson(cod,params)
}*/

export default function poderesCard({ codigo, poder }) {

    return <div className="heroe-wrapper">
       <form name="datos">
        <table border="1">
            <tr>
                <td> Poder:</td><td><input type="text" name="poder" id="poder"></input></td>
            </tr>
            <tr>
                <td> Codigo:</td><td><input type="text" name="codigo" id="codigo"></input></td>
            </tr>
            <tr><button onClick={() => alert("algo")}> Actualizar </button></tr>
        </table>
       </form>

       
    </div>
}