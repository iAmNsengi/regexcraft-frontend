// src/pages/Home.tsx
import React from 'react';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div className="bg-warmCream min-h-screen flex flex-col">
            <header className="bg-burntOrange text-white py-12">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-4">African International Short Film Market</h1>
                    <p className="text-lg mb-6">Connecting African short films with global audiences</p>
                    <button className="bg-goldenYellow text-richBlack rounded px-6 py-3 hover:bg-burntOrange transition duration-300">
                        Submit Your Film
                    </button>
                </div>
            </header>

            <section className="container mx-auto py-12 flex-grow">
                <h2 className="text-4xl font-bold text-center mb-8">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-2">For Filmmakers</h3>
                        <p className="text-gray-700">Discover, promote, and distribute the best of African short films to local and international buyers.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-2">For Buyers/Distributors</h3>
                        <p className="text-gray-700">Explore and acquire content, featuring deals on short films.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold mb-2">Workshops & Events</h3>
                        <p className="text-gray-700">Join upcoming events, pitch sessions, and networking opportunities.</p>
                    </div>
                </div>
            </section>

            <section className="bg-burntOrange text-white py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Featured Films</h2>
                    <p className="mb-4">Showcasing curated collections of African short films.</p>
                    <button className="bg-goldenYellow text-richBlack rounded px-6 py-3 hover:bg-burntOrange transition duration-300">
                        Explore Films
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
