

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
var frequency = 0;
var firstTrainTime =0


$("#add-user").on("click", function(event) {

    event.preventDefault();


    // Grabbed values from text boxes
    name = $("#inputName").val().trim();
    destination = $("#inputDestination").val().trim();
    frequency = $("#inputFrequency").val().trim();
    firstTrainTime = moment(
      $("#inputTime")
        .val()
        .trim(),
      "HH:mm"
    ).format("X");

    // Code for handling the push
    database.ref().push({
      name: name,
      destination: destination,
      frequency: frequency,
      firstTrainTime : firstTrainTime,
      date_added: firebase.database.ServerValue.TIMESTAMP
    });
  });

  database.ref().on("child_added", function(snapshot) {
    // Log everything that's coming out of snapshot


    // Change the HTML to reflect
    var start = moment.unix(snapshot.val().firstTrainTime).format('HH:mm')


    var first = $('<tr scope="row">');
    $(first).append('<td>' + snapshot.val().name + '</td>')
    $(first).append('<td>' + snapshot.val().destination + '</td>')
    $(first).append('<td>' + snapshot.val().frequency + '</td>')
    $(first).append('<td>' + start + '</td>')
    $('#results').append(first);

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });


