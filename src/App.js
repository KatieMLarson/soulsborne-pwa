import React, { Component } from 'react';
import Boss from './Boss.js';
import './App.css';
import defaultIcon from './images/Bloodborne/soulsborne-pwa-icon.jpg'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isBoss: false,
      bossImage: ""
    }
  }

handleClick = async () => {
    let bossy = await fetch(defaultIcon, {headers: {
        'Content-Type': 'application/json'
    }}).then((response) => {
      return response;
    }).catch(e => {console.log(e)
    })
  this.setState({
    isBoss: true,
      bossImage: bossy.url
  })
}

  render() {
    const { isBoss, bossImage } = this.state;
    if (isBoss) {
    return (
      <div className="App">
          <Boss boss={bossImage}/>
          <button onClick={this.handleClick}>Traverse the Fog</button>
      </div>
    )
    } else {
      return (
        <div className="App">
          <button onClick={this.handleClick}>Traverse the Fog</button>
        </div>
      )
    }
  }
}

export default App;
