let chatCount = 0;

function sendMessage() {
    const userInput = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");
    let message = userInput.value.trim();
    if (message === "") return;

    // Mensaje del usuario
    let userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.innerHTML = `
        <div class="user-info">
            <span class="message-user">Usuario</span><div class="user-icon"></div> 
        </div>
        ${message}
    `;
    chatBox.appendChild(userMessage);

    setTimeout(() => {
        // Mensaje del bot
        let botMessage = document.createElement("div");
        botMessage.classList.add("message", "bot-message");
        botMessage.innerHTML = `
            <div class="bot-info">
                <div class="bot-icon"></div> <span class="message-bot">LiraAI</span>
            </div>
            ${message}
        `;
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

document.addEventListener("DOMContentLoaded", function () {
    const chatContainer = document.getElementById("chatContainer");
    const menuItems = document.querySelectorAll(".bar a");

    function setActiveSection(section) {
        if (section === "chat") {
            chatContainer.classList.remove("hidden");
            chatContainer.classList.add("active");
        } else {
            chatContainer.classList.remove("active");
            chatContainer.classList.add("hidden");
        }
    }

    menuItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            const section = this.getAttribute("data-section");
            setActiveSection(section);
        });
    });

    // Establecer la sección por defecto (Chat)
    setActiveSection("chat");
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const menuItems = document.querySelectorAll(".bar a");

    function setActiveSection(sectionId) {
        sections.forEach(section => {
            section.style.display = section.id === sectionId ? "block" : "none";
        });
    }

    menuItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault(); 
            const sectionId = this.getAttribute("data-section");
            setActiveSection(sectionId);
        });
    });

    // Establecer la sección por defecto (Chat)
    setActiveSection("chat");
});
