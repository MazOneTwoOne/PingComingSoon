function check() {
    const MAILFORMAT = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // apparently saw this which helps check validity of email string
    if(!document.getElementById("subscribe-email").checkValidity(MAILFORMAT))
      {
        document.getElementById("subscribe-email").style.borderColor = "red";
        showText();
        //newTextInput();
      } else {
        alert("Thank you, we'll be in touch.");
      }
};

function showText() {
  var x = document.getElementById("hiddenText");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}


// This was used to create a new paragraph
/*
function newTextInput() {
    var para = document.createElement("p");  // 'para' var assigns the styling of item 
    var node = document.createTextNode("Please provide a valid email address");

    para.appendChild(node);

    var element = document.getElementById("newText");
    element.appendChild(para);
    para.style.marginLeft = "20px";
    para.style.fontSize = "8px";
    para.style.fontStyle = "italic";
    para.style.color = "red";
};
*/