var $win = $(window);

$win.scroll(function () {
    var pageBottom = false;
    if ($win.scrollTop() == 0) {
        console.log('Scrolled to Page Top');
    }
    else if ($win.height() + $win.scrollTop()
                    == $(document).height()) {
        console.log('Scrolled to Page Bottom');
        pageBottom = true;
    }
    console.log(pageBottom);
});


$('body').click(function() {
    var documentHeight = $(document).height();
    var timers = [10000,30000,50000,5000];
    var direction = randomNumber(0, documentHeight);
    var timer = randomFromArray(timers);

    console.log($(window).scrollTop());
    
    $("html").stop().delay(5000).animate({ scrollTop: direction}, timer);

});

function randomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}