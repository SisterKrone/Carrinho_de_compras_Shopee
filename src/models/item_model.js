export default class Item {
    constructor({ name, price, quantity }) {
        this._name = name
        this._price = price
        this._quantity = quantity
    }

    get name() {
        return this._captalize(this._name)
    }

    get price() {
        return this.price
    }

    get quantity() {
        return this._quantity
    }

    set quantity(value) {
        if (typeof value !== "number" || !Number.isInteger(value)) {
            console.log('Você deve passar um valor numérico inteiro')
            return
        }

        this._quantity = value

    }

    _captalize(value) {
        return `${value.charAt(0).toUpperCase()}${value.slice(1)}`
    }

    getSubTotal() {
        return this._price * this._quantity
    }
}