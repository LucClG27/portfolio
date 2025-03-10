function showHide(id,button){
    const additionalContent = document.getElementById(id);
    if (additionalContent.classList.contains('hide')) {
        additionalContent.classList.remove('hide');
        additionalContent.classList.add('show');
        button.textContent = 'Réduire';
    } else {
        additionalContent.classList.remove('show');
        additionalContent.classList.add('hide');
        button.textContent = 'En savoir plus';
    }
}

