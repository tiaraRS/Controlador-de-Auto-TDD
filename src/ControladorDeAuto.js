function controlarAuto(cadenaDeControlAuto) {
  let x = 4;
  let y = 0;
  let orientacion = "N";
  if(cadenaDeControlAuto[0]=="A") y++;
  let posicionFinal = `(${x},${y})${orientacion}`;
  return posicionFinal;
}

export default controlarAuto;