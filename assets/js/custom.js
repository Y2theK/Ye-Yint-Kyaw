const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const formStatus = document.querySelector("#formStatus");
const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var templateParams = {
    from_name: name.value,
    from_email: email.value,
    message: message.value,
  };
  const successTextNode = document.createTextNode(
    "Yay! Email Sent Successfully..."
  );
  const failTextNode = document.createTextNode(
    "Email Sending failed. Try again..."
  );
  const para = document.createElement("p");
  // console.log(name.value, email.value, message.value, templateParams);
  emailjs
    .send("service_sadzryi", "template_y2k_contactform", templateParams)
    .then(
      function (response) {
        para.classList.add("successColor");
        para.appendChild(successTextNode);
        formStatus.appendChild(para);
        // console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        para.appendChild(failTextNode);
        formStatus.appendChild(para);
        // console.log("FAILED...", error);
      }
    );
});
