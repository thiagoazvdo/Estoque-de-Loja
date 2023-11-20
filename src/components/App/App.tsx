import React from 'react';
import Header from '../Header';
import './App.css';
import '../Header/Header.css';
import Button from '../../shared/Button';
import Container from '../../shared/Button/Container/Container';
import Input from '../../shared/Button/Input/Input';
import Table from '../../shared/Button/Table';


function App() {
  return (
    <div className="App">
      <Header title="Store Stock"/>
      <Container>
       <Table/>
      </Container>
    </div>
  );
}

export default App;
