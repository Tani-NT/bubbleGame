function makeBubble(){
    var clutter = "";

    for(var i = 1; i<=147;i++){
        var rdm = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rdm}</div>`;
    }

    document.querySelector('#pbtm').innerHTML = clutter;
}

var timer = 60;
function runTimer(){
    var timerInt = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector('#timer').textContent = timer
        }else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = "<h1>Game Over!</h1>";
        }
    },1000)
}

var hitRdm = 0;
function hitVal(){
    hitRdm = Math.floor(Math.random()*10);
    document.querySelector('#hitVal').textContent = hitRdm;
}

var score = 0;
function increaseScore(){
    score += 10;
    document.querySelector('#scoreVal').textContent = score;
}

document.querySelector('#pbtm').addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === hitRdm){
        increaseScore()
        makeBubble()
        hitVal()
    }

})

makeBubble();
runTimer();
hitVal();



