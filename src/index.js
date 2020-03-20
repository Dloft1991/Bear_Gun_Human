import React from 'react';
import ReactDOM from 'react-dom';
import Button from './App';
import Picture from './images/download.jpg';
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
        <div> 
          <img src={Picture} alt="Baby Yoda"></img>
        </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(<MyApp />, document.getElementById('root'));

