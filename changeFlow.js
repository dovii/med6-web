$(".survey").hide();
$(".consent").show();
$(".introsection").show();
$(".otherinfo").show();

window.document.addEventListener('showSurvey', showSurvey, false);
const animationTime = 300;

function showSurvey(e) {
  $(".survey").show(animationTime);
  $(".consent").hide(animationTime);
  $(".introsection").hide(animationTime);
  $(".otherinfo").hide(animationTime);
 // console.log(e.detail);
}


$("#showSurvey").click(function(){
  var event = new CustomEvent('showSurvey')
  window.document.dispatchEvent(event);
}); 
