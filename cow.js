let htmlCode = document.getElementById("codetxt");
let frame = document.getElementById("res-iframe").contentWindow.document;
function showPreview(){
    frame.open();
    frame.write(htmlCode.value);
    frame.close();
}
htmlCode.addEventListener("keyup", function () {
    showPreview();
});
htmlCode.addEventListener("keydown", function () {
    showPreview();
});
htmlCode.addEventListener("paste", function () {
    showPreview();
});
function savehtml() {
    localStorage.setItem("mySave", htmlCode.value);
}
function loadhtml() {
    htmlCode.value = localStorage.getItem("mySave");
    showPreview()
}