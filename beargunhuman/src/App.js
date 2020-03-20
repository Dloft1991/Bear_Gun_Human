import React from 'react';

class Button extends React.Component {
    render() {
        return (
           <button onClick={depositValue}>Button</button>
        )
    }
}

function depositValue(){
    alert("You clicked me");
}

export default Button;