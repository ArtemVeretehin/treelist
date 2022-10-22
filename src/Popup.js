import React, { useState } from "react";
import "./Popup.css"


const Popup = ({ display, setDisplay, EditValue }) => {

    //Хук, отвечающий за данные в поле ввода
    const [userInput, setUserInput] = useState('')

    //Функция, обрабатывающая изменение данных в поле ввода
    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    //Функция, изменения узла
    const handleSubmit = (e) => {
        e.preventDefault()

        if (EditValue(userInput)) {
            setUserInput("")
            setDisplay(false)
        }       
    }

    //Обработка нажатия Enter в поле ввода
    const handleKeyPress = (e) => {
        if (e.key === "Enter") handleSubmit(e)
    }

    //Функция закрытия попапа по кнопке
    const closePopup = (e) => {
        e.preventDefault();
        setDisplay(false);
    }

    //Формирование попапа для изменения данных
    return (   
            <div className={display ? "popup__content active" : "popup"} onClick={(e) => e.stopPropagation()}>
                <form onSubmit={handleSubmit}>
                    <input
                        value={userInput}
                        type="text"
                        onChange={handleChange}
                        onKeyDown={handleKeyPress}
                        placeholder="RootName..."
                    />
                    <button>Apply</button>
                    <button onClick={closePopup}>Close</button>
                </form>         
            </div>       
    );
};

export default Popup;