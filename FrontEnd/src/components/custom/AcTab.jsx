import { useState } from "react";

const AcTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Home", "Details"];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="bg-acWhite w-full pt-4 h-full flex flex-col">
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={index === activeTab ? "flex-1 active" : "flex-1"}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex grow justify-center items-center">
        {activeTab === 0 ? (
          <div className="rounded-full">
            <img src="https://cdn.pixabay.com/photo/2020/12/27/20/24/smile-5865208_960_720.png" width={250}/>
          </div>
        ) : (
          <div className="flex flex-col h-full w-full justify-evenly px-5">
            <div className="bg-acWhite w-full flex rounded-lg h-20"></div>
            <div className="bg-acWhite w-full flex rounded-lg h-20"></div>
            <div className="bg-acWhite w-full flex rounded-lg h-20"></div>
            <div className="bg-acWhite w-full flex rounded-lg h-20"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AcTab;
