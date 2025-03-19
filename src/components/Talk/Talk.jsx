import React, { useState } from "react";

function Talk() {
  const [ready, setReady] = useState(true);
  const [input, setInput] = useState("");

  // Sample messages to showcase UI
  const messages = [
    { role: "user", text: "Hey there! How's it going?" },
    { role: "bot", text: "Hello! I'm here to chat. How can I help?" },
    { role: "user", text: "Tell me something interesting!" },
    { role: "user", text: "Tell me something interesting!" },
    { role: "bot", text: "Tell me something interesting!" },
    { role: "user", text: "Tell me something interesting!" },
    { role: "bot", text: "Did you know honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!" },
    { role: "bot", text: "Did you know honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!" },
    { role: "user", text: "Hey there! How's it going?" },
    { role: "bot", text: "Hello! I'm here to chat. How can I help?" },
    { role: "user", text: "Tell me something interesting!" },
    { role: "user", text: "Tell me something interesting!" },
    { role: "bot", text: "Tell me something interesting!" },
    { role: "user", text: "Tell me something interesting!" },
    { role: "bot", text: "Did you know honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!" },
    { role: "bot", text: "Did you know honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!" },
  ];

  return (
    <div className="min-h-screen w-full grid place-content-center mx-0 my-0 mb-16">
      <div className="bg-[#ffdad7] h-[80vh] p-5 md:p-11 md:pt-12 pt-12 rounded-xl shadow-2xl my-7 mx-5 md:mx-0 overflow-auto flex flex-col justify-between md:w-[1200px]">
        <div className="flex-1 overflow-y-auto mb-4">
          <div className="space-y-3">
            {messages.map((message, index) => (
              <div key={index} className={`${message.role === "user" ? "text-right" : "text-left"}`}>
                <div
                  className={`inline-block p-3 mr-4 rounded-lg ${
                    message.role === "user"
                      ? "bg-[#F8A199] text-black font-semibold"
                      : "bg-[#e71f1f] text-white font-semibold"
                  } break-words max-w-[80%]`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="text"
            className="flex-1 p-3 border border-gray-400 focus:outline-none rounded-xl min-w-[100px]"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={!ready}
          />
          <button
            className={`p-3 ml-3 rounded-xl text-white font-semibold ${
              ready ? "bg-[#e71f1f] hover:bg-[#F8A199] hover:text-black" : "bg-gray-400"
            }`}
            disabled={!ready}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Talk;
