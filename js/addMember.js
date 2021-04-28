firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      console.log(uid);

      var Btn = document.getElementById('addMember').onclick = ()=>{
        var name = document.getElementById('name').value;
        var id = document.getElementById('Id').value;
        var phoneNumber = document.getElementById('phoneNumber').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
    
        // adding this info to firebase
    
        firebase.firestore().collection("members").add({
            Name: name,
            Id: id,
            PhoneNumber: phoneNumber,
            Password: password,
            UserId: user.uid
            
        })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            })
        
    }
      // ...
    } else {
        window.location.href = "/login.html";
      // User is signed out
      // ...
    }
  });


