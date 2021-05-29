function createTextArea() {
  token = localStorage.token;
  var x = document.createElement("TEXTAREA");
  var t = document.createTextNode(token);
  x.appendChild(t);
  document.body.appendChild(x);
}
function copy() {
  var copyText = document.querySelector("body > textarea")
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
createTextArea()
copy()
