import React, { Component } from 'react';
import Boss from './Boss.js';
import LadyMaria from './Lady_Maria.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <button >Traverse the Fog</button>
          <Boss name="Lady Maria of the Astral Clock Tower" description="A corpse . . . should be left well enough alone." image={LadyMaria}/>
      </div>
    );
  }
}

export default App;
