(() => {
  const openNavMenu = document.querySelector('.open-nav-menu'),
    closeNavMenu = document.querySelector('.close-nav-menu'),
    navMenu = document.querySelector('.nav-menu'),
    menuOverlay = document.querySelector('.menu-overlay'),
    mediaSize = 991;

  openNavMenu.addEventListener('click', toggleNav);
  closeNavMenu.addEventListener('click', toggleNav);
  // close the navMenu by clicking outside
  menuOverlay.addEventListener('click', toggleNav);

  function toggleNav() {
    navMenu.classList.toggle('open');
    menuOverlay.classList.toggle('active');
    document.body.classList.toggle('hidden-scrolling');
  }

  navMenu.addEventListener('click', (event) => {
    if (
      event.target.hasAttribute('data-toggle') &&
      window.innerWidth <= mediaSize
    ) {
      // prevent default anchor click behavior
      event.preventDefault();
      const menuItemHasChildren = event.target.parentElement;
      // if menuItemHasChildren is already expanded, collapse it
      if (menuItemHasChildren.classList.contains('active')) {
        collapseSubMenu();
      } else {
        // collapse existing expanded menuItemHasChildren
        if (navMenu.querySelector('.menu-item-has-children.active')) {
          collapseSubMenu();
        }
        // expand new menuItemHasChildren
        menuItemHasChildren.classList.add('active');
        const subMenu = menuItemHasChildren.querySelector('.sub-menu');
        subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
      }
    }
  });
  function collapseSubMenu() {
    navMenu
      .querySelector('.menu-item-has-children.active .sub-menu')
      .removeAttribute('style');
    navMenu
      .querySelector('.menu-item-has-children.active')
      .classList.remove('active');
  }
  function resizeFix() {
    // if navMenu is open ,close it
    if (navMenu.classList.contains('open')) {
      toggleNav();
    }
    // if menuItemHasChildren is expanded , collapse it
    if (navMenu.querySelector('.menu-item-has-children.active')) {
      collapseSubMenu();
    }
  }

  window.addEventListener('resize', function () {
    if (this.innerWidth > mediaSize) {
      resizeFix();
    }
  });
})();

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    $('.header').addClass('shadow');
  } else {
    $('.header').removeClass('shadow');
  }
});

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);

// document.addEventListener('DOMContentLoaded', () => {
//   function counter(id, start, end, duration) {
//     let obj = document.getElementById(id),
//       current = start,
//       range = end - start,
//       increment = end > start ? 1 : -1,
//       step = Math.abs(Math.floor(duration / range)),
//       timer = setInterval(() => {
//         current += increment;
//         obj.textContent = current;
//         if (current == end) {
//           clearInterval(timer);
//         }
//       }, step);
//   }
//   counter('count1', 0, 400, 1000);
//   counter('count2', 100, 50, 1000);
//   counter('count3', 0, 40, 1000);
//   counter('count4', 110, 40, 1000);
// });

let valueDisplays = document.querySelectorAll('.numm');
let interval = 500;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute('data-val'));
  // console.log(endValue);
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
