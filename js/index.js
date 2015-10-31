$(document).ready(function(){

    this.addEventListener('deviceready', onDeviceReady, false);
    alert(onDeviceReady);
});

    function onDeviceReady() {
        alert("Ready");
        takePicture();
    }

    function takePicture(){
        $(".button--submit").on("click", function(){
            alert("Button was clicked");
            navigator.camera.getPicture(onSuccess, onFail, {
                quality: 10,
                destinationType: Camera.destinationType.FILE_URI
            });
        });
    }

    function onSuccess(imageURI){
        alert("imageURI: " + imageURI);
        var image = $(".myImage");
        image.src = imageURI;
    }

    function onFail(message){
    alert("Failed because: " + message);
    }