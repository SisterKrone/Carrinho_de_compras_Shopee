import Item from "./item_model.js"

export default class Cart {
    constructor() {
        this._products = []
    }

    get items() {
        console.log('Shopee cart list: ')
        this._products.forEach((item, index) => {
            console.log(`${index+1}. ${item.name} - R$ ${item.price}| ${item.quantity} | Subtotal: ${item.getSubTotal().toFixed(2)}`)
        })

        return 
    }

    addItem(item) {
        if (!(item instanceof Item)) {
            console.log(`The ${item} is not a valid Item`)
            return
        }
        this._products.push(item)
    }

    async calculateTotal() {
        // const subTotals = await Promise.all(
        //     this._products.map(item => item.getSubTotal())
        // )
        // return subTotals.reduce((previusValue, currentValue) => previusValue + currentValue, 0)
        let total = 0
        for (const item of this._products) {
            total += item.getSubTotal()
        }
        return `Total: ${total}`
    }

    deleteItem(itemName) {
        this._products.map((item, index) => {
            if (item.name === itemName) {
                this._products.splice(index, 1)
            }
        })
    }

}