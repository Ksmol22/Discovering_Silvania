import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import osoImg from '../assets/oso.png';
import { X, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! I am the Silvania Spectacled Bear. How can I help you discover our beautiful town today?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (text) => {
    const lowerText = text.toLowerCase();
    
    // Knowledge Base Rules
    if (lowerText.includes('history') || lowerText.includes('found') || lowerText.includes('old') || lowerText.includes('age') || lowerText.includes('year') || lowerText.includes('when')) {
      return "Silvania was founded on February 21, 1935, by Ismael Silva and the campesinos of the historic Hacienda El Chocho. It's known as the 'Land of Promise'.";
    }
    if (lowerText.includes('weather') || lowerText.includes('climate') || lowerText.includes('temperature') || lowerText.includes('hot') || lowerText.includes('cold')) {
      return "Silvania enjoys a wonderful climate! The average temperature is 20°C (68°F), thanks to its altitude of 1,470 meters above sea level.";
    }
    if (lowerText.includes('food') || lowerText.includes('eat') || lowerText.includes('restaurant') || lowerText.includes('hungry')) {
      return "You must try our local cuisine! We recommend Rancho Mi Tenanpa, Restaurante Embajada Paisa, Choriloco, or Castillo Azul. Check out the Interactive Map for exact locations.";
    }
    if (lowerText.includes('sleep') || lowerText.includes('stay') || lowerText.includes('glamping') || lowerText.includes('hotel') || lowerText.includes('rest')) {
      return "For a great stay, we highly recommend our nature glampings like URQU Glamping, Primavera Azul Glamping, or Posada Bromelias with views of the Sumapaz canyon.";
    }
    if (lowerText.includes('place') || lowerText.includes('visit') || lowerText.includes('tourism') || lowerText.includes('see') || lowerText.includes('monument')) {
      return "Don't miss the Monumento al Campesino, Alto de la Virgen for panoramic views, the historic Petroglifos Ancestrales, and the Puente de Colores. You can find them all on our Interactive Map!";
    }
    if (lowerText.includes('map') || lowerText.includes('location') || lowerText.includes('where') || lowerText.includes('how to get')) {
      return "Silvania is located in Cundinamarca, just 44 km from Bogotá. You can use the Interactive Map section on this website to navigate to specific stores, glampings, and monuments.";
    }
    if (lowerText.includes('population') || lowerText.includes('people') || lowerText.includes('inhabitant')) {
      return "Silvania is home to a warm and welcoming community of over 21,000 inhabitants.";
    }
    if (lowerText.includes('culture') || lowerText.includes('symbol') || lowerText.includes('anthem') || lowerText.includes('flag') || lowerText.includes('shield')) {
      return "Our cultural identity is rich. Our flag features green, white, and red stripes. Our shield represents agriculture and faith, and our anthem sings to the 'Tierra de Promisión'. Visit the History & Identity page for more!";
    }
    if (lowerText.includes('coffee') || lowerText.includes('cafe')) {
      return "Coffee is deeply rooted in our traditions! The campesinos of Silvania take pride in growing high-quality coffee in our fertile soils.";
    }
    if (lowerText.includes('hello') || lowerText.includes('hi') || lowerText.includes('hey')) {
      return "Hello there! Ask me anything about Silvania's history, places to visit, where to eat, or where to stay.";
    }

    // Default Fallback - Strict Context Check
    return "I am the Silvania Guide Bear. I am specially programmed to only answer questions related to the beautiful municipality of Silvania, its history, tourism, and culture. I cannot answer questions outside of this topic.";
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMsg = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate bot response delay
    setTimeout(() => {
      const responseText = getBotResponse(userMsg.text);
      setMessages(prev => [...prev, { sender: 'bot', text: responseText }]);
    }, 800);
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <img src={osoImg} alt="Osito" className="chat-avatar" />
              <div>
                <h4>Guide Bear</h4>
                <span>Online</span>
              </div>
            </div>
            <button className="close-btn" onClick={toggleChat}>
              <X size={20} />
            </button>
          </div>
          
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message-bubble ${msg.sender}`}>
                <p>{msg.text}</p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form className="chat-input-area" onSubmit={handleSend}>
            <input 
              type="text" 
              placeholder="Type your question..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="send-btn">
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
      
      <button className={`chat-toggle-btn ${isOpen ? 'open' : ''}`} onClick={toggleChat}>
        <img src={osoImg} alt="Oso Chat" className="oso-icon" />
        {!isOpen && <span className="chat-tooltip">Ask me!</span>}
      </button>
    </div>
  );
};

export default Chatbot;
