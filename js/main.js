function changePhoto() {
    let newPhoto = document.querySelector('.img1')
    newPhoto.src = "log/Frame (16).png"

    let newPhoto1 = document.querySelector('.img2')
    let newPhoto3 = document.querySelector('.img3')

    newPhoto3.src = "log/Frame (18).png"
    newPhoto1.src = "log/Frame (17).png"
}

function changePhoto2 () {
    let newPhoto1 = document.querySelector('.img2')
    let newPhoto = document.querySelector('.img1')
    let newPhoto3 = document.querySelector('.img3')

    newPhoto3.src = "log/Frame (18).png"
    newPhoto.src =  "log/Frame (20).png"
    newPhoto1.src = "log/Frame (21).png"
}
function changePhoto3 () {
    let newPhoto3 = document.querySelector('.img3')
    let newPhoto1 = document.querySelector('.img2')
    let newPhoto = document.querySelector('.img1')

    newPhoto.src =  "log/Frame (20).png"
    newPhoto1.src = "log/Frame (17).png"
    newPhoto3.src = "log/Frame (22).png"
}


//slider 
let slider = document.querySelector('.photo');
let btnPrev = document.querySelector('.prev');
let btnNext = document.querySelector('.next');

let imges =  ['Photo (1).png','Photo (2).png','Photo (3).png', 'Photo (4).png', 'Photo (5).png', 'Photo (6).png', "Photo (7).png"];

let i = 0;


btnPrev.onclick = () => {
    if (i <= 0) i = imges.length; 
    i--; 
    return setImg()
}

btnNext.onclick = () => {
    if (i >= imges.length - 1 ) i = -1; 
    i++; 
    return setImg()
}

function setImg() {
    return slider.setAttribute('src', 'images/' + imges[i]);
}

/*slider 2*/ 
let slider2 = document.querySelector('.photo2');
let btnNext2 = document.querySelector('.next2');
let btnPrev2 = document.querySelector('.prev2');

let imges2 =  ['Photo (1).png','Photo (2).png','Photo (3).png', 'Photo (4).png', 'Photo (5).png', 'Photo (6).png', "Photo (7).png"];


btnPrev2.onclick = () => {
    if (i <= 0) i = imges2.length; 
    i--; 
    return setImg2()
}

btnNext2.onclick = () => {
    if (i >= imges2.length - 1 ) i = -1; 
    i++; 
    return setImg2()
}

function setImg2() {
    return slider2.setAttribute('src', 'images/' + imges2[i]);
}


/*slider 3*/ 
let slider3 = document.querySelector('.photo3');
let btnNext3 = document.querySelector('.next3');
let btnPrev3 = document.querySelector('.prev3');

let imges3 =  ['Photo (1).png','Photo (2).png','Photo (3).png', 'Photo (4).png', 'Photo (5).png', 'Photo (6).png', "Photo (7).png"];


btnPrev3.onclick = () => {
    if (i <= 0) i = imges3.length; 
    i--; 
    return setImg3()
}

btnNext3.onclick = () => {
    if (i >= imges3.length - 1 ) i = -1; 
    i++; 
    return setImg3()
}

function setImg3() {
    return slider3.setAttribute('src', 'images/' + imges3[i]);
}