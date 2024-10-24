// src/pages/Home.tsx
import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="bg-warmCream text-richBlack p-4">
            <h1 className="text-burntOrange">Welcome to AISFM</h1>
            <p className="text-deepForestGreen">Connecting African Short Films with Global Audiences</p>
            <button className="bg-goldenYellow text-richBlack rounded p-2 hover:bg-burntOrange">
                Submit Your Film
            </button>
            <button className="bg-goldenYellow text-richBlack rounded p-2 hover:bg-burntOrange">
                Explore Films
            </button>
        </div>
    );
};

export default Home;
