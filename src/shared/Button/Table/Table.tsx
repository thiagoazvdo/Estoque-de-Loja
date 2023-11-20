import React from 'react';
import './Table.scss';
import './Table.mockdata';
import Product from './Table.mockdata';

const headers = [
    { key: 'name', value: 'Product'},
    { key: 'price', value: 'Price'},
    { key: 'stock', value: 'Stock'},
]


const Table = () => {
    return <table className="AppTable"> 
        <thead> 
            <tr>  
                {
                    headers.map(header => <th key={header.key}>{header.value}</th>)
                }
            </tr>
        </thead> 
        <tbody>
          {

          }
        </tbody>
    </table>
}

export default Table;