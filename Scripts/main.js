function calc(){
  var h = document.getElementById("height").value;
  var w = document.getElementById("width").value;

  var area = w * h;
  document.getElementById("answer").value = area;
}
