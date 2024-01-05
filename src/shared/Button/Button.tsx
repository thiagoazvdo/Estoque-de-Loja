import React from 'react';
import './Button.css'

//exemplos de eventos como props dentro do component: content e onclick do botão

declare interface ButtonProps{
    children: string;
    content? : string   // ? para tornar a propriedade opcional
    onClick? : () => void
    appendIcon?: JSX.Element
    type?: undefined

}

const Button: React.FC<ButtonProps> = (props) => {
    return <button 
    className='AppButton' 
    onClick={props.onClick}
    type={props.type || "button"}
 
    >
        {props.children || 'Nameless button' }
        {props.appendIcon}
        </button>
}

export default Button