import React from "react";

const CalendarMain: React.FC = () => {

    var official = []
    var own = []

    // 더미
    official.push({ title: "축제", time: null, color: "#f2dcc2" })
    official.push({ title: "동아리 티 입금 마감", time: "~ 23:59", color: "#ff8080" })
    own.push({ title: "건물장미", start: "11:00", end: "13:00" })
    own.push({ title: "일만시간", start: "15:00", end: "17:00" })


    return (
        <div>
            <div className="border-red border-[1px] mt-[3vh] ml-[3vh] mr-[3vh]">
                <img className="h-[25vh] mr-auto ml-auto" alt="Image" src="src/assets/test/calendarEX.png" />
            </div>

            <div className="mt-[3vh] mr-auto ml-auto w-[80vw]">
                <ul>
                    {official.map((item) => (
                        <li>
                            <div className="border-b [border-bottom-style:solid] border-[#f2f2f2] flex items-center">
                                <div className={`ml-[3vh] mt-[2vh] mb-[2vh] w-[3vh] h-[3vh] rounded-full bg-[${item.color}]`} />
                                <div className="text-black text-[90%] ml-[2vh]">
                                    {item.title}
                                    <div className="text-[#7c7c7c] text-[10%]">
                                        {item.time}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                    {own.map((item) => (
                        <li>
                            <div className="border-b [border-bottom-style:solid] border-[#f2f2f2] flex items-center">
                                <div className="text-[#7c7c7c] ml-[1.5vh] text-[80%]">
                                    {item.start}
                                </div>
                                <div className="w-1 h-6 ml-[1vh] bg-[#1c2b59] rounded-[10px]" />
                                <div className="text-black text-[90%] ml-[2vh]">
                                    {item.title}
                                    <div className="text-[#7c7c7c] text-[10%]">
                                        {item.start} - {item.end}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CalendarMain