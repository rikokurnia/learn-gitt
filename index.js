function pola(bulat) {
    let isi = '';
        for(let i = 1; i<=bulat+1; i++) {
            for (let j = 1; j<= bulat+2; j++) {
                 isi += '🐱‍🐉';
            }
            isi+='\n';
        }
            console.log(isi)
}

pola(5)