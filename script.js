var  song;
var musicCover;

let audioElement = new Audio("Two Hearts - TrackTribe.mp3");
var progress;


song=document.querySelector(".song_1");
musicCover=document.querySelector("#img1");
song_1.addEventListener("click",()=>{
    console.log("Ishq Wala Love- Shaheen Bros");
    song=song_1.textContent;
    musicPlayer.textContent= `Now Playing: ${song}`;
 
})

song=document.querySelector(".song_3");
    musicCover=document.querySelector("#img3");
    song_3.addEventListener("click",()=>{
    console.log("Teri Deewani- Shreya Ghoshal");
    song=song_3.textContent;
    musicPlayer.textContent= `Now Playing: ${song}`;

})
song=document.querySelector(".song_4");
    musicCover=document.querySelector("#img4");
song_4.addEventListener("click",()=>{
    console.log("Akhiyaan- Mitraz");
    song=song_4.textContent;
    musicPlayer.textContent= `Now Playing: ${song}`;
    
})
song=document.querySelector(".song_5");
    musicCover=document.querySelector("#img5");
song_5.addEventListener("click",()=>{
    console.log("Baarishein-Anuv Jain");
    song=song_5.textContent;
    musicPlayer.textContent= `Now Playing: ${song}`;

})
var about = document.querySelector('.about');
about.addEventListener("click",()=> {
    window.location.href = 'about.html';
})
var privacy = document.querySelector('.privacy');
privacy.addEventListener("click",()=> {

    window.location.href = 'privacy.html';
})
var home = document.querySelector('.home');
home.addEventListener("click",()=> {
    window.location.href = 'home.html';
})


var play=document.querySelector('.play');
play.addEventListener('click',()=>
{
 if (audioElement.pause()|| audioElement.currentTime <=0)
 {
 audioElement.play();
 console.log("playing");
 play.classList.remove("play2.jpg");
 play.classList.add("pause-icon.jpg");
 
}

})

var play1=document.querySelector('.song1play');
play1.addEventListener('click',()=>
{
 
 if (audioElement.pause()|| audioElement.currentTime<=0)
 {
 audioElement.play();
 console.log("playing");
 
}
 else
audioElement.pause();
console.log("paused");
})

var play3=document.querySelector('.song3play');
play3.addEventListener('click',()=>
{
 
 if (audioElement.pause()|| audioElement.currentTime<=0)
 {
 audioElement.play();
 console.log("playing");

}
 else
audioElement.pause();
console.log("paused");
})


var play4=document.querySelector('.song4play');
play4.addEventListener('click',()=>
{

 if (audioElement.pause()|| audioElement.currentTime<=0)
 {
 audioElement.play();
 console.log("playing");

}
 else
audioElement.pause();
console.log("paused");
})

var play5=document.querySelector('.song5play');
play5.addEventListener('click',()=>
{
 
 if (audioElement.pause()|| audioElement.currentTime<=0)
 {
 audioElement.play();
 console.log("playing");
 
}
 else
audioElement.pause();
console.log("paused");
})


