import React from 'react';
import Header from '../Header';
import './App.css';
import '../Header/Header.css';
import Button from '../../shared/Button';
import Container from '../../shared/Button/Container/Container';
import Input from '../../shared/Button/Input/Input';
import Table, { TableHeader } from '../../shared/Button/Table';
import Products from '../../shared/Button/Table/Table.mockdata';

const headers: TableHeader[] = [
  { key: 'id', value: '#'},
  { key: 'name', value: 'Product'},
  { key: 'price', value: 'Price', right: true},
  { key: 'stock', value: 'Avaliable Stock', right: true},
]

function App() {
  return (
    <div className="App">
      <Header title="Store Stock"/>
      <Container>
       <Table
       headers={headers}
       data={Products}
       />
      </Container>
    </div>
  );
}

export default App;
