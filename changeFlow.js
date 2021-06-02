const animationTime = 300;

$(".survey").hide();
$(".consent").show();
$(".introsection").show();

window.document.addEventListener('showSurvey', handleEventShowLikert, false);


function handleEventShowLikert(e) {
  $(".survey").show(animationTime);
  $(".consent").hide(animationTime);
  $(".introsection").hide(animationTime);
  console.log(e.detail);
}


//For testing
$("#showSurvey").click(function(){
  var data = { foo: 'showing survey' }
  var event = new CustomEvent('showSurvey', { detail: data })
  window.document.dispatchEvent(event);
}); 
