import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
    return <h1>Привет, {props.name} </h1>;
}

// const element = <Welcome name="Алиса" />;
// // передаем react-элемент в ReactDOM.render()
// //React вызывает наш компонент Welcome с пропсоми {name: "Алиса"}
// //Наш компонент Welcome возвращает элемент <h1>Привет, Алиса</h1> в качестве результата

function App() {
    return (
        <div>
            <Welcome name="Alise" />
            <Welcome name="Leo" />
            <Welcome name="Bazilio" />
        </div>
    );
}

ReactDOM.render(
    // element,
    <App />,
    document.getElementById('root')
);