let myButton = document.getElementById("button"),
  myInput = document.getElementById("password");

// myButton.onclick = function () {
//   "use strict";
//   if (this.textContent == "Show password") {
//     myInput.setAttribute("type", "text");
//     this.textContent = "Hide password";
//     console.log(this);
//   } else {
//     myInput.setAttribute("type", "password");
//     this.textContent = "Show password";
//   }
// };
myButton.onclick = function () {
  "use strict";
  if (this.classList.contains("button")) {
    myInput.setAttribute("type", "text");
    this.classList.remove("button");
    this.textContent = "Hide password";
  } else {
    this.classList.add("button");
    myInput.setAttribute("type", "password");
    this.textContent = "Show password";
  }
};
