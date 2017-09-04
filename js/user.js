/**
 * Created by sff on 2016/9/26.
 */
$(function () {
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
    //分页选中效果
    $(".pages a").click(function(){
        $(".pages a").removeClass("page_check");
        $(this).addClass("page_check");
    });
    //拉黑与启用的显隐状态
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
    $(".open").hover(function () {
        var trH=$(this).offset().top;
        var tbH=parseInt($(".tb_con").offset().top)+parseInt($(".tb_con").height())-150;
        if(trH>tbH){
            $(this).find(".qy_box").css("top","-100px");
            $(this).find(".xl_arrow").css({"background":"url('../img/arr_down.png') no-repeat center center","top":"106px"});
        }else{
            $(this).find(".qy_box").css("top","48px");
            $(this).find(".xl_arrow").css({"background":"url('../img/arr_up.png') no-repeat center center","top":"-15px"});
        }
        $(this).find(".qy_box").toggle();
    });


});
