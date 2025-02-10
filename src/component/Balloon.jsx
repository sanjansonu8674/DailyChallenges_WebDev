import React, { useEffect, useState } from "react";
import BalloonPageImage from '../image/BalloonPageImage.jpg';

const Balloon = () => {
    const [balloons, setBalloons] = useState([]);

    // Array of 7 predefined colors
    const colors = [
        "#FF5733",
        "#33FF57",
        "#3357FF",
        "#F1C40F",
        "#9B59B6",
        "#FF1493",
        "#00CED1",
    ];

    // Generate a random number between a range
    const randomBetween = (min, max) => Math.random() * (max - min) + min;

    // Generate a lot of balloons with random properties
    useEffect(() => {
        const generateBalloons = () => {
            const balloonArray = [];
            for (let i = 0; i < 50; i++) {
                balloonArray.push({
                    id: i,
                    color: colors[Math.floor(randomBetween(0, colors.length))], // Random color from the array
                    size: randomBetween(30, 100), // Random size (width/height)
                    position: randomBetween(0, 100), // Random horizontal position
                    delay: randomBetween(0, 5), // Random animation delay
                    duration: randomBetween(6, 10), // Random animation duration
                });
            }
            setBalloons(balloonArray);
        };

        generateBalloons();
    }, []);

    return (
        <div>
            {/* Animation Area */}
            <div className="relative h-screen bg-gradient-to-b from-blue-300 to-yellow ">
                
                {/* Balloons */}
                {balloons.map((balloon) => (
                    <div
                        key={balloon.id}
                        style={{
                            backgroundColor: balloon.color, // Using the random color from predefined colors
                            width: `${balloon.size}px`,
                            height: `${balloon.size }px`,
                            left: `${balloon.position}%`, // Random horizontal positioning
                            animationDelay: `${balloon.delay}s`,
                            animationDuration: `${balloon.duration}s`,
                        }}
                        className="absolute bottom-0 rounded-full animate-float shadow-lg z-10" // z-10 ensures balloons are on top
                    >
                        {/* Balloon String */}
                        <div
                            className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-gray-700"
                            style={{
                                width: "2px",
                                height: `${balloon.size / 3}px`,
                            }}
                        ></div>
                    </div>
                ))}

                {/* Background Images */}
                <div className="absolute inset-0 z-0 flex justify-center items-center opacity-80">
                    <img
                        src={BalloonPageImage}
                        alt="Balloon Background"
                        className="h-1/3 w-1/3 object-cover rounded-lg"
                    />
                    <img
                        src={BalloonPageImage}
                        alt="Balloon Background"
                        className="h-1/3 w-1/3 object-cover rounded-lg"
                    />
                    <img
                        src={BalloonPageImage}
                        alt="Balloon Background"
                        className="h-1/3 w-1/3 object-cover rounded-lg"
                    />
                </div>
            </div>

            {/* Second Page */}
            <div className="absolute bg-gradient-to-b from-blue-600 to-yellow h-screen w-full opacity-0"></div>
        </div>
    );
};

export default Balloon;
