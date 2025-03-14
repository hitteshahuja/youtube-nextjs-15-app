"use client";
import { fetchChatbotResponse } from "../server/actions";

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    async handleUserMessage(message) {
        try {
            const response = await fetchChatbotResponse(message);
            // From response we get a json that looks like this : 
            //{
            // answer: {
            // text: 'Hittesh Ahuja currently resides in Wells, England, United Kingdom.',
            // maps_url: 'https://www.google.com/maps/search/Hittesh%20Ahuja%20currently%20resides%20in%20Wells%2C%20England%2C%20United%20Kingdom.',
            // embed_url: 'https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Hittesh%20Ahuja%20currently%20resides%20in%20Wells%2C%20England%2C%20United%20Kingdom.'
            //}
            // Make sure we are working with all json properties listed above.

            if (!response || !response.answer) {
                throw new Error("Invalid response format");
            }
            const messageData = {
                text: response.answer.text
            };
            // Create bot message with additional metadata for maps
            const botMessage = this.createChatBotMessage(response.answer.text);
            // render an embed if map values are present.
            console.log("Bot Message:", botMessage);
            this.setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage],
            }));
        } catch (error) {
            console.error("Error fetching chatbot response:", error);
            const botMessage = this.createChatBotMessage("Oops! Something went wrong.");

            this.setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage],
            }));
        }
    }
}

export default ActionProvider;
