var random = function(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start // Math.floor(Math.random()*49)+1
}

$('#random').on('click', function() {
    var n = Number($('#n').val());
    var data = [];
    for (var i = 1; i <= n; i++) {
        data.push(random(1, 49));
    }

    $('div#data').empty();

    for (var i = 0; i < data.length; i++) {
        $item = $('<div>').attr('class', 'item').text(data[i]);
        $div = $('<div>').attr('class', 'col-3');
        $div.append($item);
        $('#data').append($div);
    }
})
