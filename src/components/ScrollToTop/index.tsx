import { useEffect, useState, useCallback, useMemo } from "react";
import { FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";
import { IoChatbubbleEllipses, IoClose, IoSend } from "react-icons/io5";

// Constants
const CONTACT_INFO = {
  phone: "7979733414",
  instagram: "https://www.instagram.com/jobcare.patna?igsh=cGpsdmU5MG92Y3Zi",
  whatsappMessage: "Hi! I'm interested in your job placement services. Can you help me find suitable job opportunities?"
};

const INITIAL_MESSAGE = { text: "👋 Hello! Ask me about jobs, placement process, or timeline.", isBot: true };

// Bot response logic
const getBotResponse = (query, phoneNumber) => {
  const lowerQuery = query.toLowerCase();
  
  const responses = {
    whatsapp: () => `📱 WhatsApp Number: +91 ${phoneNumber}\nClick the WhatsApp icon on the right to chat directly!`,
    call: () => `📞 Call Us: +91 ${phoneNumber}\nClick the call icon on the right to dial directly!`,
    jobs: () => "We have 50+ job openings in IT, Banking, Healthcare, BPO, and more industries. Check our job portal for current listings!",
    process: () => "Our process: 1) Submit your resume 2) Profile matching 3) Interview preparation 4) Job placement. Contact us for personalized assistance!",
    timeline: () => "Average placement time is 15 days! With our 500+ partner companies and 98% success rate, we ensure quick job placement.",
    salary: () => "Salary ranges from ₹10,000 to ₹55,000+ per month depending on role and experience. We also help with salary negotiations!",
    default: () => "I can help with job availability, placement process, timeline, and salary info. For detailed assistance, contact us via WhatsApp!"
  };

  if (lowerQuery.includes("whatsapp") || lowerQuery.includes("whats app")) return responses.whatsapp();
  if (["call", "phone", "mobile", "number"].some(term => lowerQuery.includes(term))) return responses.call();
  if (["job", "available"].some(term => lowerQuery.includes(term))) return responses.jobs();
  if (lowerQuery.includes("how") && ["get", "find"].some(term => lowerQuery.includes(term))) return responses.process();
  if (["day", "time", "long"].some(term => lowerQuery.includes(term))) return responses.timeline();
  if (["salary", "pay"].some(term => lowerQuery.includes(term))) return responses.salary();
  
  return responses.default();
};

// Icon component with tooltip
const IconButton = ({ onClick, ariaLabel, className, children, size = "md", tooltip, tooltipSide = "left" }) => {
  const sizeClasses = size === "sm" ? "h-8 w-8 md:h-10 md:w-10" : "h-10 w-10 md:h-12 md:w-12";
  const tooltipPosition = tooltipSide === "left" ? "right-full mr-2" : "left-full ml-2";
  
  return (
    <div className="relative group">
      <div
        onClick={onClick}
        aria-label={ariaLabel}
        className={`flex cursor-pointer items-center justify-center rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-110 ${sizeClasses} ${className}`}
      >
        {children}
      </div>
      {tooltip && (
        <div className={`absolute ${tooltipPosition} top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50`}>
          <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            {tooltip}
          </div>
        </div>
      )}
    </div>
  );
};



// Chatbot Modal Component
const ChatbotModal = ({ showChatbot, setShowChatbot, messages, inputText, setInputText, onSendMessage }) => {
  if (!showChatbot) return null;

  return (
    <div className="fixed bottom-20 left-4 z-[9999] md:bottom-24 md:left-8">
      <div className="w-80 max-w-[calc(100vw-2rem)] rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-800">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600">
              <IoChatbubbleEllipses className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">AI Assistant</h3>
              <p className="text-xs text-green-500">Online</p>
            </div>
          </div>
          <button
            onClick={() => setShowChatbot(false)}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <IoClose className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="max-h-64 space-y-3 overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
              <div className={`max-w-[80%] rounded-lg p-3 text-sm ${
                message.isBot
                  ? "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                  : "bg-blue-500 text-white"
              }`}>
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="border-t border-gray-200 p-4 dark:border-gray-700">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && onSendMessage()}
              placeholder="Ask about jobs, process, timeline..."
              className="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
            <button
              onClick={onSendMessage}
              className="rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
            >
              <IoSend className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputText, setInputText] = useState("");

  // Memoized handlers
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleWhatsApp = useCallback(() => {
    window.open(
      `https://wa.me/91${CONTACT_INFO.phone}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`,
      "_blank"
    );
  }, []);

  const handleCall = useCallback(() => {
    window.open(`tel:+91${CONTACT_INFO.phone}`);
  }, []);

  const handleInstagram = useCallback(() => {
    window.open(CONTACT_INFO.instagram, "_blank");
  }, []);

  const handleAIChat = useCallback(() => {
    setShowChatbot(prev => !prev);
  }, []);

  const handleSendMessage = useCallback(() => {
    if (!inputText.trim()) return;

    const userMessage = { text: inputText, isBot: false };
    const botResponse = { text: getBotResponse(inputText, CONTACT_INFO.phone), isBot: true };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputText("");
  }, [inputText]);

  // Scroll visibility effect
  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.pageYOffset > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Memoized social icons data
  const socialIcons = useMemo(() => [
    {
      onClick: handleInstagram,
      ariaLabel: "Instagram",
      className: "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700",
      icon: FaInstagram,
      tooltip: "Follow Us"
    },
    {
      onClick: handleWhatsApp,
      ariaLabel: "WhatsApp",
      className: "bg-green-500 text-white hover:bg-green-600",
      icon: FaWhatsapp,
      tooltip: "Chat with Us"
    },
    {
      onClick: handleCall,
      ariaLabel: "Call",
      className: "bg-blue-500 text-white hover:bg-blue-600",
      icon: FaPhone,
      tooltip: "Call Us"
    }
  ], [handleInstagram, handleWhatsApp, handleCall]);

  return (
    <>
      <ChatbotModal
        showChatbot={showChatbot}
        setShowChatbot={setShowChatbot}
        messages={messages}
        inputText={inputText}
        setInputText={setInputText}
        onSendMessage={handleSendMessage}
      />

      {/* Left Side Icons */}
      <div className="fixed bottom-4 left-4 z-99 md:bottom-8 md:left-8">
        <div className="flex flex-col space-y-2 md:space-y-3">
          <IconButton
            onClick={handleAIChat}
            ariaLabel="AI Chatbot"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700"
            tooltip="AI Assistant"
            tooltipSide="right"
          >
            <IoChatbubbleEllipses className="h-5 w-5 md:h-6 md:w-6" />
          </IconButton>

          {isVisible && (
            <IconButton
              onClick={scrollToTop}
              ariaLabel="scroll to top"
              className="bg-primary/80 hover:shadow-signUp text-white shadow-md rounded-md"
              size="sm"
              tooltip="Scroll to Top"
              tooltipSide="right"
            >
              <span className="mt-[4px] h-2 w-2 rotate-45 border-t border-l border-white md:mt-[6px] md:h-3 md:w-3" />
            </IconButton>
          )}
        </div>
      </div>

      {/* Right Side Icons */}
      <div className="fixed bottom-4 right-4 z-99 md:bottom-8 md:right-8">
        <div className="flex flex-col space-y-2 md:space-y-3">
          {socialIcons.map((iconData, index) => {
            const IconComponent = iconData.icon;
            return (
              <IconButton key={index} onClick={iconData.onClick} ariaLabel={iconData.ariaLabel} className={iconData.className} tooltip={iconData.tooltip}>
                <IconComponent className="h-5 w-5 md:h-6 md:w-6" />
              </IconButton>
            );
          })}
        </div>
      </div>
    </>
  );
}