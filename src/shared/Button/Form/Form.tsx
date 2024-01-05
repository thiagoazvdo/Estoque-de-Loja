import React, { ReactNode } from 'react'
import './Form.scss'

declare interface FormProps {
    children: ReactNode
    title?: string
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

const Form: React.FC<FormProps> = (props) => {
    const preventedSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.onSubmit && props.onSubmit(event)
    }
    return <form className="AppForm" onSubmit={preventedSubmit}>
        {
            props.title && <div className="Title">
            {  props.title }
            </div>
        }
        { props.children }
        </form>
}

export default Form