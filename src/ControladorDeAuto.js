
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

function separarPartesCadenaDeControl(cadenaDeControlAuto){
  return cadenaDeControlAuto.split("/");
}

function obtenerPosicionInicialXAuto(cadenaDeControlAuto){
  let cadenaSeparada = separarPartesCadenaDeControl(cadenaDeControlAuto);
  let posicionInicialX = 4;
  if(cadenaSeparada.length>1){
    posicionInicialX = cadenaSeparada[0].split(",")[0];   
  }
  //console.log("posx",posicionInicialX)
  return posicionInicialX;
}


function obtenerPosicionInicialYAuto(cadenaDeControlAuto){
  let cadenaSeparada = separarPartesCadenaDeControl(cadenaDeControlAuto);
  let posicionInicialY = 0;
  if(cadenaSeparada.length>1 && cadenaSeparada[0].split(",").length>1 ){
    posicionInicialY = cadenaSeparada[0].split(",")[1];
  }
  console.log(posicionInicialY)
  if(posicionInicialY[posicionInicialY.length-1]=="N" || posicionInicialY[posicionInicialY.length-1]=="S"  ||posicionInicialY[posicionInicialY.length-1]=="O"   ||posicionInicialY[posicionInicialY.length-1]=="E") {
    posicionInicialY = cadenaSeparada[0].split(",")[1][0];
  }
  //console.log("s",cadenaSeparada[0].split(","))
  if(cadenaSeparada[0].split(",").length>2) posicionInicialY = -1000;
  return posicionInicialY;
}


function obtenerCadenaDeComandosAuto(cadenaDeControlAuto){
  let cadenaSeparada = separarPartesCadenaDeControl(cadenaDeControlAuto);
  let cadenaDeComandosAuto = cadenaDeControlAuto;
  if(cadenaSeparada.length>1){
    cadenaDeComandosAuto = cadenaSeparada[1];
  }
  return cadenaDeComandosAuto;
}

function posicionInicialNoValida(posicion){
  return posicion>8||posicion<0;
}

function obtenerOrientacionInicialAuto(cadenaDeControlAuto){
  let orientacionInicial="N";
  let cadenaSeparada = separarPartesCadenaDeControl(cadenaDeControlAuto);  
  let cadenaPosicionInicial=cadenaSeparada[0].split(",");
  console.log("cad", cadenaPosicionInicial)
  console.log("p",cadenaPosicionInicial[cadenaPosicionInicial.length-1] in ["N","S","E","O"])
  if(cadenaSeparada.length>1 && cadenaPosicionInicial.length>1 && !(cadenaPosicionInicial[cadenaPosicionInicial.length-1] in ["N","S","E","O"])){
    orientacionInicial = cadenaSeparada[0].split(",")[1][cadenaSeparada[0].split(",")[1].length-1];
  }
  return orientacionInicial;
}

function controlarAuto(cadenaDeControlAuto) {
  let posicionInicial=""
  let cadenaDeComandosAuto = obtenerCadenaDeComandosAuto(cadenaDeControlAuto);
  let x = obtenerPosicionInicialXAuto(cadenaDeControlAuto);
  let y = obtenerPosicionInicialYAuto(cadenaDeControlAuto);  
  let orientacion = obtenerOrientacionInicialAuto(cadenaDeControlAuto);
  //console.log(cadenaSeparada[0].split(",")[1])
  console.log(x,y,orientacion);
  if(y==-1000) return "error de sintaxis"
  if(posicionInicialNoValida(x) || posicionInicialNoValida(y)) return "Valor no permitido: fuera de rango de superficie";    
  let posicionFinal = `(${x},${y})${orientacion}`;
  for(let i=0;i<cadenaDeComandosAuto.length;i++){   
    let caracter = cadenaDeComandosAuto[i];
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