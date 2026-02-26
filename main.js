document.addEventListener("submit", function(e){
  if(e.target.tagName === "FORM"){
    e.preventDefault();
    alert("Thank you for contacting Premium RDP. Our team will respond shortly.");
  }
});
