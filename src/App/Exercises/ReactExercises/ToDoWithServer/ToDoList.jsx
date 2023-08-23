import React, { useEffect, useState } from 'react';
import './style.css';
import Form from './Form';
import { ToDoRecords } from './ToDoRecords';
import EditForm from './EditForm';

export function ToDoList() {
  const [records, setRecords] = useState(null);
  const [tempRecord, setTempRecord] = useState(null);
  const [showRecords, setShowRecords] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  async function fetchData() {
    try {
      const response = await fetch('http://localhost:3333/api/todo');
      // console.log(response);
      const responseJSON = await response.json();
      // console.log(responseJSON);
      setRecords(responseJSON);
      // setShowTodos(true);

      // console.log(response);
    } catch (error) {
      console.warn(error);
      setRecords(null);
    }
  }

  async function handleAddItems(record) {
    console.log(records);

    const response = await fetch('http://localhost:3333/api/todo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: record.title,
        note: record.note,
        author: record.author,
      }),
    });

    fetchData();
    setShowRecords(true);
    setShowForm(false);
  }

  async function handleDoneItem(id) {
    const response = await fetch(
      `http://localhost:3333/api/todo/${id}/markAsDone`,
      {
        method: 'PUT',
      }
    );
    await fetchData();
  }

  async function handleDeleteItem(id) {
    const response = await fetch(`http://localhost:3333/api/todo/${id}`, {
      method: 'DELETE',
    });
    const responseJSON = await response.json();
    console.log(responseJSON);
    await fetchData();
  }

  async function handleEditItem(id) {
    console.log(id);
    const item = await fetch(`http://localhost:3333/api/todo/${id}`, {
      method: 'GET',
    });
    const itemJSON = await item.json();
    console.log(itemJSON);
    setTempRecord(itemJSON);
    setShowEditForm(true);
    setShowRecords(false);
  }

  async function handleUpdateItem(id, updatedItem) {
    console.log(id);

    const response = await fetch(`http://localhost:3333/api/todo/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: updatedItem.title,
        note: updatedItem.note,
        author: updatedItem.author,
      }),
    });

    fetchData();
    setShowRecords(true);
    setShowEditForm(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="todo__wrapper">
      <div>
        <h3>TODO</h3>
        <p>Tutaj znajdziesz liste swoich zadań</p>
      </div>
      <button
        className="btn-add-new"
        onClick={() => {
          setShowForm(true);
          setShowRecords(false);
        }}
      >
        Dodaj nowe zadanie➕
      </button>
      {showRecords && (
        <ToDoRecords
          records={records}
          setRecords={setRecords}
          onDoneItem={handleDoneItem}
          onDeleteItem={handleDeleteItem}
          onEditItem={handleEditItem}
          fetchData={fetchData}
        />
      )}
      {showForm && <Form onAddItem={handleAddItems} />}
      {showEditForm && (
        <EditForm onUpdateItem={handleUpdateItem} tempRecord={tempRecord} />
      )}
    </div>
  );
}
