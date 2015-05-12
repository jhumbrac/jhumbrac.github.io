function celConvert() {
    var degC = $("#cel").val();
    var degFloat = parseFloat(degC);
    var degF = degFloat*(9/5)+32;

    if(isNaN(degFloat)){
        $(".display").html("Please enter a number");
        $("p").addClass("error");
    } else {
        $(".display").html(degFloat.toFixed() + "&#176;C" + " = " + degF.toFixed() + "&#176;F");
        $("p").removeClass("error");
    }
    
    if(degF >= 120){
        refreshUI(imgUrl[3], "#F44336", "#FF5252");
    } else if(degF > 80 && degF < 120){
        refreshUI(imgUrl[2], "#FF9800", "#FFAB40");
    } else if(degF >= 50 && degF <= 80){
        refreshUI(imgUrl[1], "#4CAF50", "#69F0AE");
    } else if(degF < 50){
        refreshUI(imgUrl[0], "#3F51B5", "#536DFE");
    } else {
    }
    
    $("#cel").val("");
}
function fahrConvert() {
    var degF = $("#fahr").val();
    var degFloat = parseFloat(degF);
    var degC = (degFloat - 32)*(5/9);
    
    if(isNaN(degFloat)){
        $(".display").html("Please enter a number");
        $("p").addClass("error");
    } else {
        $(".display").html(degFloat.toFixed() + "&#176;F" + " = " + degC.toFixed() + "&#176;C");
        $("p").removeClass("error");
    }
    
    if(degC >= 48.5) {
        refreshUI(imgUrl[3], "#F44336", "#FF5252");
    } else if(degC >= 26.5 && degC < 48.5){
        refreshUI(imgUrl[2], "#FF9800", "#FFAB40");
    } else if(degC >= 10 && degC < 26.5){
        refreshUI(imgUrl[1], "#4CAF50", "#69F0AE");
    } else if(degC < 10){
        refreshUI(imgUrl[0], "#3F51B5", "#536DFE");
    } else {
    }
    
    $("#fahr").val("");
}

var imgUrl = new Array("images/cold.jpg", "images/warm.jpg", "images/hot.jpg", "images/boiling.jpg");

function refreshUI(imageName, divColor, answerAndButtonColor){
    $("body").css("background-image", "url(" + imageName + ")");
    $("div").css("background-color", divColor);
    $("div.answer").css("background-color", answerAndButtonColor);
    $("button").css("background-color", answerAndButtonColor);
}

$("#go1").click(celConvert);
$("#go2").click(fahrConvert);

var parent, ripple, d, x, y;
$("button").click(function(e){
	parent = $(this).parent();
	if(parent.find(".ripple").length == 0){
		parent.prepend("<span class='ripple'></span>");
    }
    
	ripple = parent.find(".ripple");
	ripple.removeClass("animate");
	
	if(!ripple.height() && !ripple.width()){
        d = Math.max(parent.outerWidth(), parent.outerHeight());
		ripple.css({height: d, width: d});
	}

	x = e.pageX - parent.offset().left - ripple.width()/2;
	y = e.pageY - parent.offset().top - ripple.height()/2;

	ripple.css({top: y+'px', left: x+'px'}).addClass("animate");
})