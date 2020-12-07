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