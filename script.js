// Task 1
const files = [
  'module.jsx',
  'index.html',
  'style.css',
  'index.js',
  'file.ts',
  'library.css',
  'my.plugin.js',
];

const filterFiles = (arr) => {
  return arr.filter((file) => file.match(/\.(js|jsx|ts)$/));
};

console.log(filterFiles(files));

// Task 2

// Валидные: info@methed.ru, max24@mail.com, java_script@google.io
// Не валидные: my-mail@yandex.ru, tom_yam@ya.ru, zero@mai1.xyz'

const reg = /^\w+@[a-zA-Z_]{3,64}\.[a-zA-Z]{2,5}$/;
const str = 'zero@mai1.xyz';

console.log(str.match(reg));

// Task 3
const regexp = /\((.*?)\)/g;
const str1 =
  'Здоровый (праздничный) ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды (по мнению моей мамы) являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты(например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка, если она приготовлена на пару.';

console.log(str1.match(regexp));

//Task 4

const text = 'http://site.ru';

const replaceStr = (str) => {
  const reg = /(https?:\/\/[^\s]+)/g;
  return str.replace(reg, (url) => {
    return '<a href="' + url + '">' + url.match(/(?!.*\/).+/) + '</a>';
  });
};

console.log(replaceStr(text));
