window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animado');
    let posicion0bj1 = animacion.getBoundingClientRect().top;
    console.log(posicion0bj1);

    let tamanoDePantalla = window.innerHeight/2;

    if(posicion0bj1 < tamanoDePantalla){
        animacion.style.animation = 'mover 1s ease-out'
    }
})