import React from "react";

declare interface HeaderProps{
    title: string
}

const Header: React.FC<HeaderProps> = (props) => {
    return <header className="AppHeader">
        <h1>Store Stock</h1>
    </header>
}

export default Header