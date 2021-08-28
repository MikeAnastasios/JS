class Goods {
    constructor(a, b, c, d) {
        this.name = a;
        this.amount = b;
        this.image = c;
        this.count = d;
    }
    draw() {
        let div = document.createElement('div');

        let namePic = document.createElement('h4');
        namePic.innerText = this.name;
        div.append(namePic);

        let imgPic = document.createElement('img');
        imgPic.src = this.image;
        div.append(imgPic);

        let amountPic = document.createElement('p');
        amountPic.innerText = this.amount;
        div.append(amountPic);

        let countPic = document.createElement('p');
        countPic.innerText = this.count;
        div.append(countPic);

        return div;
    }
}

