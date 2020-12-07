

export default class GoodsList extends List {
    constructor(items) {
        super(items)
    }

    render() {
        const placeToRender = document.querySelector('.card__list')
        if (!placeToRender) {
            return
        }

        placeToRender.innerHTML = ''

        this.items.forEach(item => {
            const template = item.getMainTemplate()
            placeToRender.appendChild(template)
        })
    }
}

