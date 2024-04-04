function verifyPattern() {
    var pattern = document.getElementById('patternInput').value;
    var text = document.getElementById('textInput').value;
    var largeText = document.getElementById('largeTextInput').value;

    // Verific dacă pattern-ul este valid
    try {
        var regex = new RegExp(pattern, 'g'); // Adăugăm 'g' pentru a găsi toate aparițiile
    } catch (e) {
        document.getElementById('message').innerHTML = "Pattern-ul introdus nu este valid!";
        return;
    }

    // Verific dacă textul corespunde pattern-ului
    if (regex.test(text)) {
        document.getElementById('message').innerHTML = "Textul conține un match cu pattern-ul!";
    } else {
        document.getElementById('message').innerHTML = "Textul nu conține un match cu pattern-ul!";
    }

    // Extrag string-urile din textul mare care corespund pattern-ului
    var matches = largeText.match(regex);
    if (matches) {
        document.getElementById('result').innerHTML = "Rezultatele găsite în textul mare:<br>" + matches.join("<br>");
    } else {
        document.getElementById('result').innerHTML = "Nu s-au găsit rezultate în textul mare.";
    }
}
