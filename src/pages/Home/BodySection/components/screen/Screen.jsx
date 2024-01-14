import React, { useState, useEffect } from 'react';

const Screen = () => {
    const [width, setWidth] = useState(25);
    const screenRatio = 1920 / 1080;
    const calculatedHeight = width / screenRatio;

    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth * 0.3; // Set an initial width based on the screen width
            setWidth(newWidth);
        };

        // Set initial width and add resize event listener
        handleResize();
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div
            className="bg-blue-500"
            style={{ height: `${calculatedHeight}rem`, width: `${width}rem` }}
        >
            
        </div>
    );
};

export default Screen;
