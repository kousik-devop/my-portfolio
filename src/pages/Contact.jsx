import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message sent successfully");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send");
      }
    } catch (error) {
      setStatus("Error: " + error.message);
    }
  };

  return (
    <div className="flex justify-center px-4 sm:px-8 lg:px-0 py-16">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-2">
          Love to hear from you,
        </h1>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-8">
          Get in touch 👋
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-1 text-sm font-medium">
                Your name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 text-sm font-medium">
                Your email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 mb-1 text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Let us know your project..."
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#F97316] hover:bg-[#ff6a00] text-white py-3 rounded-md text-lg font-semibold  transition"
          >
            Just Send →
          </button>
        </form>

        {status && (
          <p className="mt-4 text-center text-gray-600 text-sm">{status}</p>
        )}
      </div>
    </div>
  );
}
