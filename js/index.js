$(document).ready(function(){
    startCamera();
});
    
    function startCamera() {
        document.addEventListener('deviceready', this.takePicture, false);
    }

    function takePicture(){
        $(".button--submit").on("click", function(){
            alert("Button was clicked");
            navigator.camera.getPicture(onSuccess, onFail, {
                quality: 10,
                destinationType: Camera.DestinationType.FILE_URI
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