 import React, { useState } from 'react';
 import logo from './logo.svg';
 import './App.css';

// import React, { useState } from "react";

function App(props) {
  const [usuario, setUsuario ] = useState('');
  return (
    <>
    <input className="usuarioInput" placeholder="Usuário" onChange={} />
    <button type="button">Pesquisar</button>
    </>
  );
}

export default App;