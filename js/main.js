$(document).ready(function(){
    // Menú lateral
    $('#burger').click(function(){
        $('#burger').toggleClass('abierto');
        $('.menu').toggleClass('abierto');
        $('.menu nav a').toggleClass('abierto');
        $('.menu nav hr').toggleClass('abierto');
    });
    // Smooth scroll
    $('a').on('click', function() {
        if(this.hash !== '') {
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    })
});

