
canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");

color = "red";
color2 = "blue";
color3 = "black";
color4 = "yellow";
color5 = "green";

ctx= canvas.getContext("2d")

ctx.beginPath();
ctx.strokeStyle = color2;
ctx.lineWidth = 5;
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = color4;
ctx.lineWidth = 5;
ctx.arc(250, 250, 40 ,0 , 2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = color3;
ctx.lineWidth = 5;
ctx.arc(300, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = color5;
ctx.lineWidth = 5;
ctx.arc(350, 250, 40 ,0 , 2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(400, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color3;
ctx.lineWidth = 5;
ctx.rect(150, 143, 430, 200 );
ctx.stroke();


mouse_x = e.clientX
mouse_y = e.clientY

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    console.log(color);

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.ofsetTop;

    console.log("X = " + mouse_x + " ,Y = " + mouse_y);
    circle(mouse_x , mouse_y);
}