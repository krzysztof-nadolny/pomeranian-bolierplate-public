import { useEffect, useState } from 'react';
import './styles.css';
import userEvent from '@testing-library/user-event';
import { UseEffectAndPromise } from '../Promises/UseEffectAndPromise';
import { AsyncAwaitExercise } from './AsyncAwaitExercise';

export function Exercise() {
  // EXERCISE 1
  const [user, setUser] = useState('');
  const [error, setError] = useState(null);

  function loadUser() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve({ id: 1, name: 'John Doe' });
        } else {
          reject('Server error, nie znaleziono użytkownika w bazie');
        }
      }, 2000);
    });
  }

  function loadUserDetails(userId) {
    //zwraca promise z {id:userId, age:30, country:"Poland"}
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: userId, age: 30, country: 'Poland' });
      }, 1000);
    });
  }

  // Funkcja load all user data
  // function loadAllUserData() {
  //   loadUser()
  //     .then((user) => {
  //       console.log(user);
  //       return user.id;
  //     })
  //     .then((userId) => {
  //       console.log(userId);
  //       return loadUserDetails(userId);
  //     })
  //     .then((user) => {
  //       console.log(user);
  //       setUser(user);
  //       setError(null);
  //     })
  //     .catch((err) => {
  //       console.warn(err);
  //       setError(err);
  //     });
  // }

  //Wykorzystanie async/await
  async function loadAllUserData() {
    try {
      const user = await loadUser();
      const userDetails = await loadUserDetails(user.id);
      setUser(userDetails);
      setError(null);
    } catch (error) {
      setError(error);
      console.warn(error);
    }
  }

  //EXERCISE 2
  return (
    <div>
      <h1>Promise - ćwiczenia</h1>
      <h2>Ćwiczenie 1</h2>
      <UseEffectAndPromise />
      <h2>Ćwiczenie2</h2>
      {/* Dodać button, który załaduje detale użytkownika */}
      <button onClick={loadAllUserData}>Load user</button>
      {/* Dodać label w którym będą wyświetlane dane użytkownika */}
      {!error && (
        <div>
          <ul>
            <li>User id: {user.id}</li>
            <li>User age: {user.age}</li>
            <li>User country: {user.country}</li>
          </ul>
        </div>
      )}
      {error && <p>{error}</p>}
      <AsyncAwaitExercise />
    </div>
  );
}
