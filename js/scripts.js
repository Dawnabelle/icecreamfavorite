$(document).ready(function() {
// ice cream flavors in a variable
    var iceCreams = ["chocolate", "vanilla", "noticecream"];
    // calls each individually and adds them inside ol in html as listed items
      iceCreams.forEach(function(iceCream) {
      $(".favIceCream").append("<li>" + iceCream + "</li>");

    });

});
