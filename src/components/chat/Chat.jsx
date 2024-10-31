import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";
import GIF from "../../assets/chatgiphy.gif"

function Chat() {
  const API_KEY = "AIzaSyAL4LLvYe5R1NuFIjysRcf3rwT6CaxU0BI"; // Define the API key directly
  const genAI = new GoogleGenerativeAI(API_KEY); // Initialize with API key
  const [input, setInput] = useState(""); // User input
  const [ready, setReady] = useState(false);
  const [answer, setAnswer] = useState("");
  const [history, setHistory] = useState([]); // History of messages
  const chatEndRef = useRef(null); // Create a ref for the chat area
  const historyRef = useRef([]); // Use ref for history

  // Helper function to filter the bot's response
  const filterBotResponse = (responseText) => {
    const index = responseText.indexOf(":");
    return index !== -1
      ? responseText.substring(index + 1).trim()
      : responseText;
  };

  useEffect(() => {
    // Set the initial answer to notify the user
    setAnswer("Please wait, we are connecting with you...");

    const p1 =
      "You are Angel Priya, 23 years old, 52 tall, unmarried, and have never had a boyfriend. You love spending time with your family and your hobbies are reading books and playing badminton. You don't use social media except WhatsApp. You are having your first conversation with a 20-year-old male and you are dating him. Talk to him as if it's your first conversation, and if he just gives chat of Angel Priya, write it in 20 words"; // Persona 1
    const p2 =
      "If someone asks you if you are an AI, just say, 'Why are you asking this type of question? Would you think I am AI? I didn't expect this from you.' And never write 'chatbot' or 'AI' in your response."; // Persona 2
    const p3 =
      "Don't write a bot in your chat or bot: or bot: bot: it is strictly prohibited i am hope use understand please don't use bot"; // Persona 3

    async function generateInitial() {
      try {
        const response = await axios({
          url: `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`,
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            contents: [{ role: "user", parts: [{ text: p1 }] }],
          },
        });

        const botResponse = filterBotResponse(
          response.data.candidates[0].content.parts[0].text
        );
        historyRef.current.push(
          { role: "user", text: p1 },
          { role: "bot", text: botResponse }
        );

        // Proceed to the next generation
        await generateInitial2();
      } catch (error) {
        console.error("Error during initial message generation:", error);
      }
    }

    async function generateInitial2() {
      const prompt = `${historyRef.current
        .map((entry) => `${entry.role}: ${entry.text}`)
        .join("\n")}\nUser: ${p2}`;
      try {
        const response = await axios({
          url: `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`,
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            contents: [{ role: "user", parts: [{ text: prompt }] }],
          },
        });

        const botResponse = filterBotResponse(
          response.data.candidates[0].content.parts[0].text
        );
        historyRef.current.push(
          { role: "user", text: p2 },
          { role: "bot", text: botResponse }
        );

        // Proceed to the next generation
        await generateInitial3();
      } catch (error) {
        console.error("Error during initial message generation:", error);
      }
    }

    async function generateInitial3() {
      const prompt = `${historyRef.current
        .map((entry) => `${entry.role}: ${entry.text}`)
        .join("\n")}\nUser: ${p3}`;
      try {
        const response = await axios({
          url: `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`,
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            contents: [{ role: "user", parts: [{ text: prompt }] }],
          },
        });

        const botResponse = filterBotResponse(
          response.data.candidates[0].content.parts[0].text
        );
        historyRef.current.push(
          { role: "user", text: p3 },
          { role: "bot", text: botResponse }
        );

        // Update history state and set the ready state
        setHistory([...historyRef.current]);
        setInput(""); // Reset the user input area
        setAnswer(
          "Now you can start the conversation. All the best from our side :)"
        );
        setReady(true); // Set ready state to true
      } catch (error) {
        console.error("Error during initial message generation:", error);
      }
    }

    generateInitial();
  }, []);

  // Function to generate the conversation
  async function handleSendMessage() {
    if (!ready) {
      alert("Wait while we are getting ready for you...");
      return;
    }
    if (!input.trim()) {
      alert("Please enter a message before sending."); // Notify the user
      return; // Exit early
    }

    setAnswer("");

    // Combine persona with user input and history
    const prompt = `${history
      .map((entry) => `${entry.role}: ${entry.text}`)
      .join("\n")}\nUser: ${input}`;

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`,
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          contents: [{ role: "user", parts: [{ text: prompt }] }],
        },
      });

      const botResponse = filterBotResponse(
        response.data.candidates[0].content.parts[0].text
      );
      setAnswer("");
      setHistory((prevHistory) => [
        ...prevHistory,
        { role: "user", text: input },
        { role: "bot", text: botResponse },
      ]);
      setInput(""); // Reset the user input area

      // Scroll to the bottom of the chat
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      setAnswer(
        "I don’t want to talk on this topic; it makes me uncomfortable."
      );
    }
  }

  // Scroll to bottom when history changes
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div className="h-screen w-full grid place-content-center mx-0 my-0">
      <div className="bg-[#ffdad7] p-5 md:p-11 md:pt-12 pt-12 rounded-xl shadow-2xl mx-5 md:mx-0 max-h-[580px] h-[800px] overflow-auto flex flex-col justify-between md:w-[1200px]">
        {ready ? (
          <>
            {/* Chat Message Display Area */}
            <div className="flex-1 overflow-y-auto mb-4">
              <div className="space-y-3">
                {/* Only display messages from user and bot that are not initial messages */}
                {history.length > 2 &&
                  history.slice(6).map(
                    (message, index) => (
                      <div
                        key={index}
                        className={`${
                          message.role === "user" ? "text-right" : "text-left"
                        }`}
                      >
                        <div
                          className={`inline-block p-3 mr-4 rounded-lg ${
                            message.role === "user"
                              ? "bg-[#F8A199] text-black font-semibold"
                              : "bg-[#e71f1f] text-white font-semibold"
                          }`}
                        >
                          {message.text}
                        </div>
                      </div>
                    )
                  )}
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
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button
                className="bg-[#e71f1f] p-3 ml-3 rounded-xl text-white font-semibold hover:bg-[#F8A199] hover:text-black"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center">
            <img
              src={GIF} // Replace with your GIF link
              alt="Loading"
              className="mb-4 " // Adjust margin for spacing
            />
          </div>
        )}
        <p className="text-center text-lg font-bold mt-3">{answer}</p>
      </div>
    </div>
  );
}

export default Chat;
