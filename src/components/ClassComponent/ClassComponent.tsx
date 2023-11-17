import React from 'react';

//componente baseado em classe
class ClassComponent extends React.Component {
    state = {
        name: 'Thiago'
    } 
    render() {

    return <div>
        <p>name: {this.state.name}</p>
        <button onClick={()=>{
            this.setState({name: 'Azevedo'})
        }}>Click me</button>
        </div>
    }
}

export default ClassComponent