//Assertions

let courseCode: any;
courseCode = 100;

let courseCodeWithAssertion: number = <number>courseCode;

type Student = { name: string; courseCode: string | number };

let student: Student = { name: "Juan", courseCode: "TS" };
let student2 = <Student>{};

//Enums

enum CourseEnum {
  JS,
  TS,
  React,
}

let myCourse: CourseEnum = CourseEnum.TS;

enum Weekday {
  Mon,
  Tue,
  Wen,
  Thu,
  Fri,
  Sat,
  Sun,
}

let mondayIndex: Weekday = Weekday.Mon;
let monday: string = Weekday[0];
let tuesday = Weekday[Weekday.Tue];
