for(let i=1; i<=16; i++){
    let newDiv= document.createElement("div");
    document.body.appendChild("newDiv");
}

function random(colors){
    return Math.floor(Math.random()*colors);
}

function background(){
    const rand = 'rgb('+random(255)+','+random(255)+','+random(255)+')';
    return rand;
}
let divs = document.querySelectorAll('div');
for(let i=0; i<divs.length; i++){
    divs[i].onclick = function(x)
    {
        x.target.style.backgroundColor=background();
    }
}