import type React from "react";

const LeftPanel: React.FC = () => {
    return (
        <div className="h-full w-1/4 flex flex-col items-center justify-start p-4 bg-gray-600">
            <h1 className="text-2xl font-bold">You should play...</h1>
        </div>
    );
};

export default LeftPanel;