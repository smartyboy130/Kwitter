
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDm911zU82MdBE1ddBW7-DqmKxQGMs6pRQ",
      authDomain: "kwitter2-f56ad.firebaseapp.com",
      databaseURL: "https://kwitter2-f56ad-default-rtdb.firebaseio.com",
      projectId: "kwitter2-f56ad",
      storageBucket: "kwitter2-f56ad.appspot.com",
      messagingSenderId: "856116919913",
      appId: "1:856116919913:web:77bae060e7c28a730c2cf8"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("username");

    document.getElementById("username").innerHTML="Welcome " + username ;

    function addRoom()
    {
             roomname=document.getElementById("roomname").value;
             
             firebase.database().ref("/").child(roomname).update({
                   purpose : "adding room"
             });

             localStorage.setItem("roomname", roomname);

             window.location="3rdpage.html";
             

    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;       
      //Start code

      console.log("Room_names", Room_names);

      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";

          document.getElementById("output").innerHTML+=row;

 
      //End code
      });});}
getData();

function redirectToRoomName(name) 
{ 
      console.log(name); 
      localStorage.setItem("roomname", name);
 window.location = "3rdpage.html"; }


function logout()
{

    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
       window.location ="index.html";
}






























