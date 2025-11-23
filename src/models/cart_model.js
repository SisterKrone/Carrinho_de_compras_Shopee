import Item from "./item_model"

export default class Cart {
    constructor(){
        this.items = []
    }

    get items(){
        return this.items
    }

    set items(item){
        if(typeof item !== Item){
            console.log(`The ${item} is not a valid Item`)
            return
        }
        this.items.push(item)
    }

}