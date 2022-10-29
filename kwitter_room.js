// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBssA1m9EDj0iu4B_CrYYJTrmxNR-DaxUU",
  authDomain: "kwitter-webapp-project-4d49f.firebaseapp.com",
  databaseURL: "https://kwitter-webapp-project-4d49f-default-rtdb.firebaseio.com",
  projectId: "kwitter-webapp-project-4d49f",
  storageBucket: "kwitter-webapp-project-4d49f.appspot.com",
  messagingSenderId: "996863824152",
  appId: "1:996863824152:web:72fd529f27182d33720e6d"
};

  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Welcome " + user_name + "!";

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    console.log(room_name);
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding user"
    });
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    room_names = childKey;
   //Start code
   console.log("Room Name:" + room_names);
   row = "<div class='room_name' id="+room_names+" onclick='redirectToRoomName(this.id)'>#"+room_name+"</div><hr>";
   document.getElementById("output").innerHTML+= row;
   //End code
   });});}
getData();

function redirectToRoomName (name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  windowl.location = "index.html";
}