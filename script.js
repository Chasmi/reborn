let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");

function showSlide(n) {
  if (n < 0) {
    currentSlide = slides.length - 1;
  } else if (n >= slides.length) {
    currentSlide = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[currentSlide].style.display = "block";
  currentSlide++;
}

function startCarousel() {
  setInterval(() => {
    showSlide(currentSlide);
  }, 5000); // Change slide every 5 seconds (adjust as needed)
}

showSlide(currentSlide);
startCarousel();

// JavaScript code

// JavaScript code

document.addEventListener("DOMContentLoaded", function () {
  const sendButton = document.getElementById("send-button");

  sendButton.addEventListener("click", function () {
    // Here, you can add your code for sending the message.
    // You can use AJAX or submit the form to a server.

    // Assuming the message was successfully sent (you should implement this logic)
    const messageSentSuccessfully = true;

    if (messageSentSuccessfully) {
      alert("Message Sent"); // Show a JavaScript alert
    } else {
      alert("Message Not Sent"); // Show an error alert if there was an issue
    }
  });
});

// JavaScript code

document.addEventListener("DOMContentLoaded", function () {
  const subscribeButton = document.getElementById("subscribe-button");

  subscribeButton.addEventListener("click", function () {
    // Here, you can add your code for subscribing the user.
    // You can make an API request or save the subscription in your database.

    // Assuming the subscription was added successfully (you should implement this logic)
    const subscriptionAdded = true;

    if (subscriptionAdded) {
      alert("Subscription Added"); // Show a JavaScript alert
    } else {
      alert("Subscription Not Added"); // Show an error alert if there was an issue
    }
  });
});

// // document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
// //   anchor.addEventListener("click", function (e) {
// //     e.preventDefault();

// //     const targetId = this.getAttribute("href").substring(1);
// //     const target = document.getElementById(targetId);

// //     if (target) {
// //       window.scrollTo({
// //         top: target.offsetTop,
// //         behavior: "smooth",
// //       });
// //     }
// //   });
// });
