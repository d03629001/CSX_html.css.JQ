var rand = function(start, end) {


    var n = end - start + 1;


    var r = Math.random() * n;


    var f = Math.floor(r);


    var result = f + start;
    //var result = Math.floor(Math.random() * n) + start;
    return result;
    // return Math.floor(Math.random() * n) + start;
}

var fnChange = function() {



    //var n=Math.floor(Math.random()*4)+1;
    var index = rand(1, 4);

    $("#section2>div.image>img").attr("src", './image/0' + index + '.jpg');
}


var fnList = function() {
    var add
        //console.log('test');
    $('#section2>div.list').html('<img src="./image/01.jpg" alt=""><img src="./image/02.jpg" alt=""><img src="./image/03.jpg" alt=""><img src="./image/04.jpg" alt="">')
}

$("#change").on("click", fnChange);
$('#list').on('click', fnList);
