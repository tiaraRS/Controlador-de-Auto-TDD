function controlarAuto(cadena) {
  let x = 4;
  let y = 0;
  let orient = "N"
  if(cadena=="A") y++
  return `(${x},${y})${orient}`;
}

export default controlarAuto;
