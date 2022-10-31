import HeroesCard from '../HeroesCard/heroes.js';


export default function showAdditional(additional) {
    const alertInformation = Object.entries(additional)
      .map(information => `${information[0]}: ${information[1]}`)
      .join('\n');
      <h1>Heroes</h1>
       document.write(alertInformation)
  };