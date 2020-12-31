import Cart from '/js/Cart.js'
export default class GoodItem {
    name = ''
    price = 0
    img = ''
    count = 1

    constructor(name, price) {
        this.name = name
        this.price = price
    }

    inc() {
        this.count++
    }

    dec() {
        this.count--
    }

    getAddInCartBtn() {
        const btn = document.createElement('div')
        btn.classList.add('btn')
        btn.innerHTML = 'Купить'

        btn.addEventListener('click', () => {
            const CartInstance = new Cart()
            CartInstance.add(this)
            console.log(CartInstance)
        })

        return btn
    }

    getMainTemplate() {
        const { name, price, img } = this
        const wrapper = document.createElement('div')
        wrapper.classList.add('card')
        wrapper.innerHTML = `
        <div>
          <div class="card__image">
            <img src="${img}" />
          </div>
          <div class="card__meta">Товар: <span>${name}</span></div>
          <div class="card__meta">Цена: <span>${price}</span></div>
        </div>
      `

        wrapper.appendChild(this.getAddInCartBtn())

        return wrapper
    }

    getMinusBtn() {
        const btn = document.createElement('div')
        btn.classList.add('btn')
        btn.innerHTML = '-'

        btn.addEventListener('click', () => {
            const CartInstance = new Cart()
            CartInstance.remove(this)
            console.log(CartInstance)
        })

        return btn
    }

    getCartTemplate() {
        const { name, price, count } = this
        const wrapper = document.createElement('div')
        wrapper.classList.add('cart__item')
        wrapper.innerHTML = `
        <span>${name}: ${price} x <input value="${count}" /> = ${price * count}</span>
      `

        const input = wrapper.querySelector('input')
        input.addEventListener('input', event => {
            const value = event.target.value
            if (value) {
                this.count = +value
                const CartInstance = new Cart()
                if (this.count) {
                    CartInstance.render()
                } else {
                    CartInstance.remove(this)
                }
            }
        })

        wrapper.appendChild(this.getMinusBtn())

        return wrapper
    }
}