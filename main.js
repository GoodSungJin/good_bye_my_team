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
            }
        ],
        plugins: ['dayGrid']
    });
    calendar.render();
    calendar.setOption('height', 800);
    
});



function add(){
    return '<div class="modal fade" id="click_modal" tabindex="-1" role="dialog" aria-labelledby="click_modal_title" aria-hidden="true">' +
                '<div class="modal-dialog modal-dialog-centered" role="document">' +
                    '<div class="modal-content">' +
                        '<div class="modal-header">' +
                            '<h5 class="modal-title" id="click_modal_title_01">제목</h5>' +
                            '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                                '<span aria-hidden="true">&times;</span>' +
                            '</button>' +
                        '</div>' +
                        '<div class="modal-body">' +
                            '<span class="text_inner"></span>'+
                        '</div>'+
                        '<div class="modal-footer">' +
                            '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>'
}

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
        });
        
        $('.fc-title').append(add());
        $('td>a>div.fc-content').attr('data-toggle', 'modal');
        $('td>a>div.fc-content').attr('data-target', '#click_modal');
        $().append(content[key][1]);
        console.log(key,content[key][1])
        
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
            description: 'This is a cool event'
        });
        // console.log(input_target);
        // console.log(input_title);                     시도는 했지만 성공은 못했따...
        // $(input_target).append(input_title);
        // $('td.fc-day').append('dkdkdk');
        $('td>a>div>span.fc-title').append('<div class="modal fade click_modal" id="click_modal" tabindex="-1" role="dialog" aria-labelledby="click_modal" aria-hidden="true">' +
                                                '<div class="modal-dialog modal-dialog-centered" role="document">' +
                                                    '<div class="modal-content">' +
                                                        '<div class="modal-header">' +
                                                            '<h5 class="modal-title" id="exampleModalCenterTitle">제목</h5>' +
                                                            '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                                                                '<span aria-hidden="true">&times;</span>' +
                                                            '</button>' +
                                                        '</div>' +
                                                        '<div class="modal-body">' +
                                                            '<span class="text_inner"></span>'+
                                                        '</div>'+
                                                        '<div class="modal-footer">' +
                                                            '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
                                                        '</div>' +
                                                    '</div>' +
                                                '</div>' +
                                            '</div>');
        $('td>a>div.fc-content').attr('data-toggle', 'modal');
        $('td>a>div.fc-content').attr('data-target', '#click_modal');
        $('.text_inner').append(input_value);
        $('#input_title').val('');
        $('#input_value').val('');
        
        save();
        
    });


});
