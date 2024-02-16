import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function Input() {
  let [input, setInput] = useState("");
//   let [obj,setObj] = useState({})
  let {setTodoArr} = useTodo()
  return (
    <div className="w-[80%] text-xl overflow-hidden rounded-md">
      <input
        type="text"
        placeholder="Write Todo..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className="p-2 w-[75%] border-none outline-none bg-white"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          const obj = {
            id : Date.now(),
            todoMsg : input,
            isCompleted : false
          }
          setTodoArr(prev => [...prev,obj])
          setInput("")
        //   console.log(input);
        }}
        className="bg-green-600 py-2 text-white w-[25%]"
      >
        Add Todo
      </button>
    </div>
  );
}

export default Input;
