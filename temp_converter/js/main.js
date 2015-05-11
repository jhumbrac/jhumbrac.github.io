function celConvert() {
    var degC = $("#cel").val();
    var degFloat = parseFloat(degC);
    var degF = degFloat*(9/5)+32;

    $(".display").html(degFloat.toFixed() + "&#176;C" + " = " + degF.toFixed() + "&#176;F");
    
    if(degF >= 120){
        $("body").css("background-image", "url(" + imgUrl[3] + ")");
        $("div").css("background-color", "#F44336");
        $("div.answer").css("background-color", "#FF5252");
        $("button").css("background-color", "#FF5252");
        
    } else if(degF > 80 && degF < 120){
        $("body").css("background-image", "url(" + imgUrl[2] + ")");
        $("div").css("background-color", "#FF9800");
        $("div.answer").css("background-color", "#FFAB40");
        $("button").css("background-color", "#FFAB40");
        
    } else if(degF <= 80 && degF >= 50){
        $("body").css("background-image", "url(" + imgUrl[1] + ")");
        $("div").css("background-color", "#4CAF50");
        $("div.answer").css("background-color", "#69F0AE");
        $("button").css("background-color", "#69F0AE");
        
    } else {
        $("body").css("background-image", "url(" + imgUrl[0] + ")");
        $("div").css("background-color", "#3F51B5");
        $("div.answer").css("background-color", "#536DFE");
        $("button").css("background-color", "#536DFE");
    } // fade transition?
    $("#cel").val("");
}
function fahrConvert() {
    var degF = $("#fahr").val();
    var degFloat = parseFloat(degF);
    var degC = (degFloat - 32)*(5/9);
    
    $(".display").html(degFloat.toFixed() + "&#176;F" + " = " + degC.toFixed() + "&#176;C");
    
    if(degC >= 48.5) {
        $("body").css("background-image", "url(" + imgUrl[3] + ")");
        $("div").css("background-color", "#F44336");
        $("div.answer").css("background-color", "#FF5252");
        $("button").css("background-color", "#FF5252");
        
    } else if(degC >= 26.5 && degC < 48.5){
        $("body").css("background-image", "url(" + imgUrl[2] + ")");
        $("div").css("background-color", "#FF9800");
        $("div.answer").css("background-color", "#FFAB40");
        $("button").css("background-color", "#FFAB40");
        
    } else if(degC >= 10 && degC < 26.5){
        $("body").css("background-image", "url(" + imgUrl[1] + ")");
        $("div").css("background-color", "#4CAF50");
        $("div.answer").css("background-color", "#69F0AE");
        $("button").css("background-color", "#69F0AE");
        
    } else {
        $("body").css("background-image", "url(" + imgUrl[0] + ")");
        $("div").css("background-color", "#3F51B5");
        $("div.answer").css("background-color", "#536DFE");
        $("button").css("background-color", "#536DFE");
    }
    $("#fahr").val("");
}

var imgUrl = new Array("images/cold.jpg", "images/warm.jpg", "images/hot.jpg", "images/boiling.jpg");

$("#go1").click(celConvert);
$("#go2").click(fahrConvert);