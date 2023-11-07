// Fonction pour récupérer le compteur de visites depuis le stockage local
function getVisitCount() {
    let count = localStorage.getItem('visitCount');
    return count ? parseInt(count) : 0;
}

// Fonction pour incrémenter le compteur de visites
function incrementVisitCount() {
    let count = getVisitCount();
    count++;
    localStorage.setItem('visitCount', count);
    return count;
}

// Mettez à jour le compteur de visites dans la page
function updateVisitCount() {
    let count = getVisitCount();
    const visitCountElement = document.getElementById('visitCount');
    visitCountElement.textContent = count;
}

// Appeler la fonction pour mettre à jour le compteur lors du chargement de la page
updateVisitCount();