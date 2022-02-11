"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CursosFrontend;
(function (CursosFrontend) {
    CursosFrontend[CursosFrontend["Javascript"] = 0] = "Javascript";
    CursosFrontend[CursosFrontend["TypeScript"] = 1] = "TypeScript";
    CursosFrontend[CursosFrontend["React"] = 2] = "React";
    CursosFrontend[CursosFrontend["Vue"] = 3] = "Vue";
    CursosFrontend[CursosFrontend["Angular"] = 4] = "Angular";
})(CursosFrontend || (CursosFrontend = {}));
class Curso {
    constructor(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
    }
    get id() {
        return this._id;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    static getInfo(curso) {
        return JSON.stringify(curso);
    }
}
class Escuela {
    constructor(_id, _nombre, _cursos = []) {
        this._id = _id;
        this._nombre = _nombre;
        this._cursos = _cursos;
    }
    agregarCurso(curso) {
        this._cursos.push(curso);
    }
}
Escuela.cursosDisponibles = [
    CursosFrontend.Javascript,
    CursosFrontend.TypeScript,
];
class EscuelaDigital extends Escuela {
    constructor(_id, _nombre, _web) {
        super(_id, _nombre);
        this._web = _web;
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
