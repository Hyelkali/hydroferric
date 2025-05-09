"use client"

import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "react-feather"
import { useLanguage } from "../../contexts/LanguageContext"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="text-white bg-gray-900">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <img src="https://res.cloudinary.com/devnath/image/upload/v1746789634/hydroferric-logo-white_inbfv0.png" alt="Hydroferric Logo" className="w-auto h-10 mb-4" />
            <p className="mb-4 text-gray-400">
              Providing world-class marine and offshore support services with a commitment to safety, reliability, and
              excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 transition-colors hover:text-white">
                  {t("common.about")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 transition-colors hover:text-white">
                  {t("common.services")}
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="text-gray-400 transition-colors hover:text-white">
                  {t("common.fleet")}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 transition-colors hover:text-white">
                  {t("common.media")}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 transition-colors hover:text-white">
                  {t("common.careers")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 transition-colors hover:text-white">
                  {t("common.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("footer.services")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#marine" className="text-gray-400 transition-colors hover:text-white">
                  Marine Services
                </Link>
              </li>
              <li>
                <Link to="/services#offshore" className="text-gray-400 transition-colors hover:text-white">
                  Offshore Support
                </Link>
              </li>
              <li>
                <Link to="/services#logistics" className="text-gray-400 transition-colors hover:text-white">
                  Logistics
                </Link>
              </li>
              <li>
                <Link to="/services#maintenance" className="text-gray-400 transition-colors hover:text-white">
                  Vessel Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services#consulting" className="text-gray-400 transition-colors hover:text-white">
                  Maritime Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("footer.contactUs")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">123 Marina Boulevard, Port Harcourt, Rivers State, Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone className="flex-shrink-0 w-5 h-5 mr-2 text-blue-500" />
                <a href="tel:+2341234567890" className="text-gray-400 transition-colors hover:text-white">
                  +234 123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="flex-shrink-0 w-5 h-5 mr-2 text-blue-500" />
                <a href="mailto:info@hydroferric.com" className="text-gray-400 transition-colors hover:text-white">
                  info@hydroferric.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between pt-8 mt-12 border-t border-gray-800 md:flex-row">
          <p className="mb-4 text-sm text-gray-400 md:mb-0">
            &copy; {currentYear} Hydroferric Nigeria Limited. {t("footer.rights")}
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-gray-400 transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-sm text-gray-400 transition-colors hover:text-white">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-sm text-gray-400 transition-colors hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
