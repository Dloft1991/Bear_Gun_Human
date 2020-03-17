import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const myelement = 
<div>
    <h1>Hello JSX</h1>
    <p>JSX is awesome!</p>
    <div class="row">
        <div class="col-sm-6">
            <p> 1 col</p>
        </div>
        <div class="col-sm-6">
            <p> 2 col</p>
        </div>
    </div>
</div>
const element2 = (
    <ul>
    <li>Apples</li>
    <li>Oranges</li>
    <li>Bananas</li>
</ul>
);

ReactDOM.render(myelement, document.getElementById('root'));
ReactDOM.render(element2, document.getElementById('trunk'));

