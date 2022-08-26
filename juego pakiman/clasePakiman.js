class Pakiman {
  constructor(name, life, attack) {
    this.imagen = new Image();
    this.nombre = name;
    this.vida = life;
    this.ataque = attack;

    this.imagen.src = imagenes[this.nombre];
  }
  hablar(){
    alert(this.nombre);
  }
  mostrar(){
    document.body.appendChild(this.imagen);
    document.write("<p>");
    document.write("<strong>" + this.nombre + "</stong><br />");
    document.write("Vida: " + this.vida + "<br/ >");
    document.write("Ataque: " + this.ataque + "<br/ >");
    document.write("<hr /></p>");
  }
}
