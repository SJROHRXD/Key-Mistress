
const message = "Overwriting last-generated password...";
const duration = 2000; // 2 seconds

function showMessage(message, duration) {
    // Create the pretend toast 🍞
    const messageBox = document.createElement("div");

    // Add message to toast 🍞
    messageBox.textContent = message;

    // Style the toast 🍞✨
    // Update later when we add framework
    messageBox.style.position = "fixed";
    messageBox.style.bottom = "10px";
    messageBox.style.right = "10px";
    messageBox.style.padding = "10px";
    messageBox.style.color = "white";

    // Show toast in body 🍞
    document.body.appendChild(messageBox);

    // Remove toast after 2 seconds 👋🏼🍞 bye bye toast
    setTimeout(function () {
        document.body.removeChild(messageBox);
    }, duration);
}
