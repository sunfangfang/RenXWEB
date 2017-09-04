/**
 * Created by sff on 2016/9/21.
 */
$(function(){
    $(window).resize(function() {
        NavH();
    });
    function NavH() {
        var H=$(window).height();
        var W=$(window).width();
        var NH = parseInt(H) -70;
        var CW=parseInt(W) -249;
        $("#nav").css("height", NH);
        $(".con").css({"height":NH,"width":CW});
        $("#if_con").css("height", NH);
    }
    NavH();
//    通知栏滚动显示效果
    var x=10;
    var titleScoll=function(){
        x--;
        if($(".long").width()+x<=455){
            x=5;
            clearInterval(timerId);
            setTimeout(function(){
                timerId=setInterval(titleScoll,20);
            },5000)
        }
        $(".long").css("marginLeft",x+'px');
    };
    var timerId=setInterval(titleScoll,20);
//    头部导航点击效果
    $(".link_img").click(function(){
        $(".link_img").removeClass("top_check");
        $(this).addClass("top_check");
    });
    $(".link_img").each(function(i){
        $(this).data("index",i);
    });
    $(".link_img").hover(function(){
        var i=$(this).data("index");
        $($(".link_alt")[i]).toggle();
    });

//    左侧导航点击事件
    $(".nav_fir>li>.li_contain").each(function(i){
        $(this).data("index",i);
    });
    var pre;
    $(".nav_fir>li>.li_contain").click(function(){
        if($(this).data("index")==pre){
            $(this).toggleClass("nav_check");
            $(this).parent().find(".nav_sec").slideToggle();
            $(this).find(".nav_dir").toggleClass("dir_up");
        }else{
            pre=$(this).data("index");
            $(".nav_fir li>.li_contain").removeClass("nav_check");
            $(this).addClass("nav_check");
            $(".nav_sec").slideUp();
            $(this).parent().find(".nav_sec").slideDown();
            $(".nav_fir>li>.li_contain>.nav_dir").removeClass("dir_up");
            $(".nav_thr").slideUp();
            $(this).find(".nav_dir").addClass("dir_up");
        }
    });

    $(".nav_sec>li>.li_contain").each(function(i){
        $(this).data("index",i);
    });
    var pre1;
    $(".nav_sec>li>.li_contain").click(function(){
        if($(this).data("index")==pre1){
            $(this).toggleClass("nav_check");
            $(this).parent().find(".nav_thr").slideToggle();
            $(this).find(".nav_dir").toggleClass("dir_up");
        }else{
            pre1=$(this).data("index");
            $(".nav_fir li>.li_contain").removeClass("nav_check");
            $(this).addClass("nav_check");
            $(".nav_thr").slideUp();
            $(this).parent().find(".nav_thr").slideDown();
            $(".nav_sec>li>.li_contain>.nav_dir").removeClass("dir_up");
            $(this).find(".nav_dir").addClass("dir_up");
        }
    });

    $(".nav_thr>li>.li_contain").click(function(){
        $(".nav_fir li>.li_contain").removeClass("nav_check");
        $(".nav_thr>li>.li_contain").removeClass("nav_check1");
        $(this).addClass("nav_check1");
    });

});