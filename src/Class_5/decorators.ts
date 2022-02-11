const log = (target: any) => console.log(target);

@log
class Curso {
  constructor(private readonly _id: number, private _nombre: string) {}

  get id() {
    return this._id;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre: string) {
    this._nombre = nombre;
  }
}

const TSCurso2021 = new Curso(1, "TypeScript");
