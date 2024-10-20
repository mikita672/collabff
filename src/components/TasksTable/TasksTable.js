import React from 'react';
import './TasksTable.scss';

const TasksTable = ({ tasks, openpp }) => {
  return (
    <div className="widget due-tasks">
      <div className="due-tasks__top-line">
        <h2 className="due-tasks__type">Due Tasks</h2>
        <div className="due-tasks__buttons">
          {/* <button className="yellow_button due-tasks__settings"></button> */}
          <button className="yellow_button due-tasks__button" onMouseDown={e => e.stopPropagation()} onClick={() => openpp()}>All tasks</button>
        </div>
      </div>


      <div className="due-tasks__table">
        <div className="due-tasks__header">
          <span className="due-tasks__header-item">Description</span>
          <span className="due-tasks__header-item">Due</span>
          <span className="due-tasks__header-item">Link</span>
        </div>

        <div className="due-tasks__body">
          {tasks.slice(0,3).map((task, index) => (
            <div key={index} className="due-tasks__row">
              <span className="due-tasks__item description">{task.description}</span>
              <span className="due-tasks__item due">{task.due}</span>
              <span className="due-tasks__item link">
                <a className="link-button">&#8635;</a>
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default TasksTable;
