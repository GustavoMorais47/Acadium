import React, { useEffect } from 'react';
import '../src/styles/css/App.css';
import Router from './routes';
import { RervationsDB } from './database';

const App = () => {

  // Função auxiliar para gerar uma data aleatória
  function randomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  // Array de responsáveis e de laboratórios
  const responsibles = ['William', 'Eduardo', 'Henrique', 'Poliana', 'Walquíria'];
  const laboratories = ['Lab 1', 'Lab 2', 'Lab 3', 'Sala 1', 'Sala 02', 'Sala 03'];

  // Array de localizações
  const locations = ['Bloco A', 'Bloco B', 'Bloco C', 'Bloco H', 'Bloco E'];

  // Gera 50 reservas aleatórias
  useEffect(()=> {
    RervationsDB.splice(0, RervationsDB.length)
    for (let i = 0; i < 25; i++) {
      RervationsDB.push({
        id: i + 1,
        responsible: responsibles[Math.floor(Math.random() * responsibles.length)],
        laboratory: laboratories[Math.floor(Math.random() * laboratories.length)],
        location: locations[Math.floor(Math.random() * locations.length)],
        start_date: randomDate(new Date(), new Date()),
        end_date: randomDate(new Date(), new Date())
      });
    }
  },[])

  return <Router />
}

export default App;