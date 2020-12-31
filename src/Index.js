import GoodItem from './js/GoodItem.js'
import List from './js/List.js'
import Cart from './js/Cart.js'
import GoodsList from './js/GoodList.js'
import ListLoad from '/sl_study/Jslvl2/src/js/ListLoad.js'
// import info from './js/info.js'


// class GoodItem {
//     name = ''
//     price = 0
//     img = ''
//     count = 1

//     constructor(name, price) {
//         this.name = name
//         this.price = price
//     }

//     inc() {
//         this.count++
//     }

//     dec() {
//         this.count--
//     }

//     getAddInCartBtn() {
//         const btn = document.createElement('div')
//         btn.classList.add('btn')
//         btn.innerHTML = 'Купить'

//         btn.addEventListener('click', () => {
//             const CartInstance = new Cart()
//             CartInstance.add(this)
//             console.log(CartInstance)
//         })

//         return btn
//     }

//     getMainTemplate() {
//         const { name, price, img } = this
//         const wrapper = document.createElement('div')
//         wrapper.classList.add('card')
//         wrapper.innerHTML = `
//         <div>
//           <div class="card__image">
//             <img src="${img}" />
//           </div>
//           <div class="card__meta">Товар: <span>${name}</span></div>
//           <div class="card__meta">Цена: <span>${price}</span></div>
//         </div>
//       `

//         wrapper.appendChild(this.getAddInCartBtn())

//         return wrapper
//     }

//     getMinusBtn() {
//         const btn = document.createElement('div')
//         btn.classList.add('btn')
//         btn.innerHTML = '-'

//         btn.addEventListener('click', () => {
//             const CartInstance = new Cart()
//             CartInstance.remove(this)
//             console.log(CartInstance)
//         })

//         return btn
//     }

//     getCartTemplate() {
//         const { name, price, count } = this
//         const wrapper = document.createElement('div')
//         wrapper.classList.add('cart__item')
//         wrapper.innerHTML = `
//         <span>${name}: ${price} x <input value="${count}" /> = ${price * count}</span>
//       `

//         const input = wrapper.querySelector('input')
//         input.addEventListener('input', event => {
//             const value = event.target.value
//             if (value) {
//                 this.count = +value
//                 const CartInstance = new Cart()
//                 if (this.count) {
//                     CartInstance.render()
//                 } else {
//                     CartInstance.remove(this)
//                 }
//             }
//         })

//         wrapper.appendChild(this.getMinusBtn())

//         return wrapper
//     }
// }

// class List {
//     items = []

//     constructor(items = []) {
//         this.items = items
//     }

//     findGood(good) {
//         return this.items.filter(item => item.name === good.name)[0]
//     }

//     add(item) {
//         const exists = this.findGood(item)
//         if (exists) {
//             exists.inc()
//         } else {
//             this.items.push(item)
//         }
//         this.render()
//     }

//     remove(item) {
//         const exists = this.findGood(item)
//         if (!exists) {
//             return
//         }

//         if (exists.count > 1) {
//             exists.dec()
//         } else {
//             this.items = this.items.filter(good => item.name !== good.name)
//         }
//         this.render()
//     }

//     render() {
//     }
// }

// class Cart extends List {
//     constructor(items) {
//         if (Cart._instance) {
//             return Cart._instance
//         }

//         super(items)
//         this.init()

//         Cart._instance = this
//     }

//     init() {
//         const block = document.createElement('div')
//         block.classList.add('cart')

//         const btn = document.createElement('div')
//         btn.innerHTML = 'Корзина'
//         btn.classList.add('btn')

//         const list = document.createElement('div')
//         list.classList.add('cart__list')

//         btn.addEventListener('click', () => {
//             list.classList.toggle('shown')
//         })

//         block.appendChild(btn)
//         block.appendChild(list)


//         const placeToRender = document.querySelector('header')
//         if (placeToRender) {
//             placeToRender.appendChild(block)
//         }

//         this.render()
//     }

//     getSumTemplate() {
//         const sum = this.items.reduce((sum, good) => {
//             return sum + good.price * good.count
//         }, 0)

//         const block = document.createElement('div')
//         block.classList.add('cart__sum')
//         block.innerHTML = `Суммарная цена: ${sum}`

//         return block
//     }

//     getEmptyTemplate() {
//         const block = document.createElement('div')
//         block.classList.add('cart__empty')
//         block.innerHTML = `Корзина пуста`

//         return block
//     }

//     render() {
//         const placeToRender = document.querySelector('.cart__list')
//         if (!placeToRender) {
//             return
//         }

//         placeToRender.innerHTML = ''

//         this.items.forEach(item => {
//             const template = item.getCartTemplate()
//             placeToRender.appendChild(template)
//         })

//         if (this.items.length) {
//             placeToRender.appendChild(this.getSumTemplate())
//         } else {
//             placeToRender.appendChild(this.getEmptyTemplate())
//         }
//     }
// }

// class GoodsList extends List {
//     constructor(items) {
//         super(items)
//     }

//     render() {
//         const placeToRender = document.querySelector('.card__list')
//         if (!placeToRender) {
//             return
//         }

//         placeToRender.innerHTML = ''

//         this.items.forEach(item => {
//             const template = item.getMainTemplate()
//             placeToRender.appendChild(template)
//         })
//     }
// }

// class ListLoad extends GoodItem {
//     _cartInstance = null
//     _pageCounter = 1
//     constructor(CartInstance) {
//         super()
//         this._cartInstance = CartInstance
//         this.iniShowMoreBtn()
//         let goodsPromise = this.fethGoods()
//         googPromise.then(() => {
//             this.render()
//         })
//     }

//     iniShowMoreBtn() {
//         const btn = document.querySelector('.showmore')
//         btn.addEventListerer('click', () => {
//             this.fetchGoods()
//                 .then(() => {
//                     this.render()
//                 })
//         })
//     }
//     hideShowMoreBtn() {
//         const btn = document.querySelector('.showmore')
//         btn.remove()
//     }

//     fetchGoods() {
//         const result = fetch(getMainTemplate)
//         return result
//             .then(res => {
//                 return res.json()
//             })
//             .then(data => {
//                 this._pageCounter++
//                 this.items.push(...data.data.map(cur => {
//                     return new GoodItem(cur, this._cartInstance)
//                 }))
//             })
//             .catch(e => {
//                 this.hideShowMoreBtn()
//                 console.log(e)
//             })
//     }

//     render() {
//         const placeToRender = document.querySelector('.card__list')
//         if (placeToRender) {
//             placeToRender.innerHTML = ''
//             this.items.forEach(good => {
//                 good.render(placeToRender)
//             })
//         }
//     }
// }


// const Good1 = new GoodItem('Apple SE 2020', 28000)
// const Good2 = new GoodItem('Apple SE', 10500)
// const Good3 = new GoodItem('Apple 11 256Gb', 60000)
// const Good4 = new GoodItem('Apple 12 256Gb', 80000)
// const Good5 = new GoodItem('Apple XS 256Gb', 50000)
// const Good6 = new GoodItem('Apple 8 256Gb', 40000)
// const Good7 = new GoodItem('Apple 11 128Gb', 55000)
// const Good8 = new GoodItem('Apple 12 128Gb', 75000)
// const Good9 = new GoodItem('Apple XS 128b', 45000)
// const Good10 = new GoodItem('Apple 8 128Gb', 35000)

// const GoodsListInstance = new GoodsList()
// GoodsListInstance.add(Good1)
// GoodsListInstance.add(Good2)
// GoodsListInstance.add(Good3)
// GoodsListInstance.add(Good4)
// GoodsListInstance.add(Good5)
// GoodsListInstance.add(Good6)
// GoodsListInstance.add(Good7)
// GoodsListInstance.add(Good8)
// GoodsListInstance.add(Good9)
// GoodsListInstance.add(Good10)
// GoodsListInstance.render()

// const CartInstance = new Cart()



// class info {
//     name() {



//     }


//     number() {


//     }


//     email() {
//         const emailUser = /[^\d\sA-Z]/gi;
//         alert("alice15@gmail.com".match(emailUser));
//         if (!emailUser) {
//             return
//         }
//         else () {

//         }
//     }



// }

