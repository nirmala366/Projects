let countchild = document.getElementById("countchild");

let btn = document.getElementById("clickbtn");
let btn2 = document.getElementById("clickbtnneg");
let count = 0;

btn.addEventListener('click',()=>{
    count++;
    countchild.innerHTML = `<h1>Count: ${count} </h1>`;

})

btn2.addEventListener(`click`,()=>{
    count--;
    countchild.innerHTML = `<h1>Count: ${count} </h1>`;
})