
let gameSeq = [];
let userSeq = [];
let btns = ["one","two","three","four"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
const DOMhighest = document.querySelector("#highest");
const highestScore = localStorage.getItem("highest");
if(highestScore){
    DOMhighest.innerHTML = `Highest score: ${localStorage.getItem("highest")}`;
}

document.addEventListener("keydown",function(){
    if(started==false){
    console.log("game is started");
    started = true;
    levelUp();
    }
});
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },200);
}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },150);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
// rando btn choose
let ran = Math.floor(Math.random()*4);
let box = btns[ran];
let btn = document.querySelector(`.${box}`);
gameSeq.push(box);
console.log(gameSeq);

gameFlash(btn);

}
function checkAns(index){
// //  console.log("curr levele : ",level);   
// let index = level-1;
if(userSeq[index]===gameSeq[index]){
    if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,2000);
        // levelUp();
    }
    console.log("same value");
}else{
    h2.innerHTML = `game over! your score was <b>${level}</b> <br>press any key to start`;
    
    if(highestScore){
        if(level > highestScore){
            localStorage.setItem("highest", `${level}`);
            DOMhighest.innerHTML = `Highest score: ${level}`;
        }else{
            DOMhighest.innerHTML = `Highest score: ${localStorage.getItem("highest")}`;
        }
    }else{
        localStorage.setItem("highest", `${level}`);
        DOMhighest.innerHTML = `Highest score: ${level}`;
    }
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);
}
}
function btnpress(){
    let btn = this;
    console.log(this);
    userflash(btn);
    let number = btn.getAttribute("id");
    userSeq.push(number);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click",btnpress)
}
