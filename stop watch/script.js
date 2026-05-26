let mins = document.getElementById("mins");
let secs = document.getElementById("secs");
let msecs = document.getElementById("msecs");


let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");

let min =0;
let sec =0;
let ms =0;

let timer = null;

start.addEventListener('click',()=>{
    if(timer != null) return;
    timer = setInterval(() => {
        ms++;
        if(ms === 100){
            ms =0;
            sec++;
        }
        if(sec === 60){
            sec=0;
            min++;
        }

        mins.innerText= min<10 ? "0" + min : min;
        secs.innerText= sec<10 ? "0" + sec : sec;
        msecs.innerText= ms<10 ? "0" + ms : ms;
    }, 10);
})

pause.addEventListener('click',()=>{
    clearInterval(timer)
    timer = null;
})

reset.addEventListener('click',()=>{
    clearInterval(timer);
    timer= null;
    ms =0;
    sec =0;
    min=0;

    mins.innerText = "00";
    secs.innerText = "00";
    msecs.innerText = "00";
})