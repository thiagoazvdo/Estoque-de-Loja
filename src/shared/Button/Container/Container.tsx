import {ReactNode} from "react";
import './Container.css'

interface ContainerProps {
    children: ReactNode
}

export default function Container({children}: ContainerProps) {
    return (
        <div className="AppContainer">
            { children }
        </div>
    )
}