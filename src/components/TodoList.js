import React from "react";

function TodoList({
  todos,
  tab,
  edit,
  handleDelete,
  handleIsDone,
  handleEdit,
  handleEditValue,
  handleCancelEdit,
  handleConfirmEdit,
}) {
  return (
    <div>
      {todos &&
        todos
          .filter((i) => (tab === "uncomplete" ? i.isDone === false : true))
          .filter((i) => (tab === "done" ? i.isDone === true : true))
          .map((i) => (
            <div key={i.id} className="item">
              <div className="content__area">
                <input
                  defaultChecked={i.isDone}
                  data-id={i.id}
                  type="checkbox"
                  onClick={(e) => handleIsDone(e)}
                />
                {Number(edit.id) === i.id ? (
                  <input
                    type="text"
                    value={edit.text}
                    onChange={(e) => handleEditValue(e)}
                  />
                ) : (
                  <p>{i.text}</p>
                )}
              </div>
              <div className="edit__area">
                {edit.id === i.id ? (
                  <>
                    <button
                      data-id={i.id}
                      onClick={(e) => handleConfirmEdit(e)}
                    >
                      Confirm
                    </button>
                    <button data-id={i.id} onClick={() => handleCancelEdit()}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button data-id={i.id} onClick={(e) => handleEdit(e)}>
                      Edit
                    </button>
                    <button data-id={i.id} onClick={(e) => handleDelete(e)}>
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
    </div>
  );
}

export default TodoList;
