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
        $(".tb_con").css("height", NH);
        var WW=$(window).width();
        if(WW<=837){
            $(".i_ty").css("width","87px");
            $(".div_fdl").css("width","auto");
            $(".s_font").css("width","90px");
            $(".top_src").css("width","251px");
            $(".s_date").css("margin-left","5px");
            $(".d_date").css("margin-right","5px");
            $(".pag_choose").css("margin-left","0px");
            $(".prev").css({"margin-left":"0px","margin-right":"0px"});
        }
    }
    TBH();
    $(".use_photo").hover(function(){
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