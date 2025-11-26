import Cart from './models/cart_model.js'
import Item from './models/item_model.js'

console.log('Welcome to your Shopee Cart!')
const item1 = new Item({ name: 'ferrari', price: 20.99, quantity: 1 })
const item2 = new Item({ name: 'lamborghini', price: 39.99, quantity: 3 })

const cart = new Cart()

cart.addItem(item1)
cart.addItem(item2)

const total = await cart.calculateTotal()

cart.items
console.log(await cart.calculateTotal())

// cart.deleteItem(item1.name)
// cart.deleteItem(item2.name)
cart.removeItem(item2.name,2)


cart.items
console.log(await cart.calculateTotal())
// console.log(item1.getSubTotal())
// console.log(item2.getSubTotal())