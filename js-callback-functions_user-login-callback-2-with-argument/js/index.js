console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Tom");
}

// The exercise starts here!

function showWelcomeMessage(userName) {
  console.log(`Welcome ${userName}! You are logged in now.`)
};

handleUserLogin(showWelcomeMessage);

handleUserLogin(function(userName) {
  console.log(`Welcome ${userName}! You are logged in now.`)
})