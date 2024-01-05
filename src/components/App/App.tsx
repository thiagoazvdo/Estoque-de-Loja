import React from 'react';
import Header from '../Header';
import './App.css';
import '../Header/Header.css';
import Button from '../../shared/Button';
import Container from '../../shared/Button/Container/Container';
import Input from '../../shared/Button/Input/Input';
import Table, { TableHeader } from '../../shared/Button/Table';
import Products from '../../shared/Button/Table/Table.mockdata';
import Form from '../../shared/Button/Form/Form';

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
       <Form title="Product form" onSubmit={console.log}>
        <Input 
          label="Name"
          placeholder="E.g.: Cookie"
        />
        <Input 
          label="Price"
          type="number"
          step="0.01"
          min="0"
          placeholder="E.g.: 1.25"
        />
        <Input 
          label="Stock"
          type="number"
          min="0"
          placeholder="E.g.:15"
        />
       </Form>
       <Button>
        Submit
       </Button>
      
      </Container>
    </div>
  );
}

export default App;
