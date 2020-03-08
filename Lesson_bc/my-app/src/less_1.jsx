import React from 'react';
import ReactDOM from 'react-dom';

// первый вариант
const name = 'Иван-Царевич';
// const element = <h1>Здравствуй, {name}</h1>;

//второй вариант
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Мария',
    lastName: 'Моревна'
};

const element = (
    <div>
        <h1 className="greeting">
            Привет, {name}!!!
        </h1>
        <h1 className="greeting">
            Здравствуй, {formatName(user)}!
        </h1>
    </div>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);
