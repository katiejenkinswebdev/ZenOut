console.log("site.js loaded");

document.querySelector('#addHero').addEventListener('click',function (event) {
  var heroName = document.querySelector('#heroName').value;
  if (heroName) {
    var div = document.createElement('div');
    div.innerText = heroName;
    document.querySelector('#heroes').appendChild(div);
  }
  document.querySelector('#heroName').value = '';
});

document.querySelector('#heroes').addEventListener('click',function (event) {
  var heroName = event.target.innerText;
  var greetingDiv = document.querySelector('#greeting');
  if (!greetingDiv.innerText) {
    greetingDiv.innerText = 'Hello ' + heroName;
  } else {
    greetingDiv.innerText += ', ' + heroName;
  }
});
