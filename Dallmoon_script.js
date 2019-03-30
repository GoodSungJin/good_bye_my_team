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
            $('.D_hide_sidebar').attr('src','./images/enterence.png');
            }
            else{
                $('.D_sidebar').show("fast")
                $('.D_hide_sidebar').attr('src','./images/exit.png');
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
    
//     var form_content = localStorage.getItem(key);
//     console.log(form_content)
    
    
//     for ( var i in form_content ) {
//         var content_data = form_content[i].split("=");
            
//         var key = decodeURIComponent(content_data[0]);
//         var data = decodeURIComponent(content_data[1]);
//         console.log(key,data);
//         $('#'+key).val(data);
//         $('.D_memo_form').append(
//             "<div class='D_memo_box'>"+
//             "<div class='D_memo_date'>"+"날짜"+":"+key+"</div>"
//             +"<div class='D_memo_content'>"+data+"</div>"
//             +"</div>"
//         )
             
//     }
//     return false;

// });
  



// $(".D_memo_submit").click(
//     function(){

//         var D_memo_day = new Date();
//         var memo_item = $('.D_memo_input').val()                               
//         var form_content = $('.D_memo_form').serialize();
        
//         localStorage.setItem(D_memo_day, form_content);
//         $('.D_memo_form').append(
//             "<div class='D_memo_box'>"+
//             "<div class='D_memo_date'>"+"날짜"+":"+D_memo_day+"</div>"
//             +"<div class='D_memo_content'>"+"내용"+":"+memo_item+"</div>"
//             +"</div>"
//         )

        

//         return false;

// });
//메모--------------------------------------

window.onload=function(e) {
    e.preventDefault();
    
    var D_memo = localStorage.getItem("D_memo")
content_dict = JSON.parse(D_memo);
   

//사전형 전체데이터를 하나씩 꺼내서 처리하기.
for (var key in content_dict) {
    //해당 사전형 변수에서 하나의 값을 선택하여 꺼내기
    var item = 
    "<div class='D_memo_box'>"+
              "<span class='D_memo_date' data-name='D_memo_date'>" + content_dict[key]["D_memo_date"] + "</span>" +
              "<span class='D_memo_content'>" + content_dict[key]["D_memo_input"] + "</span>" +
              '<button type="button" class="close D_close" data-dismiss="modal" aria-label="Close">'+
              '<span aria-hidden="true">&times;</span>'+
              '</button>'
              "</div>"
              
    $('.D_memo_form').append(item)

    
};
var D_bookmark = localStorage.getItem("D_bookmark")
content_dict_b = JSON.parse(D_bookmark);
   

//사전형 전체데이터를 하나씩 꺼내서 처리하기.
for (var key in content_dict_b) {
    //해당 사전형 변수에서 하나의 값을 선택하여 꺼내기
    var item = 
    "<dt class='D_dt_list'><a href='"+content_dict_b[key]["D_site_url"]+"'"+">"+content_dict_b[key]["D_sitename"]+"</a>"+"<div class='D_site_url_hide'>"+content_dict_b[key]["D_sitename"]+"</div>"+
              '<button type="button" class="close D_close_b" data-dismiss="modal" aria-label="Close">'+
              '<span aria-hidden="true">&times;</span>'+
              '</button>'
              
              
    $('.D_bookmark_list').append(item)
}



};

function Todo_input(D_memo_day,memo_item){
    var line = $('.D_memo_box')
    var data = {};
    line.each(function(index) {

      data[index] = {
        D_memo_date: $('.D_memo_box:nth-child(' + (Number(index) +2) + ") span:nth-child(1)").text(), 
        D_memo_input: $('.D_memo_box:nth-child(' + (Number(index) +2) + ") span:nth-child(2)").text(), 
        
        }
        
    })
    localStorage.setItem('D_memo', JSON.stringify(data));
    
    };


  
    $(".D_memo_submit").click(function(e){
      e.preventDefault();
      
      var D_memo_day = new Date();
      var memo_item = $("input[name='D_memo_input']").val()
        if (memo_item == '') {
                    alert ("내용을 입력해주세요."); return false ;
                }
                
      
      $('.D_memo_form').append(
        "<div class='D_memo_box'>"+
        "<span class='D_memo_date' data-name='D_memo_date'>"+"날짜"+":"+D_memo_day+"</span>"
        +"<span class='D_memo_content'>"+"내용"+":"+memo_item+"</span>"
        +'<button type="button" class="close D_close" data-dismiss="modal" aria-label="Close">'+
        '<div aria-hidden="true">&times;</div>'+
        '</button>'
        +"</div>"
    )
    Todo_input(D_memo_day,memo_item);
       return false;
    });         
    $('.D_memo_form').on(
        'click','.D_close',function(){
          $(this).parent().remove();
          Todo_input();
        }
        
      )
         
    
    //타이머
        
             function timer(seconds) {
                   seconds
                   var a = setInterval(function() {
                       if (seconds >= 1) {
                           seconds = seconds - 1
                       }
                       if (seconds < 1) {
                       clearInterval(a)
                   }
                   $('.D_timer_input').val(seconds)
                   }, 1000)
                   $('.D_stop').click(function(){
                       clearInterval(a)
                   })
                   $('.D_reset').click(function(){
                       $('.D_timer_input').val(0)
                       clearInterval(a)
                   })
               }


               $('.D_start').click(function(){
                   timer($('.D_timer_input').val())
               })
                

//북마크-----------------------------------------------------

                $('.D_bookmark_save').click(function(){
                    var D_sitename = $('input[name="D_sitename"]').val()
                    var D_site_url = $('input[name="D_site_url"]').val()

                    $('.D_bookmark_list').append(
                        "<dt class='D_dt_list'><a href='"+D_site_url+"'"+">"+D_sitename+"</a>"+"<div class='D_site_url_hide'>"+D_site_url+"</div>"+'<button type="button" class="close D_close_b" data-dismiss="modal" aria-label="Close">'+
                        '<span aria-hidden="true">&times;</span>'+
                        '</button>'
                    )
                    bookmark_input(D_sitename,D_site_url)
                    
                })

                function bookmark_input(D_sitename,D_site_url){
                    var line = $('.D_dt_list')
                    var data = {};
                    line.each(function(index) {
                
                      data[index] = {
                        D_sitename: $('.D_dt_list:nth-child(' + (Number(index) +1) + ") a:nth-child(1)").text(), 
                        D_site_url: $('.D_dt_list:nth-child(' + (Number(index) +1) + ") div:nth-child(2)").text()
                        
                        }
                        
                    })
                    localStorage.setItem('D_bookmark', JSON.stringify(data));
                    
                    };

            
                //     window.onload=function(e) {
                //         e.preventDefault();
                        
                //         var D_bookmark = localStorage.getItem("D_bookmark")
                //     content_dict_b = JSON.parse(D_bookmark);
                       
                    
                //     //사전형 전체데이터를 하나씩 꺼내서 처리하기.
                //     for (var key in content_dict_b) {
                //         //해당 사전형 변수에서 하나의 값을 선택하여 꺼내기
                //         var item = 
                //         "<dt class='D_dt_list'><a href='"+content_dict_b[key]["D_site_url"]+"'"+">"+content_dict_b[key]["D_sitename"]+"</a>"+"<div class='D_site_url_hide'>"+content_dict_b[key]["D_sitename"]+"</div>"+
                //                   '<button type="button" class="close D_close_b" data-dismiss="modal" aria-label="Close">'+
                //                   '<span aria-hidden="true">&times;</span>'+
                //                   '</button>'
                                  
                                  
                //         $('.D_bookmark_list').append(item)
                //     }
                // }; 
                    $('.D_bookmark_list').on(
                        'click','.D_close_b',function(){
                          $(this).parent().remove();
                          bookmark_input();
                        }
                      )
        

 

              
  

});



