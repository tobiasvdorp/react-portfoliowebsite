const message = document.querySelector(".message");
const messageParent = message.parentNode;

function Sluiten() {
  // Add class to hide the message
  message.classList.add("hide");
  // Remove the message after the transition is done
  message.addEventListener("transitionend", function () {
    messageParent.removeChild(message);
  });
}
