document.addEventListener("click", dibujarMouse)
document.addEventListener("mousemove", dibujarMouse);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{ //Esta es la función base del dibujo.
    lienzo.beginPath();
    lienzo.strokeStyle= color;     //color de la linea
    lienzo.lineWidth= 3;   //ancho de la linea
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
function dibujarMouse(evento)
{
  if(evento.which == 1)
  {
      console.log(evento);
      var x = evento.offsetX;
      var y = evento.offsetY;
      dibujarLinea("blue", x-1, y-1, x+1, y+1, papel);
  }
}
