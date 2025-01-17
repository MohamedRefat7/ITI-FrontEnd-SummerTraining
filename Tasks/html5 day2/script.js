function dragspaper(e){
    e.dataTransfer.setData("id",e.target.id);
}
function droptpaper(e){
    e.preventDefault();
    var sid=e.dataTransfer.getData("id");
    if(sid=="scr")
    e.target.replaceWith(document.getElementById(sid));
}
function dragsrock(e){
    e.dataTransfer.setData("id",e.target.id);
}
function droptrock(e){
    e.preventDefault();
    var sid=e.dataTransfer.getData("id");
    if(sid=="paper")
    e.target.replaceWith(document.getElementById(sid));

}
function dragscr(e){
    e.dataTransfer.setData("id",e.target.id);
}
function dropts(e){
    e.preventDefault();
    var sid=e.dataTransfer.getData("id");
    if(sid=="rock")
    e.target.replaceWith(document.getElementById(sid));

}
