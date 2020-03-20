import React from 'react';
import ReactDOM from 'react-dom';
import Button from './App';
import Remove from './remove';
import Picture from './images/download.jpg';
import './index.css';

class Car extends React.Component {
    render() {
      return <h2>I am a {this.props.brand}!</h2>;
    }
  }
  
  class MyApp extends React.Component {
    render() {
      return (
        <div>
        <h1>Who lives in my Garage?</h1>
        <Car brand="Dodge" />
        <Button />
        <Remove />
        <div className="img_Padding"> 
          <img src={Picture} alt="Baby Yoda"></img>
        </div>
        <div>
          <p id="This" ></p>
        </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(<MyApp />, document.getElementById('root'));

