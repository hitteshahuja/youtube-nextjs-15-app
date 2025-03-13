import ChatbotComponent from "../chatbot/Chatbot";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            {children}
            <div className="flex flex-col items-center pt-10">
                <ChatbotComponent />
            </div>
            {/* Contact Section */}
            <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <div className="flex gap-4">
                    <a href="#" className="text-blue-500 hover:text-blue-700">LinkedIn</a>
                    <a href="#" className="text-blue-500 hover:text-blue-700">GitHub</a>
                    <a href="#" className="text-blue-500 hover:text-blue-700">Email</a>
                </div>
            </div>
        </div>

    )
}
export default Layout
