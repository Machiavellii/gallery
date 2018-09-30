let current = document.querySelector('#current');
let imgs = document.querySelectorAll('.imgs img');
let btn = document.querySelector('#btn');
let contents = document.querySelectorAll('.description-holder');

let nums = document.querySelectorAll('.num-value');
let mainImg = document.querySelector('.img-holder');
let main = document.querySelector('.main-holder');
let i = 0;

btn.addEventListener('click', btnClick);

function btnClick(n) {
  i += 1;
  if (i > imgs.length - 1) {
    i = 0;
  }
  current.src = imgs[i].src;
  showHideBtn();
  animate();
}

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
  current.src = e.target.src;
  showHideImg(e);
  animate();
}

function animate() {
  mainImg.classList.add('move');
  main.classList.add('moveTotop');

  setTimeout(() => main.classList.remove('moveTotop'), 400);
  setTimeout(() => mainImg.classList.remove('move'), 400);
}

function showHideImg(e) {
  imgs.forEach(img => {
    if (img.src === e.target.src) {
      img.style.display = 'none';
    } else {
      img.style.display = 'block';
    }
  });
  contents.forEach(content => {
    if (content.id === e.target.id) {
      content.classList.add('descriptionAnimation');
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
  nums.forEach(num => {
    if (num.id === e.target.id) {
      num.style.display = 'inline';
      num.classList.add('descriptionAnimation');
    } else {
      num.style.display = 'none';
    }
  });
}

function showHideBtn() {
  imgs.forEach(img => {
    if (img.src === imgs[i].src) {
      img.style.display = 'none';
    } else {
      img.style.display = 'block';
    }
  });
  contents.forEach(content => {
    if (content.id === imgs[i].id) {
      content.classList.add('descriptionAnimation');
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
  nums.forEach(num => {
    if (num.id === imgs[i].id) {
      num.style.display = 'inline';
      num.classList.add('descriptionAnimation');
    } else {
      num.style.display = 'none';
    }
  });
}
