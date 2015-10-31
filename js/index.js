$(document).ready(function(){
    this.addEventListener('deviceready', onDeviceReady(), false);
});

    function onDeviceReady() {
        takePicture();
    }
    
    function takePicture(){
        $(".button--submit").bind("click", function(){
            alert("Button was clicked");
            navigator.camera.getPicture(onSuccess, onFail, {
                alert("Camera");
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