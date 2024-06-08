import mongoose from "mongoose";

const Todo = new mongoose.Schema({
  id:Number,
  name: String,
  description: String,
  completed: Boolean,
});

export const TodoModel = mongoose.model("Todos", Todo);
