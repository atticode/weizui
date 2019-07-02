
var navBtn = document.getElementById("mobilenavBtn");
var nav = document.getElementById('nav');
navBtn.addEventListener('click', function () {
console.log(nav.style.display)
  if (nav.style.display == 'block') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
  }
});
