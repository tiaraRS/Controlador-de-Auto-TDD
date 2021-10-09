
function obtenerSiguienteOrientacion(orientacion){
  let orientaciones = ['N','O','S','E']
  return orientaciones[orientaciones.indexOf(orientacion)+1];
}

function controlarAuto(cadenaDeControlAuto) {
  let x = 4;
  let y = 0;
  let orientacion = "N";
  let posicionFinal = `(${x},${y})${orientacion}`;
  for(let i=0;i<cadenaDeControlAuto.length;i++){   
    console.log(cadenaDeControlAuto[i])
    if(cadenaDeControlAuto[i]=="A") { 
      console.log(orientacion)
      if(orientacion=="N") y++;
      if(orientacion=="O") x--;
      if(orientacion=="E") x++;
    }  
    if(cadenaDeControlAuto[i]=="I") { 
      orientacion = obtenerSiguienteOrientacion(orientacion);
    } 
    if(cadenaDeControlAuto[i]=="D") {       
        orientacion = "E";
    } 
    if(cadenaDeControlAuto[i] !="I" && cadenaDeControlAuto[i] !="A" && cadenaDeControlAuto[i]!="D") { 
      posicionFinal = `(${x},${y})${orientacion}`;
      return posicionFinal;
    }
   
  }
  posicionFinal = `(${x},${y})${orientacion}`;
  return posicionFinal;
}

export default controlarAuto;