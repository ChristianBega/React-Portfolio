import emailjs from "@emailjs/browser";

// const templateParams = {
//   name: "James",
//   notes: "Check this out!",
// };

const EmailService = {
  sendEmail: (data) => {
    const templateParams = data;
    emailjs.send("service_d2w064r", "template_3e5iomoaa", templateParams, "LmH7tmTvsYMh0BN9n").then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );
  },
};

export default EmailService;
