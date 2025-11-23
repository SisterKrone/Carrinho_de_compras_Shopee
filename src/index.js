import Item from './models/item_model.js'

console.log('Welcome to your Shopee Cart!')
const item1 = new Item({ name: 'ferrari', price: 20.99, quantity: 1 })
const item2 = new Item({ name: 'lamborghini', price: 39.99, quantity: 3 })


console.log(item1.getSubTotal())
console.log(item2.getSubTotal())