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

});
