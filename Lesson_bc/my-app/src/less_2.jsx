import React from 'react';
import ReactDOM from 'react-dom';

const second = {
    i: 0
};

function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleDateString()}.</h2>
            <h2>seconds: {second.i++} </h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000); //вызывает функцию tick() каждую секунду