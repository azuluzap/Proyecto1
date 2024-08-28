// Función para encriptar el texto
function encryptText() {
    let inputText = document.getElementById("inputText").value;
    let encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = encryptedText;
}

// Función para desencriptar el texto
function decryptText() {
    let inputText = document.getElementById("inputText").value;
    let decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = decryptedText;
}

// Función para copiar el texto al portapapeles
function copyText() {
    let outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

function copyText() {
    let outputText = document.getElementById("inputText");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

function encryptText() {
    let inputText = document.getElementById("inputText").value;
    let encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    displayOutput(encryptedText);
}

function decryptText() {
    let inputText = document.getElementById("inputText").value;
    let decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    displayOutput(decryptedText);
}

function displayOutput(text) {
    document.getElementById("outputImage").style.display = "none";  // Ocultar la imagen
    document.getElementById("outputTextTitle").innerText = "Resultado";
    document.getElementById("outputText").innerText = text;
}

function copyText() {
    let outputText = document.getElementById("outputText").innerText;
    navigator.clipboard.writeText(outputText).then(() => {
        alert("Texto copiado al portapapeles");
    });
}
