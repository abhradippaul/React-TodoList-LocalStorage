import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
    todoArr: [],
    setTodoArr : () => {},
    updateTodo : (id,todoMsg) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
})

export const TodoContextProvider = TodoContext.Provider

export function useTodo() {
    return useContext(TodoContext)
}