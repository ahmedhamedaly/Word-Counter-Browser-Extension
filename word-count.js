function countWords() {
    const x = document.getElementById("text").value;
    if (x) {
        document.getElementById("words").innerHTML = 'Words: ' + x.trim().split(/\s+/).length;
    } else {
        document.getElementById('words').innerHTML = 'Words: 0';
    }
}

document.getElementById('text').onkeyup = countWords;

