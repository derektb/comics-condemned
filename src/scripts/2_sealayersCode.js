var layerAmount = 5;

var sealayerOutputCss = "";

for (var i = 1; i <= layerAmount; i++) {
  var elementClasses = "sealayer layer-"+i;
  var cssClasses = ".sealayers .sealayer.layer-"+i;

  // element for all but 1, which is included in sealayers for example

  if (i != 1) {
  	var sealayer = document.createElement('div');
  	sealayer.className = elementClasses;

  	var top = document.createElement('div');
  	top.className = "top";
  	var body = document.createElement('div');
  	body.className = "body";

  	$('.sealayers').append(sealayer);
  	$(sealayer).append(top);
  	$(sealayer).append(body);
  }

  // style rules

  var rules =  "";
  if (i != 1) { // 1 gets special cased
    rules += cssClasses + "{top:calc("+(90+(i*80))+"vh - 25px);}";
  }
  rules += cssClasses + " .top{background-image: url('"+jinx.getSetting("rootArtPath")+"sealayer"+i+"top.gif')}";
  rules += cssClasses + " .body{background-image: url('"+jinx.getSetting("rootArtPath")+"sealayer"+i+".gif')}";
  sealayerOutputCss += rules;
}

var sealayerStyles = document.createElement('style')
sealayerStyles.id = "sealayer-styles";
sealayerStyles.textContent = sealayerOutputCss;
$('body').append(sealayerStyles);
