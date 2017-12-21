
$('.nav-menu').tap(function(){
    $('.nav-slider').removeClass('flip-right');    
    $('.nav-mask').addClass('mask');
    $('.nav-slider').addClass('flip-left');    
});
$('.nav-mask').tap(function(){
    $('.nav-mask').removeClass('mask');
    $('.nav-slider').removeClass('flip-left');
    $('.nav-slider').addClass('flip-right');             
})
$('.back_1').tap(function(){
    $('.nav-mask').removeClass('mask');
    $('.nav-slider').removeClass('flip-left');
    $('.nav-slider').addClass('flip-right');
})
$('.nav-search').tap(function(){
    $('.tapSearch')[0].style.display = 'block';
    $('.header')[0].style.display = 'none';
})
$('.back').tap(function(){
    $('.tapSearch')[0].style.display = 'none';
    $('.header')[0].style.display = 'block';
})
$('.cancel').tap(function(){
    $('.tapSearch')[0].style.display = 'none';
    $('.header')[0].style.display = 'block';
})
$('.clear').tap(function(){
    $('.search-word').val('')
})


