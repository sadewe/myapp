$(document).ready(function(){
    this.addEventListener('deviceready', onDeviceReady(), false);
});

    function onDeviceReady() {
        takePicture();
    }
    
    function takePicture(){
        $(".button--submit").bind("click", function(){

            navigator.camera.getPicture(onSuccess, onFail, {
                quality: 10,
                destinationType: Camera.destinationType.FILE_URI
            });
        });
    }

    function onSuccess(imageURI){

    }

    function onFail(message){
    alert("Failed because: " + message);
    }