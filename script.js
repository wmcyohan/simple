function changeView() {

    var signUpBox = document.getElementById("signUpBox");
    var signInBox = document.getElementById("signInBox");

    signUpBox.classList.toggle("d-none");
    signInBox.classList.toggle("d-none");

}

function sign() {
    window.location = "home.php";
}

function AdminLogIn() {
    window.location = "adminSignIn.php";
}

function AdminSign() {
    window.location = "adminPannel.php";
}