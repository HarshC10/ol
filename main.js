canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="black";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(394,200,50,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
  color=document.getElementById("color").value;
  console.log(color);
  
  mouse_x=e.ClientX-canvas.offsetLeft;
  mouse_y=e.ClientY-canvas.offsetTop;
  console.log("x="+mouse_x+",y="+mouse_y);
  circle(mouse_x,mouse_y);
}

function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y,10,0,2*Math.PI);
    ctx.stroke();
    
}

color="blue";


ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(250,200,50,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
  color=document.getElementById("color").value;
  console.log(color);
  
  mouse_x=e.ClientX-canvas.offsetLeft;
  mouse_y=e.ClientY-canvas.offsetTop;
  console.log("x="+mouse_x+",y="+mouse_y);
  circle(mouse_x,mouse_y);
}

function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y,10,0,2*Math.PI);
    ctx.stroke();
    
}


color="red";


ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(538,200,50,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
  color=document.getElementById("color").value;
  console.log(color);
  
  mouse_x=e.ClientX-canvas.offsetLeft;
  mouse_y=e.ClientY-canvas.offsetTop;
  console.log("x="+mouse_x+",y="+mouse_y);
  circle(mouse_x,mouse_y);
}

function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y,10,0,2*Math.PI);
    ctx.stroke();
    
}

color="yellow";


ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(324,250,50,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
  color=document.getElementById("color").value;
  console.log(color);
  
  mouse_x=e.ClientX-canvas.offsetLeft;
  mouse_y=e.ClientY-canvas.offsetTop;
  console.log("x="+mouse_x+",y="+mouse_y);
  circle(mouse_x,mouse_y);
}

function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=10;
    ctx.arc(mouse_x,mouse_y,10,0,2*Math.PI);
    ctx.stroke();
    
}

color="green";


ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(458,250,50,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
  color=document.getElementById("color").value;
  console.log(color);
  
  mouse_x=e.ClientX-canvas.offsetLeft;
  mouse_y=e.ClientY-canvas.offsetTop;
  console.log("x="+mouse_x+",y="+mouse_y);
  circle(mouse_x,mouse_y);
}

function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=10;
    ctx.arc(mouse_x,mouse_y,10,0,2*Math.PI);
    ctx.stroke();
    
}