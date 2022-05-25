import React from 'react';
import Routes from './routes';

import './style.css';

function App() {
  return (
    <Routes />
  );
}

export default App;


/*
// PRIMEIRA AULA

import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Routes from './routes';
import React, { useState } from "react";

function App(props) {
  const [usuario, setUsuario ] = useState('');

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then (response => console.log(response));
  }

  return (
    <>
    <input className="usuarioInput" placeholder="Usuário" onChange={e => setUsuario(e.target.value)} />
    <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
} */