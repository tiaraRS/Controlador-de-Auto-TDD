
function obtenerSiguienteOrientacion(orientacion){
  let orientaciones = ['N','O','S','E']
  return orientaciones[orientaciones.indexOf(orientacion)+1];
}

function controlarAuto(cadenaDeControlAuto) {
  let x = 4;
  let y = 0;
  let orientaciones = ['N','O','S','E']
  let orientacion = "N";
  let posicionFinal = `(${x},${y})${orientacion}`;
  for(let i=0;i<cadenaDeControlAuto.length;i++){   
    
    if(cadenaDeControlAuto[i]=="A") { 
      if(orientacion=="N") y++;
      if(orientacion=="O") x--;
      if(orientacion=="E") x++;
    }  
    if(cadenaDeControlAuto[i]=="I") { 
      orientacion = obtenerSiguienteOrientacion(orientacion);
    } 
    if(cadenaDeControlAuto[i]=="D") {       
        if(orientacion=="N") {orientacion = "E"}
        else{orientacion = orientaciones[orientaciones.indexOf(orientacion)-1]}
    } 
    if(cadenaDeControlAuto[i] !="I" && cadenaDeControlAuto[i] !="A" && cadenaDeControlAuto[i]!="D") { 
      posicionFinal = `(${x},${y})${orientacion}`;
      return posicionFinal;
    }
    console.log(cadenaDeControlAuto[i], orientacion)
   
  }
  posicionFinal = `(${x},${y})${orientacion}`;
  return posicionFinal;
}

export default controlarAuto;