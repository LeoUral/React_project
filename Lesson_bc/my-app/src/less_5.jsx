import React from 'react';
import ReactDOM from 'react-dom';

//Первая часть часов. Рабочаяя
// function Clock(props) {
//     return (
//         <div>
//             <h1>Привет, мир!</h1>
//             <h2>Сейчас {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     );// выводит время => ЧЧ:ММ:СС
// }

// function tick() {
//     ReactDOM.render(
//         <Clock date={new Date()} />,
//         document.getElementById('root')
//     );
// }

// setInterval(tick, 1000);

// В идеале мы бы хотели реализовать Clock таким образом, чтобы компонент сам себя обновлял:
//Давайте преобразуем функциональный компонент Clock в классовый компонент за 5 шагов:

// Создаём ES6-класс с таким же именем, указываем React.Component в качестве родительского класса

// Добавим в класс пустой метод render()

// Перенесём тело функции в метод render()

// Заменим props на this.props в теле render()

// Удалим оставшееся пустое объявление функции

// class Clock extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Привет!</h1>
//                 <h2>Сейчас:  {this.props.date.toLocaleTimeString()}. </h2>
//             </div >
//         );
//     }
// }

//Переместим date из пропсов в состояние в три этапа:
//Заменим this.props.date на this.state.date в методе render():
//Добавим конструктор класса, в котором укажем начальное состояние в переменной this.state:
//Удалим проп date из элемента <Clock />:

class Clock extends React.Component {
    //Обратите внимание, что мы передаём props базовому (родительскому) конструктору:
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <h2> Now: {this.state.date.toLocaleTimeString()}. </h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);