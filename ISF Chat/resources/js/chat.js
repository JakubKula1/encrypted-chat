// Add title to the chatModal with recipient's name and status
chatModal.addEventListener('show.bs.modal', event => {
  const button = event.relatedTarget;
  chatButtonEvent = event.relatedTarget;
  const recipient = button.getAttribute('data-bs-username');
  const status = button.getAttribute('data-bs-status'); 
  senderId = button.getAttribute('data-bs-senderId');
  receiverId = button.getAttribute('data-bs-receiverId');
  const modalTitle = chatModal.querySelector('.modal-title');
  modalTitle.innerHTML = "Chat with ";
  
  var dot = "";
  if(status == 1){
    dot = "<i style='font-size:10px;' id='receiver-dot' class='fas fa-circle align-middle text-success'></i>";
  }
  else{
    dot = "<i style='font-size:10px;' id='receiver-dot' class='fas fa-circle align-middle text-secondary'></i>";
  }

  var recipientBold = "<span class='fw-bold'>" + capitalizeFirstLetter(recipient) +"</span>";
  modalTitle.innerHTML += `${recipientBold+"  "+dot}`;
  
})

// Trigger the sendClicked when the enterKey is pressed and the message input is not empty
document.addEventListener("keyup", function(event) {
  var messageText = document.getElementById('message-text').value;
  if (event.keyCode === 13 && messageText.length > 0 && messageText.trim().length !== 0) {
      sendClicked();
  }
});

function sendClicked(){
  ajaxInsertMessage();

  document.getElementById('message-text').value = '';
  messageTextChanged();
  document.getElementById("message-text").focus();

  var elem = document.getElementById('chat-box');
  elem.scrollTop = elem.scrollHeight;

  document.getElementById('message-text').style.height = '';
  document.getElementById('message-text').style.height = document.getElementById('message-text').scrollHeight + 'px'
}

// Handles changes in the message input field and updates the send button state accordingly. Triggered by sendClicked()
function messageTextChanged(){
  var messageText = document.getElementById('message-text').value;
  document.querySelector("#message-text").style.fontWeight = "400";
  if(messageText.length == 0 || messageText.trim().length === 0){
    document.getElementById('send-button').disabled = true;
  }
  else{
    document.getElementById('send-button').disabled = false;
  }
}
