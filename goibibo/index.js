$('.hidediv').hide();

$(".divbtn1").click(function () {
  $(this).hide();
  $(".hidediv").show();
  $(".divbtn2").show();
})

$(".divbtn2").click(function () {
  $(this).hide();
  $(".hidediv").hide();
  $(".divbtn1").show();
})