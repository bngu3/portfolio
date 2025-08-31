const text = "Software Engineering @ SJSU";
let i = 0; 
const speed = 200; // milliseconds per letter

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typed").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();