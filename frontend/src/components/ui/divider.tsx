import type React from 'react';

interface DividerProps {
    className?: string;
    color?: 'gray' | 'white' | 'black' | 'blue';
    thickness?: 'thin' | 'medium' | 'thick';
}

const Divider: React.FC<DividerProps> = ({
    className = '',
    color = 'gray',
    thickness = 'thin'
}) => {
    const colorClasses = {
        gray: 'border-gray-400',
        white: 'border-white',
        black: 'border-black',
        blue: 'border-blue-500'
    };

    const thicknessClasses = {
        thin: 'border-t',
        medium: 'border-t-2',
        thick: 'border-t-4'
    };

    return (
        <hr className={`w-full ${thicknessClasses[thickness]} ${colorClasses[color]} ${className}`} />
    );
};

export default Divider;