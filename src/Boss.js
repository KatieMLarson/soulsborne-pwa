import React, { Component } from 'react';


class Boss extends Component {
    render() {
        const { name, description, image } = this.props;
        return(
            <div>
                <h1>{name}</h1>
                <img src={image}/>
                <p>{description}</p>
            </div>
        )
    }
};

export default Boss;