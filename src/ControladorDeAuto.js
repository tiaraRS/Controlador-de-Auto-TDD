function controlarAuto(cadenaDeControlAuto) {
  let x = 4;
  let y = 0;
  let orientaciones = ['N','O','S','E']
  let orientacion = "N";
  if(cadenaDeControlAuto[0]=="A") {
   y++
  }
  if( cadenaDeControlAuto[1]=="A"){
    x--
  }
  if(cadenaDeControlAuto[0]=="I") orientacion=orientaciones[orientaciones.indexOf(orientacion)+1];
  let posicionFinal = `(${x},${y})${orientacion}`;
  return posicionFinal;
}

export default controlarAuto;