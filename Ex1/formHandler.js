function handleSubmit(event) {
  event.preventDefault(); //submitting and reloading page

  // Get form values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const dob = document.getElementById("dob").value;
  const referral = document.querySelector(
    'input[name="referral"]:checked'
  ).value;
  const offers = document.getElementById("offers").checked ? "Yes" : "No";
  const contactMethod = document.getElementById("contactMethod").value;

  // Display the results
  document.getElementById("resultFirstName").textContent = firstName;
  document.getElementById("resultLastName").textContent = lastName;
  document.getElementById("resultEmail").textContent = email;
  document.getElementById("resultDob").textContent = dob;
  document.getElementById("resultReferral").textContent = referral;
  document.getElementById("resultOffers").textContent = offers;
  document.getElementById("resultContactMethod").textContent = contactMethod;

  // Show the result 
  document.getElementById("result").style.display = "block";
}
