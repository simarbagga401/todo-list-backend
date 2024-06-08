"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
require("./database/mongodb");
var create_1 = require("./handler/create");
var delete_1 = require("./handler/delete");
var read_1 = require("./handler/read");
var update_1 = require("./handler/update");
var port = process.env.PORT || 8000;
var app = express();
app.use(cors({
    origin: "*",
}));
app.use(express.json());
app.get("/", function (req, res) {
    return (0, read_1.readTodo)(res);
});
app.post("/", function (req, res) { return (0, create_1.createTodo)(req.body.todo, res); });
app.put("/", function (req, res) { return (0, update_1.updateTodo)(req.body.todo, res); });
app.delete("/", function (req, res) { return (0, delete_1.deleteTodo)(req.body.todo, res); });
app.listen(port, function () {
    console.log("app running");
});
