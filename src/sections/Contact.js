import { motion } from "framer-motion";
import { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa"; // Importing react-icons

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "79e7c7d7-eca1-443f-8b3a-8915dd5c0008");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent ✅");
      setName("");
      setEmail("");
      setMessage("");
      event.target.reset();
      
      // Clear "Message Sent" after 2 seconds
      setTimeout(() => {
        setResult(""); // Clear result after 2 seconds
      }, 2000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-[#0f172a]  text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-14">Let's Connect</h2>

      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <form
          onSubmit={onSubmit}
          className="bg-white p-8 rounded-xl shadow-2xl space-y-8"
        >
          {/* Name Input */}
          <div className="flex items-center space-x-4 mb-6 ">
            <FaUser className="text-blue-500" />
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              placeholder="Your Name"
            />
          </div>

          {/* Email Input */}
          <div className="flex items-center space-x-4 mb-6">
            <FaEnvelope className="text-blue-500" />
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              placeholder="Your Email"
            />
          </div>

          {/* Message Input */}
          <div className="flex items-center space-x-4 mb-6">
            <FaCommentDots className="text-blue-500" />
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="5"
              className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              placeholder="Your Message"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full py-3 bg-[#15203a] text-white rounded-lg font-semibold shadow-md hover:bg-[#1f366b] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
          >
            Send Message
          </motion.button>
        </form>

        {/* Result Message */}
        {result && (
          <div className="mt-4 text-center text-white text-xl">
            {result}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default ContactSection;
