import { useState } from 'react';

export default function Form({ onAddItem }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [note, setNote] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      title,
      author,
      note,
    };

    onAddItem(newItem);

    // console.log(newItem);

    setTitle('');
    setAuthor('');
    setNote('');
  }

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <h1>Form</h1>
      <h3>Tytuł</h3>
      <input
        type="text"
        placeholder=""
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <h3>Autor</h3>
      <input
        type="text"
        placeholder=""
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      ></input>
      <h3>Treść</h3>
      <input
        className="todo__form--inputnote"
        type="text"
        placeholder=""
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></input>
      <button className="btn-add">Dodaj</button>
    </form>
  );
}
