



$(document).ready(function() {
    var timer; 
    var startTime;
    var elapsedTime = 0; 

 
    function formatTime(ms) {
        var hours = Math.floor(ms / 3600000);
        var minutes = Math.floor((ms % 3600000) / 60000);
        var seconds = Math.floor((ms % 60000) / 1000);
        var milliseconds = ms % 1000;
        return (
            ('0' + hours).slice(-2) + ':' +
            ('0' + minutes).slice(-2) + ':' +
            ('0' + seconds).slice(-2) + ':' +
            ('00' + milliseconds).slice(-3)
        );
    }

    
    $('#runInterval').click(function() {
        startTime = Date.now() - elapsedTime; 
        timer = setInterval(function() {
            var now = Date.now();
            elapsedTime = now - startTime;
            $('.timeContainer').text(formatTime(elapsedTime));
        }, 10);
    });

   
    $('#stopInterval').click(function() {
        clearInterval(timer); 
    });

    
    $('#reloadRopup').click(function() {
        clearInterval(timer); 
        elapsedTime = 0; 
        $('.timeContainer').text('00:00:00:00');
    });
});
$('#stopInterval').click(function () {
    clearInterval(intervalID);
})