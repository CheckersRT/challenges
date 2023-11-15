console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Tom", "Superhero");
}

// The exercise starts here!


function showWelcomeMessage(userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`)
}

handleUserLogin(showWelcomeMessage);

handleUserLogin(function(userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`)
} )