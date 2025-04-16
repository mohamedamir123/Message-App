//get elements into variables
var messageInput = document.getElementById("message");
var button = document.getElementById("send");
var msgele = document.getElementById("msg");

//events 

button.onclick = function(){
    //get the value of the input field

    var messagevalue = messageInput.value;

    //check if the input field is empty
    if(messagevalue != ""){
        //insert input value into the message element
        msgele.innerHTML = messagevalue

        //clear the input field
        messageInput.value = ""
    }
    else{
        //show an alert if the input field is empty
        alert("Please enter a message")
    }
}