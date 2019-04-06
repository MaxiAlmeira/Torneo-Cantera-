
function diferencia_goles (favor,contra){
  var diferencia = this.favor - this.contra;
  return diferencia;
}

var equipo = []; //NO SE SI ESTA BIEN DEFINIDO EL VECTOR

  equipo[0] = {
  nombre: "70 treinta",
  puntos: 0,
  cantJugadores: 6,
  partidos: {
    jugados: 3,
    perdidos: 0,
    empatados:0,
    ganados: 3,
  },
  goles: {
    favor: 5,
    contra: 3,
    dif: diferencia_goles(favor,contra),
  },
  jugadores: {
    nombres: ["Lucas Segura","Iván Manca","Martin Inostrosa","Tomás García", "Luis Berrocal","Jonathan Grasso","Maximiliano Almeira"],
    numeros: ["-","-","-","-","-","-","-"],
    goles: [0,0,0,0,0,0,0],
    edades: ["23","24","25","24","29","-","24",],
    tarjetas: [0,0,0,0,0,0,0]
  }
}


console.log(equipo[0].jugadores.nombres[2]);
document.getElementById("e0").innerHTML= equipo[0].nombre;
console.log(equipo[0].goles.dif);
