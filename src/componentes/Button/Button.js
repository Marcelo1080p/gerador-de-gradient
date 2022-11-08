import React from "react";
import "./Button.css"

export const Button = (props) => {
    return (
        <button key={props.key} type="button" onClick={() => props.onClick()}>{props.texto}</button>
    )
}