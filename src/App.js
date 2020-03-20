import React from 'react';

class Button extends React.Component {
    render() {
        return (
           <button className="btn-one" onClick={depositValue}>Button</button>
           )
    }
}

function depositValue(){
        
    document.getElementById("This").innerHTML = "Hello";
        
}


export default Button;