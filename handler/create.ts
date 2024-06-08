import { TodoModel } from "../database/TodoSchema";
import type { Todo } from "../types/Todo";

export const createTodo = async (todo: Todo, res) => {
  try {
    await TodoModel.create({
      id: todo.id,
      name: todo.name,
      description: todo.description,
      completed: todo.completed,
    });
    res.send({ msg: "New Todo created" });
  } catch (error) {
    res.send(error);
  }
};
