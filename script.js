console.log("Communicating with page");

// Command Line Environment Selectors
const cli = document.querySelector('#input');
const response = document.querySelector('.response');

// Initializing:
// TODO - INITIALIZING... ANIMATION TYPING EFFECT
const init_message = document.createElement('div');
init_message.textContent = "Initializing";
response.appendChild(init_message);

// Welcome message
const welcome_message = document.createElement('div');
welcome_message.textContent = "Welcome to CarlOS";
response.appendChild(welcome_message);

// TODO: Autotype help command for first command on load


// Listen and Respond
cli.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        console.log(cli.value);
        cli.value = "";
    }
})