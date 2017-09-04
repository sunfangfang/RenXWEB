/**
 * Created by sff on 2016/10/28.
 */
$(function(){
    $(window).resize(function(){
        TBH();
    });
    function TBH() {
        var H=$(window).height();
        var NH = parseInt(H) -190;
        $(".tb_con").css("max-height", NH);
        var WW=$(window).width();
        if(WW<=830){
            $(".top_sel").css("margin-right","5px");
            $(".top_date").css("margin-right","5px");
            $(".top_src").css("width","260px");
            $(".top_sel select").css("width","90px");
        }
    }
    TBH();
    $(".suo_pic").hover(function(){
        var trH=$(this).offset().top;
        var tbH=parseInt($(".tb_con").offset().top)+parseInt($(".tb_con").height())-150;
        if(trH>tbH){
            $(this).next().css("top","-125px");
        }else{
            $(this).next().css("top","0px");
        }
        $(this).next().toggle();
    });
    $(".del").hover(function () {
        var trH=$(this).offset().top;
        var tbH=parseInt($(".tb_con").offset().top)+parseInt($(".tb_con").height())-150;
        if(trH>tbH){
            $(this).find(".del_box").css("top","-100px");
            $(this).find(".xl_arrow").css({"background":"url('../img/arr_down.png') no-repeat center center","top":"106px"});
        }else{
            $(this).find(".del_box").css("top","48px");
            $(this).find(".xl_arrow").css({"background":"url('../img/arr_up.png') no-repeat center center","top":"-15px"});
        }
        $(this).find(".del_box").toggle();
    });
});