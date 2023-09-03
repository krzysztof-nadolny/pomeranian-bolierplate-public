import { useState } from 'react';

export default function EditForm({ tempRecord, onUpdateItem }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [note, setNote] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const id = tempRecord.id;

    const newItem = {
      title,
      author,
      note,
    };

    onUpdateItem(id, newItem);

    console.log(newItem);

    setTitle('');
    setAuthor('');
    setNote('');
  }

  if (!tempRecord) return 'Wrong temp record';

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <h1>Edit Form</h1>
      <h3>Tytuł</h3>
      <input
        type="text"
        placeholder={tempRecord.title}
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <h3>Autor</h3>
      <input
        type="text"
        placeholder={tempRecord.author}
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      ></input>
      <h3>Treść</h3>
      <input
        className="todo__form--inputnote"
        type="text"
        placeholder={tempRecord.note}
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></input>
      <button className="btn-add">Zapisz</button>
    </form>
  );
}
