import controlarAuto from "./ControladorDeAuto";

describe("controlarAuto", () => {
  //F1 : avanzar 1 posicion
  it("deberia avanzar una posición del auto con superficie y posicion inicial por defecto", () => {
    expect(controlarAuto("A")).toEqual("(4,1)N");
  });
});
