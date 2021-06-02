var formData;
const animationTime = 300;

window.document.addEventListener('showLikert', showLikert, false);

$(".likert").hide();
$(".consent-button").show();


function showLikert(e) {
  $(".likert").show(animationTime);
  $(".consent-button").hide(animationTime);
  console.log(e.detail);
}


//For testing
$("#showLikert").click(function(){
  var data = { foo: 'showing likert form' }
  var event = new CustomEvent('showLikert', { detail: data })
  window.document.dispatchEvent(event);
}); 
