import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { calcFuncs } from './App';

const submit = document.getElementById('submit');
submit.addEventListener('click', Calculate);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <calcFuncs.App />
  </React.StrictMode>
);

function Calculate() {
  let stockInt = document.getElementById('stockInt').value;
  let stockFin = document.getElementById('stockFin').value;
  let stockAmt = document.getElementById('stockAmt').value;
  let amount = (stockFin - stockInt) * stockAmt;
  root.render(
    <React.StrictMode>
      <calcFuncs.App />
      <calcFuncs.output amount={amount} />
    </React.StrictMode>
  )
}