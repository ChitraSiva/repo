function turnOnOff() {
    var audio = document.getElementById('audio');
    var image=document.getElementById('Image');
    if(image.src.match("onbulb")){
        image.src="bulb.png";
        audio.play();
    }
    else{
        image.src="onbulb.png";
        audio.play();
    }
}