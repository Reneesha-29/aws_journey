const API_URL = "YOUR_API_URL";

function addMessage(sender,text,type){

let chat=document.getElementById("chat");

let div=document.createElement("div");

div.className="message "+type;

div.innerHTML="<b>"+sender+":</b> "+text;

chat.appendChild(div);

chat.scrollTop=chat.scrollHeight;

}

async function translateText(){

let text=document.getElementById("text").value;
let language=document.getElementById("language").value;

addMessage("You",text,"user");

let response=await fetch("https://00yscurvqe.execute-api.ap-south-1.amazonaws.com/translate",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
text:text,
target:language
})
});

let data=await response.json();

addMessage("Bot",data.translatedText,"bot");

if(data.audio){
let audio=new Audio(data.audio);
audio.play();
}

}

function startVoice(){

const recognition=new webkitSpeechRecognition();

recognition.lang="en-US";

recognition.onresult=function(event){

let speech=event.results[0][0].transcript;

document.getElementById("text").value=speech;

};

recognition.start();

}