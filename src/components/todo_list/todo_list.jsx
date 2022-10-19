import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import axios from "../../../node_modules/axios/index";
import TodoItem from "../todo_item/todo_item";
import styles from "./todo_list.module.css";

const TodoList = ({ user }) => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const BASE_URL = "https://pre-onboarding-selection-task.shop/todos";
  const config = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  };

  const fetchData = async () => {
    const response = await axios.get(BASE_URL, {
      headers: config,
    });
    setTodos(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const resetInput = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const onAdd = async (evt) => {
    evt.preventDefault();
    const todo = {
      todo: inputRef.current.value,
      isCompleted: false,
    };
    const res = await axios.post(BASE_URL, todo, {
      headers: config,
    });
    fetchData();
    resetInput();
  };

  const onDelete = async (id) => {
    const res = await axios.delete(`${BASE_URL}/${id}`, {
      headers: config,
    });
    fetchData();
  };

  const onCheck = (id, todo, isCompleted) => {
    onUpdate(id, todo, !isCompleted);
  };

  const onUpdate = async (updatedId, updatedText, updatedChk) => {
    const updated = {
      todo: updatedText,
      isCompleted: updatedChk,
    };
    const res = await axios.put(`${BASE_URL}/${updatedId}`, updated, {
      headers: config,
    });
    fetchData();
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.tit}>오늘도 해봅시다!</h1>
      <form className={styles.inputBox} onSubmit={onAdd}>
        <input
          type="text"
          className={styles.userInput}
          placeholder="할 일이 무엇인가요?"
          ref={inputRef}
        />
        <button className={styles.btnAdd}> 추가 </button>
      </form>
      <ul className={styles.todoList}>
        {todos.map((item) => {
          return (
            <TodoItem
              key={item.id}
              item={item}
              onDelete={onDelete}
              onCheck={onCheck}
              onUpdate={onUpdate}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
