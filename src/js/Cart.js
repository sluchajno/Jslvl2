export default class Cart extends List {
    constructor(items) {
        if (Cart._instance) {
            return Cart._instance
        }

        super(items)
        this.init()

        Cart._instance = this
    }

    init() {
        const block = document.createElement('div')
        block.classList.add('cart')

        const btn = document.createElement('div')
        btn.innerHTML = 'Корзина'
        btn.classList.add('btn')

        const list = document.createElement('div')
        list.classList.add('cart__list')

        btn.addEventListener('click', () => {
            list.classList.toggle('shown')
        })

        block.appendChild(btn)
        block.appendChild(list)


        const placeToRender = document.querySelector('header')
        if (placeToRender) {
            placeToRender.appendChild(block)
        }

        this.render()
    }

    getSumTemplate() {
        const sum = this.items.reduce((sum, good) => {
            return sum + good.price * good.count
        }, 0)

        const block = document.createElement('div')
        block.classList.add('cart__sum')
        block.innerHTML = `Суммарная цена: ${sum}`

        return block
    }

    getEmptyTemplate() {
        const block = document.createElement('div')
        block.classList.add('cart__empty')
        block.innerHTML = `Корзина пуста`

        return block
    }

    render() {
        const placeToRender = document.querySelector('.cart__list')
        if (!placeToRender) {
            return
        }

        placeToRender.innerHTML = ''

        this.items.forEach(item => {
            const template = item.getCartTemplate()
            placeToRender.appendChild(template)
        })

        if (this.items.length) {
            placeToRender.appendChild(this.getSumTemplate())
        } else {
            placeToRender.appendChild(this.getEmptyTemplate())
        }
    }
}