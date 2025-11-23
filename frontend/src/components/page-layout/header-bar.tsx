import type React from "react";

const HeaderBar: React.FC = () => {
    return (
        <div className="w-full h-20 flex items-center justify-between px-8 bg-gradient-to-r from-[#1C1C1E] via-[#2A2A2C] to-[#1C1C1E] border-b-4 border-[#F99E1A] shadow-2xl">
            <h1 className="text-3xl font-black text-white uppercase tracking-widest">
                Overwatch <span className="text-[#F99E1A]">Hero Picker</span>
            </h1>
        </div>
    );
};

export default HeaderBar;