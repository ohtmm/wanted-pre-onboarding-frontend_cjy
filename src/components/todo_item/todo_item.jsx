import React from "react";
import { useRef } from "react";
import { useState } from "react";
import styles from "./todo_item.module.css";

const TodoItem = ({ item, onDelete, onCheck, onUpdate }) => {
  const { id, todo, isCompleted } = item;
  const [edited, setEdited] = useState(false);
  const [editText, setEditText] = useState(todo);
  const inputRef = useRef();

  const onSubmit = (evt) => {
    setEdited((edited) => !edited);
    setEditText(inputRef.current.value);
    onUpdate(id, editText, isCompleted);
  };

  const onEdit = () => {
    setEdited((edited) => !edited);
  };

  const onChange = (evt) => {
    setEditText(evt.target.value);
  };

  return (
    <li className={styles.todoItem}>
      <div className={styles.itemBox}>
        {edited ? (
          <div className={styles.editBox}>
            <input
              value={editText}
              ref={inputRef}
              className={styles.editInput}
              onChange={onChange}
            />
            <button className={styles.btnEditNow} onClick={onSubmit}>
              {" "}
              수정 완료
            </button>
            <button className={styles.btnEditEsc} onClick={onEdit}>
              {" "}
              취소
            </button>
          </div>
        ) : (
          <div className={styles.unEditBox}>
            <span
              className={isCompleted ? styles.checked : styles.unchecked}
              onClick={() => {
                onCheck(id, todo, isCompleted);
              }}
            ></span>
            <span className={isCompleted ? styles.doneItem : null}>{todo}</span>
            {isCompleted ? null : (
              <button className={styles.btnEdit} onClick={onEdit}>
                수정
              </button>
            )}
          </div>
        )}
      </div>
      <button
        className={styles.btnDel}
        onClick={() => {
          onDelete(id);
        }}
      >
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
