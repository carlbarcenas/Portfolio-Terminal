console.log("Communicating with page");

// Command Line Environment Selectors
const cli = document.querySelector('#input');
const response_section = document.querySelector('#response');

// Initializing:
// TODO - INITIALIZING... ANIMATION TYPING EFFECT
const init_message = document.createElement('div');
init_message.textContent = "Initializing";
response_section.appendChild(init_message);

// Welcome message
const welcome_message = document.createElement('div');
welcome_message.textContent = "Welcome to CarlOS";
response_section.appendChild(welcome_message);

// TODO: Autotype 'help' command for first command on load


// Listen and Respond
// Helper Function to print commands
function printCommands(textArr) {
    for (let i = 0; i < textArr.length; i++) {
        let newline = document.createElement('p');
        newline.classList.add('line');
        newline.innerHTML = textArr[i];
        document.getElementById('response').appendChild(newline);
    }
}

// Function to clear page
function clear(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Switch Case function for commands
function displayResponse(cmd) {
    let cmdText = document.createElement('span');
    cmdText.innerHTML = cmd + "<br />";
    let name1 = document.createElement('span');
    name1.innerHTML = "guest";
    name1.style.color = "rgb(215, 153, 33)";
    let name2 = document.createElement('span');
    name2.innerHTML = " @ ";
    name2.style.color = "rgb(168, 153, 132)";
    let name3 = document.createElement('span');
    name3.innerHTML = "www.cbarcenas.com";
    name3.style.color = "rgb(152, 151, 26)";
    let name4 = document.createElement('span');
    name4.innerHTML = " :$ ~ ";
    name4.style.color = "rgb(168, 153, 132)";
    document.getElementById('response').appendChild(name1);
    document.getElementById('response').appendChild(name2);
    document.getElementById('response').appendChild(name3);
    document.getElementById('response').appendChild(name4);
    document.getElementById('response').appendChild(cmdText);

    switch (cmd.toLowerCase()) {
        case 'help':
            printCommands(help);
            break;
        case 'about':
            printCommands(about);
            break;
        case 'resume':
            break;
        case 'projects':
            break;
        case 'linkedin':
            printCommands(linkedin);
            break;
        case 'github':
            printCommands(github);
            break;
        case 'contact':
            printCommands(contact);
            break;
        case 'clear':
            clear(document.querySelector('#response'));
            break;
        default:
            let errorp = document.createElement('p');
            errorp.classList.add('line');
            errorp.innerHTML = "'" + cmd + "' is not recognized as a command. Type 'help' for a list of valid commands.";
            document.getElementById('response').appendChild(errorp);
            break;
    }
}

// Main Input Event Listener
cli.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        displayResponse(cli.value);
        cli.value = ""; // Reset input
    }
})