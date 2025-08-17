import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'your_service_id',       // Replace with your EmailJS service ID
      'your_template_id',      // Replace with your EmailJS template ID
      form.current,
      'your_public_key'        // Replace with your EmailJS public key
    )
    .then((result) => {
      console.log(result.text);
      setSuccess(true);
      form.current.reset();
    }, (error) => {
      console.log(error.text);
      setSuccess(false);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900 px-4">
      <form ref={form} onSubmit={sendEmail} className="bg-zinc-800 p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Contact Me</h2>

        <input type="text" name="user_name" placeholder="Your Name" required
          className="w-full p-3 border rounded-md mb-4" />

        <input type="email" name="user_email" placeholder="Your Email" required
          className="w-full p-3 border rounded-md mb-4" />

        <textarea name="message" rows="6" placeholder="Your Message" required
          className="w-full p-3 border rounded-md mb-4"></textarea>

        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700">
          Send Message
        </button>

        {success && (
          <p className="mt-4 text-green-500 text-center">Your message has been sent!</p>
        )}
      </form>
    </div>
  );
}

export default Contact;
