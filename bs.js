var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

a = 2*Math.PI;
b = Math.pow(250,2);

radius = 2;

function randomDot()
{
  dir = Math.random() * a;
  dis = Math.random() * b;
  drawDot(300 + Math.cos(dir) * Math.sqrt(dis), 300 + Math.sin(dir) * Math.sqrt(dis));
}

function drawDot(x,y)
{
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
}

// for (var dir = 0; dir < 2*Math.PI; dir += 0.001)
// {
//   for (var dis = 0; dis < 90000; dis += 10000)
//   {
//     drawDot(300 + Math.cos(dir) * Math.sqrt(dis), 300 + Math.sin(dir) * Math.sqrt(dis));
//   }
// }

function update()
{
  randomDot();
}

function start()
{
  try
  {
    clearInterval(interval)
  }
  catch
  {

  }
  ctx.strokeStyle="rgba(0,0,0,0)";
  ctx.fillStyle = "rgba(0,0,0,0.1)";
  radius = document.getElementById("myNumber").value;
  b = Math.pow(300-radius,2);
  ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
  interval = setInterval(update, 1);
}
