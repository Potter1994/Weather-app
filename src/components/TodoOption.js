import React from "react";

function TodoOption({ tab, handleTabChange }) {
  return (
    <>
      <ul>
        <li
          className={tab === "all" ? "active" : ""}
          data-tab="all"
          onClick={(e) => handleTabChange(e)}
        >
          All
        </li>
        <li
          className={tab === "uncomplete" ? "active" : ""}
          data-tab="uncomplete"
          onClick={(e) => handleTabChange(e)}
        >
          Uncomplete
        </li>
        <li
          className={tab === "done" ? "active" : ""}
          data-tab="done"
          onClick={(e) => handleTabChange(e)}
        >
          Done
        </li>
      </ul>
    </>
  );
}

export default TodoOption;
