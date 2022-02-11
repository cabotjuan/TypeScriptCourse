export {};

enum CursosFrontend {
  Javascript,
  TypeScript,
  React,
  Vue,
  Angular,
}

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

  static getInfo(curso: Curso) {
    return JSON.stringify(curso);
  }
}

abstract class Escuela {
  constructor(
    protected readonly _id: number,
    protected _nombre: string,
    protected _cursos: Curso[] = []
  ) {}

  public static cursosDisponibles: CursosFrontend[] = [
    CursosFrontend.Javascript,
    CursosFrontend.TypeScript,
  ];

  agregarCurso(curso: Curso) {
    this._cursos.push(curso);
  }
}

class EscuelaDigital extends Escuela {
  constructor(_id: number, _nombre: string, private _web: string) {
    super(_id, _nombre);
  }

  get web() {
    return this._web;
  }

  set web(web) {
    this._web = web;
  }
}

const escuela = new EscuelaDigital(9, "EDTeam", "ed.team");

let cursoJS = new Curso(1, "Javascript");
let cursoTS = new Curso(2, "Typescript");

escuela.agregarCurso(cursoJS);
escuela.agregarCurso(cursoTS);
