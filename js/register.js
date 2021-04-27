document.getElementById('signUp').onclick = ()=>{
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;
    var role = document.getElementById('role').value;
    

    // signup logic
    if(password1 ==  password2){
      firebase.auth().createUserWithEmailAndPassword(email, password1)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;

    firebase.firestore().collection("users").add({
      Name: name,
      Email: email,
      Password: password1,
      UserId: user.uid,
      Role: role
  })
      .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      })
      .then(()=>{
        window.location.href="../index.html";
      })
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
    }

   

}