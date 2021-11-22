let htmlCode = document.getElementById("codetxt")
let frame = document.getElementById("res-iframe")
let frameconsole = document.getElementById("frame-console")
let codixu = document.getElementById("codeboxix")
class fakeconsole {
    log(val) {
        frameconsole.innerHTML = frameconsole.innerHTML + "<br>"
        let span = document.createElement("span")
        span.appendChild(document.createTextNode("\n" + val))
        frameconsole.appendChild(span)
        console.log(val)
    }
    warn(val) {
        frameconsole.innerHTML = frameconsole.innerHTML + "<br>"
        let span = document.createElement("span")
        span.appendChild(document.createTextNode("\n" + "WARNING: " + val))
        frameconsole.appendChild(span)
        console.warn(val)
    }
    error(val) {
        frameconsole.innerHTML = frameconsole.innerHTML + "<br>"
        let span = document.createElement("span")
        span.appendChild(document.createTextNode("\n" + "ERROR: " + val))
        frameconsole.appendChild(span)
        console.error(val)
    }
}
frame.console = new fakeconsole()
function showPreview(){
    frame.innerHTML = marked.parse(codetxt.value)
}
function savehtml() {
    localStorage.setItem("MD-Save", htmlCode.value)
}
function loadhtml() {
    htmlCode.value = localStorage.getItem("MD-Save")
    showPreview()
}
function codix() {
    frame.eval(codixu.value)
}