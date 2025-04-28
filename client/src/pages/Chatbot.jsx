import React, { useEffect, useRef, useState } from "react";
import "./Chatbox.css";
import Chatboticon from "./Chatboticon";
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";
import Navbar from "../components/Navbar";

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    const updateHistory = (text) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text },
      ]);
    };

    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    try {
      const response = await fetch(import.meta.env.VITE_API_KEY, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: history }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error.message || "Something went wrong");

      const apiResponseText = data.candidates[0].content.parts[0].text.trim();
      updateHistory(apiResponseText);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
  }, [chatHistory]);

  return (
    <>
      <Navbar />
      <div className="chatbot-container">
        <div className="chatbot-popup">
          {/* Header */}
          <div className="chat-header">
            <div className="header-info">
              <Chatboticon />
              <h2 className="logo-text">Chatbot</h2>
            </div>
          </div>

          {/* Chat Body */}
          <div ref={chatBodyRef} className="chat-body">
            <ChatMessage chat={{ role: "model", text: "Hey There 👋👋 How can I help you today?" }} />
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}
          </div>

          {/* Chat Input Form */}
          <div className="chat-footer">
            <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;



