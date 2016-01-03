$(document).ready(function(){
    startCamera();
});
    
    function startCamera() {
        document.addEventListener('deviceready', this.takePicture, false);
    }

    function takePicture(){
        alert("1. n.c=" + typeof navigator.camera); 
        alert("2. n.c.g=" + typeof navigator.camera.getPicture);
        $(".button--submit").on("click", function(){
            alert("click");
            navigator.camera.getPicture(onSuccess, onFail, {
                quality: 25,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.CAMERA,
                saveToPhotoAlbum: true
            });
            alert("5. n.c=" + typeof navigator.camera);
            alert("6. n.c.g=" + typeof navigator.camera.getPicture);
        });
    }

    function onSuccess(imageURI){
        var image = document.getElementById('img');
        image.style.visibility = "visible";
        image.style.display = "block";
        image.style.width = "2rem";
        image.style.height = "2rem;";
        image.src = imageURI;
    }

    function onFail(message){
        alert("Failed because: " + message);
    }