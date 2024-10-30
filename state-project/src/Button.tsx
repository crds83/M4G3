import React, { useState } from 'react';

interface ButtonProps {
    label: string;
}

const Button: React.FC<ButtonProps> = ({label}) => {
    const [isHovered, setIsHovered] = useState(false);

    return(
        <button
            style={{
                padding: '10px 20px',
                fontSize: '16px',
                borderRadius: '8px',
                backgroundColor: isHovered ? '#6a0dad' : '#802be2',
                color: 'white',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {label}
        </button>
    );
};
export default Button;