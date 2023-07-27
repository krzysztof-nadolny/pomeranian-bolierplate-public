import './styles.css';

export function Exercise() {
  //1. Funkcja zmieniająca podany string na camelCase

  function ucFirst(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  function camelCase(sentence) {
    const sentenceArr = sentence.split(' ');
    const newArr = [];
    for (const word of sentenceArr) {
      newArr.push(ucFirst(word));
    }

    // console.log(newArr);
    return newArr.join('');
    // return sentence.toUpperCase()
  }

  function camelCaseMap(sentence) {
    const sentenceArr = sentence.split(' ');
    return sentenceArr.map((x) => ucFirst(x)).join('');
  }
  console.log('1. ' + camelCase('Jakiś długi text'));
  console.log('1. map ' + camelCaseMap('Jakiś długi text'));

  //2. Funkcja przyjmuje dwa napisy i zwraca tablice z literami, ktore wystepuja w obu napisach
  function commonLetters(word1, word2) {
    const word1Arr = word1.toLowerCase().split('');
    const word2Arr = word2.toLowerCase().split('');

    let sameLetters = [];

    for (const letter of word1Arr) {
      if (word2Arr.includes(letter)) {
        // if (sameLetters.includes(letter));
        // else sameLetters.push(letter);
        if (!sameLetters.includes(letter)) sameLetters.push(letter);
      }
    }
    return sameLetters;
  }

  console.log('2. ' + commonLetters('Hello', 'World'));

  //3. Funkcja przyjmujaca tablice slow i zwraca tablice z liczbami okreslajacymi ilosc samoglosek w tych slowach

  const testArray = ['apple', 'banana', 'orange'];
  const samogloski = ['a', 'e', 'i', 'o', 'u'];

  let eachWord = [];

  function wordLengths(array, samogloski) {
    for (const word of array) {
      // console.log(word);
      let liczSamogloski = 0;
      for (const letter of word) {
        // console.log(letter);
        if (samogloski.includes(letter)) {
          liczSamogloski++;
        }
      }

      eachWord.push(liczSamogloski);
      // console.log(countLetters);
    }

    // console.log(eachWord)

    return eachWord;
  }

  console.log('3. ' + wordLengths(testArray, samogloski));

  //4. Funkcja, ktra pobiera dwa napisy i sprawdza czy sa one anagramami

  function isAnagram(word1, word2) {
    if (word1.length !== word2.length) {
      return false;
    }

    const word1arr = word1.split('');
    const word2arr = word2.split('');

    for (const letter of word1arr) {
      if (word2arr.includes(letter)) {
        //index of each letter
        const index = word2arr.indexOf(letter);
        word2arr.splice(index, 1);
      } else {
        return false;
      }
    }

    //If there are no more letters it means that's anagram
    return word2arr.length === 0;
  }

  //4. Simple approach

  function isAnagram_simple(word1, word2) {
    if (word1.length !== word2.length) {
      return false;
    }

    const sortedWord1 = word1.split('').sort().join('');
    const sortedWord2 = word2.split('').sort().join('');

    return sortedWord1 === sortedWord2;
  }

  console.log('4. ' + isAnagram('iceman', 'cinema'));
  // console.log('4. ' + isAnagram('iceman', 'cinemma'));

  //5. Same numbers, przyjmuje 2 tablice i zwraca nowa, ktora zawiera tylko elementy ktore wystepuja w obu

  function sameNumbers(arr1, arr2) {
    const sameNumbersArr = arr1.filter((num) => arr2.includes(num));
    return sameNumbersArr;
  }

  console.log('5. ' + sameNumbers([1, 2, 3, 4, 5], [3, 5, 7, 9]));
  //6. Średnia arytmetyczna z liczb z tablicy

  function averageFromArray(array) {
    const sum = array.reduce((acc, curr) => acc + curr);
    return sum / array.length;
  }
  console.log('6. ' + averageFromArray([1, 2, 3, 4, 5, 6]));

  //7. array2d
  function create2DArray(x, y) {
    const newArray = [];
    for (let i = 0; i < x; i++) {
      newArray.push(new Array(y).fill(0));
    }
    console.log(newArray);
    return newArray;
  }

  function create2DArrayWithMap(x, y) {
    const newArray = new Array(x).fill(0).map(() => new Array(y).fill(0));
    console.log(newArray);
    return newArray;
  }

  console.log('7. ' + create2DArray(1, 1));
  console.log('7. ' + create2DArray(1, 2));
  console.log('7. ' + create2DArrayWithMap(2, 2));
  //8. Funkcja, która przyjmuje tablice i zwraca taka sama w odwrotnej kolejnosci
  function reverseFun(arr) {
    const reverseArr = arr.reverse();
    return reverseArr;
  }

  console.log('8. ' + reverseFun([1, 2, 3, 4, 5]));

  //9. Funkcja, która przyjmuje tablice obiektów, gdzie każdy obiekt reprezentuje osobę z imieniem i wiekiem, i zwraca tablicę z samymi imionami osób

  const peopleArr = [
    { name: 'John', age: 14 },
    { name: 'Emily', age: 23 },
    { name: 'Peter', age: 28 },
  ];

  function getNames(arr) {
    return arr.map((x) => x.name);
  }

  console.log('9.' + getNames(peopleArr));
  return (
    <div>
      <h1>Arrays-Exercise</h1>
    </div>
  );
}
