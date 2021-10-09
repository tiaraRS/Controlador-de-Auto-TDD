
function obtenerSiguienteOrientacion(orientacion, orientaciones){
  let siguienteOrientacion = orientacion;
  if(orientacion==orientaciones[3]) siguienteOrientacion = orientaciones[0]
        else siguienteOrientacion = orientaciones[orientaciones.indexOf(orientacion)+1]
  return siguienteOrientacion;
}

function ajustarLimitesSuperficie(coordenada){
  let coordenadaAjustada = coordenada;
  if(coordenada<0) coordenadaAjustada = 0;
  if(coordenadaAjustada>8) coordenadaAjustada = 8;
  return coordenadaAjustada;
}

function caracterNoPermitido(caracter){
  return caracter !="I" && caracter !="A" && caracter!="D";
}

function controlarAuto(cadenaDeControlAuto) {
  let x = 4;
  let y = 0;
  let posicionInicial=""
  let cadenaSeparada = cadenaDeControlAuto.split("/");
  if(cadenaSeparada.length>1){
    posicionInicial = cadenaSeparada[0];
    cadenaDeControlAuto = cadenaSeparada[1];
  }
  if(posicionInicial!=""){
    x = posicionInicial;
    if(x>8||x<0) return "Valor no permitido: fuera de rango de superficie";
  }
  let orientacion = "N";
  let posicionFinal = `(${x},${y})${orientacion}`;
  for(let i=0;i<cadenaDeControlAuto.length;i++){   
    let caracter = cadenaDeControlAuto[i];
    if(caracter=="A") { 
      if(orientacion=="N") y++;
      if(orientacion=="O") x--;
      if(orientacion=="E") x++;
      if(orientacion=="S") y--;
    }  
    if(caracter=="I") { 
      orientacion = obtenerSiguienteOrientacion(orientacion, ['N','O','S','E']);
    } 
    if(caracter=="D") {       
      orientacion = obtenerSiguienteOrientacion(orientacion, ['N','O','S','E'].reverse());
    } 
    if(caracterNoPermitido(caracter)) { 
      posicionFinal = `(${x},${y})${orientacion}`;
      return posicionFinal;
    }
   
  }
  x = ajustarLimitesSuperficie(x);
  y = ajustarLimitesSuperficie(y);
  posicionFinal = `(${x},${y})${orientacion}`;
  return posicionFinal;
}

export default controlarAuto;