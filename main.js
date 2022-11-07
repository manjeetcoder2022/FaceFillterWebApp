function Select(){
    selected_item= document.getElementById("filter_type").value
    if(selected_item=="Both"){
        document.getElementById("demo").innerHTML= "<img src='chasma.png'> <br> <img src='mustache.png'> "
    }else{
    document.getElementById("demo").innerHTML= "<img src='" + selected_item+"'>"
    }
}

function preload(){

}
function setup(){
    canvas= createCanvas(350,300)
 canvas.center()
}