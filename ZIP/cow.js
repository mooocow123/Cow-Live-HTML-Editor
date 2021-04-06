let htmlCode = document.getElementById("codetxt");
let frame = document.getElementById("res-iframe").contentWindow;
let frameconsole = document.getElementById("frame-console");
function showPreview(){
    frame.document.open();
    frame.document.write(htmlCode.value);
    frame.document.close();
}

function savehtml() {
    localStorage.setItem("mySave", htmlCode.value);
}
function loadhtml() {
    htmlCode.value = localStorage.getItem("mySave");
    showPreview()
}
frame.console.log = function(val) {
    frameconsole.innerHTML = frameconsole.innerHTML + "<br>";
    let span = document.createElement("span");
    span.appendChild(document.createTextNode("\n" + val));
    frameconsole.appendChild(span);
    console.log(val);
};
frame.console.warn = function(val) {
    frameconsole.innerHTML = frameconsole.innerHTML + "<br>";
    let span = document.createElement("span");
    span.appendChild(document.createTextNode("\n" + "WARNING: " + val));
    frameconsole.appendChild(span);
    console.warn(val);
}
frame.console.error = function(val) {
    frameconsole.innerHTML = frameconsole.innerHTML + "<br>";
    let span = document.createElement("span");
    span.appendChild(document.createTextNode("\n" + "ERROR: " + val));
    frameconsole.appendChild(span);
    console.error(val);
}