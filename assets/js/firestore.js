// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Form Data Submission


const firebaseConfig = {
    apiKey: "AIzaSyBwUiYjX6d8azQobMYTmfWoV0GNEmJ-7AI",
    authDomain: "drunken-huntsman-website.firebaseapp.com",
    databaseURL: "https://drunken-huntsman-website-default-rtdb.firebaseio.com",
    projectId: "drunken-huntsman-website",
    storageBucket: "drunken-huntsman-website.appspot.com",
    messagingSenderId: "372293584198",
    appId: "1:372293584198:web:31790e84ba875b9f825147",
    measurementId: "G-ZS15LY1VT3"
};

firebase.initializeApp(firebaseConfig);

var push_to_firebase = function(data){
    alert("Thanks for sending your information!")
    var db = firebase.firestore();

    db.collection("wedding_rsvp").add({
        name: data["name"],
        email: data["email"],
        message: data["message"],
        attendees: data["attendees"]
    })
    .then(function(docRef) {
        console.log("Message sent, ID: ", docRef.id);
        location.reload();
    })
    .catch(function(error) {
        console.error("Message could not be sent: ", error);
    });
}

var contact_submit = function(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var msg = document.getElementById("message");
    var attendees = document.getElementById("quantity")

    var data = {
    "name": name.value,
    "email": email.value,
    "msg": msg.value,
    "attendees": attendees.value
    }
    push_to_firebase(data);

}

document.getElementById("submit_msg").addEventListener("click", contact_submit);
