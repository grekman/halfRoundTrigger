
var position = 0;
var padding = 5;
console.log(position);

document.querySelector('.trigger-body').onmousemove = function(event) {

  var inProcent = event.offsetX*100/(event.toElement.clientWidth);
  console.log(document.querySelector('.trigger-body').style.width);
console.log(inProcent);
if (inProcent < 32) {
  document.querySelector('img').src = 'img/1ru.png';
  document.querySelector('img').onclick = function() {
    location.href ="http://ya.ru"};
} else if (inProcent >= 32 && inProcent < 72) {
  document.querySelector('img').src = 'img/2ru.png';
  document.querySelector('img').onclick = function() {
    location.href ="http://google.com"};
} else if (inProcent >= 72) {
  document.querySelector('img').src = 'img/3ru.png';
  document.querySelector('img').onclick = function() {
    location.href ="http://bing.com"};
}

document.querySelector('.trigger-body').onmouseout = function() {
  document.querySelector('img').src = 'img/0ru.png';
}

  // var delta = 80;
  //
  // // console.log(position);
  // if (position < 2) {
  //   padding += delta;
  //   document.querySelector('.trigger-body').style.padding = '5px 0 5px ' +  padding + 'px';
  //   position += 1;
  // } else {
  //   padding  = 5;
  //   position = 0;
  //   document.querySelector('.trigger-body').style.padding = '5px 0 5px ' +  padding + 'px';
  //
  // }

}
