async function translateText() {

let text = document.getElementById("text").value;
let language = document.getElementById("language").value;

let response = await fetch("https://00yscurvqe.execute-api.ap-south-1.amazonaws.com/translate", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
text: text,
target: language
})
});

let data = await response.json();

document.getElementById("result").innerText = data.translatedText;

}