// let intervalID;

// $('#runInterval').click(function () {

//     let n = 0;
//     intervalID = setInterval(function () {
//         n++;
//         console.log('hello: ' + n);
//     }, 1000);
// });
// $('#stopInterval').click(function () {
//     clearInterval(intervalID);
// })
$(document).ready(function() {
    var timer; // Змінна для зберігання інтервалу
    var startTime; // Змінна для зберігання часу початку
    var elapsedTime = 0; // Змінна для зберігання пройденого часу

    // Функція для форматування часу у формат HH:MM:SS:MS
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

    // Клік на кнопці "Start"
    $('#runInterval').click(function() {
        startTime = Date.now() - elapsedTime; // Оновлення часу початку на основі пройденого часу
        timer = setInterval(function() {
            var now = Date.now();
            elapsedTime = now - startTime;
            $('.timeContainer').text(formatTime(elapsedTime));
        }, 10);
    });

    // Клік на кнопці "Pause"
    $('#stopInterval').click(function() {
        clearInterval(timer); // Зупинити інтервал
    });

    // Клік на кнопці "Restart"
    $('#reloadRopup').click(function() {
        clearInterval(timer); // Зупинити попередній інтервал, якщо він був запущений
        elapsedTime = 0; // Скинути пройдений час
        $('.timeContainer').text('00:00:00:00'); // Скинути вміст блоку з часом до початкового значення
    });
});
$('#stopInterval').click(function () {
    clearInterval(intervalID);
})