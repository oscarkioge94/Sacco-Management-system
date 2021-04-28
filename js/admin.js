firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log(user.uid);
    } else {
        window.location.href = "/login.html";
      // No user is signed in.
    }
  });