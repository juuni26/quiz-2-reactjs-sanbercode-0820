class BangunDatar{
    constructor(){
        this._nama = "";
    }
    get nama(){
        return this._nama;
    }
    set nama(nama){
        this._nama = nama;
    }
    get luas(){
        return "";
    } 
    get keliling(){
        return "";
    }
}

const bangunDatar = new BangunDatar();

console.log(bangunDatar.nama)
console.log(bangunDatar.luas)
console.log(bangunDatar.keliling)


class Lingkaran extends BangunDatar {
    constructor(r){
        super();
        this._nama = "Lingkaran";
        this._r = r;
        this.PI = 22/7;
    }
    get r(){
        return this._r;
    }
    set r(value){
        this._r = value;
    }
    get luas(){
        return this.PI*this._r*this._r;
    }
    get keliling(){
        return this.PI*2*this._r;
    }
}


const lingkar = new Lingkaran(7);

console.log(lingkar.nama)

console.log(lingkar.r)
console.log(lingkar.luas)
console.log(lingkar.keliling)

// ganti jari2
lingkar.r = 14;
console.log(lingkar.r)
console.log(lingkar.luas)
console.log(lingkar.keliling)

class Persegi extends BangunDatar {
    constructor(s){
        super();
        this._nama = "Persegi";
        this._s = s;
    }
    get s(){
        return this._s;
    }
    set s(value){
        this._s = value;
    }
    get luas(){
        return this._s*this._s;
    }
    get keliling(){
        return 4*this._s;
    }
}


const persegi = new Persegi(2);

console.log(persegi.nama)

console.log(persegi.s)
console.log(persegi.luas)
console.log(persegi.keliling)

// ganti sisi
persegi.s = 10;
console.log(persegi.s)
console.log(persegi.luas)
console.log(persegi.keliling)