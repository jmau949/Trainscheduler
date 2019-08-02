

// Initialize Firebase
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDaC79DeVVcdUehwsL3ZazIK8oqO2hCRmA",
    authDomain: "click-btn-activity-23f3d.firebaseapp.com",
    databaseURL: "https://click-btn-activity-23f3d.firebaseio.com",
    projectId: "click-btn-activity-23f3d",
    storageBucket: "",
    messagingSenderId: "477449520020",
    appId: "1:477449520020:web:a4131c8f1c2a86f8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create a variable to reference the database.
var database = firebase.database();

// Initial Values
var name = "";
var destination = "";
var frequency;


$("#add-user").on("click", function(event) {
    console.log
    event.preventDefault();
    console.log('clicking')

    // Grabbed values from text boxes
    name = $("#inputName").val().trim();
    destination = $("#inputDestination").val().trim();
    frequency = $("#inputFrequency").val().trim();

    // Code for handling the push
    database.ref().push({
      name: name,
      destination: destination,
      frequency: frequency,
    });
  });

  database.ref().on("child_added", function(snapshot) {
    // Log everything that's coming out of snapshot
    console.log(snapshot.val().name);
    console.log(snapshot.val().destination);

    // Change the HTML to reflect

    var first = $('<tr scope="row">');
    $(first).append('<td>' + snapshot.val().name + '</td>')
    $(first).append('<td>' + snapshot.val().destination + '</td>')
    $(first).append('<td>' + snapshot.val().frequency + '</td>')
    $('#results').append(first);

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });


