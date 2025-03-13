import { createChatBotMessage } from "react-chatbot-kit";

const config = {
    botName: "CV Assistant",
    initialMessages: [createChatBotMessage("Hi! Ask me anything about my CV.")],
    customComponents: {
        botChatMessage: (props) => {
            const { message, maps } = props;
            console.log("botChatMessage props:", props); // Add this to debug
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
        }
    }
};

export default config;
