
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBpRMEEvYWK5XoqzSg6JDbq6s658bmQZlI",
    authDomain: "dashboard-41e73.firebaseapp.com",
    databaseURL: "https://dashboard-41e73.firebaseio.com",
    projectId: "dashboard-41e73",
    storageBucket: "dashboard-41e73.appspot.com",
    messagingSenderId: "644150057174",
    appId: "1:644150057174:web:32b3b1c85d4a553f0cd177",
    measurementId: "G-XGT6ELK5T9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {

        window.location = "dashboard.html";
    }
});


function login() {
    var adminemail = document.getElementById("email").value;
    var adminpassword = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(adminemail, adminpassword).catch(function (error) {
        // Handle Errors here.

        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert("wrong  info" + errorMessage);
        console.log(errorMessage, errorCode);

    });

}
