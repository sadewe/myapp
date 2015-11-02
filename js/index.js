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
                quality: 25,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.CAMERA,
                saveToPhotoAlbum: true
            });
        });
    }

    function onSuccess(imageURI){
        var image = $(".myImage");
        image.src = imageURI;
    }

    function onFail(message){
        alert("Failed because: " + message);
    }