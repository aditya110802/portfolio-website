let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

function SendMail(e){
    e.preventDefault(); // Prevent form submission

    console.log("SendMail function called");

    var params = {
       from_name: document.getElementById("name").value,
       email_id: document.getElementById("email").value,
       phone_no: document.getElementById("phone").value,
       subject_emailjs: document.getElementById("subject").value,
       message: document.getElementById("message").value
    }

    console.log("Params: ", params);

    emailjs.send("service_13z4gxe", "template_7brabsm", params)
    .then(function(res) {
       alert("Success! " + res.status);
    })
    .catch(function(error) {
       console.error("Failed to send email: ", error);
       alert("Failed to send message. Please try again later.");
    });
}


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


document.getElementById('hire-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    var copyText = document.getElementById('email-copy');
    copyText.select();
    document.execCommand('copy');
    alert('Email address copied! You can now send me a message. Looking forward to hearing from you!');
});

(function(){
    emailjs.init({
    publicKey: "ubX1QxKZMvYClXi_Q",
        });
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // These are the variables that will be sent in the email
    const formData = {
        from_name: this.name.value,
        email_id: this.email.value,
        phone_no: this.phone.value,
        subject_emailjs: this.subject.value,
        message_emailjs: this.message.value
    };

    // Send the email using EmailJS
    emailjs.send('service_13z4gxe', 'template_7brabsm', formData)
    .then(function(response) {
        alert('Message sent successfully!');
    }, function(error) {
        alert('Failed to send the message. Please try again later.');
    });
});
