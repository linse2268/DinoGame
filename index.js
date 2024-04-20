var character = document.getElementById('character');
var block = document.getElementById('block');
var text = document.getElementById('text');
var running = true;



function jump (){

    if(running){
        if(character.classList != "animate"){

            character.classList.add("animate");
    
            setTimeout(function (){
    
                character.classList.remove("animate");
    
            }, 500);
        }
    }
}

var checkdead = setInterval(function () {

    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft < 40 && blockLeft > 0 && characterTop >= 175){
        
        block.style.animation = "none";
        block.style.display = "none";
        running = false;
        
        text.innerText = "You Lose";
        setTimeout(function(){
            text.innerText = "Let's Play!"
        }, 3000)
    }

}, 10)


function restart(){
    location.reload();
    setTimeout(function(){running = true;},10);
}