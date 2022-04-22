var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
var color;
width=screen.width;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 5;
    var new_width=screen.width-100;
    var new_height=screen.height-400;

    if(width < 992){
        document.getElementById("myCanvas").width = new_width;
        document.getElementById("myCanvas").height = new_height;
    }
    canvas.addEventListener("touchstart",my_touchstart);
    function my_touchstart (e)
    {
        console.log("my_touchstart");
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width").value;

        last_position_of_x = e.touches[0].clientX-canvas.offsetTop;
        last_position_of_y = e.touches[0].clientY-canvas.offsetTop;

    }
    canvas.addEventListener("touchmove",my_touchmove);
    function my_touchmove (e)
    {
        console.log("my_touchmove");
        current_position_of_touch_x = e.touches[0].clientX-canvas.offsetTop;
        current_position_of_touch_y = e.touches[0].clientY-canvas.offsetTop;

        ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    ctx.moveTo(last_position_of_x,last_position_of_y);
    console.log("last_position_of_x and y coordinates = ");
    console.log("x ="+ current_position_of_touch_x + "y =" + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
    ctx.stroke();

    last_position_of_x=current_position_of_touch_x;
    last_position_of_y=current_position_of_touch_y;
}
function   cear_drawing(){
    ctx.clearReact(0,0,canvas_width,canvas_height);
}
    

    
    
    
