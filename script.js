let h= document.getElementById("hour-hand")
let m= document.getElementById("minute-hand")
let s= document.getElementById("second-hand")


function updateTime(){
    let date = new Date();
    let mint = date.getMinutes();
    let hour = date.getHours();
    let sec = date.getSeconds();


    let hrotation = 30*hour;
    let mrotation = 6* mint;
    let sretation = 6* sec;

h.style.transform = `rotate(${hrotation}deg)`;
m.style.transform = `rotate(${mrotation}deg)`;
s.style.transform = `rotate(${sretation}deg)`;
}

setInterval(updateTime,1000);

