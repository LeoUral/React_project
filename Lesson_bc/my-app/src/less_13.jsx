import React from 'react';
import ReactDOM from 'react-dom';

//Управляемые компоненты. Теги input, select, textarea - работает так же как однострочный input

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            taste: 'coconut'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeTaste = this.handleChangeTaste.bind(this);
    }

    //Мы установили атрибут value для поля ввода, и теперь в нём всегда будет отображаться значение this.state.value.
    handleChange(event) {
        this.setState({ name: event.target.value }); //event.target.value.toUpperCase() - ввод заглавных букв        
    }

    handleChangeTaste(event) {
        this.setState({ taste: event.target.value });
    }

    handleSubmit(event) {
        alert('Отправленное имя: ' + this.state.name + ' Вы любите: ' + this.state.taste);
        event.preventDefault(); //останавливает отправку формы по нажатию на кнопку submit        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Имя:
                    <input type="text" name={this.state.name} onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Выберите ваш любимый вкус:
                <select taste={this.state.taste} onChange={this.handleChangeTaste}>
                            <option value="grapefruit">Грейпфрукт</option>
                            <option value="lime">Лайм</option>
                            <option value="coconut">Кокос</option>
                            <option value="mango">Манго</option>
                        </select>
                    </label>
                </div>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}

ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
);

//Подводя итог, <input type="text">, <textarea>, и <select> работают очень похоже.
// Все они принимают атрибут value, который можно использовать, чтобы реализовать управляемый компонент.

//В атрибут value можно передать массив, что позволит выбрать несколько опций в теге select:
//  select multiple={true} value={['Б', 'В']}></select