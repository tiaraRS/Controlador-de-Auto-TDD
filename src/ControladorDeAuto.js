
function obtenerSiguienteOrientacion(orientacion, orientaciones){
  let siguienteOrientacion = orientacion;
  if(orientacion==orientaciones[3]) siguienteOrientacion = orientaciones[0]
        else siguienteOrientacion = orientaciones[orientaciones.indexOf(orientacion)+1]
  return siguienteOrientacion;
}

function ajustarLimiteXSuperficieX(coordenadaX,tamSuperficieInicialX){
  let coordenadaAjustada = coordenadaX;
  if(coordenadaX<0) coordenadaAjustada = 0;
  if(coordenadaAjustada>tamSuperficieInicialX) coordenadaAjustada = tamSuperficieInicialX;
  return coordenadaAjustada;
}

function ajustarLimiteYSuperficieY(coordenadaY, tamSuperficieInicialY){
  let coordenadaAjustada = coordenadaY;
  if(coordenadaY<0) coordenadaAjustada = 0;
  if(coordenadaAjustada>tamSuperficieInicialY) coordenadaAjustada = tamSuperficieInicialY;
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
  let posicionPosInicial = 0;
  if(contieneSuperficieInicial(cadenaSeparada)){
    posicionPosInicial = 1;
  }
  let posicionInicialX = 4;
  if(cadenaSeparada.length>1){
    posicionInicialX = cadenaSeparada[posicionPosInicial].split(",")[0];   
  }
  return posicionInicialX;
}

function tieneOrientacionInicial(cadenaPosicionInicial){
  return cadenaPosicionInicial=="N" || cadenaPosicionInicial=="S"  || cadenaPosicionInicial=="O"   || cadenaPosicionInicial =="E";
}

function contienePosicionY(cadenaPosicionInicial){
  return cadenaPosicionInicial.length>1;
}

function obtenerUltimaPosicion(cadena){
  return cadena[cadena.length-1];
}

function contienePosicionInicial(cadenaControlAuto){
  return cadenaControlAuto.length>1;
}


function contieneSuperficieInicial(cadenaControlAuto){
  return cadenaControlAuto.length>2;
}

function obtenerSuperficieInicial(cadenaDeControlAuto){
  let cadenaSuperficieInicial = 8;
  let cadenaSeparada = separarPartesCadenaDeControl(cadenaDeControlAuto);
  if(contieneSuperficieInicial(cadenaSeparada)){
    cadenaSuperficieInicial = cadenaSeparada[0];
  }
  return cadenaSuperficieInicial;
}

function obtenerSuperficieInicialX(cadenaDeControlAuto){
  let superficieInicialX = 8;
  let cadenaSuperficieInicial = 8;
  let cadenaSeparada = separarPartesCadenaDeControl(cadenaDeControlAuto);
  if(contieneSuperficieInicial(cadenaSeparada)){
    cadenaSuperficieInicial = cadenaSeparada[0];
    superficieInicialX = cadenaSuperficieInicial.split(",")[0]
  }
 return superficieInicialX;
}

function obtenerSuperficieInicialY(cadenaDeControlAuto){
  let superficieInicialY = 8;
  let cadenaSuperficieInicial = 8;
  let cadenaSeparada = separarPartesCadenaDeControl(cadenaDeControlAuto);
  if(contieneSuperficieInicial(cadenaSeparada)){
    cadenaSuperficieInicial = cadenaSeparada[0];
    superficieInicialY = cadenaSuperficieInicial.split(",")[1]
  }
 return superficieInicialY;
}



function sintaxisInvalido(cadenaPosicionInicial){
  return cadenaPosicionInicial.length>2;
}

function obtenerPosicionInicialYAuto(cadenaDeControlAuto){
  let cadenaSeparada = separarPartesCadenaDeControl(cadenaDeControlAuto);
  let posicionInicialY = 0;
  let posicionPosInicial = 0;
  if(contieneSuperficieInicial(cadenaSeparada)){
    posicionPosInicial = 1;
  }
  let cadenaPosicionInicial = cadenaSeparada[posicionPosInicial].split(",");
  if(contienePosicionInicial(cadenaSeparada) && contienePosicionY(cadenaPosicionInicial)) posicionInicialY = cadenaPosicionInicial[1];
  if(tieneOrientacionInicial(obtenerUltimaPosicion(posicionInicialY))) {
    posicionInicialY = cadenaPosicionInicial[1][0];
  }
  if(sintaxisInvalido(cadenaPosicionInicial)) posicionInicialY = -1000;
  return posicionInicialY;
}


function obtenerCadenaDeComandosAuto(cadenaDeControlAuto){
  let cadenaSeparada = separarPartesCadenaDeControl(cadenaDeControlAuto);
  let cadenaDeComandosAuto = cadenaDeControlAuto;
  let posicionCadenaComandos = 1;
  if(contieneSuperficieInicial(cadenaSeparada)){
    posicionCadenaComandos = 2;
  }
  if(cadenaSeparada.length>1){
    cadenaDeComandosAuto = cadenaSeparada[posicionCadenaComandos];
  }
  return cadenaDeComandosAuto;
}

function posicionInicialXNoValida(posicionX,tamSuperficieInicialX){
  return posicionX>tamSuperficieInicialX||posicionX<0;
}

function posicionInicialYNoValida(posicionY,tamSuperficieInicialY){
  return posicionY>tamSuperficieInicialY||posicionY<0;
}
/*
function posicionInicialNoValida(posicion, tamSuperficieInicial){
  return posicion>tamSuperficieInicial||posicion<0;
}*/

function obtenerOrientacionInicialAuto(cadenaDeControlAuto){
  let orientacionInicial="N";
  let cadenaSeparada = separarPartesCadenaDeControl(cadenaDeControlAuto);
  let posicionPosInicial = 0;
  if(contieneSuperficieInicial(cadenaSeparada)){
    posicionPosInicial = 1;
  }
  let cadenaPosicionInicial=cadenaSeparada[posicionPosInicial].split(","); 
  if(contienePosicionInicial(cadenaSeparada) && contienePosicionY(cadenaPosicionInicial) && !(cadenaPosicionInicial[cadenaPosicionInicial.length-1] in ["N","S","E","O"])){
    orientacionInicial = obtenerUltimaPosicion(cadenaPosicionInicial[1]);
  }
  return orientacionInicial;
}

function controlarAuto(cadenaDeControlAuto) {
  let posicionInicial=""
  let cadenaDeComandosAuto = obtenerCadenaDeComandosAuto(cadenaDeControlAuto);
  let x = obtenerPosicionInicialXAuto(cadenaDeControlAuto);
  let y = obtenerPosicionInicialYAuto(cadenaDeControlAuto);  
  let orientacion = obtenerOrientacionInicialAuto(cadenaDeControlAuto);
  let tamSuperficieInicial = obtenerSuperficieInicial(cadenaDeControlAuto);
  let tamSuperficieInicialX =  obtenerSuperficieInicialX(cadenaDeControlAuto);//tamSuperficieInicial.split(",")[0];
  let tamSuperficieInicialY = obtenerSuperficieInicialY(cadenaDeControlAuto);// tamSuperficieInicial.split(",")[1];
  if(y==-1000) return "error de sintaxis"  
  if(posicionInicialXNoValida(x,tamSuperficieInicialX) || posicionInicialYNoValida(y,tamSuperficieInicialX)) return "Valor no permitido: fuera de rango de superficie";    
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
  x = ajustarLimiteXSuperficieX(x,tamSuperficieInicialX);
  y = ajustarLimiteYSuperficieY(y,tamSuperficieInicialY);
  posicionFinal = `(${x},${y})${orientacion}`;
  return posicionFinal;
}

export default controlarAuto;