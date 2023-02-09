
function toggle(){
    let color=document.getElementById("onoff");
//    if(color.style.background=='red')
//    { color.style.background='green';
//    document.getElementById("onoff").innerText='ON';
//    document.getElementById("home").innerText=0;
//    document.getElementById('guest').innerText=0;
//    home=0;
//    guest=0;
// }
    if( color.style.background=='green'){
    color.style.background='red';
    home="";
    guest="";
    document.getElementById("home").innerText="";
   document.getElementById('guest').innerText="";
   document.getElementById("onoff").innerText='OFF';
      
    }
    else{
        color.style.background='green';
        document.getElementById("onoff").innerText='ON';
        document.getElementById("home").innerText=0;
        document.getElementById('guest').innerText=0;
        home=0;
        guest=0;
    }
}

let homescore = document.getElementById("home")
let guestscore = document.getElementById('guest')
let color=document.getElementById("onoff")
let home=0;
let guest=0;
function plusoneh(){
if( color.style.background=='green'){
   home+=1;
   homescore.innerText=home;
}
}
function plustwoh(){
    if( color.style.background=='green'){
    home+=2;
   homescore.innerText=home;
}
}
function plusthreeh(){
    if( color.style.background=='green'){
    home+=3;
   homescore.innerText=home;
    }
}
function plusoneg(){
    if( color.style.background=='green'){
   guest+=1;
   guestscore.innerText=guest;
}
}
function plustwog(){
    if( color.style.background=='green'){
    guest+=2;
    guestscore.innerText=guest;
 }
}
function plusthreeg(){
    if( color.style.background=='green'){
    guest+=3;
    guestscore.innerText=guest;
 }
}
function reset(){
    if( color.style.background=='green'){
    homescore.innerText=0;
    guestscore.innerText=0;
    home=0;
    guest=0;
}
}
