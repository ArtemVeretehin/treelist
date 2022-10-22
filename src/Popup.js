import React, { useState } from "react";
import "./Popup.css"


const Popup = ({ display, setDisplay, EditValue }) => {

    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (EditValue(userInput)) {
            setUserInput("")
            setDisplay(false)
        }       
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") handleSubmit(e)
    }

    const closePopup = (e) => {
        e.preventDefault();
        setDisplay(false);
    }

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