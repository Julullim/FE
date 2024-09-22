import React from "react";

interface NameCardProps {
  nameList: string[] | null; 
  onRemoveName: (name: string) => void; 
}

const NameCard: React.FC<NameCardProps> = ({ nameList, onRemoveName }) => {
  if (!nameList || nameList.length === 0) {
    return null;
  }

  return (
    <div className="flex gap-[2.3vw]">
      {nameList.map((name) => (
        <div key={name} className="flex text-white bg-main p-1 rounded-[10px] gap-[2vw] items-center h-[3.2vh]">
          <div className="ml-[1vw]">{name}</div>
          <div className="mr-[1vw] cursor-pointer" onClick={() => onRemoveName(name)}>X</div>
        </div>
      ))}
    </div>
  );
};

export default NameCard;
