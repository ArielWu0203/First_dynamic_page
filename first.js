var count=1;
$('.right').click(function() {
    if(count==1) {
        document.getElementById("second").style.left="+100%";
        $('#first').animate({'right': "+=100%"},1000);
        $('#title').animate({'right': "+=100%"},1000);
        $('#second').animate({'left': "-=100%"},1000,function(){
            $('#title').css("display","none");
            $('#title2').css("display","block");
        }); 
        count=2;
    }
})

$('.left').click(function() {
    if(count==2) {
        $('#first').animate({'right': "-=100%"},1000);
        $('#title').animate({'right': "-=100%"},1000);
        $('#title2').animate({'left': "+=100%"},1000);
        $('#second').animate({'left': "+=100%"},1000,function(){
            document.getElementById("second").style.left="-100%";
            $('#title').css("display","block");
            $('#title2').css("display","none");
            $('#title2').animate({'left': "-=100%"},1000);
        });
        count=1;
    }
})
$(document).ready(function() {
    $('.dropdown').hover(function() {
        $('#slider').addClass('blur');
        $('#arrow').addClass('blur');
        $('#title').addClass('blur');
    }, function() {
        $('#slider').removeClass('blur');
        $('#arrow').removeClass('blur');
        $('#title').removeClass('blur');
    }
    );
})