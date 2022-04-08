

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
  roomname=localStorage.getItem("roomname");
  username=localStorage.getItem("username");

  function send()
    {
             msg=document.getElementById("msg").value;
             
             firebase.database().ref(roomname).push({
                   name:username,
                   message:msg,
                   like:0
             });

             document.getElementById("msg").value="";
             
            }

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
           firebase_message_id = childKey;
           message_data = childData;
  //Start code
           console.log(firebase_message_id);
             console.log(message_data);
             name = message_data['name'];
             message = message_data['message'];
           like = message_data['like'];
           name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
           message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
  like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
           span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
  
          row =  name_with_tag+message_with_tag+like_button+span_with_tag;

          document.getElementById("output").innerHTML+=row;

        } });  }); }
  getData();
  
  function updateLike(message_id)
  {
    console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) +1    ;
      console.log(updated_likes);
  
      firebase.database().ref(roomname).child(message_id).update({
          like : updated_likes  
       });
  
  }
  
  function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
      
  window.location.replace(index.html);
  }            
            