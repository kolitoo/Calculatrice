function calcul() {
    let nbr1 = parseInt(document.getElementById('nbr1').value);
    let nbr2 = parseInt(document.getElementById('nbr2').value);
    switch (document.getElementById('signe').value) {
        case "plus":
            var res = nbr1 + nbr2;
            alert(nbr1 + " + " + nbr2 + " = " + res);
            break;
        case "moins":
            var res = nbr1 - nbr2;
            alert(nbr1 + " + " + nbr2 + " = " + res);
            break;
        case "fois":
            var res = nbr1 * nbr2;
            alert(nbr1 + " + " + nbr2 + " = " + res);
            break;
        case "divise":
            var res = nbr1 / nbr2;
            alert(nbr1 + " + " + nbr2 + " = " + res);
        default:
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('bloc').style.visibility = 'visible';
    document.getElementById('lien1').addEventListener('click', afficherDiv);
    document.getElementById('lien2').addEventListener('click', cacherDiv);
    function afficherDiv() {
        let div = document.getElementById('bloc');
        if (div.style.visibility == 'hidden') {
            div.style.visibility = 'visible';
        }
    }
    function cacherDiv() {
        let div = document.getElementById('bloc');
        if (div.style.visibility == 'visible') {
            div.style.visibility = 'hidden';
        }
    }
})

document.getElementById('nbr1').onmouseover = function () {
    document.getElementById('info').style.visibility = 'visible';
    document.getElementById('info').innerHTML = "Saisir un chiffre";
}

document.getElementById('nbr1').onmouseout = function () {
    document.getElementById('info').style.visibility = 'hidden';
    document.getElementById('info').innerHTML = ""
}

document.getElementById('nbr2').onmouseover = function () {
    document.getElementById('info').style.visibility = 'visible';
    document.getElementById('info').innerHTML = "Saisir un chiffre";
}

document.getElementById('nbr2').onmouseout = function () {
    document.getElementById('info').style.visibility = 'hidden';
    document.getElementById('info').innerHTML = ""
}

document.getElementById('signe').onmouseover = function () {
    document.getElementById('info').style.visibility = 'visible';
    document.getElementById('info').innerHTML = "Sélectionnez un opérateur: + - x /"
}

document.getElementById('signe').onmouseout = function () {
    document.getElementById('info').style.visibility = 'hidden';
    document.getElementById('info').innerHTML = ""
}