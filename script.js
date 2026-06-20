





const text="Happy Father's Day Papa ❤️";

let i=0;

function typeWriter(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typeWriter,100);

}

}

typeWriter();



const memories = [

{
img:"images/Family.jpeg",
quote:"A daughter's first hero, a family's biggest strength, and our forever safe place ❤️"
},

{
img:"images/DiiPappa.jpeg",
quote:"Some of our happiest memories begin with you ❤️"
},

{
img:"images/MePappa.jpeg",
quote:"A father is someone you look up to, no matter how tall you grow ❤️"
},

{
img:"images/Dad.jpeg",
quote:"Behind every strong daughter is an even stronger father ❤️"
},

{
img:"images/Dii1.jpeg",
quote:"Every dream we chase carries a piece of your guidance ❤️"
},

{
img:"images/Me1.jpeg",
quote:"You never said 'I love you' much... but you showed it in a thousand quiet ways ❤️"
}

];

let currentMemory = 0;

function startJourney(){

    const music =
    document.getElementById("bgMusic");

    music.volume = 0.25;

    music.play();

    document.querySelector(".hero-content")
    .style.display="none";

    showBalloon();
}

function showBalloon(){

const balloon =
document.getElementById("goldBalloon");

balloon.classList.remove("fly");

void balloon.offsetWidth;

balloon.classList.add("fly");

setTimeout(()=>{

balloon.style.display="none";

showMemory();

},1500);

}

function showMemory(){

if(currentMemory >= memories.length){

document.querySelector(".slider")
.scrollIntoView({
behavior:"smooth"
});

return;
}

const card =
document.getElementById("memoryCard");

document.getElementById("memoryImg").src =
memories[currentMemory].img;

document.getElementById("memoryQuote").innerHTML =
memories[currentMemory].quote;

card.style.display="block";

currentMemory++;

setTimeout(()=>{

card.style.display="none";

document.getElementById("goldBalloon")
.style.display="block";

showBalloon();

},1800);

}


let current = 0;


function celebrate(){

confetti({
particleCount:300,
spread:180
});

setTimeout(()=>{

alert(
"We Love You Papa ❤️\n\nLove,\nGautami & Pradnya"
);

},500);

}


function toggleMusic(){

const music =
document.getElementById("bgMusic");

if(music.paused){

music.play();

}else{

music.pause();

}

}

const bgMusic =
document.getElementById("bgMusic");

const voiceNote =
document.getElementById("voiceNote");

voiceNote.addEventListener("play",()=>{

    bgMusic.pause();

});

voiceNote.addEventListener("pause",()=>{

    if(voiceNote.currentTime <
       voiceNote.duration){

        bgMusic.play();
    }

});

voiceNote.addEventListener("ended",()=>{

    bgMusic.play();

});