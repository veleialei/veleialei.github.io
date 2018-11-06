$(function() {
    print(database);
    blink();
});


var visible = true;
var count = 1;
var database = "Hi, I'm Shuangjiao Hu. I'm a Developer + Designer. Welcome to my site";

function print(data) {
    window.setInterval(function() {
        var color = "green";
        console.log(color);
        if (count < data.length + 1) {
            if (data.substring(count - 1, count) === ".") {
                var txt = data.substring(count - 1, count);
                $(".text").append("<a>" + txt + "</a>");
                $(".text a:last-child").css("color", "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")");
                $(".text").append("<br />");
                count++;
            } else {
                var txt = data.substring(count - 1, count);
                $(".text").append("<a>" + txt + "</a>");
                count++;
            }
            $(".text a:last-child").css("color", "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")");
        }
    }, 100);
}

function blink() {
    window.setInterval(function() {
        if (visible === true) {
            visible = false;
            $(".underscore").addClass("hidden");
        } else if (visible === false) {
            visible = true;
            $(".underscore").removeClass("hidden");
        }
    }, 300);
}

//based on http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/