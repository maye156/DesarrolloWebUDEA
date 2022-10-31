import React from 'react';
import './App.css';
//import {showAdditional} from './App'


export function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
    .map(information => `${information[0]}: ${information[1]}`)
    .join('\n');
  document.write(alertInformation);
  window.location.href = './marvel';
  //return alertInformation;

}

export function Marvel() {
  cargarUsuarios();
  return (
    <div className='wrapper'>
      <h1>Listado de datos</h1>
      <div className='wrapper'>
        <table className="table" id="lista-usuarios">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Email</th>
              <th scope="col">Compañía</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
  );
}
const tabla = document.querySelector('#lista-usuarios tbody');
function cargarUsuarios() {
  const algo='otra cosa';
  const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${algo}</td>`;
                    tabla.appendChild(row);
  //console.log(fetch('../../data/usuarios.json'))
 /* fetch('usuarios.json')
    .then(respuesta => respuesta.json())
    .then(respuesta => console.log(respuesta))*/
  console.log('algo');
}


/*
const tabla = document.querySelector('#lista-usuarios tbody');

function cargarUsuarios() {
    fetch('../../data/usuarios.json')
    .then(respuesta => respuesta.json()) 
    .then(usuarios => {
         usuarios.forEach(usuario => {
          console.log(usuarios);
            const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${usuario.id}</td>
                    <td>${usuario.name}</td>
                    <td>${usuario.email}</td>
                    <td>${usuario.company.name}</td>
                    `;
                    tabla.appendChild(row);
      });
    })
    .catch(error => console.log('Hubo un error : ' + error.message))
}
*/

//End point + ts=1 + &apikey=publica + &hash= md5(genrar=1+publica+privada)
const marvel = {
  render: ()=> {
    const urlAPI ='http://gateway.marvel.com/v1/public/comics?ts=1&apikey=d7c509a1c93c5deb9692de7bfa12e4e2&hash=ee7fe85a30bc41eac5b34dd07dc0f48c';
    const container = document.getElementById("datos");
    let contentHTML ='';

    fetch(urlAPI)
    .then(res=> res.json())
    .then((json)=>{
      for(const hero of json.data.results){
        let urlHero = hero.urls[0].url;
        contentHTML+= `
        <div class='wrapper'>
        <ahref = ${urlHero} target ="_blank"> 
          <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" 
          class="img-thumbnail">
        </a>
        <h3 class="title"> ${hero.name}</h3>
        </div>`
      }
     container.innerHTML=contentHTML;
    })
  }
};
marvel.render();



const uriAPI = 'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=d7c509a1c93c5deb9692de7bfa12e4e2&hash=ee7fe85a30bc41eac5b34dd07dc0f48c'
fetch(uriAPI)
  .then(response => response.json())
  .then(json => {
    json.data.results.map(item => {
      let uri = item.thumbnail.path + item.thumbnail.extension
      let urlHero = hero.urls
      //console.log(uri);
      Mel.innerHTML += `<div>
      <a href="${urlHero}">
      </a> 
      <img src=${uri.replace('http', 'https')}/>
      <span>${item.name}</span>
      </div>`
    })
  })



