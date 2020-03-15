import React from 'react';
import ReactDOM from 'react-dom';

//Условный рендеринг

function UserGreeting(props) {
    return <h1>С возвращением!</h1>;
}

function GuestGreeting(props) {
    return <h1>Войдите, пожалуйста.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

ReactDOM.render(
    //попробуйте заменить на isLoggedIn={true} и посмотрите эффект
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
);