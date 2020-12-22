window.addEventListener('scroll', function(){
    let animacion1 = document.getElementById('ilustracion1');
    let posicion1 = animacion1.getBoundingClientRect().top;

    let animacion2 =this.document.querySelectorAll('.card-acerca');
    posicion2 = animacion2[0].getBoundingClientRect().top;

    let tamanoPantalla = window.innerHeight/4;

    if(posicion1 < tamanoPantalla){
        animacion1.style.animation = 'imagenes 1s';
    }

    if(posicion2 < tamanoPantalla){
        animacion2[0].style.animation = 'animacion2 .5s';
        animacion2[1].style.animation = 'animacion2 .5s .5s';
        animacion2[2].style.animation = 'animacion2 .5s 1s';
    }
})