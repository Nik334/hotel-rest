import React from "react";

const RadioButtonIndex = ({itemName, item, onRadioButtonChange}) => {
    return (
        <div className="n-summary" key={item.key}>
            <label>
                <input type="radio"
                       name={itemName}
                       value={item.label}
                       onChange={onRadioButtonChange}
                />
                <span className="checkmark">{item.label}</span>
            </label>
        </div>
    )
}
export default RadioButtonIndex;