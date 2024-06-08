import { TodoModel } from "../database/TodoSchema";
import type { Todo } from "../types/Todo";

export const updateTodo = async (todo: Todo, res) => {
  try {
    await TodoModel.findOneAndUpdate(
      {
        id: todo.id,
      },
      { completed:todo.completed}
    );

    res.send({ msg: "Todo Updated" });
  } catch (error) {
    res.send(error);
  }
};
