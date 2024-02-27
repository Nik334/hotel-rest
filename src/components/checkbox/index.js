import React from "react";

const Checkbox = ({pricing}) => {

    return (
        <label>
            <input type="checkbox"
                   name={pricing.label}
                   value={pricing.label}
                   className="identity-check"
                   onChange={(e) => {
                   }}
            />
            <span className="identity-label"></span>
            {pricing.label}
            <span className="checkmark-border"></span>
        </label>
    )
}

export default Checkbox;