// TodoItem.js
import React from "react";
import "./todoitem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faEllipsisVertical,
  faPen,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function TodoItem({
  title,
  id,
  handleDelete,
  onToggle,
  checked,
  handleEdit,
  isEditting,
  handleSaveTodo,
  handleUpdate,
}) {
  return (
    <div>
      {isEditting ? (
        <>
          <div
            style={{
              borderRadius: "60px",
              padding: "1.3rem 3rem",
              backgroundColor: "rgb(247, 242, 242)",
              textAlign: "center",
            }}
            className="m-2"
          >
            <form
              onSubmit={() => {
                handleUpdate(id);
              }}
            >
              <input
                type="text"
                className="todo__input"
                value={title}
                onChange={(e) => {
                  handleSaveTodo(id, e.target.value);
                }}
              />
              <button
                className="m-3 btn btn-primary"
                type="submit"
                onClick={() => {
                  handleUpdate(id);
                }}
              >
                <FontAwesomeIcon icon={faPlus} size="lg" />

              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              borderRadius: "60px",
              padding: "1.3rem 3rem",
              backgroundColor: "rgb(247, 242, 242)",
              textAlign: "center",
          
            }}
            className="m-2 "
          >
            <input
              checked={checked}
              onChange={(event) => {
                onToggle(id, event);
              }}
              id={id}
              style={{ marginRight: "30px" }}
              type="checkbox"
            />
            <span style={{ fontSize: "20px" }}>{title}</span>
            <div
              className="dropdown"
              style={{ display: "inline", marginLeft:'50px' }}
            >
              <button
                className="btn "
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faEllipsisVertical} size="lg" />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleEdit(id)}
                    style={{ marginLeft: "0.5em" }}
                  >
                    <FontAwesomeIcon icon={faPen} size="sm" />
                    <span> Edit</span>
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => handleDelete(id)}
                    id={id}
                    style={{ marginLeft: "10px" }}
                  >
                    <FontAwesomeIcon icon={faTrash} size="sm" />
                    <span> Delete</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
