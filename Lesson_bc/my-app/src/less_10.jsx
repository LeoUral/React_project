import React from 'react';
import ReactDOM from 'react-dom';

//встроенный условный оператор IF с логическим &&

//Вы можете внедрить любое выражение в JSX, заключив его в фигурные скобки. 
//Это правило распространяется и на логический оператор && языка JavaScript, 
//которым можно удобно вставить элемент в зависимости от условия:

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Здравствуйте!</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    У Вас {unreadMessages.length} непрочитанных собщений
            </h2>
            }
        </div>
    );
}

const messages = ['React', 're: React', 'Re:Re: React', 'One'];
ReactDOM.render(
    <Mailbox unreadMessages={messages} />,
    document.getElementById('root')
);

//Приведённый выше вариант работает корректно, потому что в JavaScript выражение true && expression всегда вычисляется как expression, а выражение false && expression — как false.

// То есть, если условие истинно (true), то элемент, идущий непосредственно за &&, будет передан на вывод. Если же оно ложно (false), то React проигнорирует и пропустит его.

