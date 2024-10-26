fetch('https://api64.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ip-display').innerText = data.ip;
    })
    .catch(error => {
        document.getElementById('ip-display').innerText = "Impossible de récupérer l'adresse IP.";
        console.error("Erreur:", error);
    });
