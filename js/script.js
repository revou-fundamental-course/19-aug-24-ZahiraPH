// ini js
function validateForm() {
    const name = document.forms['message-form'] ['name-input'].value
    const angka = 11

    if (name == "") {
        document.getElementById("error-name").innerHTML = "Tidak boleh kosong!"

        return false
    } 

    setname(name)
    
    return false;
}


function setname(name) {
    document.getElementById("display-name").innerHTML = name;
    document.getElementById('error-name').innerHTML = ""
    
}

function formValidation() {
    //Ini cara ambil DOM
    let name = document.getElementById('your-name').value;
    let gender = document.getElementById('gender').value;
    let dob = document.getElementById('dob').value;
    let message = document.getElementById('message').value;
    // Ini kondisi pemisahnya
    // == artinya menyamakan. misal: apakah name ini sama dengan ''
    // (!=) tidak sama dengan
    if (name === '' || gender === '' || dob === '' || message === ''){
        alert('Harap isi form');
        // kondisi jika formnya kosong
        //document.getElementById('result').innerHTML = '-';
    }
    else {
        // alert('Form berhasil di submit');
        // bisa pakai innerHtml atau innerText
        // kalau tanggal pakai innerHTML (innerHTML=Date.now())
        // name bisa di rubah rubah
        // ini namanya DOM
        // kondisi jika formnya di isi
        //let resultText = `Nama: ${name}<br>Jenis Kelamin: ${gender}<br>Tanggal Lahir: ${dob}<br>Pesan: ${message}`;
        document.getElementById('result-name').innerText = name;
        document.getElementById('result-gender').innerText = gender;
        document.getElementById('result-dob').innerText = dob;
        document.getElementById('result-message').innerText = message;
    }
}

let indexSlide = 1;
showBanner(1);

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