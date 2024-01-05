export interface Product {
    id: number
    name: string
    price: number
    stock: number
}

const Products: Product[] = [
    {
        id: 1,
        name: 'Cookie',
        price: 4.50,
        stock: 20
    },
    {
        id: 2,
        name: 'Cake',
        price: 3.75,
        stock: 18
    },
    {
        id: 3,
        name: 'Pizza',
        price: 9.99,
        stock: 16
    },
    {
        id: 4,
        name: 'Ice Cream',
        price: 7.00,
        stock: 5
    },
    {
        id: 5,
        name: 'Donut',
        price: 1.75,
        stock: 30
    }
]

export default Products