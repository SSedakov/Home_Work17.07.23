const button = document.getElementById('button');
button.addEventListener('click',showPicture);


function showPicture() {
  document.getElementById('picture').style.display = 'block';
  
  const time = 5000;
  setTimeout(() =>document.getElementById('picture').style.display = 'none',time )
}

