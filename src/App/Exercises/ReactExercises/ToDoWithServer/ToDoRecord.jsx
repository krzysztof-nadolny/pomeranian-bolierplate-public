import React from 'react';
import CheckIcon from './Components/Icons/CheckIcon';
import BinIcon from './Components/Icons/BinIcon';
import EditIcon from './Components/Icons/EditIcon';

export function ToDoRecord({ item, onDoneItem, onDeleteItem, onEditItem }) {
  return (
    <div className={`todo__record ${item.isDone ? 'isDone' : ''}`}>
      <div className="todo__record--left">
        <h3>{item.title}</h3>
        <div className="todo__record--author">
          <p>{item.author}</p>
          <p>{item.createdAt}</p>
        </div>
        <p>{item.note}</p>
      </div>
      <div className="todo__record--right">
        <div className="todo__record-btn-wrapper">
          {!item.isDone && (
            <button onClick={() => onDoneItem(item.id)}>
              <CheckIcon />
            </button>
          )}
          <button onClick={() => onEditItem(item.id)}>
            <EditIcon />
          </button>
          <button onClick={() => onDeleteItem(item.id)}>
            <BinIcon />
          </button>
        </div>
        <div>
          <p>{item.isDone ? `${item.doneDate}` : ''}</p>
        </div>
      </div>
    </div>
  );
}
