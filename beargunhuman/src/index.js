import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Car from './App.js';

class Car extends React.Component {
    render() {
        return <h2>I am a {this.props.brand}!</h2>
    }
}

const myelement = <Car brand="Dodge" />;
ReactDOM.render(myelement, document.getElementById('root'));

