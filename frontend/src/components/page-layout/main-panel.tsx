import type React from "react";
import RoleFilterSections from "../main-panel/filter/role-filter-sections";

const MainPanel: React.FC = () => {
    return (
        <div className="w-3/4 h-full flex flex-col items-start justify-start p-4 bg-[#0E0E0F] overflow-hidden">
            <RoleFilterSections />
        </div>
    );
};

export default MainPanel;