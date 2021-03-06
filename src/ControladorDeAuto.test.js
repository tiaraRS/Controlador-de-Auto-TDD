import controlarAuto from "./ControladorDeAuto";

describe("controlarAuto", () => {
  //F1 : avanzar 1 posicion
  it("deberia avanzar una posición del auto con superficie y posicion inicial por defecto", () => {
    expect(controlarAuto("A")).toEqual("(4,1)N");
  });
  it("deberia quedarse en la misma posicion para comando B", () => {
    expect(controlarAuto("B")).toEqual("(4,0)N");
  });
  it("deberia quedarse en la misma posicion para comando ''", () => {
    expect(controlarAuto("")).toEqual("(4,0)N");
  });
  it("deberia avanzar una posicion con el comando 'ABAAA'", () => {
    expect(controlarAuto("ABAAA")).toEqual("(4,1)N");
  });
  it("deberia avanzar una posicion con el comando 'ABASDFAAA'", () => {
    expect(controlarAuto("ABASDFAAA")).toEqual("(4,1)N");
  });
  //F2 : permitir giro a izquierda antes de avanzar 1 posicion
  it("deberia devolver (3,0)O con el comando 'IA'", () => {
    expect(controlarAuto("IA")).toEqual("(3,0)O");
  });
  it("deberia devolver (3,0)O con el comando 'IABDE'", () => {
    expect(controlarAuto("IABDE")).toEqual("(3,0)O");
  });
  it("deberia quedarse en la misma posicion con el comando 'OIABDE'", () => {
    expect(controlarAuto("OIABDE")).toEqual("(4,0)N");
  });
  it("deberia girar con el comando 'I'", () => {
    expect(controlarAuto("I")).toEqual("(4,0)O");
  });
   //F3 : permitir giro a derecha antes de avanzar 1 posicion
   it("deberia avanzar una posicion con el comando 'DA'", () => {
    expect(controlarAuto("DA")).toEqual("(5,0)E");
  });
  it("deberia avanzar una posicion con el comando 'DAFDS'", () => {
    expect(controlarAuto("DAFDS")).toEqual("(5,0)E");
  });
  it("deberia avanzar una posicion con el comando 'AFDSDAFDS'", () => {
    expect(controlarAuto("AFDSDAFDS")).toEqual("(4,1)N");
  });
  it("deberia girar con el comando 'D'", () => {
    expect(controlarAuto("D")).toEqual("(4,0)E");
  });
  it("deberia girar con el comando 'DEF'", () => {
    expect(controlarAuto("DEF")).toEqual("(4,0)E");
  });
  //F4 : permitir varios giros antes de avanzar una posicion
  it("deberia girar con el comando 'DDDD'", () => {
    expect(controlarAuto("DDDD")).toEqual("(4,0)N");
  });
  it("deberia girar con el comando 'IIIIA'", () => {
    expect(controlarAuto("IIIIA")).toEqual("(4,1)N");
  });
  it("deberia girar y avanzar con el comando 'DDIIAZ'", () => {
    expect(controlarAuto("DDIIAZ")).toEqual("(4,1)N");
  });
  it("deberia girar y avanzar con el comando 'DDIIAIIDDD'", () => {
    expect(controlarAuto("DDIIAIIDDD")).toEqual("(4,1)E");
  });
  //5F : permitir avance de mas de una posicion
  it("deberia girar y avanzar con el comando 'AAA'", () => {
    expect(controlarAuto("AAA")).toEqual("(4,3)N");
  });
  it("deberia girar y avanzar con el comando 'ADAIA'", () => {
    expect(controlarAuto("ADAIA")).toEqual("(5,2)N");
  });
  it("deberia girar y avanzar con el comando 'AAAI'", () => {
    expect(controlarAuto("AAAI")).toEqual("(4,3)O");
  });
  it("deberia girar y avanzar con el comando 'DDAAAAAA'", () => {
    expect(controlarAuto("DDAAAAAA")).toEqual("(4,0)S");
  });
  it("deberia girar y avanzar con el comando 'DAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAA'", () => {
    expect(controlarAuto("DAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAA")).toEqual("(8,0)S");
  });
  it("deberia girar y avanzar con el comando 'IAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAA'", () => {
    expect(controlarAuto("IAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAA")).toEqual("(0,0)S");
  });
  it("deberia girar y avanzar con el comando 'AAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAA'", () => {
    expect(controlarAuto("AAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAA")).toEqual("(0,8)O");
  });
  //6F : permitir elegir posicion inicial x del auto
  it("deberia iniciar en 0,0 para el comando'0/AAAI'", () => {
    expect(controlarAuto("0/AAAI")).toEqual("(0,3)O");
  });
  it(" Valor no permitido: fuera de rango de superficie'", () => {
    expect(controlarAuto("9/DA")).toEqual("Valor no permitido: fuera de rango de superficie");
  });
  it(" Valor no permitido: fuera de rango de superficie'", () => {
    expect(controlarAuto("-9/DA")).toEqual("Valor no permitido: fuera de rango de superficie");
  });
  //7F : permitir elegir posicion inicial x y y del auto
  it("deberia iniciar en 0,1 para el comando'0,1/AAAI'", () => {
    expect(controlarAuto("0,1/AAAI")).toEqual("(0,4)O");
  });
  it("deberia dar error de sintaxis'", () => {
    expect(controlarAuto("0,,1/AAAI")).toEqual("error de sintaxis");
  });
  it("Valor no permitido: fuera de rango de superficie y'", () => {
    expect(controlarAuto("0,9/DA")).toEqual("Valor no permitido: fuera de rango de superficie");
  });
  it("Valor no permitido: fuera de rango de superficie y", () => {
    expect(controlarAuto("0,-5/DA")).toEqual("Valor no permitido: fuera de rango de superficie");
  });
  //8F : permitira elegir orientacion inicial del auto
  it("orientacion inicial del auto", () => {
    expect(controlarAuto("0,1N/AAAI")).toEqual("(0,4)O");
  });
  it("orientacion inicial del auto", () => {
    expect(controlarAuto("0,1O/AAAI")).toEqual("(0,1)S");
  });
   //9F : permitir elegir tam de superficie
   it("superficie del auto", () => {
    expect(controlarAuto("8/0,1N/AAAI")).toEqual("(0,4)O");
  });
   //10F : permitir elegir tam de superficie lxa
  it("superficie del auto", () => {
    expect(controlarAuto("8,8/0,1N/AAAI")).toEqual("(0,4)O");
  });
  it("superficie del auto", () => {
    expect(controlarAuto("6,5/3,3N/AAAI")).toEqual("(3,5)O");
  });
  it("superficie del auto", () => {
    expect(controlarAuto("1,1/3,3N/AAAAAI")).toEqual("Valor no permitido: fuera de rango de superficie");
  });
  it("superficie del auto", () => {
    expect(controlarAuto("1,1/0,0S/AAAAAIIII")).toEqual("(0,0)S");
  });
  it("superficie del auto", () => {
    expect(controlarAuto("1,1/0,0S/AAAAAIIIIIA")).toEqual("(1,0)E");
  });
  it("superficie del auto", () => {
    expect(controlarAuto("5,5/1,2N/IAIAIAIAA")).toEqual("(1,3)N");
  });
  it("superficie del auto", () => {
    expect(controlarAuto("5,5/3,3E/AADAADADDA")).toEqual("(5,1)E");
  });
  it("superficie del auto", () => {
    expect(controlarAuto("0,10/0,0E/AAAAAAAAA")).toEqual("(0,0)E");
  });
  it("superficie del auto", () => {
    expect(controlarAuto("10,0/0,0S/AAAAAAAAA")).toEqual("(0,0)S");
  });
  it("superficie del auto", () => {
    expect(controlarAuto("0,0/0,0E/AAAAAAAAA")).toEqual("(0,0)E");
  });
  it("superficie del auto", () => {
    expect(controlarAuto("0,0/0,0E/AAAAAAAAADADA")).toEqual("(0,0)O");
  });
});
