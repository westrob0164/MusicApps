
$("<div>")
    .addClass('contentWraper') 
    .attr('id', "stuff")
    .appendTo(".content");

$("<div>")
    .addClass('rhythmImage')    
    .prepend('<img id="theImg" src="images/rhythm.png" height="480"/>')
    .appendTo(".contentWraper");
   
$("<div>")
    .addClass('pitchImage')    
    .prepend('<img id="theImg" src="images/pitch.png" height="480"/>')
    .appendTo(".contentWraper");
   


$("<div>")
    .addClass('floatingDisplay') 
    .prepend('<h2 class = "textInstrument">How can we sing a melody without an instrument?</h2>')
    .appendTo(".contentWraper");

$("<div>")
    .addClass('prev') 
    .prepend('<p class = "linksTrans">previous</p>')
    .appendTo(".floatingDisplay");

$("<div>")
    .addClass('skip') 
    .prepend('<p class = "linksTrans">skip</p>')
    .appendTo(".floatingDisplay");

$("<div>")
    .addClass('next') 
    .prepend('<p class = "linksTrans" id="nextTag">next</p>')
    .appendTo(".floatingDisplay");