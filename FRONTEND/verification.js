function validateForm() {

    var pwd = document.getElementById(inputPWD).value;

    if (/^[a-z]*$/.test(pwd)) {
        alert("Entrer votre mdp");
        return false;
    }
    alert("Donnée valide");
    return true;
}