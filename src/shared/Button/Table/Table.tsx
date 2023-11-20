import React from 'react';
import './Table.scss';

const Table = () => {
    return <table className="AppTable"> {/* tabela */}
        <thead> {/* colunas */}
            <tr>   {/* colunas */}
                <th>Product</th> {/* coluna 1 */}
                <th >Price</th>   {/* coluna 2 */}
                <th className="right">Stock</th>   {/* coluna 3 */}
            </tr> {/* fechamento de colunas */}
        </thead> 
        <tbody> {/* corpo respectivo de cada coluna */}
            <tr> {/* linha 1 */}
                <td>Cookie</td> {/* dado da coluna 1 */}
                <td>$1.25</td>  {/* dado da coluna 2 */}
                <td className="right">23</td>     {/* dado da coluna 3 */}
            </tr> {/* fechamento de dados da linha 1 */}
            <tr>  {/* linha 2 */}
                <td>Milk</td>   {/* dado da coluna 1 */}
                <td>$3.50</td>  {/* dado da coluna 2 */}
                <td className="right">10</td>     {/* dado da coluna 3 */}
            </tr> {/* fechamento de dados da linha 2 */}
            <tr>  {/* linha 2 */}
                <td>Juicebox</td>   {/* dado da coluna 1 */}
                <td>$5.50</td>  {/* dado da coluna 2 */}
                <td className="right">15</td>     {/* dado da coluna 3 */}
            </tr> {/* fechamento de dados da linha 2 */}
            <tr>  {/* linha 2 */}
                <td>PopCorn</td>   {/* dado da coluna 1 */}
                <td>$4.00</td>  {/* dado da coluna 2 */}
                <td className="right">12</td>     {/* dado da coluna 3 */}
            </tr> {/* fechamento de dados da linha 2 */}
        </tbody>
    </table>
}

export default Table;