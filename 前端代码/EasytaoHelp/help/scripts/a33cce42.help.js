// (function() {
//     "use strict";
//     var a, b;
//     $(document).on("click", ".help-title a", function() {
//         var a, b, c;
//         return c = $(this).parents(".help-item"), b = c.find(".help-content"), a = c.find(".help-area"), c.hasClass("active") ? c.removeClass("active") : ($(".help-item").removeClass("active"), c.addClass("active"), "" === b.html() ? b.html(a.val()) : void 0)
//     }), a = $("#help-template").html(), b = Handlebars.compile(a), $.ajax({
//         url: "http://knowme.is-nc.com/api/v1/help/list",
//         method: "GET",
//         dataType: "json",
//         success: function(a) {
//             var c;
//             return console.log(a.data), c = b(a.data), $("#help").html(c)
//         }
//     })
// }).call(this);
$(document).on("click", ".help-title a", function() {
        c = $(this).parents(".help-item");
        b = c.find(".help-content");
        a = c.find(".help-area");
        console.log(c);
        c.hasClass("active") ? c.removeClass("active") : c.addClass("active"); 
    })
