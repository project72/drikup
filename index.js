var colors = [
  '#3578a9',
  '#42b884',
  '#d6665a',
  '#dc9b74',
  '#d9cfb0',
  '#75a48b',
];

var questions = [
  'что сейчас бесит?',
  'мечты?',
  'путин мужик?',
  'все пьют',
  'сидр или эль?',
  'пьет скучающий',
  'пьет расказчик',
  'все пьют',
  'пьет опаздавший',
  'пьют те, что со смартфоном',
  'любимый фильм у торантино?',
  'все пьют',
  'винцо?',
  'татухи?',
];

window.onload = function () {
  document.body.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
}

document.getElementById('round').onclick = function () {
  var text = document.getElementById('text');

  text.textContent = questions[Math.floor(Math.random() * questions.length)]
}
