import React, { Component } from 'react';
import './App.css';
import Tabela from './Tabela';

class App extends Component {
  Autores = [
    {
      nome:'Paulo',
      livro:'React',
      preço:'1000',
    },
    {
      nome:'Daniel',
      livro:'Java',
      preço:'99',
    },
    {
      nome:'Marcos',
      livro:'Linux',
      preço:'450',
    },
    {
      nome:'Hebert',
      livro:'Java',
      preço:'437',
    },
    {
      nome:'Douglas',
      livro:'Shell:Script',
      preço:'987',
    },
  ];

  render(){
  return (
    <Tabela Autores={this.Autores}/>
 
  );
    }
      }

export default App;