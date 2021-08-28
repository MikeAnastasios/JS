class Goods2 extends Goods {
    constructor(a, b, c, d, e) {
        super(a, b, c, d);
        this.sale = e;
    }
    draw() {
        let div = super.draw();
        if (this.sale) {
            let salePic = document.createElement('div');
            salePic.innerHTML = 'sale';
            div.append(salePic);
        }
        return div;
    }
}