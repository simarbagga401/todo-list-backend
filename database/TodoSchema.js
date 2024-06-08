"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoModel = void 0;
var mongoose_1 = require("mongoose");
var Todo = new mongoose_1.default.Schema({
    id: Number,
    name: String,
    description: String,
    completed: Boolean,
});
exports.TodoModel = mongoose_1.default.model("Todos", Todo);
