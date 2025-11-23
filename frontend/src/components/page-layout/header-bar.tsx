import type React from "react";

const HeaderBar: React.FC = () => {
    return (
        <div className="w-full h-20 flex flex-row items-center justify-start p-4 bg-blue-500">
            <h1 className="text-3xl font-bold">Overwatch Hero Picker</h1>
        </div>
    );
};

export default HeaderBar;