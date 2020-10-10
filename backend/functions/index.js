const functions = require('firebase-functions');
const app = require('express')();
const auth = require('./util/auth');

//todos
const {
    getAllTodos,
    postOneTodo,
    deleteTodo,
    editTodo
} = require('./APIs/todos')

app.put('/todo/:todoId', auth, editTodo);
app.delete('/todo/:todoId', auth, deleteTodo);
app.post('/todo', auth, postOneTodo);
app.get('/todos', auth, getAllTodos);

// Users
const {
    loginUser,
    signUpUser,
    uploadProfilePhoto,
    getUserDetail,
    updateUserDetails
} = require('./APIs/users')

app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.post('/user/image', uploadProfilePhoto);
app.get('/user', auth, getUserDetail);
app.post('/user', updateUserDetails);

const {
    getAllCourses,
} = require('./APIs/courses')

app.get('/courses', auth, getAllCourses);

//projects
const {
    getAllProjects,
    postOneProject,
    deleteProject,
    editProject
} = require('./APIs/projects')

app.put('/project/:projectId', auth, editProject);
app.delete('/project/:projectId', auth, deleteProject);
app.post('/project', auth, postOneProject);
app.get('/projects', auth, getAllProjects);

exports.api = functions.https.onRequest(app);