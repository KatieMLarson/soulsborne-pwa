import React, { Component } from 'react';
import Boss from './Boss.js';
import * as Requests from './Api';
import LadyMaria from './images/Bloodborne/Lady_Maria.gif';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      image: "",
      description: ""
    }
  }

  handleClick(event) {
    event.preventDefault();
    let boss = Requests.getBoss();
    this.setState({
        name: boss.name,
        image: boss.image,
        description: boss.description
       })
  }


  render() {
    const { name, image, description } = this.state;
    return (
      <div className="App">
          <button onClick={event => {this.handleClick(event)}}>Traverse the Fog</button>
          <Boss name={name} description={description} image={image}/>
      </div>
    );
  }
}

export default App;
