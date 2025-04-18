import React from 'react'

const TeamCard = ({ image, name, role, description }) => {
    return (
        <div className="team-card w-full">
            <div className="card-content relative backdrop-blur-lg rounded-lg shadow-lg border border-black overflow-hidden animate-fade-in-bounce">
                <div className="overflow-hidden h-64 flex items-center justify-center">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-t-lg"
                    />
                </div>
                <div className="p-4 text-center">
                    <h2 className="card-title text-xl font-extrabold text-black">{name}</h2>
                    <h3 className="card-role text-lg font-semibold text-gray-700 mb-2">{role}</h3>
                    <p className="card-description text-gray-600 mb-4 leading-tight whitespace-pre-line">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default TeamCard 