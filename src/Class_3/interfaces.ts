//Interface

interface ICourse {
  nombre?: string;
  id: number;
}

let cursoTypeScript: ICourse = {
  nombre: "CURSO TYPESCRIPT EDTEAM 2021",
  id: 1,
};

//Interface inheritance

interface IEDTeamCourse extends ICourse {
  costo: number;
}

let cursoTypeScriptDesdeCero: IEDTeamCourse = { id: 2, costo: 1234 };
