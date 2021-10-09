
function obtenerSiguienteOrientacionIzq(orientacion){
  let orientaciones = ['N','O','S','E'];
  let siguienteOrientacion = orientacion;
  if(orientacion=="E") siguienteOrientacion = "N"
        else siguienteOrientacion = orientaciones[orientaciones.indexOf(orientacion)+1]
  return siguienteOrientacion;
}

function obtenerSiguienteOrientacionDer(orientacion){
  let orientaciones = ['N','O','S','E']
  let siguienteOrientacion = orientacion;
  if(orientacion=="N") siguienteOrientacion = "E"
        else siguienteOrientacion = orientaciones[orientaciones.indexOf(orientacion)-1];
  return siguienteOrientacion;
}

function controlarAuto(cadenaDeControlAuto) {
  let x = 4;
  let y = 0;
  let orientacion = "N";
  let posicionFinal = `(${x},${y})${orientacion}`;
  for(let i=0;i<cadenaDeControlAuto.length;i++){   
    
    if(cadenaDeControlAuto[i]=="A") { 
      if(orientacion=="N") y++;
      if(orientacion=="O") x--;
      if(orientacion=="E") x++;
      if(orientacion=="S") y--;
    }  
    if(cadenaDeControlAuto[i]=="I") { 
      orientacion = obtenerSiguienteOrientacionIzq(orientacion);
    } 
    if(cadenaDeControlAuto[i]=="D") {       
      orientacion = obtenerSiguienteOrientacionDer(orientacion);
    } 
    if(cadenaDeControlAuto[i] !="I" && cadenaDeControlAuto[i] !="A" && cadenaDeControlAuto[i]!="D") { 
      posicionFinal = `(${x},${y})${orientacion}`;
      return posicionFinal;
    }
   
  }
  if(x<0) x = 0;
  if(x>8) x = 8;
  if(y<0) y = 0;
  if(y>8) y = 8;
  posicionFinal = `(${x},${y})${orientacion}`;
  return posicionFinal;
}

export default controlarAuto;