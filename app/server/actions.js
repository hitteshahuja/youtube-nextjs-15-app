"use server";
import axios from "axios";

export async function fetchChatbotResponse(query) {
    try {
        const response = await axios.post("http://127.0.0.1:8000/ask", { "question": query });
        console.log("Chatbot response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching chatbot response:", error);
        return { answer: "Sorry, I'm having trouble fetching the response." };
    }
}
