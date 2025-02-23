
//document refers to the entire HTML doc
//DOMContentLoaded is a built-in event that fires when the HTML document has been completely loaded and parsed
//function is the callback function that runs once the document is ready
document.addEventListener("DOMContentLoaded", function () {

	//initialize EmailJS
	emailjs.init("M-SQkbLTJ2-icaQoI");
	document.getElementById("contact-form").addEventListener("submit", function(event) {
		event.preventDefault();

		const formData = {
			name: document.getElementById("name").value,
			email: document.getElementById("email").value,
			date: document.getElementById("date").value,
			message: document.getElementById("message").value
		};

		emailjs.send("service_mv36gkm", "template_bsaumx2", formData)
			.then(function(response) {
				console.log("SUCCESS!", response.status, response.text);
    			document.getElementById("response-message").textContent = "Appointment request sent!";
    			document.getElementById("response-message").style.color = "green";

			}, function(error) {

				console.log("FAILED...", error);
                document.getElementById("response-message").textContent = "Error sending appointment request.";
                document.getElementById("response-message").style.color = "red";

			});

			//rest the form
			document.getElementById("contact-form").reset();
	});

});