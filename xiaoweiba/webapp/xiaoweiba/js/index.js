$(document).ready(function () {
    $("#show").on("click", function () {
        var content = $("#input").val();
        var wid = $(window).width();
        var hei = wid * 0.378125;
        var left = wid / 2 - 35;
        var top = hei - 10;
        var img = new Image();
        img.src = 'image/bg.jpg';
        img.onload = function () {
            var canvas = document.getElementById("myCanvas");
            canvas.width = wid;
            canvas.height = hei;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, wid, hei);
            ctx.font = "italic normal bold 16px microsoft yahei";
            ctx.fillStyle = "#555";
            ctx.fillText(content, left, top);
        };
    });
    $("#save").on("click", function () {
        var my = document.getElementById("myCanvas");
        var image = my.toDataURL("image/png");
        $(".show").show();
        $(".show img").remove();
        $(".show").append("<img src='" + image + "' alt='from canvas'/>");
    });
    $(".show-exit").on("click", function () {
        $(".show,.adshow").hide();
    });
    $(" #admin").on("click", function () {
        $(".adshow").show();
    })
});