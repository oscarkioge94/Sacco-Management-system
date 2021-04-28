document.getElementById('login').onclick = () => {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    })
  //   .then(()=>{
  //       console.log('logging in')
  //       window.location.href = "/index.html"
  //   })
}