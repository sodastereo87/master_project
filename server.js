const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT ||  3001;
const todoRoutes = express.Router();

let Todo = require('./model');

app.use(cors());
// here error
app.use(bodyParser.json());

// process.env.MONGODB_URI || and const PORT = process.env.PORT || to connect to mlab
mongoose.connect(process.env.MONGODB_URI ||'mongodb://127.0.0.1:27017/todos', 
{
   useNewUrlParsel: true
   });
const connection = mongoose.connection;

connection.once('open', function () {
  console.log("mongodb connection stablished successfully");
})

todoRoutes.route('/').get(function (req, res) {
  Todo.find(function (err, todos) {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

todoRoutes.route('/:id').get(function (req, res) {
  let id = req.params.id
  Todo.findById(id, function (err, todo) {
    // req.res(todo);
  });
});

todoRoutes.route('/add').post(function (req, res) {
  let todo = new Todo(req.body);
  todo.save()
    .then(todo => {
      res.status(200).json({ 'todo': 'todo added successfully' });
    })
    .catch(err => {
      res.status(400).send('adding new todo failed');
    });
})

todoRoutes.route('/update/:id').post(function (req, res) {
  Todo.findById(req.params.id, function (err, todo) {
    if (!todo)
      res.status(404).send('data not found');
    else
      todo.todo_description = req.body.todo_description;
    todo.todo_responsible = req.body.todo_responsible;
    todo.todo_priority = req.body.todo_priority;
    todo.todo_completed = req.body.todo_completed;

    todo.save().then(todo => {
      res.json("Todo Updated");
    })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
  });
});

app.use('/todos', todoRoutes);

app.listen(PORT, function () {
  console.log("server running on port:" + PORT);
});

