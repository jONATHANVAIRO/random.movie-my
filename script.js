const peliculas = [



{
titulo:"Una batalla tras otra",
poster:"https://pics.filmaffinity.com/one_battle_after_another-992235034-mmed.jpg",
link:"https://play.hbomax.com/movie/bebe611d-8178-481a-a4f2-de743b5b135a"
},
{
titulo:"PROJECT HAIL MARY",
poster:"https://pics.filmaffinity.com/Proyecto_Fin_del_mundo-664968280-large.jpg",
link:""
},
{
titulo:"In the mood for love",
poster:"https://m.media-amazon.com/images/I/61VdSeKt8SL._AC_UF894,1000_QL80_.jpg",
link:"https://m.ok.ru/video/4198068652660"
},


{
titulo:"tHE WORST PERSON IN THE WORLD",
poster:"https://m.media-amazon.com/images/I/711SfXTdjsL._AC_UF894,1000_QL80_.jpg",
link:""
},
{
titulo:"HAMNET",
poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2SrMQ-MzYgp8_IVmZXb4hR2E_pT5e8w0HIW-j4vW6U9V11Fw36RrUalCtyHFqOSvi6l2wSkTTiZKDnNe8t1FtDYof0sbmEF5LooWCLw&s=10",
link:""
},


{
titulo:"Valor Sentimental",
poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9-2IML2pHELLggTERQ9hyGYeNs18AnmdBUH6q23czATskVdA_w83P8NlSGvCDTk4WMCHe95YgBt7dQh-7mlt-fsQqikP1CR_46GgbrA&s=10"
},

{
titulo:"El Drama",
poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR48QvadpBoQfQ9h99q3W6U9ffbal835sDfUG50C2e50LA_CWGb9VsNZRsDElEbpCEVK22wBUKTjsbAkAaqk6eRgtkSzK5XgVGKkIdwWkc&s=10"
}

];


const carousel = document.getElementById("carousel");

peliculas.forEach(p => {

carousel.innerHTML += `
<div class="swiper-slide">
<img src="${p.poster}">
</div>
`;

});

new Swiper(".mySwiper", {

slidesPerView:2,
spaceBetween:20,
loop:true,

grabCursor:true,

navigation: {
nextEl: ".swiper-button-next",
prevEl: ".swiper-button-prev"
},

breakpoints: {

0: {
slidesPerView:2
},

600: {
slidesPerView:3
},

900: {
slidesPerView:4.3
}

}

});

function randomMovie(){

const random = Math.floor(Math.random()*peliculas.length);

const poster = document.getElementById("posterGrande");

poster.classList.remove("animar");

setTimeout(()=>{

poster.src = peliculas[random].poster;
document.getElementById("titulo").innerText =
peliculas[random].titulo;

document.getElementById("verPeli").href =
peliculas[random].link;

poster.classList.add("animar");

},100);

}
