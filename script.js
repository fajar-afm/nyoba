$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  $('.pictkotakinfoo').css({
  'transform' : 'translate(0px, '+ wScroll/23 +'%)'
  });
});

$(document).ready(function() {
  $("#moneyInput, #money_input, .currency_input, .money").maskMoney({ thousands:'.', decimal:',', affixesStay: false, precision: 0});
});