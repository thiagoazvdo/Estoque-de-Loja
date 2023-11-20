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
    }
]

export default Product