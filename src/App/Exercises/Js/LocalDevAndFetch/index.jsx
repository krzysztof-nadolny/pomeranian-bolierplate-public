import { useState } from 'react';
import './styles.css';

export const Exercise = () => {
  const [dogImageUrl, setDogImageUrl] = useState(null);

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

  async function handleFetchDogImage() {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const responseJSON = await response.json();
      setDogImageUrl(responseJSON.message);

      // console.log(response);
    } catch (error) {
      console.warn(error);
    }
  }

  return (
    <div>
      <h1>Dog API - fetch a dog image</h1>
      <img src={dogImageUrl} alt="" />
      <button onClick={() => handleFetchDogImage()}>Show me a dog</button>
    </div>
  );
};
