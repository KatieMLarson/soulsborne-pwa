import React, { Component } from 'react';
import './Boss.css';



class Boss extends Component {
    render() {
        const { boss } = this.props;
        console.log("Boss Image:", boss)
        return(
            <div className="Boss">
                <img src={boss} alt="Your randomly selected boss"/>
                <br/>
            </div>
        )
    }
};

export default Boss;