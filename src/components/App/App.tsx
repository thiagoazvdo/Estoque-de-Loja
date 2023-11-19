import React from 'react';
import Header from '../Header';
import './App.css';
import '../Header/Header.css';
import Button from '../Button';

function TestComponent () {
  return <img width="16" src="https://cdn.icon-icons.com/icons2/1129/PNG/512/searchmagnifierinterfacesymbol1_79893.png" alt="search-icon"/>
}

function App() {
  return (
    <div className="App">
      <Header title="Store Stock"/>
      <div className='Container'>
        <Button content='Click me'
        onClick={() => window.alert('mensagem exemplo')}
        appendIcon={<TestComponent />}
        />
      </div>
    </div>
  );
}

export default App;
