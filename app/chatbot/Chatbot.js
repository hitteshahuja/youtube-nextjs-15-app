"use client";
import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./ChatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import { MessageCircle, X } from "lucide-react";
// Custom message component to handle maps
const CustomMessage = (props) => {
    const { message, maps } = props;
    console.log("Message:", message);
    return (
        <div className="message-container">
            <div className="message-text">{message}</div>
            {maps && (
                <div className="map-container mt-2">
                    {maps.embedUrl && (
                        <iframe
                            src={maps.embedUrl}
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg"
                        />
                    )}
                    {maps.mapsUrl && (
                        <a
                            href={maps.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 text-sm mt-1 block"
                        >
                            View on Google Maps
                        </a>
                    )}
                </div>
            )}
        </div>
    );
};
const ChatbotComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    // Update the config to use custom message component

    return (
        <div className="fixed bottom-6 right-6 flex flex-col items-end" >
            {/* Chatbot Toggle Button */}
            < button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </button >

            {/* Chatbot Window with Dynamic Height */}
            < div
                className={`fixed bottom-16 right-6 w-80 max-h-[80vh] bg-white shadow-xl rounded-xl overflow-hidden border border-gray-300 transform transition-all duration-300 flex flex-col ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
                    }`}
            >
                {/* Header Bar */}
                < div className="bg-blue-600 text-white p-3 font-bold flex justify-between items-center" >
                    <span>Chat with me</span>
                    <button onClick={() => setIsOpen(false)} className="hover:text-gray-200 transition">
                        <X size={20} />
                    </button>
                </div >

                {/* Chatbot Content (Flexible Height) */}
                < div className="flex-1 overflow-y-auto p-2" >
                    <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
                </div >
            </div >
        </div >
    );
};

export default ChatbotComponent;
