import React, { useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput(''); // Clear input field after sending
    }
  };

  return (
    <div className="h-screen w-full grid place-content-center mx-0 my-0">
      <div className="bg-[#ffdad7] p-5 md:p-11 md:pt-12 pt-12 rounded-xl shadow-2xl mx-5 md:mx-0 max-h-[580px] h-[800px] overflow- md:w-[1200px] overflow-auto flex flex-col justify-between">
        
        {/* Chat Message Display Area */}
        <div className="flex-1 overflow-y-auto mb-4">
          <div className="space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${
                  message.sender === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <div
                  className={`inline-block p-3 mr-4 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-[#F8A199] text-black font-semibold'
                      : 'bg-gray-300 text-black'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Input Area */}
        <div className="flex items-center">
          <input
            type="text"
            className="flex-1 p-3 border border-gray-400 focus:outline-none rounded-xl min-w-[100px]"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
          />
          <button
                        type="submit" onClick={handleSendMessage}
                        className="md:text-base ml-3 bg-orange-700 hover:bg-blue-dark text-white font-bold p-3  px-7 md:px-6 md:py-3 mb-8 rounded-lg mt-8 hover:bg-orange-600 transition ease-in-out duration-300"
                >
                    Send
                </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
