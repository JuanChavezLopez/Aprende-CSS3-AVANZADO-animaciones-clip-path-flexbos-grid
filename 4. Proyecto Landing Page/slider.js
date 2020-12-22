let slider = document.querySelector('.slider');
let cajaTestimonio = document.querySelectorAll('.cont-slider');

let contador = 1;

let tamanoWidth = cajaTestimonio[0].clientWidth;
let intervalo = 3000;

setInterval(function(){
    slides();
}, intervalo)


function slides(){
    slider.style.transform = 'translateX('+ (-tamanoWidth * contador) +'px)';
    contador++;

    if(contador === cajaTestimonio.length){
        contador=0;
        setTimeout(function(){
            slider.style.transform = 'translateX(0)';
        }, intervalo)
    }
}
