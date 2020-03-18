import React from 'react';
import ReactDOM from 'react-dom';

//Обработка нескольких элементов input

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    Пойду:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.iGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Количество гостей:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

ReactDOM.render(
    <Reservation />,
    document.getElementById('root')
);

//Альтернативы управляемым компонентам
// Использование управляемых компонентов иногда может быть утомительным. 
// Приходится писать обработчик события для каждого варианта изменения ваших данных и проводить всё состояние формы через компонент React.
// Это может особенно раздражать, если вы переносите существующую кодовую базу в React, или когда 
// работаете над интеграцией React-приложения с другой библиотекой. 
// В такой ситуации могут пригодиться неуправляемые компоненты — альтернативная техника реализации ввода данных в форму.