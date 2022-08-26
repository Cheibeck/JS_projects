var z;
var vt = document.getElementById('villa_topo');
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
var papel = vt.getContext("2d");
var fondo = {
  url: "tile.png",
  cargaOk: false
};
var vaca = {
  url: "vaca.png",
  cargaOk: false
};
var cerdo = {
  url: "cerdo.png",
  cargaOk: false
};
var tranquera ={
  url: "tranquera.png",
  cargaOk: false
};
var xCerdo = 0;
var yCerdo = 200;
var x = aleatorio(10,400);
var y = aleatorio(10,400);
console.log(x);
console.log(y);

document.addEventListener("keydown", dibujarTeclado);
fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdo);

tranquera.objeto = new Image();
tranquera.objeto.src = tranquera.url;
tranquera.objeto.addEventListener("load", cargarTranquera);
console.log(cerdo);
console.log(tranquera);
function cargarFondo(){
  fondo.cargaOk = true;
  dibujar();
}
function cargarVacas(){
  vaca.cargaOk = true;
  dibujar();
}
function cargarCerdo(){
  cerdo.cargaOk = true;
  dibujarCerdo();
}
function cargarTranquera(){
  tranquera.cargaOk = true;
  papel.drawImage(tranquera.objeto, 370,200);
}
function dibujar(){
  if (fondo.cargaOk){
    papel.drawImage(fondo.objeto, 0,0);
  }
  if (vaca.cargaOk){
    papel.drawImage(vaca.objeto, x, y);
    papel.drawImage(vaca.objeto, x-10, y+100);
    papel.drawImage(vaca.objeto, x+76, y-8);
    papel.drawImage(vaca.objeto, x+100, y+300);

  }
}
function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min +1)) + min;
  return resultado;
}
function dibujarCerdo(){
  if (cerdo.cargaOk){
    papel.beginPath();
    papel.drawImage(cerdo.objeto, xCerdo, yCerdo);
    papel.stroke();
    papel.closePath();
  }
}

function dibujarTeclado(evento)
{
  var movimiento = 2;
  switch(evento.which)
  {
    case teclas.UP:
      papel.drawImage(fondo.objeto, 0,0);
      papel.drawImage(vaca.objeto, x, y);
      papel.drawImage(vaca.objeto, x-10, y+100);
      papel.drawImage(vaca.objeto, x+76, y-8);
      papel.drawImage(vaca.objeto, x+100, y+300);
      papel.drawImage(tranquera.objeto, 370,200);
      dibujarCerdo(xCerdo, yCerdo, papel);
      yCerdo = yCerdo - movimiento;
      if(xCerdo == 370){
        alert("ganaste");
      }
    break;
    case teclas.DOWN:
      papel.drawImage(fondo.objeto, 0,0);
      papel.drawImage(vaca.objeto, x, y);
      papel.drawImage(vaca.objeto, x-10, y+100);
      papel.drawImage(vaca.objeto, x+76, y-8);
      papel.drawImage(vaca.objeto, x+100, y+300);
      papel.drawImage(tranquera.objeto, 370,200);
      dibujarCerdo(xCerdo, yCerdo, papel);
      yCerdo = yCerdo + movimiento;
      if(xCerdo == 370){
        alert("ganaste");
      }
    break;
    case teclas.LEFT:
      papel.drawImage(fondo.objeto, 0,0);
      papel.drawImage(vaca.objeto, x, y);
      papel.drawImage(vaca.objeto, x-10, y+100);
      papel.drawImage(vaca.objeto, x+76, y-8);
      papel.drawImage(vaca.objeto, x+100, y+300);
      papel.drawImage(tranquera.objeto, 370,200);
      dibujarCerdo(xCerdo, yCerdo, papel);
      xCerdo = xCerdo - movimiento;
      if(xCerdo == 370){
        alert("ganaste");
      }
    break;
    case teclas.RIGHT:
      papel.drawImage(fondo.objeto, 0,0);
      papel.drawImage(vaca.objeto, x, y);
      papel.drawImage(vaca.objeto, x-10, y+100);
      papel.drawImage(vaca.objeto, x+76, y-8);
      papel.drawImage(vaca.objeto, x+100, y+300);
      papel.drawImage(tranquera.objeto, 370,200);
      dibujarCerdo(xCerdo, yCerdo, papel);
      xCerdo = xCerdo + movimiento;
      if(xCerdo == 370){
        alert("ganaste");
      }
    break;

  }
}
