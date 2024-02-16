import { useEffect, useState } from "react";
import Input from "./components/Input";
import { TodoContextProvider } from "./context/TodoContext";
import Item from "./components/Item";

function App() {
  const [todoArr, setTodoArr] = useState([]);

  const updateTodo = (id, todoMsg) => {
    setTodoArr((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? {
              ...prevTodo,
              todoMsg,
            }
          : prevTodo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodoArr((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodoArr((prev) => (
      prev.map((prevTodo) => (
        prevTodo.id === id
          ? { ...prevTodo, isCompleted: !prevTodo.isCompleted }
          : prevTodo
      ))
    ));
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todo"));
    if (data) {
      setTodoArr(data);
    }
    // console.log("Fetching from local storage");
  }, []);

  useEffect(() => {
    if (todoArr.length !== 0) {
      localStorage.setItem("todo", JSON.stringify(todoArr));
      // console.log(todoArr)
    }
    else {
      console.log(todoArr)
      localStorage.clear()
    }
  }, [todoArr]);

  // console.log(todoArr)
  return (
    <TodoContextProvider
      value={{ todoArr, setTodoArr, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-around">
        <div className="min-h-screen w-[70%] flex flex-col items-center justify-evenly">
          <h1 className="text-white font-bold text-4xl">Manage Your Todos</h1>
          <Input />
          <div className="w-full flex flex-col items-center justify-center">
            {todoArr.map((e) => (
              <Item value={e} key={e.id} />
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
