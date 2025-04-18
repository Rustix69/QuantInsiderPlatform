import React from 'react'
import { Link } from 'react-router-dom'
import { RainbowButton } from './ui/rainbow-button';

const Card = ({ path, title, description, link }) => {
    return (
        <div className="card-container w-full h-full flex flex-col">
            <div className="card-content relative backdrop-blur-lg rounded-lg shadow-lg border border-black overflow-hidden animate-fade-in-bounce flex flex-col h-full">
                <img
                    src={path}
                    alt={title}
                    className="card-image w-auto h-70 object-cover rounded-xl p-2"
                />
                <div className="p-4 text-center flex flex-col flex-grow justify-between">
                    <div>
                        <h2 className="card-title text-xl font-extrabold text-black mb-2">{title}</h2>
                        <p className="card-description text-gray-600 mb-4 leading-tight whitespace-pre-line flex-grow">{description}</p>
                    </div>
                    <div className="mt-auto">
                        <Link to={link} target="_blank">
                            <RainbowButton>Get the Course</RainbowButton>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card