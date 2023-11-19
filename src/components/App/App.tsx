import React, { useState } from 'react';
import Header from '../Header';
import './App.css';
import '../Header/Header.css';
import Button from '../../shared/Button';
import Container from '../../shared/Button/Container/Container';
import Input from '../../shared/Button/Input/Input';


function TestComponent () {
  return <img width="16" src="https://cdn.icon-icons.com/icons2/1129/PNG/512/searchmagnifierinterfacesymbol1_79893.png" alt="search-icon"/>
}

function App() {
  const [street, setStreet] = useState('')
  return (
    <div className="App">
      <Header title="Store Stock"/>
      <Container>
        <Button content="Click me"
        onClick={() => window.alert("mensagem exemplo")}
        appendIcon={<TestComponent />}
        />
        <Input label="Street"
        placeholder="E.g: 15th Avenue"
        value={street}
        onChange={e => setStreet(e.target.value)}/>
      </Container>
    </div>
  );
}

export default App;
