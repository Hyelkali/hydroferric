import HeroSection from "../components/sections/HeroSection"
import ServiceCard from "../components/common/ServiceCard"
import FleetShowcase from "../components/sections/FleetShowcase"
import NewsSection from "../components/sections/NewsSection"
import { Link } from "react-router-dom"
import { ArrowRight, Anchor, Shield, Truck, Tool, MapPin } from "react-feather"
import FadeIn from "../components/animations/FadeIn"
import StaggerFade from "../components/animations/StaggerFade"
import HubsCardButton from "../components/common/HubsCardButton"

const HomePage = () => {
  const services = [
    {
      id: "marine",
      title: "Marine Services",
      description:
        "Comprehensive marine services including vessel chartering, crew management, and maritime operations.",
      icon: <Anchor className="w-10 h-10 text-blue-600" />,
      link: "/services#marine",
    },
    {
      id: "offshore",
      title: "Offshore Support",
      description: "Specialized offshore support for oil & gas operations, including crew transfer and logistics.",
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      link: "/services#offshore",
    },
    {
      id: "logistics",
      title: "Logistics",
      description:
        "Integrated logistics solutions for marine transportation, cargo handling, and supply chain management.",
      icon: <Truck className="w-10 h-10 text-blue-600" />,
      link: "/services#logistics",
    },
    {
      id: "maintenance",
      title: "Vessel Maintenance",
      description: "Professional vessel maintenance and repair services to ensure operational efficiency and safety.",
      icon: <Tool className="w-10 h-10 text-blue-600" />,
      link: "/services#maintenance",
    },
  ]

  const stats = [
    { value: 15, label: "Years Experience" },
    { value: 4, label: "Managed Vessels" },
    { value: 50, label: "Employees" },
    { value: 500, label: "Projects Completed" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">Our Services</h2>
              <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                Providing comprehensive marine and offshore support services with a commitment to excellence.
              </p>
            </div>
          </FadeIn>

          <StaggerFade>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                />
              ))}
            </div>
          </StaggerFade>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="lg:w-1/2">
              <FadeIn>
                <img
                  src="/images/silverline-2.png"
                  alt="Pacific Silverline Fleet"
                  className="object-cover w-full h-auto rounded-lg shadow-xl"
                />
              </FadeIn>
            </div>
            <div className="lg:w-1/2">
              <FadeIn>
                <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                  Leading Marine Services Provider in Nigeria
                </h2>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  Hydroferric Nigeria Limited is a premier marine services company with over 15 years of experience in
                  the industry. We specialize in providing high-quality marine and offshore support services to oil &
                  gas companies, shipping lines, and other maritime organizations.
                </p>
                <p className="mb-8 text-gray-600 dark:text-gray-400">
                  We are proud to be the exclusive fleet manager for Pacific Silverline's vessels in Nigeria, ensuring
                  these state-of-the-art crew transfer vessels deliver reliable and safe transportation services to
                  offshore installations.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </FadeIn>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 mt-20 md:grid-cols-4">
            {stats.map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="mb-2 text-4xl font-bold text-blue-600 md:text-5xl dark:text-blue-400">
                    {stat.value}+
                  </div>
                  <div className="font-medium text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Hubs Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">Our Hubs</h2>
              <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                Strategically located operational hubs to serve our clients across West Africa.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FadeIn delay={0.1}>
              <HubsCardButton
                title="Port Harcourt Hub"
                description="Our headquarters and main operational base with comprehensive marine support facilities."
                icon={<MapPin className="w-10 h-10" />}
                link="/contact#port-harcourt"
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              />
            </FadeIn>

            <FadeIn delay={0.2}>
              <HubsCardButton
                title="Lagos Hub"
                description="Strategic location serving Nigeria's commercial capital with quick response capabilities."
                icon={<Anchor className="w-10 h-10" />}
                link="/contact#lagos"
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              />
            </FadeIn>

            <FadeIn delay={0.3}>
              <HubsCardButton
                title="Warri Hub"
                description="Specialized facility for vessel maintenance and offshore support operations."
                icon={<Tool className="w-10 h-10" />}
                link="/contact#warri"
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <FleetShowcase />

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">Our Expert Team</h2>
              <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                Meet our team of experienced maritime professionals dedicated to delivering excellence in marine
                services.
              </p>
            </div>
          </FadeIn>

          <StaggerFade>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
              {[1, 2, 3, 4].map((member) => (
                <div
                  key={member}
                  className="overflow-hidden transition-transform bg-white rounded-lg shadow-md dark:bg-gray-800 hover:scale-105"
                >
                  <img
                    src="/images/vessel-fleet.png"
                    alt={`Team Member ${member}`}
                    className="object-cover w-full h-64"
                  />
                  <div className="p-6">
                    <h3 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">John Doe</h3>
                    <p className="mb-3 font-medium text-blue-600 dark:text-blue-400">Maritime Director</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Over 15 years of experience in maritime operations and vessel management.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </StaggerFade>

          <div className="mt-12 text-center">
            <Link
              to="/about#team"
              className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Meet Our Full Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <NewsSection />

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="mb-8 lg:w-2/3 lg:mb-0">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Ready to Work With Us?</h2>
              <p className="max-w-2xl text-lg text-blue-100">
                Contact our team today to discuss how Hydroferric can support your marine and offshore operations with
                our world-class services and managed fleet.
              </p>
            </div>
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 font-bold text-blue-600 transition-colors bg-white rounded-md hover:bg-gray-100"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
