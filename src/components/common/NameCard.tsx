import React from "react";

interface NameCardProps {
  nameList: string[];
  onRemoveName: (name: string) => void; // 외부에서 이름을 삭제하는 함수
}

const NameCard: React.FC<NameCardProps> = ({ nameList, onRemoveName }) => {
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
