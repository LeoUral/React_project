import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    //монтирование
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000 * +this.props.time);
    }

    //размонтирование
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hi! Hello! {this.props.name}</h1>
                <h2>Now: {this.state.date.toLocaleTimeString()} - {this.props.comment} </h2>
            </div>
        );
    }
}

//У каждого компонента Clock есть собственное состояние таймера, которое обновляется независимо от других компонентов.
function App() {
    return (
        <div>
            <Clock name="Leo" comment="Время местное" />
            <Clock name="Vova" time="5" comment="Время меняется иначе, раз в 5 сек" />
            <Clock comment="сейчас на часах" />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);