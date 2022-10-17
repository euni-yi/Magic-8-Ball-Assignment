// Magic 8 Ball Assignemnt

// HTML Variablles
let answerEl = document.getElementById ("answer");

// img Event Listener
document.getElementById("ball-img").addEventListener("click", ballClicked);

function ballClicked(){
    // input
    let phrase = document.getElementById("inp1").value.toLowerCase();
    let randNum = Math.random();
    // if statement
    if (phrase ==="does a magic 8 ball actually work?"){
        answerEl.innerHTML = "How dare you doubt me!";
    } else if (phrase==="is javascript awesome?"){
        answerEl.innerHTML = "Of Course!"
    }   else if (phrase==="is eunice awesome?"){
        answerEl.innerHTML = "100% Yes!"
    } else if (phrase ===""){
        answerEl.innerHTML = "Please ask a question."
    } else if (randNum <=0.3) {
        answerEl.innerHTML = "Concentrate and ask again"
    } else if (randNum <=0.6) {
        answerEl.innerHTML = "Not looking good"
    } else if (randNum <=0.7) {
        answerEl.innerHTML = "Outlook not so good"
    } else if (randNum <=0.9) {
        answerEl.innerHTML = "Without a doubt"
    } else if (randNum<=1){
        answerEl.innerHTML = "As I see it, yes"
    }
}




