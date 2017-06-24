// 利用 jQuery 抓取 button#start 元件，並且設定當 click 的時候，顯示「按到了喔」
$('button#start').on('click', function() {
    //console.log("按到了喔")

    for (var i = 1; i < 7; i++) {
        var $img = $('<img>').attr('src', './image/0' + i + '.jpg');
        var $div = $('<div>').attr('class', 'block');

        $div.append($img);
        $('.container').append($div);
    }

})
