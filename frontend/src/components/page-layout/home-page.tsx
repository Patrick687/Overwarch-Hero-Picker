import HeaderBar from "./header-bar";
import LeftPanel from "./left-panel";
import MainPanel from "./main-panel";

const HomePage: React.FC = () => {
    return (
        <div id="home-page-container" className="bg-[#0E0E0F] text-white h-screen w-screen flex flex-col">
            <HeaderBar />
            <div id="main-content-container" className="w-full flex-1 flex flex-row items-start justify-start overflow-hidden">
                <LeftPanel />
                <MainPanel />
            </div>
        </div>
    );
};

export default HomePage;