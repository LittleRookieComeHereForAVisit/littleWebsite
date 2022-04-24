var imgs = $('.rotation img');
var spans = $('.btns span');
var index = 0;
var timebar;
imgs.eq(index).css('left',0);
function startInterval(){
    timebar = setInterval(change,3000);
}
startInterval();
function change(fn){
    var num = 0;
    function end(){
        num++;
        if(num === 2 && fn)
            fn();
        
    }
    imgs.eq(index).stop(true).animate({left:-548},500,end);
    index++;
    if(index >= 9){
        index = 0;
    }
    dealFn(end);
}
function dealFn(end){
    imgs.eq(index).css('left',548).stop(true).animate({left: 0},500,end);
    
    spans   
        .eq(index).addClass('choose')
        .siblings().removeClass('choose');
}

$('.next').click(function(){
    clearInterval(timebar);
    change(startInterval);
})
$('.prev').click(function(){
    clearInterval(timebar);
    var num = 0;
    function end(){
        num++;
        if(num === 2 )
            startInterval();
    }
    imgs.eq(index).stop(true).animate({left: 548},500,end);
    index--;
    if(index < 0){
        index = 8;
    }
    imgs.eq(index).css('left',-548).stop(true).animate({left:0},500,end)
    spans   
        .eq(index).addClass('choose')
        .siblings().removeClass('choose');
})
spans.click(function(){
    clearInterval(timebar);
    var num = 0;
    function end(){
        num++;
        if(num === 2 )
            startInterval();
    }
    imgs.eq(index).stop(true).animate({left: 548},500,end);
    index = $(this).index();
    if(index < 0){
        index = 8;
    }
    imgs.eq(index).css('left',-548).stop(true).animate({left:0},500,end)
    spans   
        .eq(index).addClass('choose')
        .siblings().removeClass('choose');
})