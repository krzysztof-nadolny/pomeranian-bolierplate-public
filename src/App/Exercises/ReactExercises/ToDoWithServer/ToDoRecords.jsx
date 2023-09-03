import React from 'react';
import { ToDoRecord } from './ToDoRecord';

export function ToDoRecords({
  records,
  setRecords,
  onDoneItem,
  onDeleteItem,
  onEditItem,
}) {
  // useEffect(() => handleFetchTodo(), []);
  if (!records)
    return <h1>Brawo! Nie masz aktualnie żadnych zadań do zrealizowania</h1>;

  return (
    <div className="todo__records">
      {records.map((el) => (
        <ToDoRecord
          item={el}
          key={el.title}
          setRecords={setRecords}
          onDoneItem={onDoneItem}
          onDeleteItem={onDeleteItem}
          onEditItem={onEditItem}
        />
      ))}
    </div>
  );
}
