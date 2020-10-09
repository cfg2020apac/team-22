//index.js

const functions = require('firebase-functions');
const app = require('express')();

const helperService = require('./APIs/teachers.service.js')
const studentService = require('./APIs/students.service.js')
const coursesService = require('./APIs/courses.service.js')

//helper APIs
app.get("/teacher/:id", helperService.getTeacher);
app.get('/teachers', helperService.getAllTeachers);
app.post('/teacher', helperService.createTeacher);

app.get("/student/:id", studentService.getStudent);
app.get('/students', studentService.getAllStudents);
app.post('/student', studentService.createStudent);
//TODO()
//app.put('/student/:item_id', studentService.updateStudent);
//TODO()
//app.delete('/student/:item_id', studentService.updateStudent);

app.get("/course/:id", coursesService.getCourse);
app.get('/courses', coursesService.getAllCourses);
app.post('/course', coursesService.createCourse);

exports.api = functions.https.onRequest(app);
