import React from 'react';
import './Button.css'

//exemplos de eventos como props dentro do component: content e onclick do botão

declare interface ButtonProps{
    content? : string   // ? para tornar a propriedade opcional
    onClick? : () => void
    appendIcon: JSX.Element

}

const Button: React.FC<ButtonProps> = (props) => {
    return <button className='AppButton' onClick={props.onClick}>
        {props.content}
        {props.appendIcon}
        </button>
}

export default Button