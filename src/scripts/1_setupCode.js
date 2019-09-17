/* sealayers positioning style generation */

$(document).on('showpassage',function(e,d){
	$('body').attr('currentpassage', d.passage.name);
});

var panels = ["1A","1B","1C","1D","2A","2B","2C","2C+","2D"];
var increment = -80;

var topAmount = 0;
var outputCSS = "";

for (var i = 0; i < panels.length; i++) {
  var panelName = panels[i];
  var panelSelector = "body[currentpassage=\""+panelName+"\"]";

  var rules = "top: "+topAmount+"vh;"

  var panelClassCSS = panelSelector+" .sealayers{"+rules+"}"
  outputCSS+=panelClassCSS;
  topAmount += increment;
}

var newStyles = document.createElement('style');
newStyles.textContent = outputCSS;
newStyles.id = "sealayer-positioning-classes";
$('body').append(newStyles);
