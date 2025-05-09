"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send } from "react-feather"
import FadeIn from "../components/animations/FadeIn"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setFormStatus("submitting")
    setTimeout(() => {
      setFormStatus("success")
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="py-20 bg-blue-600"
        style={{
          backgroundImage: "url('/images/vessel-fleet.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Contact Us</h1>
            <p className="text-xl text-blue-100">
              Get in touch with our team to discuss how we can support your marine and offshore operations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FadeIn delay={0.1}>
              <div className="p-6 text-center rounded-lg bg-gray-50 dark:bg-gray-900">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full dark:bg-blue-900">
                  <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Our Location</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  123 Marina Boulevard
                  <br />
                  Port Harcourt, Rivers State
                  <br />
                  Nigeria
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="p-6 text-center rounded-lg bg-gray-50 dark:bg-gray-900">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full dark:bg-blue-900">
                  <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <a href="tel:+2341234567890" className="hover:text-blue-600 dark:hover:text-blue-400">
                    +234 123 456 7890
                  </a>
                  <br />
                  <a href="tel:+2349876543210" className="hover:text-blue-600 dark:hover:text-blue-400">
                    +234 987 654 3210
                  </a>
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="p-6 text-center rounded-lg bg-gray-50 dark:bg-gray-900">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full dark:bg-blue-900">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <a href="mailto:info@hydroferric.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                    info@hydroferric.com
                  </a>
                  <br />
                  <a href="mailto:operations@hydroferric.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                    operations@hydroferric.com
                  </a>
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="p-6 text-center rounded-lg bg-gray-50 dark:bg-gray-900">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full dark:bg-blue-900">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Working Hours</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Monday - Friday: 8:00 AM - 5:00 PM
                  <br />
                  Saturday: 9:00 AM - 1:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col gap-12 lg:flex-row">
            <div className="lg:w-1/2">
              <FadeIn>
                <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Send Us a Message</h2>
                <p className="mb-8 text-gray-600 dark:text-gray-400">
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="inline-flex items-center px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700 disabled:bg-blue-400"
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <svg
                            className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>

                  {formStatus === "success" && (
                    <div className="p-4 text-green-700 bg-green-100 rounded-md dark:bg-green-800 dark:text-green-200">
                      Your message has been sent successfully. We'll get back to you soon!
                    </div>
                  )}
                </form>
              </FadeIn>
            </div>

            <div className="lg:w-1/2">
              <FadeIn delay={0.2}>
                <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Our Location</h2>
                <p className="mb-8 text-gray-600 dark:text-gray-400">
                  Visit our headquarters in Port Harcourt or one of our operational bases across Nigeria.
                </p>
                <div className="overflow-hidden bg-gray-200 rounded-lg h-96 dark:bg-gray-700">
                  {/* Placeholder for map - in a real implementation, you would use Google Maps or similar */}
                  <div className="flex items-center justify-center w-full h-full bg-gray-300 dark:bg-gray-700">
                    <MapPin className="w-12 h-12 text-gray-500 dark:text-gray-400" />
                    <span className="ml-2 font-medium text-gray-600 dark:text-gray-300">Map Placeholder</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Our Offices</h2>
              <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                Hydroferric has offices and operational bases across Nigeria to better serve our clients.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FadeIn delay={0.1}>
              <div id="port-harcourt" className="overflow-hidden rounded-lg shadow-md bg-gray-50 dark:bg-gray-900">
                <img src="/images/vessel-fleet.png" alt="Port Harcourt Office" className="object-cover w-full h-48" />
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                    Port Harcourt (Headquarters)
                  </h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">
                    123 Marina Boulevard
                    <br />
                    Port Harcourt, Rivers State
                    <br />
                    Nigeria
                  </p>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Phone className="w-4 h-4 mr-2" />
                    <a href="tel:+2341234567890" className="hover:text-blue-600 dark:hover:text-blue-400">
                      +234 123 456 7890
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div id="lagos" className="overflow-hidden rounded-lg shadow-md bg-gray-50 dark:bg-gray-900">
                <img src="/images/vessel-fleet.png" alt="Lagos Office" className="object-cover w-full h-48" />
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Lagos Office</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">
                    456 Victoria Island
                    <br />
                    Lagos State
                    <br />
                    Nigeria
                  </p>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Phone className="w-4 h-4 mr-2" />
                    <a href="tel:+2349876543210" className="hover:text-blue-600 dark:hover:text-blue-400">
                      +234 987 654 3210
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div id="warri" className="overflow-hidden rounded-lg shadow-md bg-gray-50 dark:bg-gray-900">
                <img src="/images/vessel-fleet.png" alt="Warri Office" className="object-cover w-full h-48" />
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Warri Office</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">
                    789 Warri Port
                    <br />
                    Delta State
                    <br />
                    Nigeria
                  </p>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Phone className="w-4 h-4 mr-2" />
                    <a href="tel:+2348765432109" className="hover:text-blue-600 dark:hover:text-blue-400">
                      +234 876 543 2109
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
