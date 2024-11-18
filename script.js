var clicks = 0;

function clickBUTTON(){
    clicks = clicks +1;
}

setInterval(function(){
    document.getElementById("clicks").innerHTML = clicks;
},50);