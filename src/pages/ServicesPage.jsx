"use client"

import { useState } from "react"
import { Anchor, Shield, Truck, Tool, Users, BarChart } from "react-feather"
import FadeIn from "../components/animations/FadeIn"
import ServiceCard from "../components/common/ServiceCard"
import { Link } from "react-router-dom"
import { useLanguage } from "../contexts/LanguageContext"

const ServicesPage = () => {
  const { t } = useLanguage()
  const [activeService, setActiveService] = useState(null)

  const services = [
    {
      id: "marine",
      title: t("services.marineServices.title"),
      description: t("services.marineServices.description"),
      icon: <Anchor className="w-10 h-10 text-blue-600" />,
      details: t("services.marineServices.details"),
      fullDescription: t("services.marineServices.fullDescription"),
    },
    {
      id: "offshore",
      title: t("services.offshoreSupport.title"),
      description: t("services.offshoreSupport.description"),
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      details: t("services.offshoreSupport.details"),
      fullDescription: t("services.offshoreSupport.fullDescription"),
    },
    {
      id: "logistics",
      title: t("services.logistics.title"),
      description: t("services.logistics.description"),
      icon: <Truck className="w-10 h-10 text-blue-600" />,
      details: t("services.logistics.details"),
      fullDescription: t("services.logistics.fullDescription"),
    },
    {
      id: "maintenance",
      title: t("services.vesselMaintenance.title"),
      description: t("services.vesselMaintenance.description"),
      icon: <Tool className="w-10 h-10 text-blue-600" />,
      details: t("services.vesselMaintenance.details"),
      fullDescription: t("services.vesselMaintenance.fullDescription"),
    },
    {
      id: "consulting",
      title: t("services.maritimeConsulting.title"),
      description: t("services.maritimeConsulting.description"),
      icon: <BarChart className="w-10 h-10 text-blue-600" />,
      details: t("services.maritimeConsulting.details"),
      fullDescription: t("services.maritimeConsulting.fullDescription"),
    },
    {
      id: "training",
      title: t("services.maritimeTraining.title"),
      description: t("services.maritimeTraining.description"),
      icon: <Users className="w-10 h-10 text-blue-600" />,
      details: t("services.maritimeTraining.details"),
      fullDescription: t("services.maritimeTraining.fullDescription"),
    },
  ]

  const handleServiceClick = (serviceId) => {
    setActiveService(serviceId === activeService ? null : serviceId)

    // Scroll to the service detail section if a service is selected
    if (serviceId !== activeService) {
      setTimeout(() => {
        const element = document.getElementById(`service-detail-${serviceId}`)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 100)
    }
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
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">{t("services.pageTitle")}</h1>
            <p className="text-xl text-blue-100">{t("services.pageSubtitle")}</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">{t("services.whatWeOffer")}</h2>
              <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                {t("services.whatWeOfferSubtitle")}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <FadeIn key={service.id} delay={index * 0.1}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={`#${service.id}`}
                  onClick={() => handleServiceClick(service.id)}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Section */}
      {activeService && (
        <section id={`service-detail-${activeService}`} className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 mx-auto">
            <FadeIn>
              <div className="max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="p-6 md:p-8">
                  <div className="flex items-center mb-6">
                    {services.find((s) => s.id === activeService)?.icon}
                    <h2 className="ml-4 text-2xl font-bold text-gray-900 dark:text-white">
                      {services.find((s) => s.id === activeService)?.title}
                    </h2>
                  </div>

                  <div className="mb-8 prose prose-lg max-w-none dark:prose-invert">
                    <p className="text-gray-700 dark:text-gray-300">
                      {services.find((s) => s.id === activeService)?.fullDescription}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">Key Features</h3>
                    <ul className="space-y-3">
                      {services
                        .find((s) => s.id === activeService)
                        ?.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <svg
                              className="flex-shrink-0 w-6 h-6 mr-2 text-blue-600 dark:text-blue-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-600 dark:text-gray-400">{detail}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={() => setActiveService(null)}
                      className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Detailed Services */}
      {services.map((service, index) => (
        <section
          id={service.id}
          key={service.id}
          className={`py-20 ${index % 2 === 0 ? "bg-gray-50 dark:bg-gray-900" : "bg-white dark:bg-gray-800"}`}
        >
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center gap-12 lg:flex-row">
              <div className={`lg:w-1/2 ${index % 2 !== 0 ? "order-2" : ""}`}>
                <FadeIn>
                  <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">{service.title}</h2>
                  <p className="mb-6 text-gray-600 dark:text-gray-400">{service.description}</p>
                  <ul className="space-y-3">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="flex-shrink-0 w-6 h-6 mr-2 text-blue-600 dark:text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-400">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleServiceClick(service.id)}
                    className="inline-flex items-center px-4 py-2 mt-6 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {t("common.learnMore")}
                  </button>
                </FadeIn>
              </div>
              <div className={`lg:w-1/2 ${index % 2 !== 0 ? "order-1" : ""}`}>
                <FadeIn delay={0.2}>
                  <img
                    src="/images/vessel-fleet.png"
                    alt={service.title}
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold text-white">{t("services.readyToWork")}</h2>
            <p className="mb-8 text-xl text-blue-100">{t("services.readyToWorkSubtitle")}</p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 font-bold text-blue-600 transition-colors bg-white rounded-md hover:bg-gray-100"
            >
              {t("common.contactUs")}
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
