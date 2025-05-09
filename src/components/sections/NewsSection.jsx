import { Link } from "react-router-dom"
import { ArrowRight, Calendar } from "react-feather"
import FadeIn from "../animations/FadeIn"

const NewsSection = () => {
  const newsItems = [
    {
      id: "news1",
      title: "Hydroferric Expands Fleet with Two New Vessels",
      excerpt:
        "Hydroferric Nigeria Limited has expanded its fleet with the addition of two state-of-the-art offshore support vessels.",
      date: "May 15, 2023",
      image: "/images/vessel-fleet.png",
    },
    {
      id: "news2",
      title: "New Partnership with International Oil Company",
      excerpt:
        "Hydroferric announces a strategic partnership with a leading international oil company to provide marine support services.",
      date: "April 3, 2023",
      image: "/images/vessel-fleet.png",
    },
    {
      id: "news3",
      title: "Safety Milestone: 5 Years Without Lost Time Incident",
      excerpt:
        "Hydroferric celebrates an important safety milestone of operating for 5 years without a lost time incident.",
      date: "March 12, 2023",
      image: "/images/vessel-fleet.png",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container px-4 mx-auto">
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">Latest News</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              Stay updated with the latest news and developments from Hydroferric Nigeria Limited.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1}>
              <div className="overflow-hidden rounded-lg shadow-md bg-gray-50 dark:bg-gray-900">
                <img
                  src={item.image || "/images/vessel-fleet.png"}
                  alt={item.title}
                  className="object-cover w-full h-48"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.date}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">{item.excerpt}</p>
                  <Link
                    to={`/news/${item.id}`}
                    className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/news"
            className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View All News
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
