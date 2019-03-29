

var slideIndex = 1;
showSlides(slideIndex);

// dot controller -------------------------------------------------------------------------
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// slide 설정 -------------------------------------------------------------------------------
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
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
// 1초마다 시간을 화면에 표기 ----------------------------------------------------------------
$(document).ready(function () {
    setInterval('updateClock()', 1000);
});

// 날짜 표기 --------------------------------------------------------------------------------
var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1;
var day = currentDate.getDate();

// 날짜를 html에 매핑
$('.date').html('<p class="current_date">' + year + '.' + month + '.' + day + '</p>');

var list_item = '<div class="postit"><div id="dragPostIt" class= "postit_text" draggable="true"><p class = "delete_postit">X</p></div></div>';

//로컬스토리지 -------------------------------------------------------------------------------
storage_key = "mytodos";
function saveTodo() {
    var data = {};
    var todos = $('.postit_text');
    todos.each(function (index) {
        data[index] = [$(this).attr('data-value'), $(this).attr('class')];
    });
    localStorage.setItem(storage_key, JSON.stringify(data));
}

function loadTodo() {
    var todos = localStorage.getItem(storage_key);
    todos = JSON.parse(todos);
    for (var key in todos) {
        var value = todos[key][0];
        var class_value = todos[key][1];
        sample_item = $(list_item).clone();
        sample_item.find(".postit_text").append(value);
        sample_item.find(".postit_text").attr("data-value", value);
        sample_item.find(".postit_text").attr("class", class_value);
        $(".postit_wrapper").append(sample_item);
        dragAll(class_value);
    }
    if ($(".postit_text").length > 4) {
        $(".to_do_text").css("visibility", "hidden");
    }
}

// 엔터키 입력 시 포스트잇이 생기고 to-do 내용 입력 -----------------------------------------------
$(document).ready(function () {
    loadTodo();

    // load 하였을 때 클래스가 덮어써지는 문제 해결 -----------------------------------------------
    if ($('.postit_text').length == 1) {
        count = 1;
    } else if ($('.postit_text').length == 2) {
        count = 2;
    } else if ($('.postit_text').length == 3) {
        count = 3;
    } else if ($('.postit_text').length == 4) {
        count = 4;
    }
    else {
        count = 0;
    }
    console.log('if count : '+count);
    // 엔터키 입력 시 to do 추가 ---------------------------------------------------------------
    $('.to_do_text').keydown(function (e) {
        var postit_length = $('.postit_text').length;
        if (e.which == 13 && postit_length <= 4) {
            count++;
            var class_name = "hi" + count;
            add_todo_value = $('.to_do_text').val();
            sample_item = $(list_item).clone();
            sample_item.find('.postit_text').append(add_todo_value);
            sample_item.find('.postit_text').attr("data-value", add_todo_value);
            sample_item.find('.postit_text').addClass(class_name);
            $('.postit_wrapper').append(sample_item);
            dragAll(class_name);
            saveTodo();
            $('.to_do_text').val('');
            console.log('입력 :' + count);
        } else if ($('.to_do_text').val() == '') {
            console.log('no');
        } else if (postit_length > 4) {
            $('.to_do_text').css('visibility', 'hidden');
        }
    });

    // 클릭하면 this가 가리키는 부모 태그를 삭제-------------------------------------------------
    $(document).on("click", '.delete_postit', function (e) {
        e.preventDefault();
        $(this).parent().remove();
        saveTodo();
        count--;
        console.log('삭제 :'+ count);
        if ($('.postit_text').length < 5) {
            $('.to_do_text').css('visibility', 'visible');
        }
    });

    // 배경화면 바꾸는 모달창 띄우기 ------------------------------------------------------------
    $('.change_img').click(function (e) {
        $('.chimg_modal').toggle();
    });

    //  이미지를 클릭 했을 눈에 보이는 효과 ------------------------------------------------------------
    $('.back_img').click(function () {
        $(this).css("border", "3px solid green");
        //console.log($('#back_img1').attr('class'));
    })


    // 이미지를 클릭 했을 때 배경 이미지 변경 --------------------------------------------------------
    $('#back_img1').click(function () {
        $('#slide1').css({ "background": "url(./images/night.jpg)", 'background-repeat': 'no-repeat', 'background-position': 'center', 'background-size': 'cover', 'height': '100%' });
    })
    $('#back_img2').click(function () {
        $('#slide1').css({ "background": "url(./images/macaroons.jpg)", 'background-repeat': 'no-repeat', 'background-position': 'center', 'background-size': 'cover', 'height': '100%' });
    })
    $('#back_img3').click(function () {
        $('#slide1').css({ "background": "url(./images/redpanda.jpg)", 'background-repeat': 'no-repeat', 'background-position': 'center', 'background-size': 'cover', 'height': '100%' });
    })
    $('#back_img4').click(function () {
        $('#slide1').css({ "background": "url(./images/vacation.jpg)", 'background-repeat': 'no-repeat', 'background-position': 'center', 'background-size': 'cover', 'height': '100%' });
    })
    $('#back_img5').click(function () {
        $('#slide1').css({ "background": "url(./images/steel_ladder.jpg)", 'background-repeat': 'no-repeat', 'background-position': 'center', 'background-size': 'cover', 'height': '100%' });
    })
    $('#back_img6').click(function () {
        $('#slide1').css({ "background": "url(./images/blue.jpg)", 'background-repeat': 'no-repeat', 'background-position': 'center', 'background-size': 'cover', 'height': '100%' });
    })
});



// 포스트잇 드래그 기능 -------------------------------------------------------------------------
function dragAll(className) {
    // Make the DIV element draggable:
    var item = document.getElementsByClassName(className)[0];

    let x, y;

    function move(e) {
        if (e.clientY === 0) {
            e.preventDefault();
        } else {
            $(e.target).css("top", e.clientY - y);
            $(e.target).css("left", e.clientX - x);
            $(e.target).css("bottom", window.innerHeight - e.clientY + y);
            $(e.target).css("right", window.innerWidth - e.clientX + x);
        }
    }

    item.addEventListener("dragstart", function (e) {
        x = e.offsetX;
        y = e.offsetY;
        item.addEventListener("drag", move);
    });

    item.addEventListener("dragend", function (e) {
        item.removeEventListener("drag", move);
        move(e);
    });
}