// import React, { useRef } from 'react'
// import "./Chatbox.css";

// const ChatForm = ({chatHistory,setChatHistory,generateBotResponse}) => {
//     const inputRef = useRef();
//     const handleFormSubmit = (e) =>{
//     e.preventDefault();
//     const userMessage = inputRef.current.value.trim();//Getting the input value and removing the whitespace
//     if(!userMessage)
//         return;
//     inputRef.current.value = "";//clearing the message input after getting the value
//     //Update the Chat history with the user's message
//     setChatHistory((history) => [...history, { role :"user", text:userMessage}]);
    
//     //Add a "Thinking...." placeholder for the bot's response
//     setTimeout(()=>{setChatHistory((history) => [...history, { role :"model", text:"Thinking..."}])
 
//     //call the function to generate the bot's response
//     generateBotResponse([...chatHistory,{ role :"user", text:userMessage}]);
// },600);
//     }
//   return (
//     <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
//     <input ref={inputRef} type="text" placeholder="Message..." className="message-input border-2 mt-2" required />
//     <button className="material-symbols-rounded border-2">
//         arrow_upward
//       </button>
//    </form>
//   )
// }

// export default ChatForm


import React, { useRef } from "react";
import "./Chatbox.css";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    inputRef.current.value = "";
    setChatHistory((history) => [...history, { role: "user", text: userMessage }]);

    setTimeout(() => {
      setChatHistory((history) => [...history, { role: "model", text: "Thinking..." }]);
      generateBotResponse([...chatHistory, { role: "user", text: userMessage }]);
    }, 600);
  };

  return (
    <form className="chat-form" onSubmit={handleFormSubmit}>
      <input ref={inputRef} type="text" placeholder="Type a message..." className="message-input" required />
      <button type="submit" className="send-button material-symbols-rounded">arrow_upward</button>
    </form>
  );
};

export default ChatForm;

