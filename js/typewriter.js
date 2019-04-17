var typeString = ['UX Designer', 'Change Maker','Problem Solver'];
var  i = 0;
var count = 0;
var selectedText = '';
var text = '';
document.addEventListener("keydown", stop, false);


(function type() {
  if (count == typeString.length) {
    count = 0;
  }
  selectedText = typeString[count];
  text = selectedText.slice(0, ++i);
  document.getElementById('typing').innerHTML = text;
  if (text.length === selectedText.length) {
  count++;
  i = 0;
  }
  var settime = setTimeout(type, 200);
  }());
