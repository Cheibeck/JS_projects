var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";


var coleccion = [];
coleccion.push(new Pakiman("Pokacho", 80, 10));
coleccion.push(new Pakiman("Cauchin", 90, 60));
coleccion.push(new Pakiman("Tocinauro", 120, 30));


for(var p of coleccion){
  p.mostrar();
}
