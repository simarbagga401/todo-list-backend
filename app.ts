const express = require("express");
const cors = require("cors");
import "./database/mongodb";
import { createTodo } from "./handler/create";
import { deleteTodo } from "./handler/delete";
import { readTodo } from "./handler/read";
import { updateTodo } from "./handler/update";

const port = process.env.PORT || 8000;
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/", (req, res) => 
  readTodo(res)

);
app.post("/", (req, res) => createTodo(req.body.todo, res));
app.put("/", (req, res) => updateTodo(req.body.todo, res));
app.delete("/", (req, res) => deleteTodo(req.body.todo, res));

app.listen(port, () => {
  console.log("app running");
});
