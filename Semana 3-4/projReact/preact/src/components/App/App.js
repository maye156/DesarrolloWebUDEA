import React from 'react';
import './App.css';
import { heroes } from './data';

import HeroesCard from '../HeroesCard/heroes.js';
import showAdditional from '../Marvel/Marvel'

function sAd(additional) {

  showAdditional(additional)
  //window.location.href= './marvel'
};

function App() {
  return (
    <div className="wrapper">
      <h1>Heroes</h1>
      {heroes.map(h => (
        <HeroesCard
          id={h.id}
          key={h.name}
          name={h.name}
          additional={h.additional}
          showAdditional={sAd}
          owner={h.owner}

        />
      ))}
    </div>
  )
}
export default App;