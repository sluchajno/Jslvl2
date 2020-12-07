export default class List {
    items = []

    constructor(items = []) {
        this.items = items
    }

    findGood(good) {
        return this.items.filter(item => item.name === good.name)[0]
    }

    add(item) {
        const exists = this.findGood(item)
        if (exists) {
            exists.inc()
        } else {
            this.items.push(item)
        }
        this.render()
    }

    remove(item) {
        const exists = this.findGood(item)
        if (!exists) {
            return
        }

        if (exists.count > 1) {
            exists.dec()
        } else {
            this.items = this.items.filter(good => item.name !== good.name)
        }
        this.render()
    }

    render() {
    }
}