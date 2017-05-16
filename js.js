
var position = 0;
var padding = 5;
console.log(position);

document.querySelector('.trigger-body').onmousemove = function(event) {
  console.log(event.offsetX);

if (event.offsetX < 300) {
  document.querySelector('img').src = 'img/1ru.png';
} else if (event.offsetX > 300 && event.offsetX < 600) {
  document.querySelector('img').src = 'img/2ru.png';
} else if (event.offsetX >= 600) {
  document.querySelector('img').src = 'img/3ru.png';
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
