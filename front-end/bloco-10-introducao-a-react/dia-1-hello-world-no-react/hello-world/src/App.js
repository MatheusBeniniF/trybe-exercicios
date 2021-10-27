import React, { Component } from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['acordar', 'malhar', 'estudar', 'almocar'];

class App extends Component {
  render () {
    return (
      <div>
        <h1>Exercicio 1 do dia</h1>
        <ul>{ tarefas.map(tarefa => Task(tarefa))}</ul>
      </div>
    );
  }
}

export default App;
