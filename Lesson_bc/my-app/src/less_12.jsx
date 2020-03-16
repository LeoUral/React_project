import React from 'react';
import ReactDOM from 'react-dom';

// Чтобы исправить проблему с неуказанными ключами, добавим каждому элементу в списке атрибут key.
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <ul> {listItems} </ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);

//Лучший способ выбрать ключ — это использовать строку, которая будет явно отличать элемент списка от его соседей.
//Чаще всего вы будете использовать ID из ваших данных как ключи:

// const todoItems = todos.map((todo) =>
// <li key={todo.id}>
//   {todo.text}
// </li>
// );

// Когда у вас нет заданных ID для списка, то в крайнем случае можно использовать индекс элемента как ключ:

// const todoItems = todos.map((todo, index) =>
// // Делайте так, только если у элементов массива нет заданного ID
// <li key={index}>
//   {todo.text}
// </li>
// );

//Мы не рекомендуем использовать индексы как ключи, если порядок элементов может поменяться. 
//Это негативно скажется на производительности и может вызвать проблемы с состоянием компонента