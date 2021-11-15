$(document).ready( () => { 

    $('#mostrar').on('click',()=>{
        $(".circulo").show();
    })

    $('#ocultar').on('click',()=>{
        $(".circulo").hide();
    })

    $('#aparecer').on('click',()=>{
        $('.circulo').fadeIn(2000);
    })

    $('#prende').on('click',()=>{
        $(".circulo").toggle();
    })
    
    $("#transformar").on('click',function(){
        $(".circulo").animate({
            height: '-=40px',
            width: '-=40px'
        })
        .delay(2000)
        $(".circulo").animate({
            height: '+=40px',
            width: '+=40px'
        })
    })    
})