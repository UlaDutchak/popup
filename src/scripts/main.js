const popup = document.getElementById('popup');
const buttonYes = document.getElementsByClassName('popup__buttons-yes button');
const buttonNo = document.getElementsByClassName('popup__buttons-no')[0];
const input = document.getElementById('email');
const text = document.getElementById('text');

window.onload = function () {
  if(!localStorage.getItem("popup1")) {
    setTimeout(function () {
      popup.style.opacity = "1";
    }, 3000);
  } 
}

buttonNo.onclick = function() {
  popup.style.display = "none";
}

buttonYes.onclick = function(event) {
  if (event.target.buttonYes) {
    popup.style.display='none';
    localStorage.setItem('popup1', 'none');
  }
}
