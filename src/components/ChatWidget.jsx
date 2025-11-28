import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { searchKnowledgeBase, getSuggestedQuestions } from '../utils/chatAgent';

const ChatWidget = () => {
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! 👋 I'm here to help you learn more about my environmental work. Feel free to ask me anything!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    "What is your primary focus?",
    "How can I get involved?",
    "Tell me about your research",
    "Do you offer mentorship?"
  ];

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Add typing indicator
    const typingMessage = {
      type: 'bot',
      text: '...',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isTyping: true
    };
    setMessages(prev => [...prev, typingMessage]);

    // Search knowledge base with intelligent agent
    setTimeout(() => {
      const result = searchKnowledgeBase(text);
      
      // Remove typing indicator and add actual response
      setMessages(prev => {
        const withoutTyping = prev.filter(msg => !msg.isTyping);
        const botMessage = {
          type: 'bot',
          text: result.answer,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          source: result.source,
          confidence: result.confidence
        };
        return [...withoutTyping, botMessage];
      });
    }, 800);
  };

  const handleQuickReply = (reply) => {
    handleSendMessage(reply);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 ${
          isDark 
            ? 'bg-air-blue text-white hover:bg-air-blue/90' 
            : 'bg-deep-teal text-white hover:bg-deep-teal/90'
        }`}
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaComments size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] rounded-2xl shadow-2xl overflow-hidden ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}
          >
            {/* Chat Header */}
            <div className={`p-4 ${
              isDark ? 'bg-air-blue' : 'bg-deep-teal'
            }`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <FaComments className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold">Chat with Me</h3>
                  <p className="text-white/80 text-xs">Typically replies instantly</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              </div>
            </div>

            {/* Messages Area */}
            <div className={`h-96 overflow-y-auto p-4 space-y-4 ${
              isDark ? 'bg-gray-900' : 'bg-gray-50'
            }`}>
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                    <div className={`rounded-2xl px-4 py-2 ${
                      message.type === 'user'
                        ? isDark 
                          ? 'bg-air-blue text-white' 
                          : 'bg-deep-teal text-white'
                        : isDark
                          ? 'bg-gray-800 text-gray-200 border border-gray-700'
                          : 'bg-white text-gray-800 border border-gray-200'
                    }`}>
                      {message.isTyping ? (
                        <div className="flex gap-1 py-1">
                          <motion.span
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                            className="w-2 h-2 bg-current rounded-full"
                          />
                          <motion.span
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                            className="w-2 h-2 bg-current rounded-full"
                          />
                          <motion.span
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                            className="w-2 h-2 bg-current rounded-full"
                          />
                        </div>
                      ) : (
                        <>
                          <p className="text-sm leading-relaxed">{message.text}</p>
                          {message.source && message.type === 'bot' && (
                            <p className={`text-xs mt-2 italic opacity-60`}>
                              Source: {message.source}
                            </p>
                          )}
                        </>
                      )}
                    </div>
                    {!message.isTyping && (
                      <p className={`text-xs mt-1 ${
                        message.type === 'user' ? 'text-right' : 'text-left'
                      } ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                        {message.time}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Quick Replies */}
              {messages.length === 1 && (
                <div className="space-y-2">
                  <p className={`text-xs font-semibold ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Quick replies:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.map((reply, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickReply(reply)}
                        className={`text-xs px-3 py-2 rounded-full border transition-all duration-200 hover:scale-105 ${
                          isDark
                            ? 'border-air-blue text-air-blue hover:bg-air-blue hover:text-white'
                            : 'border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white'
                        }`}
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className={`p-4 border-t ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className={`flex-1 px-4 py-2 rounded-full border outline-none transition-all ${
                    isDark
                      ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-air-blue'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-deep-teal'
                  }`}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-full transition-colors ${
                    isDark
                      ? 'bg-air-blue text-white hover:bg-air-blue/90'
                      : 'bg-deep-teal text-white hover:bg-deep-teal/90'
                  }`}
                  aria-label="Send message"
                >
                  <FaPaperPlane size={16} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
