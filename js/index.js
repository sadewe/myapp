var app = {

    takePicture: function(){
        $(".button--submit").on("click", function(){
            alert("Button was clicked");
            navigator.camera.getPicture(onSuccess, onFail, {
                quality: 10,
                destinationType: Camera.destinationType.FILE_URI
            });
        });
    }, 

    onSuccess: function(imageURI){
        alert("imageURI: " + imageURI);
        var image = $(".myImage");
        image.src = imageURI;
    },

    onFail: function(message){
    alert("Failed because: " + message);
    }

};


/*$(document).ready(function(){

    this.addEventListener('deviceready', this.onDeviceReady, false);
    alert(onDeviceReady);
});

    function onDeviceReady() {
        alert("Ready");
        takePicture();
    }



    function onSuccess(imageURI){
        alert("imageURI: " + imageURI);
        var image = $(".myImage");
        image.src = imageURI;
    }

    function onFail(message){
    alert("Failed because: " + message);
    }*/