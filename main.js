var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var webcam = document.getElementById("camera");

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
 }     
    recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    speak();
    if (content == "take my selfie") {
        console.log("TAKING YOUR SELFIE-----");
        speak();
    }
    }

  
function speak() {
        var synth = window.speechSynthesis;
        speak_data = "Taking Your Selfie in 5 Seconds"
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        webcam.attach(camera);

            setTimeout(function() {
                take_snapshot();
                save();
                }, 5000)
            }
            camera=document.getElementById("camera");
webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});

            function take_snapshot() {
webcam.snap(function (data_uri) {
document.getElementById("result").innerHTML = '<img id = "selfie_image" src = "'+ data_uri + '"/>';  
               }); 
            }
            function save() {
                link = document.getElementById("link");
                image = document.getElementById("selfie_image").src;
                link.href = image;
                link.click();
            }

