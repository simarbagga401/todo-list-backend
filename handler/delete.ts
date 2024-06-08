import { TodoModel } from "../database/TodoSchema";
import type { Todo } from "../types/Todo";

export const deleteTodo = async (todo: Todo, res) => {
  try {
    await TodoModel.deleteOne({
        id:todo.id
    });
    res.send({ msg: "Todo Deleted" });
  } catch (error) {
    res.send(error);
  }
};
