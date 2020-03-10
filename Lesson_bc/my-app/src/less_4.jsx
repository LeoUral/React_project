// import React from 'react';
// import ReactDOM from 'react-dom';


//**************************************************
//Образец для разбора понятия ИЗВЛЕЧЕНИЕ КОМПОНЕНТОВ
//*******************************************

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

// ReactDOM.render(
//     <Comment />,
//     document.getElementById('root')
// );

//***********************************************
// Извелкаем компоненты и переписываем исходный код */
// последовательность действий
//***************************************

function Avatar(props) {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

//Компоненту Avatar незачем знать, что он рендерится внутри Comment. Поэтому мы дали его пропу чуть менее конкретное имя — user, а не author.

// Пропсы следует называть так, чтобы они имели смысл в первую очередь с точки зрения самого компонента, а уже во вторую тех компонентов, которые его рендерят.

// Теперь можно немножко упростить наш Comment:

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <Avatar user={props.author} />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

//Следующим шагом извлечём компонент UserInfo, который рендерит Avatar рядом с именем пользователя:

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

//Это позволит ещё сильнее упростить Comment:

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-test">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

//Если какая-то часть интерфейса многократно в нём повторяется (Button, Panel, Avatar) или сама по себе достаточно сложная (App, FeedStory, Comment), 
//имеет смысл её вынести в независимый компонент.