import React, {Component} from 'react';
import Boss from './Boss.js';
import './App.css';

const bossesURL = [
    '/images/Maria.png',
    '/images/soulsborne-pwa-icon.jpg',
    '/images/Eileen_animation.gif',
    '/images/Father_Gascoigne.gif',
    '/images/Gaping_dragon.gif',
    '/images/Gywndolin.jpg',
    '/images/moon_presence.gif',
    '/images/Nameless_King.jpg',
    '/images/Queelag.jpg',
    '/images/Rakuyo.gif',
    '/images/Sanctuary_guardian.jpg',
    '/images/Sif.jpg',
    '/images/Paarl.jpg'
];

let bosses = [];
bossesURL.forEach(boss => {
    import(`.${boss}`).then(m => bosses.push(m));
});

const randomBoss = () => {
    let randomBoss = bosses[Math.floor(Math.random() * Math.floor(bosses.length))];
    return randomBoss.default;
};

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isBoss: false,
            bossImage: ""
        }
    }

    handleClick = async () => {
        let boss = randomBoss();
        await fetch(boss, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            return response;
        }).catch(e => {
            console.log(e)
        });

        this.setState({
            isBoss: true,
            bossImage: boss
        })
    }

    render() {
        const {isBoss, bossImage} = this.state;
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
