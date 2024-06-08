import { TodoModel } from "../database/TodoSchema";

export const readTodo = async (res) => {
  try {
    const fetchedTodos = await TodoModel.find();

    res.send({ msg: "Todo Found", payload: fetchedTodos });
  } catch (error) {
    res.send(error);
  }
};
