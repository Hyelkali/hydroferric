"use client"

import { useState } from "react"
import { ArrowRight, MapPin, Clock, DollarSign, Send } from "react-feather"
import FadeIn from "../components/animations/FadeIn"

const CareersPage = () => {
  const [activeTab, setActiveTab] = useState("openings")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
    resume: null,
  })
  const [formStatus, setFormStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }))
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
        position: "",
        experience: "",
        message: "",
        resume: null,
      })
    }, 1500)
  }

  const jobOpenings = [
    {
      id: 1,
      title: "Marine Operations Manager",
      location: "Port Harcourt",
      type: "Full-time",
      salary: "Competitive",
      description:
        "We are seeking an experienced Marine Operations Manager to oversee our fleet operations and ensure compliance with safety and regulatory requirements.",
      responsibilities: [
        "Oversee daily operations of the Silverline fleet",
        "Ensure compliance with safety and regulatory requirements",
        "Coordinate with clients for crew transfer operations",
        "Manage vessel schedules and crew assignments",
        "Implement operational procedures and best practices",
        "Monitor and report on operational performance",
      ],
      requirements: [
        "Bachelor's degree in Maritime Studies or related field",
        "Minimum 5 years experience in marine operations management",
        "Strong knowledge of maritime regulations and safety standards",
        "Experience with crew transfer vessels preferred",
        "Excellent leadership and communication skills",
        "Computer literacy and proficiency in maritime software",
      ],
    },
    {
      id: 2,
      title: "Vessel Captain",
      location: "Lagos",
      type: "Full-time",
      salary: "Competitive",
      description:
        "We are looking for experienced Vessel Captains to operate our Silverline crew transfer vessels safely and efficiently.",
      responsibilities: [
        "Safely operate crew transfer vessels",
        "Conduct pre-departure checks and safety briefings",
        "Maintain vessel logs and documentation",
        "Ensure compliance with all maritime regulations",
        "Supervise and coordinate crew activities",
        "Report any maintenance issues or incidents",
      ],
      requirements: [
        "Valid Captain's license with appropriate endorsements",
        "Minimum 3 years experience as captain of similar vessels",
        "Strong knowledge of maritime regulations and safety procedures",
        "Excellent navigation and vessel handling skills",
        "Good communication and leadership abilities",
        "Ability to work in offshore environments",
      ],
    },
    {
      id: 3,
      title: "Marine Engineer",
      location: "Warri",
      type: "Full-time",
      salary: "Competitive",
      description: "We are seeking a qualified Marine Engineer to maintain and repair our fleet of Silverline vessels.",
      responsibilities: [
        "Perform routine maintenance on vessel engines and systems",
        "Troubleshoot and repair mechanical and electrical issues",
        "Maintain accurate maintenance records",
        "Ensure vessels meet all regulatory requirements",
        "Implement preventive maintenance programs",
        "Coordinate with operations team on vessel availability",
      ],
      requirements: [
        "Marine Engineering certification or equivalent",
        "Minimum 3 years experience as a marine engineer",
        "Strong knowledge of diesel engines and marine systems",
        "Experience with aluminum hull vessels preferred",
        "Problem-solving skills and ability to work under pressure",
        "Good communication and teamwork abilities",
        "Willingness to work in offshore environments",
      ],
    },
    {
      id: 4,
      title: "QHSE Officer",
      location: "Port Harcourt",
      type: "Full-time",
      salary: "Competitive",
      description:
        "We are looking for a qualified QHSE Officer to ensure our operations meet the highest standards of quality, health, safety, and environmental protection.",
      responsibilities: [
        "Implement and maintain QHSE management systems",
        "Conduct safety inspections and audits",
        "Investigate incidents and near-misses",
        "Provide QHSE training to staff",
        "Ensure compliance with relevant regulations and standards",
        "Prepare QHSE reports and documentation",
      ],
      requirements: [
        "Bachelor's degree in Safety, Environmental Science, or related field",
        "Minimum 3 years experience in QHSE role in maritime industry",
        "Knowledge of maritime safety regulations and standards",
        "NEBOSH, IOSH, or equivalent certification",
        "Strong analytical and problem-solving skills",
        "Excellent communication and training abilities",
      ],
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="py-20 bg-blue-600"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/devnath/image/upload/v1746790048/2871435_bhymih.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Careers at Hydroferric</h1>
            <p className="text-xl text-blue-100">
              Join our team of maritime professionals and build a rewarding career in the marine services industry.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-10 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab("openings")}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === "openings"
                  ? "border-b-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              Current Openings
            </button>
            <button
              onClick={() => setActiveTab("apply")}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === "apply"
                  ? "border-b-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              Apply Now
            </button>
            <button
              onClick={() => setActiveTab("benefits")}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === "benefits"
                  ? "border-b-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              Benefits & Culture
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          {/* Current Openings Tab */}
          {activeTab === "openings" && (
            <div>
              <FadeIn>
                <div className="mb-10 text-center">
                  <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Current Job Openings</h2>
                  <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                    Explore our current opportunities and find a role that matches your skills and career aspirations.
                  </p>
                </div>
              </FadeIn>

              <div className="space-y-6">
                {jobOpenings.map((job) => (
                  <FadeIn key={job.id} delay={job.id * 0.1}>
                    <div className="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                      <div className="p-6">
                        <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 mb-4">
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Clock className="w-4 h-4 mr-1" />
                            {job.type}
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {job.salary}
                          </div>
                        </div>
                        <p className="mb-4 text-gray-600 dark:text-gray-400">{job.description}</p>
                        <div className="mb-4">
                          <h4 className="mb-2 font-medium text-gray-900 dark:text-white">Responsibilities:</h4>
                          <ul className="pl-5 space-y-1 text-gray-600 list-disc dark:text-gray-400">
                            {job.responsibilities.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="mb-4">
                          <h4 className="mb-2 font-medium text-gray-900 dark:text-white">Requirements:</h4>
                          <ul className="pl-5 space-y-1 text-gray-600 list-disc dark:text-gray-400">
                            {job.requirements.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <button
                          onClick={() => {
                            setActiveTab("apply")
                            setFormData((prev) => ({ ...prev, position: job.title }))
                          }}
                          className="inline-flex items-center px-4 py-2 font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
                        >
                          Apply for this Position
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          )}

          {/* Apply Now Tab */}
          {activeTab === "apply" && (
            <div>
              <FadeIn>
                <div className="mb-10 text-center">
                  <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Apply Now</h2>
                  <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                    Fill out the form below to apply for a position at Hydroferric. We'll review your application and
                    contact you if there's a match.
                  </p>
                </div>

                <div className="max-w-3xl p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Full Name *
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
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="position"
                          className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Position Applied For *
                        </label>
                        <select
                          id="position"
                          name="position"
                          value={formData.position}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                        >
                          <option value="">Select a position</option>
                          {jobOpenings.map((job) => (
                            <option key={job.id} value={job.title}>
                              {job.title}
                            </option>
                          ))}
                          <option value="Other">Other (Specify in message)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="experience"
                        className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Years of Experience *
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                      >
                        <option value="">Select experience level</option>
                        <option value="0-2 years">0-2 years</option>
                        <option value="3-5 years">3-5 years</option>
                        <option value="6-10 years">6-10 years</option>
                        <option value="10+ years">10+ years</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Cover Letter / Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                      ></textarea>
                    </div>

                    <div>
                      <label
                        htmlFor="resume"
                        className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Upload Resume (PDF, DOC, DOCX) *
                      </label>
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        required
                        className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                      />
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Maximum file size: 5MB. Accepted formats: PDF, DOC, DOCX.
                      </p>
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
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Submit Application
                          </>
                        )}
                      </button>
                    </div>

                    {formStatus === "success" && (
                      <div className="p-4 text-green-700 bg-green-100 rounded-md dark:bg-green-800 dark:text-green-200">
                        Your application has been submitted successfully. Our HR team will review your application and
                        contact you if there's a match. Thank you for your interest in Hydroferric!
                      </div>
                    )}
                  </form>
                </div>
              </FadeIn>
            </div>
          )}

          {/* Benefits & Culture Tab */}
          {activeTab === "benefits" && (
            <div>
              <FadeIn>
                <div className="mb-10 text-center">
                  <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Benefits & Culture</h2>
                  <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                    At Hydroferric, we value our employees and offer a range of benefits and a positive work culture to
                    help you thrive.
                  </p>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <FadeIn delay={0.1}>
                  <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Employee Benefits</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg
                          className="flex-shrink-0 w-5 h-5 mr-2 text-blue-600 dark:text-blue-400 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-400">
                          Competitive salary and performance bonuses
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="flex-shrink-0 w-5 h-5 mr-2 text-blue-600 dark:text-blue-400 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-400">
                          Comprehensive health insurance for employees and dependents
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="flex-shrink-0 w-5 h-5 mr-2 text-blue-600 dark:text-blue-400 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-400">Retirement savings plan</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="flex-shrink-0 w-5 h-5 mr-2 text-blue-600 dark:text-blue-400 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-400">
                          Paid time off, including vacation, sick leave, and holidays
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="flex-shrink-0 w-5 h-5 mr-2 text-blue-600 dark:text-blue-400 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-400">
                          Professional development and training opportunities
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="flex-shrink-0 w-5 h-5 mr-2 text-blue-600 dark:text-blue-400 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-400">
                          Education assistance for job-related courses
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="flex-shrink-0 w-5 h-5 mr-2 text-blue-600 dark:text-blue-400 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-400">Employee wellness programs</span>
                      </li>
                    </ul>
                  </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Our Culture</h3>
                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                      At Hydroferric, we foster a culture of excellence, safety, and teamwork. We believe that our
                      success depends on the skills, dedication, and well-being of our employees.
                    </p>
                    <p className="mb-4 text-gray-600 dark:text-gray-400">Our core values guide everything we do:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg
                          className="flex-shrink-0 w-5 h-5 mr-2 text-blue-600 dark:text-blue-400 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-400">
                          <strong>Safety First:</strong> We prioritize the safety of our employees, clients, and the
                          environment in all our operations.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="flex-shrink-0 w-5 h-5 mr-2 text-blue-600 dark:text-blue-400 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-400">
                          <strong>Excellence:</strong> We strive for excellence in everything we do, from our services
                          to our workplace environment.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="flex-shrink-0 w-5 h-5 mr-2 text-blue-600 dark:text-blue-400 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-400">
                          <strong>Teamwork:</strong> We believe in the power of collaboration and support each other to
                          achieve common goals.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="flex-shrink-0 w-5 h-5 mr-2 text-blue-600 dark:text-blue-400 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-400">
                          <strong>Integrity:</strong> We conduct our business with honesty, transparency, and ethical
                          standards.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="flex-shrink-0 w-5 h-5 mr-2 text-blue-600 dark:text-blue-400 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-400">
                          <strong>Innovation:</strong> We encourage creative thinking and continuous improvement in all
                          aspects of our operations.
                        </span>
                      </li>
                    </ul>
                  </div>
                </FadeIn>
              </div>

              <FadeIn delay={0.3}>
                <div className="p-6 mt-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Professional Development</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">
                    We are committed to the professional growth and development of our employees. We offer:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 mr-2 text-blue-600 dark:text-blue-400 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-400">
                        Regular training programs to enhance skills and knowledge
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 mr-2 text-blue-600 dark:text-blue-400 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-400">
                        Mentorship opportunities with experienced professionals
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 mr-2 text-blue-600 dark:text-blue-400 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-400">
                        Support for professional certifications and continuing education
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 mr-2 text-blue-600 dark:text-blue-400 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-400">
                        Career advancement opportunities within the company
                      </span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-600 dark:bg-blue-800">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">Ready to Join Our Team?</h2>
            <p className="mb-8 text-xl text-blue-100">
              Explore our current openings and take the next step in your maritime career with Hydroferric.
            </p>
            <button
              onClick={() => setActiveTab("openings")}
              className="inline-flex items-center px-8 py-4 font-bold text-blue-600 transition-colors bg-white rounded-md hover:bg-gray-100"
            >
              View Current Openings
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CareersPage
