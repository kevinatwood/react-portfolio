import React from 'react';

function Contact(props) {
    return (
<div class="container mt-4">
    <form>
      <h1>Contact</h1>
      <div class="form-group mb-3">
        <label for="contact-name">Name:</label>
        <input type="text" class="form-control" id="contact-name"></input>
      </div>
      <div class="form-group mb-3">
        <label for="contact-email">Email address</label>
        <input type="email" class="form-control" id="contact-email" placeholder="name@example.com"></input>
      </div>
      <div class="form-group mb-3">
        <label for="contact-message">Message</label>
        <textarea class="form-control" id="contact-message" rows="3"></textarea>
      </div>
      <div class = "d-flex justify-content-center">
      <button type="submit" class="btn btn-dark m-3">Send Email</button>
      </div>
    </form>
  </div>
    );
}

export default Contact;