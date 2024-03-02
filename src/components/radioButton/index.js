import React from "react";

const RadioButtonIndex = ({itemName, item, selectedItem, onRadioButtonChange}) => {
    return (
        <div className="col-4" key={item.key}>
            <label>
                <input
                    type="radio"
                    name={itemName}
                    value={item?.label}
                    checked={selectedItem === item?.label}
                    onChange={onRadioButtonChange}
                />
                <span className="checkmark"> {item.label}</span>
            </label>
        </div>
    )
}
export default RadioButtonIndex;