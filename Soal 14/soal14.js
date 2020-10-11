const volumeBalok = (...plt) => {
    let [panjang,lebar,tinggi] = plt;
    return  `volume balok = ${panjang*lebar*tinggi}`
}

const volumeKubus = (s) => `volume kubus = ${s**3}` ;

console.log(volumeBalok(2,3,4));
console.log(volumeKubus(2));

console.log(volumeBalok(3,3,3));
console.log(volumeKubus(3));