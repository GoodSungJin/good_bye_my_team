$(document).ready(function(){
    $(".content").mCustomScrollbar();

   //마우스 오버시 확대
    $(".D_quick_search").mouseenter(function(){
        $('.D_quick_search_sub').css("display","inline-block");

    });
    $(".D_quick_search").mouseout(function(){
        $('.D_quick_search_sub').css("display","none");
    });

    $(".D_memo").mouseenter(function(){
        $('.D_memo_sub').css("display","inline-block");

    });
    $(".D_memo").mouseout(function(){
        $('.D_memo_sub').css("display","none");
    });


    $(".D_translation").mouseenter(function(){
        $('.D_translation_sub').css("display","inline-block");

    });
    $(".D_translation").mouseout(function(){
        $('.D_translation_sub').css("display","none");
    });


    $(".D_plus").mouseenter(function(){
        $('.D_plus_sub').css("display","inline-block");

    });
    $(".D_plus").mouseout(function(){
        $('.D_plus_sub').css("display","none");
    });


    $(".D_tools").mouseenter(function(){
        $('.D_tools_sub').css("display","inline-block");
    });
    $(".D_tools").mouseout(function(){
        $('.D_tools_sub').css("display","none");
    });


    $(".D_music").mouseenter(function(){
        $('.D_music_sub').css("display","inline-block");

    });
    $(".D_music").mouseout(function(){
        $('.D_music_sub').css("display","none");
    });



    $(".D_bookmark").mouseenter(function(){
        $('.D_bookmark_sub').css("display","inline-block");

    });
    $(".D_bookmark").mouseout(function(){
        $('.D_bookmark_sub').css("display","none");
    });

    //사이드 아이콘 클릭 시 메뉴 출력
    
   

    $(".D_quick_search").click(function(){
        if ($(".D_sidebar_sub_quick_search").css("display") == "none"){
            $('.D_sidebar_sub').addClass('active');
        $(".D_sidebar_sub_test").not(".D_sidebar_sub_quick_search").css("display", "none");
        $(".D_sidebar_sub_quick_search").css("display","inline-block")
        
        }
        else{
            $(".D_sidebar_sub").removeClass('active');
            $(".D_sidebar_sub_quick_search").css("display","none")
        }
    });
    $(".D_tools").click(function(){
        $('.D_sidebar_sub').addClass('active');
        if ($(".D_sidebar_sub_tools").css("display")== "none"){
        $("div.D_sidebar_sub_test").not(".D_sidebar_sub_tools").css("display", "none")
        $(".D_sidebar_sub_tools").css("display","inline-block")
        
            
        }
        else{
            $(".D_sidebar_sub").removeClass('active');
            $(".D_sidebar_sub_tools").css("display","none")
        }
    });
    $(".D_memo").click(function(){
        $('.D_sidebar_sub').addClass('active');
        if ($(".D_sidebar_sub_memo").css("display")== "none"){
        $("div.D_sidebar_sub_test").not(".D_sidebar_sub_memo").css("display", "none")
        $(".D_sidebar_sub_memo").css("display","inline-block")
        
            
        }
        else{
            $(".D_sidebar_sub").removeClass('active');
            $(".D_sidebar_sub_memo").css("display","none")
        }
    });
    $(".D_bookmark").click(function(){
        $('.D_sidebar_sub').addClass('active');
        if ($(".D_sidebar_sub_bookmark").css("display")== "none"){
        $("div.D_sidebar_sub_test").not(".D_sidebar_sub_bookmark").css("display", "none")
        $(".D_sidebar_sub_bookmark").css("display","inline-block")
        
            
        }
        else{
            $(".D_sidebar_sub").removeClass('active');
            $(".D_sidebar_sub_bookmark").css("display","none")
        }
    });
    $(".D_translation").click(function(){
        $('.D_sidebar_sub').addClass('active');
        if ($(".D_sidebar_sub_translation").css("display")== "none"){
        $("div.D_sidebar_sub_test").not(".D_sidebar_sub_translation").css("display", "none")
        $(".D_sidebar_sub_translation").css("display","inline-block")
        
            
        }
        else{
            $(".D_sidebar_sub").removeClass('active');
            $(".D_sidebar_sub_transition").css("display","none")
        }
    });
    $(".D_music").click(function(){
        $('.D_sidebar_sub').addClass('active');
        if ($(".D_sidebar_sub_music").css("display")== "none"){
        $("div.D_sidebar_sub_test").not(".D_sidebar_sub_music").css("display", "none")
        $(".D_sidebar_sub_music").css("display","inline-block")
        
            
        }
        else{
            $(".D_sidebar_sub").removeClass('active');
            $(".D_sidebar_sub_music").css("display","none")
        }
    });
    $(".D_plus").click(function(){
        $('.D_sidebar_sub').addClass('active');
        if ($(".D_sidebar_sub_plus").css("display")== "none"){
        $("div.D_sidebar_sub_test").not(".D_sidebar_sub_plus").css("display", "none")
        $(".D_sidebar_sub_plus").css("display","inline-block")
        
            
        }
        else{
            $(".D_sidebar_sub").removeClass('active');
            $(".D_sidebar_sub_plus").css("display","none")
        }
    });
   
    


//사이드바 숨기기
    $(".D_hide_sidebar").click(function(){
        if ($('.D_sidebar').css("display") == "block"){
            $('.D_sidebar').hide("fast")
            }
            else{
                $('.D_sidebar').show("fast")
            }

            
    });

    $(".D_tools_sub2_timer").click(function(){
        $(".D_timer_sub").slideToggle("fast")
    });
    $(".D_tools_sub2_calc").click(function(){
        $(".D_calc_sub").slideToggle("fast")
    });
    $(".D_tools_sub2_papago").click(function(){
        $(".D_papago_sub").slideToggle("fast")
    });
    $(".D_tools_sub2_economy").click(function(){
        $(".D_economy_sub").slideToggle("fast")
    });


   


  (function() {
    var cx = '014254151773691373170:qurbynjwuqg';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();




//   $(".D_memo_load").click(function(e){
//     e.preventDefault()
    
//     var form_content = localStorage.getItem(D_memo_day);
//     console.log(form_content)
    // var split_data = form_content.split("&");
    // console.log(split_data)
    // console.log(form_content)
    
    // for ( var i in split_data ) {
    //     var content_data = split_data[i].split("=");
            
    //     var key = decodeURIComponent(content_data[0]);
    //     var data = decodeURIComponent(content_data[1]);
    //     console.log(key,data);
    //     $('#'+key).val(data);
             
    // }
    // return false;

// });
  



$(".D_memo_submit").click(function(){

        var D_memo_day = new Date();
        var memo_item = $('.D_memo_input').val()                               
        var form_content = $('.D_memo_form').serialize();
        
        localStorage.setItem(D_memo_day, form_content);
        $('.D_memo_form').append(
            "<div class='D_memo_box'>"+
            "<div class='D_memo_date'>"+"날짜"+":"+D_memo_day+"</div>"
            +"<div class='D_memo_content'>"+memo_item+"</div>"
            +"</div>"
        )

        

        return false;

});
    
  

 


//   var express = require('express');
//   var app = express();
//   var client_id = 'biWnm_EGxD53FCGrj9Dx';
//   var client_secret = 'KbeSMUrFT9';
//   var query = "번역할 문장을 입력하세요.";
//   app.get('/translate', function (req, res) {
//      var api_url = 'https://openapi.naver.com/v1/papago/n2mt';
//      var request = require('request');
//      var options = {
//          url: api_url,
//          form: {'source':'ko', 'target':'en', 'text':query},
//          headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
//       };
//      request.post(options, function (error, response, body) {
//        if (!error && response.statusCode == 200) {
//          res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
//          res.end(body);
//        } else {
//          res.status(response.statusCode).end();
//          console.log('error = ' + response.statusCode);
//        }
//      });
//    });
//    app.listen(5500, function () {
//      console.log('http://127.0.0.1:5500/translate app listening on port 5500!');
//    });
  

});