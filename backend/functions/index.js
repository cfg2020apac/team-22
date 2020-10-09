//index.js

const functions = require('firebase-functions');
const app = require('express')();

const teacherService = require('./APIs/teachers.service.js')
const studentService = require('./APIs/students.service.js')
const coursesService = require('./APIs/courses.service.js')

//helper APIs
app.get("/teacher/:id", teacherService.getTeacher);
app.get('/teachers', teacherService.getAllTeachers);
app.post('/teacher', teacherService.createTeacher);
app.put('/teacher/:id', teacherService.updateTeacher);
app.delete('/teacher/:id', teacherService.deleteTeacher);

app.get("/student/:id", studentService.getStudent);
app.get('/students', studentService.getAllStudents);
app.post('/student', studentService.createStudent);
app.put('/student/:id', studentService.updateStudent);
app.delete('/student/:id', studentService.deleteStudent);

app.get("/course/:id", coursesService.getCourse);
app.get('/courses', coursesService.getAllCourses);
app.post('/course', coursesService.createCourse);
app.put('/course/:id', coursesService.updateCourse);
app.delete('/course/:id', coursesService.deleteCourse);

exports.api = functions.https.onRequest(app);
