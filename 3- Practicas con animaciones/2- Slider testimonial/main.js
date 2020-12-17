let slider = document.querySelector('.slider-contenedor');
let sliderInd = document.querySelectorAll('.slider-test');
let contador =1;
let tamanoWidth = sliderInd[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function(){
    tamanoWidth = sliderInd[0].clientWidth;
});

setInterval(function tiempo(){
    slides();
}, intervalo);

function slides(){
    slider.style.transform = 'translate('+ (- tamanoWidth * contador) +'px )';
    slider.style.transition = 'transform 1s';
    contador++;

    if(contador == sliderInd.length){
        contador = 0;
        // esta funcion hace que regrese de golpe, y no se note la transition
        setTimeout(function(){
            slider.style.transform ='translate(0px)'
            slider.style.transition = 'transform 0s'
        }, intervalo);
    }
}