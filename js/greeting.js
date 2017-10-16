(function(){
/* 
  everything is contained inside a function expression that's
  immediately invoked when the script loads in the page.
  This keep your variables away from the global namespace
*/
  
  /*
    declare all the variables using 'let'. These get a reference
    to the HTML elements we want by finding their ID
  */
  let myName = document.getElementById("my-name"); 
  let userName = document.getElementById("user-name"); 
  let getName = document.getElementById("get-name");
  let myHeader = document.getElementById("my-header");
  
  // changes the text of the elements and adds a class
  function PerformGreeting() {
    myName.innerHTML = userName.value;
    myHeader.innerHTML = userName.value;
    myHeader.classList.add("change-me");
    return false;
  }

  // 'listens' for the user to submit the form
  if (typeof event === "undefined") {
    getName.onsubmit = PerformGreeting; //Firefox
  } else {
    getName.addEventListener("submit", PerformGreeting);
    event.preventDefault();
  }

}());
