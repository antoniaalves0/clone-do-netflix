$('.owl-carousel').owlCarousel({
    loop:false, /* se vc quiser fazer o efeito de loop das imagens ficarem repetindo vc coloca true */
    margin:10,
    nav:true,
    responsive:{ /* a tela se adapta a qualquer tamanho */
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})