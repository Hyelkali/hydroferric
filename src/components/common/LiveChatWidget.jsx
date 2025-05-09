"use client"

import { useState, useEffect, useRef } from "react"
import { MessageSquare, X, Send, User, Phone, Mail } from "react-feather"

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")
  const [isAgentOnline, setIsAgentOnline] = useState(true)
  const [isTyping, setIsTyping] = useState(false)
  const [offlineForm, setOfflineForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [offlineFormSubmitted, setOfflineFormSubmitted] = useState(false)
  const messagesEndRef = useRef(null)

  // Simulate agent availability based on time of day
  useEffect(() => {
    const checkAgentAvailability = () => {
      const now = new Date()
      const hours = now.getHours()
      // Agents available from 8 AM to 5 PM
      setIsAgentOnline(hours >= 8 && hours < 17)
    }

    checkAgentAvailability()
    const interval = setInterval(checkAgentAvailability, 60000) // Check every minute

    return () => clearInterval(interval)
  }, [])

  // Add welcome message when chat is opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      if (isAgentOnline) {
        setMessages([
          {
            id: 1,
            sender: "agent",
            text: "Hello! Welcome to Hydroferric. How can I assist you today?",
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            agent: {
              name: "Sarah Johnson",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
              role: "Customer Support",
            },
          },
        ])
      } else {
        setMessages([
          {
            id: 1,
            sender: "agent",
            text: "Thank you for contacting Hydroferric. Our support team is currently offline. Please leave a message and we'll get back to you as soon as possible.",
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ])
      }
    }
  }, [isOpen, isAgentOnline, messages.length])

  // Scroll to bottom when new messages are added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      sender: "user",
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, userMessage])
    setNewMessage("")

    // Simulate agent typing
    setIsTyping(true)

    // Simulate agent response after a delay
    setTimeout(() => {
      setIsTyping(false)
      const agentResponses = [
        "Thank you for your message. How can I help you with our marine services?",
        "I'd be happy to provide more information about our Silverline fleet. What specific details are you looking for?",
        "Would you like me to connect you with our operations team for more specialized assistance?",
        "We offer crew transfer services to various offshore locations. Would you like to know more about our routes and availability?",
        "Is there anything specific about our vessel specifications or capabilities that you'd like to know?",
      ]

      const randomResponse = agentResponses[Math.floor(Math.random() * agentResponses.length)]

      const agentMessage = {
        id: messages.length + 2,
        sender: "agent",
        text: randomResponse,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        agent: {
          name: "Sarah Johnson",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
          role: "Customer Support",
        },
      }

      setMessages((prev) => [...prev, agentMessage])
    }, 2000)
  }

  const handleOfflineFormChange = (e) => {
    const { name, value } = e.target
    setOfflineForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleOfflineFormSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, you would send this data to your backend
    console.log("Offline form submitted:", offlineForm)
    setOfflineFormSubmitted(true)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className={`fixed z-50 bottom-8 right-8 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? "bg-red-500 hover:bg-red-600" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <MessageSquare className="h-6 w-6 text-white" />}
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed z-40 bottom-24 right-8 w-80 md:w-96 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col transition-all duration-300 animate-fadeIn dark:bg-gray-800">
          {/* Header */}
          <div className="bg-blue-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Hydroferric Support</h3>
              <div className="flex items-center">
                <span
                  className={`inline-block w-3 h-3 rounded-full mr-2 ${isAgentOnline ? "bg-green-400" : "bg-red-400"}`}
                ></span>
                <span className="text-sm">{isAgentOnline ? "Online" : "Offline"}</span>
              </div>
            </div>
          </div>

          {isAgentOnline ? (
            <>
              {/* Messages Container */}
              <div className="flex-1 p-4 overflow-y-auto max-h-96 bg-gray-50 dark:bg-gray-900">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.sender === "agent" && message.agent && (
                      <img
                        src={message.agent.avatar || "/placeholder.svg"}
                        alt={message.agent.name}
                        className="w-8 h-8 rounded-full mr-2 object-cover"
                      />
                    )}
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === "user"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                      }`}
                    >
                      {message.sender === "agent" && message.agent && (
                        <div className="font-medium text-xs text-gray-600 dark:text-gray-300 mb-1">
                          {message.agent.name} - {message.agent.role}
                        </div>
                      )}
                      <p className="text-sm">{message.text}</p>
                      <div
                        className={`text-xs mt-1 ${
                          message.sender === "user" ? "text-blue-100" : "text-gray-500 dark:text-gray-400"
                        }`}
                      >
                        {message.time}
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex items-center mb-4">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Agent"
                      className="w-8 h-8 rounded-full mr-2 object-cover"
                    />
                    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Message Input */}
              <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </form>
            </>
          ) : (
            // Offline Form
            <div className="p-4">
              {!offlineFormSubmitted ? (
                <form onSubmit={handleOfflineFormSubmit} className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    Our support team is currently offline. Please leave your details and we'll get back to you as soon
                    as possible.
                  </p>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-gray-400 mr-2" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={offlineForm.name}
                        onChange={handleOfflineFormChange}
                        required
                        className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-gray-400 mr-2" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={offlineForm.email}
                        onChange={handleOfflineFormChange}
                        required
                        className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={offlineForm.message}
                      onChange={handleOfflineFormChange}
                      required
                      rows="4"
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 mb-4">
                    <svg
                      className="h-6 w-6 text-green-600 dark:text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Thank you for contacting us. We'll get back to you as soon as possible.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <Phone className="h-4 w-4" />
                    <span>+234 123 456 7890</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
                    <Mail className="h-4 w-4" />
                    <span>info@hydroferric.com</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Footer */}
          <div className="bg-gray-100 dark:bg-gray-700 p-2 text-center text-xs text-gray-500 dark:text-gray-400">
            <p>Hydroferric Nigeria Limited</p>
          </div>
        </div>
      )}
    </>
  )
}

export default LiveChatWidget
