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


$("#change").on("click", fnChange);
