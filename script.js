// получаем все нужные нам элементы
const textRusWrapper = document.getElementsByClassName('text__rus__wrapper')[0];
const textTranslitWrapper = document.getElementsByClassName('text__translit__wrapper')[0];
const searchInput = document.querySelector('.search__input');
const searchBtn = document.querySelector('.search__btn');

// создаем объект с алфавитами для транслитерации
const converter = {
  а: 'a',
  б: 'b',
  в: 'v',
  г: 'g',
  д: 'd',
  е: 'e',
  ё: 'e',
  ж: 'zh',
  з: 'z',
  и: 'i',
  й: 'y',
  к: 'k',
  л: 'l',
  м: 'm',
  н: 'n',
  о: 'o',
  п: 'p',
  р: 'r',
  с: 's',
  т: 't',
  у: 'u',
  ф: 'f',
  х: 'h',
  ц: 'c',
  ч: 'ch',
  ш: 'sh',
  щ: 'sch',
  ь: '\'',
  ы: 'y',
  ъ: '',
  э: 'e',
  ю: 'yu',
  я: 'ya',
  А: 'A',
  Б: 'B',
  В: 'V',
  Г: 'G',
  Д: 'D',
  Е: 'E',
  Ё: 'E',
  Ж: 'Zh',
  З: 'Z',
  И: 'I',
  Й: 'Y',
  К: 'K',
  Л: 'L',
  М: 'M',
  Н: 'N',
  О: 'O',
  П: 'P',
  Р: 'R',
  С: 'S',
  Т: 'T',
  У: 'U',
  Ф: 'F',
  Х: 'H',
  Ц: 'C',
  Ч: 'Ch',
  Ш: 'Sh',
  Щ: 'Sch',
  Ь: '\'',
  Ы: 'Y',
  Ъ: '',
  Э: 'E',
  Ю: 'Yu',
  Я: 'Ya',
  a: 'а',
  b: 'б',
  c: 'с',
  d: 'д',
  e: 'е',
  f: 'ф',
  g: 'г',
  h: 'х',
  i: 'и',
  j: 'дж',
  k: 'к',
  l: 'л',
  m: 'м',
  n: 'н',
  o: 'о',
  p: 'п',
  q: 'к',
  r: 'р',
  s: 'с',
  t: 'т',
  u: 'ю',
  v: 'в',
  w: 'в',
  x: 'кс',
  y: 'й',
  z: 'з',
  A: 'А',
  B: 'Б',
  C: 'С',
  D: 'Д',
  E: 'Е',
  F: 'Ф',
  G: 'Г',
  H: 'Х',
  I: 'И',
  J: 'ДЖ',
  K: 'К',
  L: 'Л',
  M: 'М',
  N: 'Н',
  O: 'О',
  P: 'П',
  Q: 'К',
  R: 'Р',
  S: 'С',
  T: 'Т',
  U: 'Ю',
  V: 'В',
  W: 'В',
  X: 'КС',
  Y: 'Й',
  Z: 'З',
  ' ': ' ',
};

// вешаем слушателя на кнопку
searchBtn.addEventListener('click', () => {
  // создаем переменную и присваиваем ей значение из input
  let inputValue = searchInput.value;

  // очищаем от символов и цифр
  function clearStr(str) {
    let strCleared = str.replace(/[&\/\#!,@+()\\|=$~%\-.\_'^":№;[\]*?<>{}]/g, '');
    strCleared = strCleared.replace(/[0-9]/g, '');
    return strCleared;
  }
  inputValue = clearStr(inputValue);

  // проверяем длину введенного текста и сокращаем, если он длинный
  const checkLengtRus = () => {
    if (inputValue.length > 17) {
      let slicedInputValue = inputValue.slice(0, 16);
      slicedInputValue += '...';
      return slicedInputValue;
    }
    return inputValue;
  };

  // создаем элемент, присваиваем ему свойства, добаляем его в блок с вводимым тектом
  let p = document.createElement('p');
  p.setAttribute('class', 'text__translit--p');
  p.setAttribute('title', inputValue);
  p.innerText = checkLengtRus();
  textRusWrapper.appendChild(p);
  searchInput.value = '';

  let translitResult = '';
  let tempVar = '';

  // циклом проходимся по каждому символу
  for (let i = 0; i < inputValue.length; i++) {
    tempVar = inputValue[i];
    // каждый символ сравниваем со ключами объекта и записываем значение в переменную при совпадении
    for (const key of Object.keys(converter)) {
      if (key === tempVar) {
        translitResult += converter[key];
      }
    }
  }

  // сокращаем длинный текст для блока вывода
  const checkLengtEng = () => {
    if (translitResult.length > 17) {
      let slicedInputValue = translitResult.slice(0, 16);
      slicedInputValue += '...';
      return slicedInputValue;
    }
    return translitResult;
  };

  // создаем элемент, присваиваем ему свойства, добаляем его в блок с выводимым тектом
  p = document.createElement('p');
  p.setAttribute('class', 'text__translit--p');
  p.setAttribute('title', translitResult);
  p.innerText = checkLengtEng();
  textTranslitWrapper.appendChild(p);
});
