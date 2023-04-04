import React from 'react'
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Pagina = () => {
  return (
    <>
    <Cabecalho/>
    <div className="bg-secondary text-white py-3 text-center mb-3">
      <h1>Pagina Inicial</h1>
    </div>
    <Rodape/>
    </>
  )
}
