"use strict";
//Assertions
let courseCode;
courseCode = 100;
let courseCodeWithAssertion = courseCode;
let student = { name: "Juan", courseCode: "TS" };
let student2 = {};
//Enums
var CourseEnum;
(function (CourseEnum) {
    CourseEnum[CourseEnum["JS"] = 0] = "JS";
    CourseEnum[CourseEnum["TS"] = 1] = "TS";
    CourseEnum[CourseEnum["React"] = 2] = "React";
})(CourseEnum || (CourseEnum = {}));
let myCourse = CourseEnum.TS;
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Mon"] = 0] = "Mon";
    Weekday[Weekday["Tue"] = 1] = "Tue";
    Weekday[Weekday["Wen"] = 2] = "Wen";
    Weekday[Weekday["Thu"] = 3] = "Thu";
    Weekday[Weekday["Fri"] = 4] = "Fri";
    Weekday[Weekday["Sat"] = 5] = "Sat";
    Weekday[Weekday["Sun"] = 6] = "Sun";
})(Weekday || (Weekday = {}));
let mondayIndex = Weekday.Mon;
let monday = Weekday[0];
let tuesday = Weekday[Weekday.Tue];
