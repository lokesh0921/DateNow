import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { GoogleGenerativeAI } from "@google/generative-ai";

function Chat() {
  const API_KEY = 'AIzaSyAL4LLvYe5R1NuFIjysRcf3rwT6CaxU0BI'; // Define the API key directly
  const genAI = new GoogleGenerativeAI(API_KEY); // Initialize with API key
  const [input, setInput] = useState(""); // Renamed from 'question' to 'input' for clarity
  const [answer, setAnswer] = useState("");
  const [history, setHistory] = useState([]);
  const chatEndRef = useRef(null); // Create a ref for the chat area

  useEffect(() => {
    setAnswer('Please wait, we are connecting with you...');

    const p1 = "You are Angel Priya, 23 years old, 52 tall, unmarried, and have never had a boyfriend. You love spending time with your family and your hobbies are reading books and playing badminton. You don't use social media except WhatsApp. You are having your first conversation with a 20-year-old male and you are dating him. Talk to him as if it's your first conversation, and if he just gives chat of Angel Priya, write it in 20 words.";
    const p2 = "If someone asks you if you are an AI, just say, 'Why are you asking this type of question? Would you think I am AI? I didn't expect this from you.' And never write 'chatbot' or 'AI' in your response. Instead, say 'I can't meet physically but I'm always here for you if you want.'";

    async function generateInitial() {
      try {
        const response = await axios({
          url: `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`,
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          data: {
            "contents": [
              { "role": "user", "parts": [{ "text": p1 }] }
            ]
          }
        });

        const botResponse = response.data.candidates[0].content.parts[0].text;
        setHistory((prevHistory) => [...prevHistory, { role: 'user', text: p1 }, { role: 'bot', text: botResponse }]);

      } catch (error) {
        console.error('Error during initial message generation:', error);
      }
    }

    async function generateInitial2() {
      const prompt = `${history.map(entry => `${entry.role}: ${entry.text}`).join("\n")}\nUser: ${p2}`;
      try {
        const response = await axios({
          url: `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`,
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          data: {
            "contents": [
              { "role": "user", "parts": [{ "text": prompt }] }
            ]
          }
        });

        const botResponse = response.data.candidates[0].content.parts[0].text;
        setHistory((prevHistory) => [...prevHistory, { role: 'user', text: p2 }, { role: 'bot', text: botResponse }]);
        setInput(""); // Reset the user input area
        setAnswer('Now you can start the conversation. All the best from our side :)');
      } catch (error) {
        console.error('Error during initial message generation:', error);
      }
    }

    generateInitial();
    generateInitial2();
  }, []);

  // Function to generate the conversation
  async function handleSendMessage() {
    setAnswer('Typing...');
    
    // Combine persona with user input and history
    const prompt = `${history.map(entry => `${entry.role}: ${entry.text}`).join("\n")}\nUser: ${input}`;

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`,
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          "contents": [
            { "role": "user", "parts": [{ "text": prompt }] }
          ]
        }
      });

      const botResponse = response.data.candidates[0].content.parts[0].text;
      setAnswer(botResponse); // Set answer directly
      setHistory((prevHistory) => [...prevHistory, { role: 'user', text: input }, { role: 'bot', text: botResponse }]); // Add both to history
      setInput(""); // Reset the user input area

      // Scroll to the bottom of the chat
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      setAnswer('I don’t want to talk on this topic; it makes me uncomfortable.');
    }
  }

  // Scroll to bottom when history changes
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="h-screen w-full grid place-content-center mx-0 my-0">
      <div className="bg-[#ffdad7] p-5 md:p-11 md:pt-12 pt-12 rounded-xl shadow-2xl mx-5 md:mx-0 max-h-[580px] h-[800px] overflow-auto flex flex-col justify-between md:w-[1200px]">
        
        {/* Chat Message Display Area */}
        <div className="flex-1 overflow-y-auto mb-4">
          <div className="space-y-3">
            {history.map((message, index) => (
              <div key={index} className={`${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-3 mr-4 rounded-lg ${message.role === 'user' ? 'bg-[#F8A199] text-black font-semibold' : 'bg-[#e71f1f] text-white font-semibold'}`}>
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} /> {/* Scroll target */}
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
            type="submit"
            onClick={handleSendMessage}
            className="md:text-base ml-3 bg-orange-700 hover:bg-blue-dark text-white font-bold p-3 px-7 md:px-6 md:py-3 mb-8 rounded-lg mt-8 hover:bg-orange-600 transition ease-in-out duration-300"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
