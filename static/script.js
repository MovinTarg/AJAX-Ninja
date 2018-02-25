$(document).ready(function() {

    $('button.turtle').click(function(){
        var turtle = $(this).attr('id');
        var html_str ='';
        html_str += "<h1>You chose "+turtle+"!</h1>";
        html_str += "<img src='static/"+turtle+".jpg'>"
        $('.display').html(html_str);
    });
    $('button.custom_color').click(function(){
        var turtle = $('#custom_color').val();
        if (turtle == 'red') {
            var html_str ='';
            html_str += "<h1>You chose Raphael!</h1>";
            html_str += "<img src='static/raphael.jpg'>"
            $('.display').html(html_str);
        } else if (turtle == 'blue') {
            var html_str ='';
            html_str += "<h1>You chose Leonardo!</h1>";
            html_str += "<img src='static/leonardo.jpg'>"
            $('.display').html(html_str);
        } else if (turtle == 'orange') {
            var html_str ='';
            html_str += "<h1>You chose Michelangelo!</h1>";
            html_str += "<img src='static/michelangelo.jpg'>"
            $('.display').html(html_str);
        } else if (turtle == 'purple') {
            var html_str ='';
            html_str += "<h1>You chose Donatello!</h1>";
            html_str += "<img src='static/donatello.jpg'>"
            $('.display').html(html_str);
        } else {
            var html_str ='';
            html_str += "<h1>There is no ninja in that color!</h1>";
            html_str += "<img src='static/notapril.jpg'>"
            $('.display').html(html_str);
        }
    })
    
});