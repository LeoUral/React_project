import React from "react";
import ReactDOM from 'react-dom';

//Предотвращение рендеринга компонента

//В редких случаях может потребоваться позволить компоненту спрятать себя, хотя он уже и отрендерен другим компонентом. 
//Чтобы этого добиться, верните null вместо того, что обычно возвращается на рендеринг.

// Например, будет ли содержимое <WarningBanner /> отрендерено, зависит от значения пропа под именем warn. Если значение false, компонент ничего не рендерит:

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Предупреждение!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: true };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'спрятать' : 'Показать'}
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);

//Сам факт возврата null из метода render компонента никак не влияет на срабатывание методов жизненного цикла компонента. 
//Например, componentDidUpdate будет всё равно вызван.