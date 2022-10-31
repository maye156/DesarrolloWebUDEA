//import React from "react"; 
import './heroes.css';

export default function HeroesCard({name, id, owner,showAdditional, additional }){
    return (
    <div className="heroe-wrapper">
        <h2> {name}</h2>
        <h3> {id}</h3>
        <h4>{owner}</h4>
        <button onClick={() => showAdditional(additional)}>More Info</button>
        </div>
        );
}