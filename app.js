const chatApi = new OpenAI.Chat("YOUR_ASSISTANT_ID", "YOUR_API_KEY");

const chatWindow = document.querySelector(".chat-window");
const chatMessages = document.querySelector(".chat-messages");
const messageInput = document.querySelector(".message-input");
const sendButton = document.querySelector(".send-button");

sendButton.addEventListener("click", () => {
  const message = messageInput.value;
  messageInput.value = "";
  addMessageToChat(message, "sent");
  chatApi.send(message).then(response => {
    addMessageToChat(response.message, "received");
  });
});

function addMessageToChat(message, type) {
  const chatMessage = document.createElement("div");
  chatMessage.textContent = message;
  chatMessage.classList.add("chat-message", type);
  chatMessages.appendChild(chatMessage);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
