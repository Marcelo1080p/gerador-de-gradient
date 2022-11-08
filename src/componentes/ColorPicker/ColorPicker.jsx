import React from "react";
import "./ColorPicker.css"
export const ColorPicker = (props) => {
    return (
        <input className="colorPicker" value={props.value} type="color" onChange={(e) => props.onChange(e)}/>
    )
}