import { useEffect, useState } from 'react';

export const AsyncAwaitExercise = () => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const getMessage = () => {
      return new Promise((resolve, reject) => {
        if (Math.random() < 0.5) {
          resolve('Promise fullfiled :)');
        } else {
          reject('Promise rejected :(!');
        }
      });
    };
    async function resolvePromise() {
      try {
        const result = await getMessage();
        // console.log(result);
        setMessage(result);
      } catch (error) {
        // console.log(error);
        setMessage(error);
      } finally {
        console.log('Promise resolved');
      }
    }

    resolvePromise();
  }, []);
  return (
    <div>
      <h2>Async Await Exercise</h2>
      <p>{message}</p>
    </div>
  );
};
