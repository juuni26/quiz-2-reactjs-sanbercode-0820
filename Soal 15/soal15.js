let warna = ["biru","merah","kuning","hijau"];

let dataBukuTambahan = {
    penulis : "john doe",
    tahunTerbit : 2020
};

let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172,
    warnaSampul : ["hitam"]
}

//gabungkanlah variable warna dengn attribut warna sampul, dan databukutambahan ke buku

buku.warnaSampul = [...buku.warnaSampul,...warna];
console.log(buku.warnaSampul);

buku = {...buku,...dataBukuTambahan};
console.log(buku);
