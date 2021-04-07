function check() {
    const MAILFORMAT = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // apparently saw this which helps check validity of email string
    let correctEmail = document.getElementById("subscribe-email"); 
    let hiddenTextField = document.getElementById("hiddenText");
    if(!correctEmail.checkValidity(MAILFORMAT))
      {
        correctEmail.style.borderColor = "red";
        showText(hiddenTextField);
        //newTextInput();
      } else {
        correctEmail.style.borderColor = "hsla(228, 100%, 68.75%, 0.42)";
        hideText(hiddenTextField);
        alert("Thank you, we'll be in touch.");
      }
};

function showText(x) {
  return x.style.display = "block";
};

function hideText(x){
  return x.style.display = "none";
};

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