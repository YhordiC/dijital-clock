
function ObtenerId(id){  // esta funcion nos permite guardar el nodo por su id
    const Xvar= document.getElementById(id);
    return Xvar;
}
let hourEl=ObtenerId('hour');
let minuteEl=ObtenerId('minutes');
let secondEl=ObtenerId('seconds');
let ampmEl=ObtenerId('ampm');

function updateClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm='AM';

    if(h>12){
        ampmEl.style.backgroundColor = '#9301cd';
        h=h-12;
        ampm='PM';
    }else ampmEl.style.backgroundColor='#05af91';
h= h<10?'0'+h:h;

    hourEl.innerHTML=h;
    minuteEl.innerHTML=m;
    secondEl.innerHTML=s;
    ampmEl.innerHTML=ampm;
    setTimeout(()=>{
      updateClock();
    },1000)
}
updateClock();