"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.email || formData.message) {
      return toast.error("Please fill required field");
    }
    toast.success(
      "Contact form submitted successfully, out support teams contact you soon"
    );
  };
  return (
    <div className="col-12 col-lg-4 col-md-4">
      <div className="text-start">
        <div className="mb-3">
          <p className="text-white fs-16 mb-0">CONTACT US</p>
        </div>

        <div className="contactForm">
          <form>
            <div className="row">
              <div className="col-12 mb-2">
                <input
                  type="text"
                  className="form-control rounded-0 fs-14"
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="col-12 mb-2">
                <input
                  type="email"
                  className="form-control rounded-0 fs-14"
                  id="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="col-12 mb-2">
                <input
                  type="text"
                  className="form-control rounded-0 fs-14"
                  id="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
              </div>
              <div className="col-12 mb-2">
                <textarea
                  className="form-control rounded-0 fs-14"
                  id="message"
                  rows="3"
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>
              <div className="col-12 mb-2">
                <div className="text-start">
                  <button
                    className="btn btn-primary px-5 text-uppercase rounded-0 btn-lg"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;