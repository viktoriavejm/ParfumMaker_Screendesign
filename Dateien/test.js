// Variablen zur Verwaltung der aktuellen Ansicht und der Parts
const parts = ["basenote", "heartnote", "headnote", "intensität"];
let currentPartIndex = 0;

// Funktion zum Anzeigen eines Parts basierend auf dem Index
function showPart(index) {
    parts.forEach((part, i) => {
        const element = document.getElementById(part);
        if (element) {
            element.style.display = i === index ? "block" : "none";
        }
    });
}

// Button Funktionalität für 'Weiter' und 'Zurück'
function buttonpressed(direction) {
    if (direction === 'next') {
        if (currentPartIndex < parts.length - 1) {
            currentPartIndex++;
        }
    } else if (direction === 'prev') {
        if (currentPartIndex > 0) {
            currentPartIndex--;
        }
    }
    showPart(currentPartIndex);
}

// Aktuelles Datum ausgeben
function writeDate() {
    const today = new Date();
    const dateElement = document.getElementById("writeDate");
    if (dateElement) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = today.toLocaleDateString("de-DE", options);
    }
}

// Intensität von der Range Eingabe bekommen (zwischen 40 und 100)
function getIntensity() {
    const rangeInput = document.getElementById("intensityRange");
    if (rangeInput) {
        const intensity = parseInt(rangeInput.value);
        const intensityDisplay = document.getElementById("intensityValue");
        intensityDisplay.textContent = intensity;
    }
}

// Seite initialisieren
document.addEventListener("DOMContentLoaded", function () {
    // Datum anzeigen
    writeDate();
    
    // Erstes Part anzeigen
    showPart(currentPartIndex);
    
    // Event Listener für Range-Input (für Intensität)
    const rangeInput = document.getElementById("intensityRange");
    if (rangeInput) {
        rangeInput.addEventListener("input", getIntensity);
    }
});
