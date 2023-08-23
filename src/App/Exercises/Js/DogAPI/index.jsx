import { useState } from 'react';
import './styles.css';

export const Exercise = () => {
  const [todo, setTodo] = useState(null);
  const [showTodos, setShowTodos] = useState(false);

  // const handleFetchDogImage = () => {
  //   fetch('https://dog.ceo/api/breeds/image/random')
  //     .then((response) => {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then((json) => {
  //       setDogImageUrl(json.message);
  //     })
  //     .catch((error) => console.log(error));
  // };

  async function handleFetchTodo() {
    try {
      const response = await fetch('http://localhost:3333/api/todo');
      // console.log(response);
      const responseJSON = await response.json();
      console.log(responseJSON);
      setTodo(responseJSON);
      setShowTodos(true);

      console.log(response);
    } catch (error) {
      console.warn(error);
    }
  }

  return (
    <div>
      <h1>Todo API</h1>
      {showTodos &&
        todo.map((element) => {
          return (
            <div>
              <p>{element.title}</p>
              <p>{element.author}</p>
            </div>
          );
        })}
      {/* {todo.map((element) => {
        return (
          <div>
            <h1>{element.title}</h1>
            <p>{element.author}</p>
          </div>
        );
      })} */}
      <button onClick={() => handleFetchTodo()}>Show me a todo</button>
    </div>
  );
};
