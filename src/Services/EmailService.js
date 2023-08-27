import emailjs from "@emailjs/browser";

const EmailService = {
  sendEmail: (data) => {
    const templateParams = data;
    emailjs.send("service_d2w064r", "template_3e5iomoaa", templateParams, "LmH7tmTvsYMh0BN9n").then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        // return EmailService.checkSuccess(response.status);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );
  },
};

export default EmailService;
