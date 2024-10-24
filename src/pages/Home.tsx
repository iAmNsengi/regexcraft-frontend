// src/pages/Home.tsx
import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="bg-warmCream min-h-screen">
            <header className="bg-burntOrange text-white py-8">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-2">African International Short Film Market</h1>
                    <p className="text-lg">Connecting African short films with global audiences</p>
                </div>
            </header>

            <section className="container mx-auto py-12">
                <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">For Filmmakers</h3>
                        <p>Discover, promote, and distribute the best of African short films to local and international buyers.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">For Buyers/Distributors</h3>
                        <p>Explore and acquire content, featuring deals on short films.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">Workshops & Events</h3>
                        <p>Join upcoming events, pitch sessions, and networking opportunities.</p>
                    </div>
                </div>
            </section>

            <section className="bg-burntOrange text-white py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Featured Films</h2>
                    <p className="mb-4">Showcasing curated collections of African short films.</p>
                    <button className="bg-goldenYellow text-richBlack rounded px-4 py-2 hover:bg-burntOrange transition duration-300">
                        Explore Films
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;
