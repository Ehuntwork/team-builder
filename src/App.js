import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import TeamList from './TeamList';

function App() {
  const [team, teamSet] = useState([
    {id:1,
    name: "Example",
    email: "@example.com",
    role: "Examplegeer"
  }
  ]);

  const addNewMember = teamMem =>{
    const newMember = {
      id: Date.now(),
      title: teamMem.name
    };
    teamSet([...team, newMember])
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Form/>
      <TeamList team = {team} />
    </div>
  );
}

export default App;
