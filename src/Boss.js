import React, { Component } from 'react';
import './Boss.css';


class Boss extends Component {
    render() {
        const { name, description, image } = this.props;
        return(
            <div className="Boss">
                <h1>{name}</h1>
                <img src={image}/>
                <p>{description}</p>
            </div>
        )
    }
};

export default Boss;