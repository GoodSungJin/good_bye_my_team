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