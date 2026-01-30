"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    concern: "",
  });

  const [toast, setToast] = useState<null | "success" | "error">(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_obbqdvf", // EmailJS service ID
        "template_k6x0b7g", // EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          concern: formData.concern,
        },
        "Jkr6JdoCrHYeiNbqg", // EmailJS public key
      )
      .then(
        () => {
          setToast("success");
          setFormData({
            name: "",
            email: "",
            company: "",
            concern: "",
          });
          setTimeout(() => setToast(null), 4000);
        },
        () => {
          setToast("error");
          setTimeout(() => setToast(null), 4000);
        },
      );
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* LEFT / VISUAL SIDE */}
      <div className="md:w-1/2 bg-black text-white p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/id/370/800/1200')] bg-cover bg-center opacity-30" />

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Let's Talk.
            <br />
            <span className="text-xl md:text-2xl font-normal">
              Great partnerships begin with understanding.
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Just a thoughtful conversation about where you want to go next.
          </p>

          <div className="space-y-4">
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center mr-4 text-xs font-bold">
                E
              </span>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=grow@all4ps.co&su=Business%20Enquiry"
                target="_blank"
                rel="noopener noreferrer"
              >
                grow@all4ps.co
              </a>
            </div>

            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center mr-4 text-xs font-bold">
                A
              </span>
              Bangalore, Karnataka
            </div>
          </div>

          <div className="mt-12 p-6 bg-gray-900 border-l-4 border-brand-purple">
            <p className="italic">
              "We usually respond within 24 hours. Sometimes faster (we get
              excited)."
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT / FORM SIDE */}
      <div className="md:w-1/2 bg-white p-12 lg:p-24 flex flex-col justify-center">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-lg mx-auto w-full"
        >
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
              Your Name
            </label>
            <input
              name="name"
              value={formData.name}
              required
              placeholder="John Doe"
              onChange={handleChange}
              className="w-full p-4 bg-gray-50 border border-gray-300 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
              Work Email
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              required
              placeholder="john@company.com"
              onChange={handleChange}
              className="w-full p-4 bg-gray-50 border border-gray-300 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
              Company
            </label>
            <input
              name="company"
              value={formData.company}
              placeholder="Acme Corp"
              onChange={handleChange}
              className="w-full p-4 bg-gray-50 border border-gray-300 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
              Your growth context
            </label>
            <textarea
              name="concern"
              rows={4}
              value={formData.concern}
              placeholder="Tell us what needs fixing..."
              onChange={handleChange}
              className="w-full p-4 bg-gray-50 border border-gray-300 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-brand-purple text-white font-bold py-4 hover:bg-black transition-colors shadow-lg"
          >
            Let's talk growth
          </button>
        </form>
      </div>

      {/* TOAST MODAL */}
      {toast && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl p-8 w-[90%] max-w-md text-center shadow-2xl">
            <h3
              className={`text-2xl font-bold mb-4 ${
                toast === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {toast === "success" ? "Message Sent" : "Oops"}
            </h3>

            <p className="text-gray-600 mb-6">
              {toast === "success"
                ? "Thanks for reaching out. We’ll get back to you shortly."
                : "Something went wrong. Please try again."}
            </p>

            <button
              onClick={() => setToast(null)}
              className="px-6 py-3 bg-[#800080] text-white font-bold hover:bg-black transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
