export default class ListLoad extends GoodItem {
    _cartInstance = null
    _pageCounter = 1
    constructor(CartInstance) {
        super()
        this._cartInstance = CartInstance
        this.iniShowMoreBtn()
        let goodsPromise = this.fethGoods()
        googPromise.then(() => {
            this.render()
        })
    }

    iniShowMoreBtn() {
        const btn = document.querySelector('.showmore')
        btn.addEventListerer('click', () => {
            this.fetchGoods()
                .then(() => {
                    this.render()
                })
        })
    }
    hideShowMoreBtn() {
        const btn = document.querySelector('.showmore')
        btn.remove()
    }

    fetchGoods() {
        const result = fetch(getMainTemplate)
        return result
            .then(res => {
                return res.json()
            })
            .then(data => {
                this._pageCounter++
                this.items.push(...data.data.map(cur => {
                    return new GoodItem(cur, this._cartInstance)
                }))
            })
            .catch(e => {
                this.hideShowMoreBtn()
                console.log(e)
            })
    }

    render() {
        const placeToRender = document.querySelector('.card__list')
        if (placeToRender) {
            placeToRender.innerHTML = ''
            this.items.forEach(good => {
                good.render(placeToRender)
            })
        }
    }
}



const Good1 = new GoodItem('Apple SE 2020', 28000)
const Good2 = new GoodItem('Apple SE', 10500)
const Good3 = new GoodItem('Apple 11 256Gb', 60000)
const Good4 = new GoodItem('Apple 12 256Gb', 80000)
const Good5 = new GoodItem('Apple XS 256Gb', 50000)
const Good6 = new GoodItem('Apple 8 256Gb', 40000)
const Good7 = new GoodItem('Apple 11 128Gb', 55000)
const Good8 = new GoodItem('Apple 12 128Gb', 75000)
const Good9 = new GoodItem('Apple XS 128b', 45000)
const Good10 = new GoodItem('Apple 8 128Gb', 35000)

const GoodsListInstance = new GoodsList()
GoodsListInstance.add(Good1)
GoodsListInstance.add(Good2)
GoodsListInstance.add(Good3)
GoodsListInstance.add(Good4)
GoodsListInstance.add(Good5)
GoodsListInstance.add(Good6)
GoodsListInstance.add(Good7)
GoodsListInstance.add(Good8)
GoodsListInstance.add(Good9)
GoodsListInstance.add(Good10)
GoodsListInstance.render()

const CartInstance = new Cart()