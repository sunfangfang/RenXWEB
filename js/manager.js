/**
 * Created by sff on 2016/9/27.
 */
$(function(){
    //表格高度
    $(window).resize(function() {
        TBH();
    });
    function TBH() {
        var H=$(window).height();
        var NH = parseInt(H) -190;
        $(".tb_con").css("height", NH);
    }
    TBH();
    //删除的显隐状态
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
    $(".close").hover(function () {
        var trH=$(this).offset().top;
        var tbH=parseInt($(".tb_con").offset().top)+parseInt($(".tb_con").height())-150;
        if(trH>tbH){
            $(this).find(".lh_box").css("top","-100px");
            $(this).find(".xl_arrow").css({"background":"url('../img/arr_down.png') no-repeat center center","top":"106px"});
        }else{
            $(this).find(".lh_box").css("top","48px");
            $(this).find(".xl_arrow").css({"background":"url('../img/arr_up.png') no-repeat center center","top":"-15px"});
        }
        $(this).find(".lh_box").toggle();
    });
});
