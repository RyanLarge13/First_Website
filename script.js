const menuLinks = Array.from(document.querySelectorAll('#menu-btn'));
const hamburgerMenu = document.querySelectorAll('.toggle-span');
const toTopBtn = document.querySelector('.go-to-top');

menuLinks.forEach(link => {
  setTimeout(() => {
  link.style.opacity = '1';
  }, 500);
})


const navDisplay = () => {
  
  hamburgerMenu.forEach(span => {
    span.classList.toggle('trans');
  })
  
  let count = 1;
    for (let k = 0; k < menuLinks.length; k++) {
      menuLinks[k].classList.toggle('link-' + count + '-rvs');
      count++;
    }
}

const menuHide = () => {
  if (menuLinks[0].classList.contains('link-1-rvs')) {
    return;
  } else {
    navDisplay();
  }
};

const toTop = () => {
  if (window.scrollY > 800) {
    toTopBtn.style.opacity = '1';
    toTopBtn.style.pointerEvents = 'all';
  }
  else if (window.scrollY < 600) {
    toTopBtn.style.opacity = '0';
    toTopBtn.style.pointerEvents = 'none';
  }
}
  
window.addEventListener("scroll", menuHide);
window.addEventListener("scroll", toTop);
window.onload = navDisplay();



//image slider code 


let starX;
let moveX;
let count = 1;
const imageSlider = document.querySelector('.card-slider-container');
const images = document.querySelectorAll('.slider-img');
const size = images[0].clientWidth;
images.forEach(image=> {
  image.style.transform = 'translateX(' + (-size * 1) + 'px)';
    });

const start = (e) => startX = e.touches[0].clientX;
const move = (e) => moveX = e.touches[0].clientX;
const end = () => {
  if (startX > moveX) {
    if (count == images.length - 1) {
      return;
    }
    count++
    images.forEach(image=> {
      image.style.transition = '250ms ease-in-out';
      image.style.transform = 'translateX(' + (-size * count) + 'px)';
    });
  } else {
    if (count >= 1) {
    count--
    images.forEach(image=> {
      image.style.transition = '250ms ease-in-out';
      image.style.transform = 'translateX(' + (-size * count) + 'px)';
    });
   }
  }
}

const loopBack = () => {
  if (images[count].id === 'last-clone') {
    count = images.length - 2;
    images.forEach(image => {
    image.style.transform = 'translateX(' + (-size * count) + 'px)';
    image.style.transition = 'none';
    });
  } else if (images[count].id === 'first-clone') {
    count = 1;
    images.forEach(image => {
    image.style.transform = 'translateX(' + (-size * count) + 'px)';
    image.style.transition = 'none';
    });
   }
};

imageSlider.addEventListener('touchstart', start);
imageSlider.addEventListener('touchmove', move);
imageSlider.addEventListener('touchend', end);
images[0].addEventListener('transitionend', loopBack);




const cardImages = document.querySelectorAll('.card-img');

let width = cardImages[0].clientWidth;

cardImages.forEach(img => {
  img.style.height = width + 'px';
});

/*
const moon = document.querySelector('.moon');
let moonCount = 9;
let interval = 9;

const fasterPlanet = () => {
  interval--;
  if (moonCount === 1) {
    moonCount = 9;
    interval = 9;
  }
  moonCount--;
  moon.style.animationDuration = moonCount + 's';
};

const timer = () => {
  setInterval(() => {
    fasterPlanet();
}, interval * 1000);
setTimeout(() => {
  clear();
}, interval * 1000);
}

const clear = () => {
  clearInterval(timer);
  timer();
}

timer();
*/