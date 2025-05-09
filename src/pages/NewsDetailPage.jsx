"use client"

import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from "react-feather"
import FadeIn from "../components/animations/FadeIn"

const NewsDetailPage = () => {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [relatedArticles, setRelatedArticles] = useState([])

  useEffect(() => {
    // In a real app, this would be an API call
    const articles = [
      {
        id: "1",
        title: "Hydroferric Secures Pacific Silverline Fleet Management Contract",
        excerpt:
          "Hydroferric Nigeria Limited has been awarded the exclusive fleet management contract for Pacific Silverline's vessels.",
        content: `
          <p>Hydroferric Nigeria Limited, a leading marine services provider, has been awarded the exclusive fleet management contract for Pacific Silverline's vessels operating in Nigerian waters. The contract, which was signed last month, covers the management of four crew transfer vessels: Silverline 1, Silverline 2, Silverline 3, and Silverline 4.</p>
          
          <p>Under the terms of the agreement, Hydroferric will be responsible for the complete management of the vessels, including crew management, maintenance, regulatory compliance, and operational support. This partnership marks a significant milestone for Hydroferric as it expands its fleet management services.</p>
          
          <p>"We are delighted to have been selected by Pacific Silverline to manage their fleet of crew transfer vessels," said John Doe, CEO of Hydroferric Nigeria Limited. "This contract is a testament to our reputation for excellence in marine services and our commitment to maintaining the highest standards of safety and operational efficiency."</p>
          
          <p>The Silverline fleet consists of four identical 12-meter crew transfer vessels, designed specifically for the challenging conditions of the Gulf of Guinea. Each vessel can transport up to 12 personnel and is equipped with advanced navigation and safety systems.</p>
          
          <p>"Pacific Silverline is pleased to partner with Hydroferric for the management of our fleet in Nigeria," said Jane Smith, Operations Director at Pacific Silverline. "Their extensive experience in the Nigerian maritime sector and their track record of excellence make them the ideal partner for us."</p>
          
          <p>The contract is expected to create additional employment opportunities for Nigerian seafarers and contribute to the development of local maritime expertise.</p>
          
          <p>Hydroferric Nigeria Limited has been operating in the Nigerian maritime sector for over 15 years, providing a wide range of marine services including vessel chartering, crew management, and maritime operations.</p>
        `,
        author: "Admin",
        date: "May 15, 2023",
        category: "Company News",
        tags: ["Fleet Management", "Contract", "Pacific Silverline"],
        image: "/images/silverline-1.png",
      },
      {
        id: "2",
        title: "Silverline Fleet Achieves 100% Operational Uptime",
        excerpt:
          "The Pacific Silverline fleet managed by Hydroferric has achieved 100% operational uptime for the third consecutive quarter.",
        content: `
          <p>Hydroferric Nigeria Limited is proud to announce that the Pacific Silverline fleet under its management has achieved 100% operational uptime for the third consecutive quarter. This remarkable achievement underscores Hydroferric's commitment to excellence in fleet management and maintenance.</p>
          
          <p>The Silverline fleet, consisting of four crew transfer vessels, has been operating without any unplanned downtime since September 2022. This exceptional performance has enabled Pacific Silverline to provide uninterrupted crew transfer services to its clients in the offshore oil and gas sector.</p>
          
          <p>"Achieving 100% operational uptime for three consecutive quarters is a testament to the dedication and expertise of our maintenance and operations teams," said John Doe, CEO of Hydroferric Nigeria Limited. "We understand that reliability is crucial in the offshore industry, and we are committed to ensuring that the vessels under our management are always ready to perform."</p>
          
          <p>The achievement is particularly noteworthy given the challenging operating conditions in the Gulf of Guinea, where the vessels operate. The region is known for its harsh marine environment, which can put significant strain on vessels and equipment.</p>
          
          <p>Hydroferric's comprehensive maintenance program, which includes regular preventive maintenance, condition-based monitoring, and prompt addressing of any potential issues, has been key to achieving this level of reliability.</p>
          
          <p>"We are extremely pleased with the performance of our fleet under Hydroferric's management," said Jane Smith, Operations Director at Pacific Silverline. "The 100% uptime has allowed us to meet our commitments to our clients without any disruptions, which is invaluable in our industry."</p>
          
          <p>Hydroferric Nigeria Limited continues to invest in training for its maintenance personnel and in advanced diagnostic tools to further enhance its maintenance capabilities and ensure continued excellence in fleet management.</p>
        `,
        author: "Admin",
        date: "April 3, 2023",
        category: "Operations",
        tags: ["Fleet Management", "Maintenance", "Operational Excellence"],
        image: "/images/silverline-2.png",
      },
      {
        id: "3",
        title: "Crew Transfer Operations Reach Safety Milestone",
        excerpt:
          "The crew transfer operations conducted by Hydroferric's managed Silverline fleet have reached a significant safety milestone.",
        content: `
          <p>Hydroferric Nigeria Limited is pleased to announce that the crew transfer operations conducted by its managed Silverline fleet have reached a significant safety milestone: 500 days without a lost time incident (LTI). This achievement highlights Hydroferric's unwavering commitment to safety in all its operations.</p>
          
          <p>The milestone, reached on March 1, 2023, encompasses all crew transfer operations performed by the four Silverline vessels managed by Hydroferric. During this period, the fleet has conducted over 1,200 crew transfers, safely transporting more than 10,000 personnel to and from offshore installations.</p>
          
          <p>"Safety is our top priority at Hydroferric, and we are extremely proud of this achievement," said John Doe, CEO of Hydroferric Nigeria Limited. "It is a result of the diligent efforts of our vessel crews, the effectiveness of our safety management system, and our continuous focus on safety training and awareness."</p>
          
          <p>Crew transfer operations in the offshore industry involve inherent risks, including personnel transfers in varying sea conditions, navigation in congested waters, and operations near offshore structures. Hydroferric's comprehensive safety protocols, regular safety drills, and thorough risk assessments have been instrumental in mitigating these risks.</p>
          
          <p>"We commend Hydroferric for their outstanding safety performance in managing our Silverline fleet," said Jane Smith, Operations Director at Pacific Silverline. "This milestone reflects their professionalism and dedication to maintaining the highest safety standards."</p>
          
          <p>Hydroferric's safety management system is certified to international standards and is regularly audited to ensure compliance with industry best practices. The company also maintains a strong safety culture, encouraging all employees to take responsibility for safety and to report any potential hazards or near-misses.</p>
          
          <p>"While we celebrate this milestone, we remain vigilant and continue to look for ways to further enhance our safety performance," added Mr. Doe. "Our goal is not just to maintain our safety record but to continuously improve it."</p>
          
          <p>Hydroferric Nigeria Limited has been providing marine services in Nigeria for over 15 years, with a strong focus on safety, reliability, and excellence in all its operations.</p>
        `,
        author: "Admin",
        date: "March 12, 2023",
        category: "Safety",
        tags: ["Safety", "Crew Transfer", "Milestone"],
        image: "/images/silverline-3.png",
      },
    ]

    const foundArticle = articles.find((a) => a.id === id)

    // Set related articles (excluding the current one)
    const related = articles.filter((a) => a.id !== id)

    // Simulate loading
    setTimeout(() => {
      setArticle(foundArticle || null)
      setRelatedArticles(related)
      setLoading(false)
    }, 500)
  }, [id])

  if (loading) {
    return (
      <div className="pt-16 flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading article...</p>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="pt-16 flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="text-center max-w-md px-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Article Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The article you are looking for could not be found. It may have been removed or you might have followed an
            incorrect link.
          </p>
          <Link
            to="/gallery#news"
            className="inline-flex items-center px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to News
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <img src={article.image || "/placeholder.svg"} alt={article.title} className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Link
              to="/gallery#news"
              className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to News
            </Link>
            <h1 className="text-4xl font-bold text-white mb-4">{article.title}</h1>
            <div className="flex flex-wrap items-center text-white gap-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {article.date}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {article.author}
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                {article.category}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Article Content */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                  <div
                    className="prose prose-blue max-w-none dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  ></div>

                  {/* Tags */}
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-wrap items-center">
                      <span className="text-gray-700 dark:text-gray-300 mr-2">Tags:</span>
                      {article.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full px-3 py-1 text-sm mr-2 mb-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Share */}
                  <div className="mt-6">
                    <div className="flex items-center">
                      <Share2 className="w-5 h-5 text-gray-700 dark:text-gray-300 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300 mr-4">Share:</span>
                      <div className="flex space-x-2">
                        <a
                          href="#"
                          className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                          aria-label="Share on Facebook"
                        >
                          <Facebook className="w-4 h-4" />
                        </a>
                        <a
                          href="#"
                          className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
                          aria-label="Share on Twitter"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                        <a
                          href="#"
                          className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
                          aria-label="Share on LinkedIn"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column - Sidebar */}
            <div>
              {/* Related Articles */}
              <FadeIn>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Related Articles</h3>
                  <div className="space-y-6">
                    {relatedArticles.map((related) => (
                      <div
                        key={related.id}
                        className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0 last:pb-0"
                      >
                        <Link to={`/news/${related.id}`}>
                          <img
                            src={related.image || "/placeholder.svg"}
                            alt={related.title}
                            className="w-full h-40 object-cover rounded-lg mb-3"
                          />
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-2">
                            {related.title}
                          </h4>
                        </Link>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4 mr-1" />
                          {related.date}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Categories */}
              <FadeIn delay={0.1}>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {["Company News", "Operations", "Safety", "Fleet", "Industry Updates"].map((category, index) => (
                      <li key={index}>
                        <Link
                          to="#"
                          className="flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <span>{category}</span>
                          <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full px-2 py-1">
                            {index + 1}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* Contact */}
              <FadeIn delay={0.2}>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Get In Touch</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Have questions about our services or want to learn more about Hydroferric?
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center w-full px-4 py-2 font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700 justify-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* More News Section */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">More News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((related) => (
              <FadeIn key={related.id} delay={0.1}>
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
                  <img
                    src={related.image || "/placeholder.svg"}
                    alt={related.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {related.date}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{related.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{related.excerpt}</p>
                    <Link
                      to={`/news/${related.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsDetailPage
