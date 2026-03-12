import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import NeuralCanvas from "../components/NeuralCanvas";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (
      import.meta.env.VITE_EMAIL_SERVICE_ID &&
      import.meta.env.VITE_EMAIL_TEMPLATE_ID &&
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    ) {
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_EMAIL_TEMPLATE_ID,
          formData, // send the React state object directly
          import.meta.env.VITE_EMAIL_PUBLIC_KEY,
        );

        toast.success("Message sent successfully 🚀");

        // Reset form
        setFormData({
          user_name: "",
          user_email: "",
          message: "",
        });

        // Also reset actual form fields
        if (form.current) form.current.reset();
      } catch (error) {
        console.error(error);
        toast.error("Failed to send message ❌");
      }
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="pt-20 px-6 bg-base-100 font-['Inter']">
      <div className="max-w-6xl mx-auto">
        {/* TITLE */}
        <div className="text-center mb-8 relative group">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase font-['Inter']  flex items-center justify-center gap-3">
            <span className="text-base-content">Get In</span>
            <span className=" text-blue-600">Touch</span>
          </h2>

          {/* Styled Industrial Underline */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-1.5 h-1.5 bg-blue-600 rotate-45"></div>
            <div className="w-16 h-[2px] bg-blue-600 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-blue-600 rotate-45"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-8 p-8 bg-base-100/40 backdrop-blur-md border border-base-content/10 rounded-xl shadow-xl"
            >
              {/* NAME */}
              <div className="space-y-2">
                <label className="text-xs tracking-widest uppercase text-primary font-semibold">
                  Identity.Full_Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="ENTER YOUR NAME"
                  className="w-full bg-base-200/60 border border-base-content/10 px-5 py-4 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/40 outline-none transition-all text-sm"
                  required
                  value={formData.user_name}
                  onChange={(e) =>
                    setFormData({ ...formData, user_name: e.target.value })
                  }
                />
              </div>

              {/* EMAIL */}
              <div className="space-y-2">
                <label className="text-xs tracking-widest uppercase text-primary font-semibold">
                  Contact.Email_Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="ENTER YOUR EMAIL"
                  className="w-full bg-base-200/60 border border-base-content/10 px-5 py-4 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/40 outline-none transition-all text-sm"
                  required
                  value={formData.user_email}
                  onChange={(e) =>
                    setFormData({ ...formData, user_email: e.target.value })
                  }
                />
              </div>

              {/* MESSAGE */}
              <div className="space-y-2">
                <label className="text-xs tracking-widest uppercase text-primary font-semibold">
                  Data.Inquiry_Payload
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="WRITE YOUR MESSAGE..."
                  className="w-full bg-base-200/60 border border-base-content/10 px-5 py-4 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/40 outline-none transition-all text-sm resize-none"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full py-4 bg-primary hover:bg-primary/90 text-primary-content font-semibold rounded-lg transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:shadow-primary/40 disabled:opacity-50"
              >
                {isSubmitting ? "TRANSMITTING..." : "SUBMIT INQUIRY"}
                <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                <span className="absolute inset-0 rounded-lg bg-primary opacity-0 group-hover:opacity-10 blur-xl transition-all"></span>
              </button>
            </form>
          </motion.div>

          {/* RIGHT SIDE */}
          <NeuralCanvas />
        </div>
      </div>
    </section>
  );
};

export default Contact;
