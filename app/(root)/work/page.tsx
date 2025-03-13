import { Carousel } from "flowbite-react";
import { MongoDBClient } from "@/lib/utils";
export default async function Page() {
    const client = MongoDBClient();
    const db = (await client).db('hittesh_ahuja_cv');
    const collection = db.collection("experience");
    const data = await collection.find().toArray();
    console.log("Data is...");
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">My Work</h1>

                {/* Featured Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project Card 1 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src="/project1.jpg" alt="Project 1" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Project Title</h3>
                            <p className="text-gray-600">Brief project description</p>
                            <div className="mt-4 flex gap-2">
                                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">React</span>
                                <span className="px-2 py-1 bg-green-100 text-green-800 rounded">Node.js</span>
                            </div>
                        </div>
                    </div>

                    {/* Live Demo Section */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Interactive Demo</h3>
                        <div className="aspect-video bg-gray-200 rounded-lg">
                            {/* Add live demo component here */}
                        </div>
                    </div>

                    {/* Code Snippets Section */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Code Highlights</h3>
                        <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                            {/* Add code snippet here */}
                        </pre>
                    </div>
                </div>
                {/* Search bar for projects */}

                {/* Skills & Technologies Also provide a search button that filters the values on the client side*/}
                <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills & Technologies</h2>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">React</span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded">Node.js</span>
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded">JavaScript</span>
                        <span className="px-2 py-1 bg-red-100 text-red-800 rounded">HTML</span>
                        <span className="px-2 py-1 bg-pink-100 text-pink-800 rounded">CSS</span>
                    </div>
                </div>

                {/* Companies section - Show each company with their logo in a scrolling card. use flowbite carousel component to do this */}
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel>
                        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                    </Carousel>
                </div>
                {data.map((item: any) => {
                    return (
                        <div key={item._id}>
                            <h1>{item.name}</h1>
                            <h1>{item.description}</h1>
                            <h1>{item.years}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}        