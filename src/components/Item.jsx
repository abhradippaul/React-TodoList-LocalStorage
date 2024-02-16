import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function Item({ value }) {
  let [isTodoEditable, setIsTodoEditable] = useState(false);
  let [msg, setMsg] = useState(value.todoMsg);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();
  //   console.log(value);
  const editSave = () => {
    if (value.todoMsg != msg) {
      console.log("check");
      updateTodo(value.id, msg);
    }
    setIsTodoEditable((prev) => !prev);
    const data = document.getElementById(`${value.id}`)
    data.focus()
    console.log(document.activeElement)
  };
  const deleteInfo = () => {
    console.log(value.id);
    deleteTodo(value.id);
  };
  if (value) {
    return (
      <div
        className={`w-[80%] h-14 m-2 bg-green-200 rounded-md flex items-center justify-around`}
      >
        <input
          type="checkbox"
          onChange={(e) => {
            toggleComplete(value.id);
          }}
        />

        <input
          id={`${value.id}`}
          type="text"
          className={`bg-green-200 font-bold text-xl px-4 py-2 ${isTodoEditable ? "outline outline-2 outline-white rounded-md" : "border-none outline-none"} ${
            value.isCompleted ? "line-through" : ""
          }`}
          value={msg}
          readOnly={!isTodoEditable}
          onChange={(e) => {
            setMsg(e.target.value);
          }}
        />

        <div>
          <button
            className="bg-white px-4 py-2 rounded-md mx-2"
            onClick={editSave}
          >
            <img
              className="w-6 h-6 object-cover"
              src={
                isTodoEditable
                  ? "https://cdn-icons-png.flaticon.com/128/2874/2874091.png"
                  : "https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
              }
              alt="edit"
            />
          </button>
          <button
            onClick={deleteInfo}
            className="bg-white px-4 py-2 mx-2 rounded-md"
          >
            <img
              className="w-6 h-6 object-cover"
              src="https://cdn-icons-png.flaticon.com/128/1828/1828666.png"
              alt="cross"
            />
          </button>
        </div>
      </div>
    );
  }
}

export default Item;
