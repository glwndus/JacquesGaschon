$(document).ready(function(){
    $(".main").mouseover(function(){
        $(this).children(".sub").stop().slideDown();
    });
    $(".main").mouseout(function(){
        $(this).children(".sub").stop().slideUp();
    });
    
    $(".mmain").click(function(){
        $(this).siblings().children(".msub").slideUp();
        $(this).children(".msub").slideToggle();
    });
   
    $(".mmain>a").click(function(event){
        event.preventDefault(); 
    });
    
    $("#ham").click(function(){
        $("#mnav").toggle();
    });
    
    function pcini(){
        // #mnav,#mback 의 style 속성자체를 들어냄
        $("#mnav, #mback").removeAttr("style");
    }
    
    // 화면 크기가 바뀔때
        // 화면 가로길이를 재고
        // 화면 가로길이가 1025px 초과일때 pcini실행
    $(window).resize(function(){
        var winW = $(this).outerWidth();
        if(winW > 1025){
            pcini();
        }
    });
    
    var cur = 0;
    var len = $(".slide").length;
    
    
    function sliding(){
        cur = cur +1;
        if(cur >= 3){
            cur = 0;
        }        
        $(".visual").stop().fadeOut();
        $(".visual").eq(cur).stop().fadeIn();
    }
    
    setInterval(sliding, 5000)
    
    setInterval(sliding1, 6000)
    
    $(".tabbtn").click(function(){
        var nth = $(this).index(".tabbtn");
        $(".tabcont").hide();
        $(".tabcont").eq(nth).show();
        
        $(".tabbtn").removeClass("tabactive");
        $(this).addClass("tabactive");
    });
    
    function sliding1(){
        cur = cur +1;
        if(cur >= len){
            cur = 0;
        }        
        $(".slide").stop().fadeOut();
        $(".slide").eq(cur).stop().fadeIn();
    }
    
    $(".prev").click(function(){
        sliding1(-1);
    });
    
    $(".next").click(function(){
        sliding1(1);
    });
    
});