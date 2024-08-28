// ini js

function formValidation() {
    //Ini cara ambil DOM
    let name = document.getElementById('name').value;
    // Ini kondisi pemisahnya
    // == artinya menyamakan. misal: apakah name ini sama dengan ''
    // (!=) tidak sama dengan
    if (name == ''){
        alert('Harap isi form');
        // kondisi jika formnya kosong
        document.getElementById('result').innerHTML = '-';
    }
    else {
        // alert('Form berhasil di submit');
        // bisa pakai innerHtml atau innerText
        // kalau tanggal pakai innerHTML (innerHTML=Date.now())
        // name bisa di rubah rubah
        // ini namanya DOM
        // kondisi jika formnya di isi
        document.getElementById('result').innerHTML = name;
    }
}

let indexSlide = 1;
showBanner(1):

function nextSlide(n) {
    showBanner (indexSlide += n);
}

function showBanner(indexBanner) {
    let listImage = document.getElementsByClassName('Banner-Image');
    // console.log('indexBanne:' + indexBanner);
    // console.log('listImage:' + listImage.length);
    if (indexBanner > listImage.length) indexSlide = 1;
    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index ++
    }

    //kenapa -1 karena semua bahasa pemrogaman dimulai dari 0
    listImage[indexSlide-1].style.display = 'block';
    // console.log(listImage);
}