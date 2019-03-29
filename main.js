var calendar;
var content = {};
var input_target;

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    calendar = new FullCalendar.Calendar(calendarEl, {
        events: [
            {
            title: input_title,
            start: input_target,
            description: 'This is a cool event',
            className: input_target
            }
        ],
        plugins: ['dayGrid']
    });
    calendar.render();
    calendar.setOption('height', 530);
    
});

function save(){
    content[input_target] = [input_title, input_value];
    
    var content_string = JSON.stringify(content);
    localStorage.setItem('content', content_string);


    
}
function load(){

    content_text = localStorage.getItem('content');
    if(content_text==null) {
        content = {};
    } else {
        content = JSON.parse(content_text);
    }
    
    for(var key in content){
        calendar.addEvent({
            title: content[key][0],
            start: key,
            description: content[key][1],
            className: key
        });
        
        $('.fc-content-skeleton tbody td').attr('data-toggle', 'modal');
        $('.fc-content-skeleton tbody td').attr('data-target', '#click_modal');
        $('td.fc-day').attr('data-toggle', 'modal');
        $('td.fc-day').attr('data-target', '#exampleModalCenter');



        
    }
    




    return false;
}

$(function(){

    load();
    $('td.fc-day').attr('data-toggle', 'modal');
    $('td.fc-day').attr('data-target', '#exampleModalCenter');



    $(document).on('click', 'td.fc-day', function(e) {
        input_target = $(this).attr('data-date');
        // console.log(input_target);
    });


    
    $(document).on('click', '#input_save', function(e) {
        input_title = $('#input_title').val();
        input_value = $('#input_value').val();
        calendar.addEvent({
            title: input_title,
            start: input_target,
            description: 'This is a cool event',
            className: input_target
        });
        // console.log(input_target);
        // console.log(input_title);                     시도는 했지만 성공은 못했따...
        // $(input_target).append(input_title);
        // $('td.fc-day').append('dkdkdk');

        
        $('#input_title').val('');
        $('#input_value').val('');
        $('.text_inner').append(input_value); 
        $('.fc-content-skeleton tbody td').attr('data-toggle', 'modal');
        $('.fc-content-skeleton tbody td').attr('data-target', '#click_modal');
        $('td.fc-day').attr('data-toggle', 'modal');
        $('td.fc-day').attr('data-target', '#exampleModalCenter');

        // window.location.reload();
        save();
        
    });

    $('.fc-event-container').click(function(){
        hard_key = $(this).children("a").attr('class').split(" ")[5];
        content_text = localStorage.getItem('content');
        if(content_text==null) {
            content = {};
        } else {
            content = JSON.parse(content_text);
        }
        
        $('.text_inner').text('');
        $('.text_inner').append(content[hard_key][1]);
        
        
    });


    $('.btn_remove').click(function(){
        $('.'+hard_key).remove();
        
        var data = localStorage.getItem("content");
        data = JSON.parse(data);
            delete data[hard_key]
        localStorage.setItem("content", JSON.stringify(data))
        // window.location.reload();
        
        // localStorage.clear();
        

        
        
        
    });
});