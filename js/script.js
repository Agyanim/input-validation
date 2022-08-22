let fName = document.querySelector("#fname");
let lName = document.getElementById("lname");
let email = document.querySelector("#email");
let submitBtn = document.querySelector("#submitBtn");
let alert_1 = document.querySelector("#alert-1");
let alert_2 = document.querySelector("#alert-2");
let alert_3 = document.querySelector("#alert-3");

const removeWarning = (name, error) => {
  name.classList.add("remove-warning");
  name.classList.remove("warning");
  error.innerHTML = "";
};
const addWarning = (name) => {
  name.style.marginBottom = "0px";
  name.classList.add("warning");
  name.classList.remove("remove-warning");
};

const formValidate = () => {
  if (fName.value === "" || fName.value === null) {
    alert_1.innerHTML = "First Name cannot be empty";
    addWarning(fName);
    return false;
  } else removeWarning(fName, alert_1);

  if (lName.value === "" || lName === null) {
    alert_2.innerHTML = "Last Name cannot be empty";
    addWarning(lName);
    return false;
  } else removeWarning(lName, alert_2);

  if (email.value === "" || email === null) {
    alert_3.innerHTML = "Email cannot be empty";
    addWarning(email);
    return false;
  } else removeWarning(email, alert_3);

  window.open("about.html","");
};

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidate();
});

