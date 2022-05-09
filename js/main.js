/* main js */

$(document).ready(function(){
    $(".content1 > section").addClass("on");

    // //브라우저의 높이갚을 main의 높이값으로
    // var ht = $(window).height();
    // $("#container > div.content1").height(ht);

    // $(window).resize(function(){
    //     var ht = $(window).height();
    //     $("#container > div.content1").height(ht);
    // })

    //마우스 휠을 내리면
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        var ht = $(window).height()
        //console.log(scroll);

        //헤더 그림자 생성
        if(scroll > 0) {
            $("header").addClass("shadow");
        }else{
            $("header").removeClass("shadow");
        };
        

        //효과
        // if(scroll >= 0 && scroll < 432){
        //     console.log("성공")
        //     $(".content1 > section").addClass("on");
        // }
        if(scroll >= 0){
            $(".content1 > section").addClass("on");
        }
        if(scroll >= 540){
            $(".content2 > section").addClass("on");
        }
        if(scroll >= 1380){
            $(".content3 > section").addClass("on");
        }
        if(scroll >= 2030){
            $(".content4 > section").addClass("on");
        }
        if(scroll >= 2920){
            $(".content5 > section").addClass("on");
        }
        if(scroll >= 4000){
            $(".content6 > section").addClass("on");
        }
        if(scroll >= 5080){
            $(".content7 > section").addClass("on");
        }
        if(scroll >= 6160){
            $(".content8 > section").addClass("on");
        }

    })



})