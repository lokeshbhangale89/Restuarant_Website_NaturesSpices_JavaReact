import React, { useState, useRef, useEffect } from "react";
import "./AIAssistant.css";
import ReactMarkdown from "react-markdown";
import { getCookie } from "../../cookie";

function AiAssistant({ context = "default" }) {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const endRef = useRef(null);

  const quickSuggestions = [
    "🔥 Spicy Food",
    "🥗 Healthy",
    "🍗 High Protein",
    "🍕 Fast Food",
    "🍛 Indian"
  ];

  useEffect(() => {
    const openHandler = () => setIsOpen(true);
    window.addEventListener("open-ai", openHandler);

    return () => window.removeEventListener("open-ai", openHandler);
  }, []);

  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // ✅ REAL API CALL (replaced mock)
  const sendMessage = async (customText) => {
    const text = customText || inputMessage;
    if (!text.trim()) return;

    const token = getCookie("access_token");

    if (!token) {
      alert("Please login to use the AI assistant");
      return;
    }

    const userMessage = {
      role: "user",
      content: text,
      time: new Date().toISOString()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:4000/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        credentials: "include",
        body: JSON.stringify({
          message: text
        })
      });

      if (!response.ok) {
        throw new Error("Failed to get AI response");
      }

      const data = await response.json();

      const aiText =
        data.response ||
        (Array.isArray(data.message) && data.message[0]?.text) ||
        "I apologize, but I could not process your request.";

      const aiMessage = {
        role: "assistant",
        content: aiText,
        time: new Date().toISOString()
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error("AI Chat Error:", err);

      const errorMessage = {
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again.",
        time: new Date().toISOString()
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

      {/* Panel */}
      <div className={`ai-panel ${isOpen ? "open" : ""}`}>

        <div className="ai-box">

          {/* Header */}
          <div className="ai-header">
            <div>
              <h5>🤖 Food Assistant</h5>
              <p>Find food faster</p>
            </div>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>

          {/* Suggestions */}
          <div className="ai-suggestions">
            {quickSuggestions.map((q, i) => (
              <button key={i} onClick={() => sendMessage(q)}>
                {q}
              </button>
            ))}
          </div>

          {/* Messages */}
          <div className="ai-messages">
            {messages.length === 0 && (
              <p className="empty">Try a suggestion 👆</p>
            )}

            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.role}`}>
                {m.role === "assistant" ? (
                  <ReactMarkdown>{m.content}</ReactMarkdown>
                ) : (
                  m.content
                )}
              </div>
            ))}

            {loading && <div className="typing">Thinking...</div>}

            <div ref={endRef} />
          </div>

          {/* Input */}
          <div className="ai-input">
            <input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask for food..."
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />
            <button onClick={() => sendMessage()}>➤</button>
          </div>

        </div>
      </div>
    </>
  );
}

export default AiAssistant;