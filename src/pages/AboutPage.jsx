import { Anchor, Shield, Users, Award } from "react-feather"
import FadeIn from "../components/animations/FadeIn"

const AboutPage = () => {
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
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">About Hydroferric</h1>
            <p className="text-xl text-blue-100">
              Learn about our company, our mission, and the team behind our world-class marine services.
            </p>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="py-20 bg-white dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="lg:w-1/2">
              <FadeIn>
                <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Our Company</h2>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  Hydroferric Nigeria Limited was established in 2008 as a marine services provider dedicated to
                  supporting offshore operations in the Gulf of Guinea. Over the years, we have grown to become one of
                  the leading marine service companies in Nigeria, with a reputation for excellence, reliability, and
                  safety.
                </p>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  Our headquarters are located in Port Harcourt, with operational bases in Lagos, Warri, and Calabar.
                  This strategic positioning allows us to efficiently serve clients across the Nigerian coastline and
                  beyond.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  We take pride in our modern fleet of vessels, state-of-the-art equipment, and highly trained personnel
                  who work tirelessly to deliver exceptional service to our clients.
                </p>
              </FadeIn>
            </div>
            <div className="lg:w-1/2">
              <FadeIn delay={0.2}>
                <img
                  src="/images/vessel-fleet.png"
                  alt="Hydroferric Headquarters"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Our Mission & Values</h2>
              <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                Guided by our core values, we strive to deliver excellence in every aspect of our operations.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FadeIn delay={0.1}>
              <div className="p-6 text-center bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full dark:bg-blue-900">
                  <Anchor className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Excellence</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We are committed to delivering the highest quality services that exceed our clients' expectations.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="p-6 text-center bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full dark:bg-blue-900">
                  <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Safety</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Safety is our top priority in all operations, protecting our people, assets, and the environment.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="p-6 text-center bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full dark:bg-blue-900">
                  <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Teamwork</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We foster collaboration and teamwork, recognizing that our strength lies in our collective expertise.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="p-6 text-center bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full dark:bg-blue-900">
                  <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Integrity</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We conduct our business with the highest ethical standards, honesty, and transparency.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Our Leadership Team</h2>
              <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                Meet the experienced professionals who lead our company to success.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((member) => (
              <FadeIn key={member} delay={(member - 1) * 0.1}>
                <div className="overflow-hidden rounded-lg shadow-md bg-gray-50 dark:bg-gray-900">
                  <img
                    src="/images/vessel-fleet.png"
                    alt={`Team Member ${member}`}
                    className="object-cover w-full h-64"
                  />
                  <div className="p-6">
                    <h3 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">John Doe</h3>
                    <p className="mb-3 font-medium text-blue-600 dark:text-blue-400">Chief Executive Officer</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Over 20 years of experience in the maritime industry with expertise in vessel operations and
                      management.
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="lg:w-1/2">
              <FadeIn>
                <img src="/images/vessel-fleet.png" alt="Safety First" className="w-full h-auto rounded-lg shadow-xl" />
              </FadeIn>
            </div>
            <div className="lg:w-1/2">
              <FadeIn delay={0.2}>
                <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Our Commitment to Safety</h2>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  At Hydroferric, safety is not just a priority—it's a core value embedded in everything we do. We are
                  committed to providing a safe working environment for our employees, protecting our assets, and
                  safeguarding the marine environment.
                </p>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  Our comprehensive Safety Management System (SMS) is designed to identify, assess, and mitigate risks
                  associated with our operations. We conduct regular safety drills, training sessions, and audits to
                  ensure compliance with international safety standards.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  We are proud of our safety record, having achieved over 5 years without a lost time incident—a
                  testament to our unwavering commitment to safety excellence.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
