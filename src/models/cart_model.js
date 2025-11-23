import Item from "./item_model.js"

export default class Cart {
    constructor() {
        this._products = []
    }

    get items() {
        return this._products
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
        for(const item of this._products){
            total+= item.getSubTotal()
        }
        return total
    }

}