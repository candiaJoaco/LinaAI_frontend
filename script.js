let chatCount = 0;

function sendMessage() {
    const userInput = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");
    let message = userInput.value.trim();
    if (message === "") return;
    
    let userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.innerHTML = message + '<span class="message-icon">👤</span>';
    chatBox.appendChild(userMessage);
    
    setTimeout(() => {
        let botMessage = document.createElement("div");
        botMessage.classList.add("message", "bot-message");
        botMessage.innerHTML = '<span class="message-icon">🤖</span>' + " Respuesta de la IA a: " + message;
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
    
    userInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
function logout() {
    alert("Sesión cerrada");
}

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const chatContainer = document.getElementById("chatContainer");
    const toggleButton = document.getElementById("toggleButton");
    
    sidebar.classList.toggle("hidden");
    toggleButton.classList.toggle("hidden");
    bar.classList.toggle("hidden");
    logout_button.classList.toggle("hidden");
    chatBox.classList.toggle("hidden");
    inputcont.classList.toggle("hidden");
    chatContainer.classList.toggle("full-width");
    
    toggleButton.innerHTML = sidebar.classList.contains("hidden") ? "◀" : "▶";
}

function addChatHistory() {
    chatCount++;
    const historyContainer = document.getElementById("historyContainer");
    let chatButton = document.createElement("button");
    chatButton.classList.add("chat-history-button");
    chatButton.textContent = "Chat " + chatCount;
    chatButton.onclick = function() { alert("Abriendo " + this.textContent); };
    historyContainer.appendChild(chatButton);
}