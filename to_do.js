

var slideIndex = 1;
showSlides(slideIndex);

// dot controller
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// slide 설정
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}



    // 리얼타임을 화면에 표시---------------------------------------------------------------------
    function updateClock() {
        var currentTime = new Date();
        var currentHours = currentTime.getHours();
        var currentMinutes = currentTime.getMinutes();
        var currentSeconds = currentTime.getSeconds();

        // 시계 표기 방법에 대한 여러 환경설정------------------------------------------------------  

        // Pad the minutes and seconds with leading zeros, if required
        currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
        currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

        // Choose either "AM" or "PM" as appropriate
        var timeOfDay = (currentHours < 12) ? "AM" : "PM";

        // Convert the hours component to 12-hour format if needed
        currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;

        // Convert an hours component of "0" to "12"
        currentHours = (currentHours == 0) ? 12 : currentHours;

        // 실제 화면에 표시하는 변수
        var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
        var ampmTime = timeOfDay;

        // html에 매핑
        $(".clock").html(
            '<span class="tictok">' + currentTimeString + '</span>' + '<span class="ampm">' +
            ampmTime + '</span>'
            );
    }
    // 1초마다 시간을 화면에 표기
    $(document).ready(function () {
        setInterval('updateClock()', 1000);
    });

    // 날짜 표기
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth()+1;
    var day = currentDate.getDate();

    // 날짜를 html에 매핑
    $('.date').html('<p class="current_date">' + year +'.'+month+'.'+day+'</p>');
    
     

    // var list_item = '<div class="postit"><p class= "postit_text"></p><p class = "delete_postit">X</p></div>';
    var list_item = '<div class="postit"><div id="dragPostIt" class= "postit_text" draggable="true"><p class = "delete_postit">X</p></div></div>';
    // <p class = "delete_postit">왜 여기기</p>

    //로컬스토리지
    storage_key = "mytodos";
        function saveTodo () {
            var data = {};
            var todos = $('.postit_text');
            todos.each(function(index) {
                // data[index] = [$(this).attr('data-value'), $(this).attr('class'),$(this).siblings().attr('class')];
                data[index] = [$(this).attr('data-value'), $(this).attr('class')];
            });
            localStorage.setItem(storage_key, JSON.stringify(data));
        }

        function loadTodo () {
            var todos = localStorage.getItem(storage_key);
            todos = JSON.parse(todos);
            for(var key in todos) {
                var value = todos[key][0];
                var class_value = todos[key][1];
                var class_delete = todos[key][2];
                sample_item = $(list_item).clone();
                sample_item.find('.postit_text').append(value);
                sample_item.find('.postit_text').attr("data-value",value);
                sample_item.find('.postit_text').attr("class",class_value);
                // sample_item.find('.delete_postit').attr("class",class_delete);
                $('.postit_wrapper').append(sample_item);
            }
            if ($('.postit_text').length > 4) {
                $('.to_do_text').css('visibility','hidden');
            }
        }
        
    // 엔터키 입력 시 포스트잇이 생기고 to-do 내용 입력
     $(document).ready(function () {
        loadTodo();

        // load 하였을 때 클래스가 덮어써지는 문제 해결
        if($('.postit_text').length == 1){
            count = 1;
        }else if($('.postit_text').length == 2){
            count = 2;
        }else if($('.postit_text').length == 3){
            count = 3;
        }else if($('.postit_text').length == 4){
            count = 4;
        }
        else{
            count = 0;
        }

        // 엔터키 입력 시 to do 추가
        $('.to_do_text').keydown(function(e) {
            var postit_length = $('.postit_text').length;
            if (e.which == 13 && postit_length <= 4) {
                count ++;
               var class_name = "hi"+count;
                add_todo_value = $('.to_do_text').val();
                sample_item = $(list_item).clone();
                sample_item.find('.postit_text').append(add_todo_value);
                sample_item.find('.postit_text').attr("data-value",add_todo_value);
                sample_item.find('.postit_text').addClass(class_name);
                // sample_item.find('.delete_postit').addClass(class_name);
                $('.postit_wrapper').append(sample_item);
                saveTodo();
                $('.to_do_text').val('');
            } else if($('.to_do_text').val() ==''){
                 console.log('no');
             } else if(postit_length > 4) {
                 $('.to_do_text').css('visibility','hidden');
             }
         });

           // 클릭하면 this가 가리키는 부모 태그를 삭제----------------------
            $(document).on("click", '.delete_postit', function (e) {
            e.preventDefault();
            $(this).parent().remove();
            saveTodo();
        });


 function dragAll(){
      // Make the DIV element draggable:
      dragElement(document.getElementById("dragPostIt"));

      function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id)) {
          // if present, the header is where you move the DIV from:
          console.log(document.getElementById(elmnt.id));
          document.getElementById(elmnt.id).onmousedown = dragMouseDown;
      } else {
          // otherwise, move the DIV from anywhere inside the DIV: 
          elmnt.onmousedown = dragMouseDown;
        //   console.log(document.getElementById(elmnt.id));
      }

      function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
          elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }

      function closeDragElement() {
          // stop moving when mouse button is released:
          document.onmouseup = null;
          document.onmousemove = null;
              }
          }
    }
     });
