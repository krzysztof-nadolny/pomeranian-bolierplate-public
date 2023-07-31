import { type } from '@testing-library/user-event/dist/type';
import './styles.css';

export function Exercise() {
  //Tablice trening
  //1. Zwrócic posortowaną tablicę, bez zmiany pierwotnej tablicy
  function sortImmute(arr) {
    const sortedArr = [...arr];
    sortedArr.sort((a, b) => a - b);
    console.log(sortedArr);
    return sortedArr;
  }

  const originalArr = [1, 3, 2, 5, 4];
  console.log('1--------------------------------');
  console.log(sortImmute(originalArr));
  console.log(originalArr);
  //2. Funkcja, która przyjmuje tablice i kapitalizuje im pierwszą litere

  const originalObj = {
    name: 'john',
    surname: 'wick',
    age: 1000,
  };

  function ucFirst(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  function sortImmute(obj) {
    const changedObject = {};
    Object.keys(obj).forEach((key) => {
      changedObject[key] =
        typeof obj[key] === 'string' ? ucFirst(obj[key]) : obj[key];
    });

    return changedObject;
  }
  console.log('2-------------------- ');
  console.log(sortImmute(originalObj));
  console.log(originalObj);

  //3. Zwraca tablice obiektów z wyliczoną srednią zamiast ocen

  function averageFromArray(array) {
    const sum = array.reduce((acc, curr) => acc + curr);
    return sum / array.length;
  }

  const tablicaPierwotna = [
    {
      id: 0,
      name: 'Eve',
      grade: [4, 2, 4, 6, 1, 2, 3],
    },
    {
      id: 2,
      name: 'Eve2',
      grade: [4, 2, 4, 6, 1, 2, 3],
    },
  ];

  function calcAvr(arr) {
    const changedArr = arr.map((obj) => {
      const changedObject = {};
      Object.keys(obj).forEach((key) => {
        changedObject[key] = Array.isArray(obj[key])
          ? averageFromArray(obj[key])
          : obj[key];
      });
      return changedObject;
    });
    return changedArr;
  }
  console.log('3------------------------------');
  console.log('3. Tablica pierwotna: ');
  console.log(tablicaPierwotna);
  console.log('3. Tablica z wartością średnią: ');
  console.log(calcAvr(tablicaPierwotna));

  //4.
  // funkcja zwraca podany w argumencie element ciągu Fibonacciego
  // napisać rekurencyjnie

  const fibonacci = (n) => {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
  };
  console.log('4. ');
  console.log(fibonacci(4));

  //5.
  const calculateWithChar = (operator) => {
    return (num1, num2) => {
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'złe wejście';
      }

      switch (operator) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          return num1 / num2;
        case '%':
          return num1 % num2;
        default:
          return 'zły znak';
      }
    };
  };
  console.log('5--------------------------');
  console.log(calculateWithChar('+')(1, 2));
  console.log(calculateWithChar('*')(1, 2));
  console.log(calculateWithChar('/')(1, 2));
  console.log(calculateWithChar('---')(1, 2));
  console.log(calculateWithChar('+')('abc', 2));

  //6. Stwórz funkcję, która przyjmuje dowolną liczbę argumentów za pomocą ...args i zwraca ich sumę

  function sumOfParam(...args) {
    const sum = args.reduce((acc, curr) => acc + curr);
    return sum;
  }
  console.log('6--------------------------------');
  console.log(sumOfParam(1, 2, 3, 4, 5, 6));

  //7. Zlicz wystapienia, ktora liczy wszystkie wystąpienia pierwotnie wywołanej funkcji

  function zliczWystapienia(n) {
    if (typeof n !== 'number') {
      return 'złe wejście';
    }
    const x = n;
    function innerZliczWystapienia(...args) {
      let count = 0;
      args.forEach((item) => {
        if (item === x) {
          count++;
        }
      });
      return count;
    }
    return innerZliczWystapienia;
  }
  console.log('7------------------------------------');
  console.log(zliczWystapienia(1)(1, 1, 2, 3, 5, 7, 8, 1));
  console.log(zliczWystapienia(1)(1, 1, 2, 3, 'cokolwiek', {}, [], 1, 1));
  // console.log(zliczWystapienia('nie liczba')(1,1,2,3,5,7,8,1))

  //7. Test

  function CheckRepeatingNumbers(target) {
    if (typeof target !== 'number') {
      return () =>  'wrong entry';
    }
    const x = target;
    return function (...args) {
      let count = 0;
      args.forEach((item) => {
        if (item === x) {
          count++;
        }
      });
      return count;
    };
  }

  console.log(CheckRepeatingNumbers(1)(1, 1, 2, 3, 5, 7, 8, 1))
  console.log(CheckRepeatingNumbers('nie liczba')(1,1,2,3,5,7,8,1))

  function zliczWystapienia_test(...args) {
    if (typeof args[0] !== 'number') {
      return 'złe wejście';
    }

    console.log(zliczWystapienia_test(1)(1, 1, 2, 3, 5, 7, 8, 1));
  }

  zliczWystapienia_test;

  //Dodatkowe
  function suma_przekatnej(macierz) {
    if (macierz.length !== 3) {
      return 'złe wejście';
    }
    for (let i = 0; i < 3; i++) {
      if (macierz[i].length !== 3) {
        return 'złe wejście';
      }
    }

    return macierz[0][0] + macierz[1][1] + macierz[2][2];
  }

  const macierz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const macierz2 = [
    [1, 2, 3],
    [7, 8, 9],
  ];
  const macierz3 = [
    [1, 2, 3],
    [4, 5],
    [7, 8, 9],
  ];
  console.log('DODATKOWE---------------------------------');
  console.log(suma_przekatnej(macierz2));
  console.log(suma_przekatnej(macierz3));
  console.log(suma_przekatnej(macierz));

  return (
    <div>
      <h1>Functions-extendeds</h1>
    </div>
  );
}
