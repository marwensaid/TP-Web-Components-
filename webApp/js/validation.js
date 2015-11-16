function validation() {

    champNULL = "Ce champs ne peut être vide";
    input_name = window.document.getElementById("nom");
    input_prenom = window.document.getElementById("prenom");
    input_datenaiss = window.document.getElementById("datenaiss");
    input_email = window.document.getElementById("Email");
    input_adresse = window.document.getElementById("adresse");
    input_cp = window.document.getElementById("cp");
    input_login = window.document.getElementById("login");
    input_mdp = window.document.getElementById("mdp");
    var retour = true;

    var pattRegexName = new RegExp("[a-z]{3,10}");
    var pattRegexPrenom = new RegExp("[a-z]{3,12}");
    var pattRegexEmail = new RegExp("^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\\.[a-z]{2,4}$");
    var pattRegexCp = new RegExp("^[0-9]{5}$");
    var pattRegexLogin = new RegExp("^[a-zA-Z0-9]{3,20}$");
    var pattRegexAdresse = new RegExp("[0-9a-zA-Z]{10,50}");

    if (input_name.value != "") {
        if (!pattRegexName.test(input_name.value)) {
            nom_error = window.document.getElementById("nom_error");
            retour = inputWrong(input_name, nom_error, "Ce champs doit avoir une longueur de 3 caractères minimum et 10 maximum");
        }
        else {
            removeErrorMessage(input_name, nom_error);
        }
    }
    else {
        retour = inputVide(input_name, nom_error);
    }

    if (input_prenom.value != "") {
        if (!pattRegexPrenom.test(input_prenom.value)) {
            prenom_error = window.document.getElementById("prenom_error");
            retour = inputWrong(input_prenom, prenom_error, "Ce champs doit avoir une longueur de 3 caractère minimum et 12 maximum");
        }
        else {
            removeErrorMessage(input_prenom, prenom_error);
        }
    }
    else {
        retour = inputVide(input_prenom, prenom_error);
    }

    if (input_datenaiss.value != "") {
        /* if(!pattRegexPrenom.test(input_datenaiss.value))
         {
         datenaiss_error = window.document.getElementById("datenaiss_error");
         retour = inputWrong(input_datenaiss,datenaiss_error,"Ce n'est pas une date valide");
         }*/
        removeErrorMessage(input_datenaiss, window.document.getElementById("datenaiss_error"));
    }
    else {
        retour = inputVide(input_datenaiss, datenaiss_error);
    }

    if (input_email.value != "") {
        if (!pattRegexEmail.test(input_email.value)) {
            email_error = window.document.getElementById("email_error");
            retour = inputWrong(input_email, email_error, "Adresse email non valide !");
        }
        else {
            removeErrorMessage(input_email, email_error);
        }
    }
    else {
        retour = inputVide(input_email, email_error);
    }

    if (input_cp.value != "") {
        if (!pattRegexCp.test(input_cp.value)) {
            cp_error = window.document.getElementById("cp_error");
            retour = inputWrong(input_cp, cp_error, "Code postal invalide !");
        }
        else {
            removeErrorMessage(input_cp, cp_error);
        }
    }
    else {
        retour = inputVide(input_cp, cp_error);
    }

    /*   if (input_adresse.value != "") {
     if (!pattRegexAdresse.test(input_adresse.value)) {
     adresse_error = window.document.getElementById("adresse_error");
     retour = inputWrong(input_adresse, adresse_error, "Adresse invalide");
     }
     else {
     removeErrorMessage(input_adresse, adresse_error);
     }
     }
     else {
     retour = inputVide(input_adresse, adresse_error);
     } */

    if (input_login.value != "") {
        if (!pattRegexLogin.test(input_login.value)) {
            login_error = window.document.getElementById("login_error");
            retour = inputWrong(input_login, login_error, "Ce champs doit avoir une longueur de 3 caractère minimum et 20 maximum");
        }
    }
    else {
        retour = inputVide(input_login, login_error);
    }
    return retour;
}

function inputWrong(input, error, message) {
    $(input).addClass("input-wrong");
    error.innerHTML = message;
    $(error).removeClass("hidden");
    $(error).addClass("input-error-message");
    return false;
}

function inputVide(input, error) {
    $(input).addClass("input-wrong");
    $(error).removeClass("hidden");
    error.innerHTML = champNULL;
    $(error).addClass("input-error-message");
    return false;
}

function removeErrorMessage(input, error) {
    $(input).removeClass("input-wrong");
    $(error).addClass("hidden");
}

function geolocalise() {
    console.log("geoloc");

    navigator.geolocation.getCurrentPosition(displayPosition);
}
function displayPosition(position) {
    console.log("long = " + position.coords.longitude);
}
function traiteFichiers(evt) {
    var files = event.target.files;

    console.log("fichiers selectionnés : " + files.length);

}

function showLocation(position) {
    alert('Latitude : ' + position.coords.latitude + ' - Longitude : ' + position.coords.latitude);
}


