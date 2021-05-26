var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event)
{
    console.log(event);
    var Content = event.results[0][0].transcript;

    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    speak();
    if(Content =="take my selfie")
    {
        console.log("Taking Selfie --- ");
        speak();
    }
}

function speak()
{
    var synth = window.speechSynthesis;

    speak_data = "Taking your Selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
        save();
    }, 5000);
}

function save()
{
    link = document.getElementById("link");

    image = document.getElementById("My_Selfie");
    link.href = image;
    link.click();
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
  });
  camera = document.getElementById("camera");
  
  function take_snapshot()
  {
      Webcam.snap(function(data_uri){
          document.getElementById("result").innerHTML = '<ing id="My_Selfie" src="'+data_uri+'">';
      });
  }