$(".firstimg").click(function(){
  $(this).attr("src", "2.jpg");
  $(this).attr("class", "secondimg");
  $(".secondimg").click(function(){
    $("#link").attr('href', "death scene.html");
  });

});
