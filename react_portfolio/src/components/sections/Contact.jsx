import React, { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [messageStatus, setMessageStatus] = useState("");

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzY_kgmrP4TppQcZS1a1KphkRvbySSkbtlIprhvjC3QTz5vNrsJB_OTiR6kDOfQe2IQ/exec";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formDataObj = new FormData(form);

    fetch(scriptURL, {
      method: "POST",
      body: formDataObj,
    })
      .then(() => {
        setMessageStatus("Message sent successfully!");
        setTimeout(() => setMessageStatus(""), 2000);
        setFormData({ name: "", email: "", number: "", message: "" });
        form.reset();
      })
      .catch((error) => {
        setMessageStatus("Error! Please try again later.");
        console.error("Error!", error.message);
      });
  };

  const socialLinks = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      url: "mailto:anitbaranwal2018@gmail.com",
      color: "hover:text-red-400",
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: "GitHub",
      url: "https://github.com/AnitBr17",
      color: "hover:text-gray-400",
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/anit-baranwal/",
      color: "hover:text-blue-500",
    },
    {
      icon: <SiLeetcode className="text-2xl" />,
      label: "LeetCode",
      url: "https://leetcode.com/u/anitbaranwal2018/",
      color: "hover:text-orange-400",
    },
    {
      icon: <FaPhoneAlt className="text-2xl" />,
      label: "9621625386",
      url: "tel:+919621625386",
      color: "hover:text-indigo-400",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        <RevealOnScroll>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Feel free to reach out through any of these platforms. I'm always
              open to discussing new projects, creative ideas or opportunities
              to be part of your vision.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${social.color} hover:bg-white/5 hover:scale-105`}
                >
                  {social.icon}
                  <span className="text-white">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              Send Me a Message
            </h2>
            <form
              className="space-y-6"
              onSubmit={handleSubmit}
              name="submit-to-google-sheet"
            >
              <div>
                <input
                  type="text"
                  name="Name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <input
                  type="email"
                  name="Email"
                  required
                  placeholder="Your Email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <input
                  type="number"
                  name="Number"
                  required
                  placeholder="Your Number"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  value={formData.number}
                  onChange={(e) =>
                    setFormData({ ...formData, number: e.target.value })
                  }
                />
              </div>
              <div>
                <textarea
                  name="Message"
                  required
                  rows={5}
                  placeholder="Your Message"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>

            {messageStatus && (
              <p className="text-center mt-4 text-sm text-green-400">
                {messageStatus}
              </p>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Contact;
