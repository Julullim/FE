import {React, useState} from "react";
import { Mobile, PC } from "../../routes/Layout";
import { Form } from "react-bootstrap";

const addDays = (date: Date, days: number) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};


const RoomReservation : React.FC = () =>{
    const [songTitle, setSongTitle] = useState<string>('곡이름');
    const [songId, setSongId] = useState<string>('');
    const [data, setData] = useState<string[]>(['무한적아','무한도전', '무한도적', '무한한', '가능한', '집', '보내줘요']);
    const [selectDate, setSelectDate] = useState<Date>(new Date());
    const [selectWeek, setSelectWeek] = useState<Date[]>([]);
    const today = new Date();


    const handleSong = (title:string) =>{

        setSongTitle(title);
        setData(null);
        console.log("노래제목!!" , songTitle)
    }

    const handleSelectWeek = () => {
        const newSelectWeek: Date[] = []; 
        let currentDate = new Date(selectDate);

        for (let i = 0; i < 14; i++) {
            newSelectWeek.push(new Date(currentDate)); 
            currentDate.setDate(currentDate.getDate() + 1); 
        }

        setSelectWeek(newSelectWeek);
        console.log(newSelectWeek); 
    };


    return(
        <div>

            <Mobile>
            <div className="mt-[2.1vh] flex flex-col items-center gap-[2.1vh]">

                <div className="w-[93vw] h-[13.3vh] border-lightgray shadow-inner-shadow-200 rounded-[0.5vh] pl-[4.2vw] pt-[2.3vh]">
                    <div className="mb-[2.2vh] font-medium">곡 이름을 입력해주세요</div>

                    <Form.Control
                        className="w-[84vw] h-[3.4vh] border-lightgray placeholder-textgray"
                        value={songTitle}
                        onChange={(e) => setSongTitle(e.target.value)}
                        placeholder={songTitle}
                    />
                    {data != null ?

                    <div className="bg-white w-[84vw] pl-[4.2vw] pt-[1vh] shadow-md rounded-b-[10px] relative z-10">
                        <div className="w-[80vw] h-[16vh] overflow-y-auto">
                            {data.map((title, id) => (
                                <div key={id} className="text-darkgray text-[1.6vh] mb-[1vh]" onClick={()=>handleSong(title)}>{title}</div>
                            ))}
                        </div>   

                    </div>


                    :
                    ''
                    }


                </div>

                <div className="w-[93vw] h-[40vh] border-lightgray shadow-inner-shadow-200 rounded-[0.5vh] pl-[4.2vw] pt-[2.3vh]">
                    <div className="mb-[2.2vh] font-medium">날짜와 시간을 선택해주세요</div>
                            
                    <div className="mt-[2.1vh] text-[#333333] font-semibold text-[1.9vh] tracking-[-0.04em] text-shadow-m3-elavationLight-1">
                        {today.getFullYear()}년 {today.getMonth()+1}월
                    </div>

                    <div className="w-[84.4vw] h-[2.1vh] mt-[2.9vh]">
                            <div className="grid grid-cols-7 mb-[1vh]">
                                {['월', '화', '수', '목', '금', '토', '일'].map((day, idx) => (
                                    <div key={idx} className="w-[12.3vw] font-regular text-[2.1vh]">{day}</div>
                                ))}
                            </div>

                    </div>


                </div>

                <div className="flex justify-center" >
                    <div className="mt-[2.1vh] flex bg-yellow justify-center items-center w-[53vw] h-[5vh] rounded-[1vh] text-[2.1vh]">
                        예약하기
                    </div>
                </div>

            </div>

            </Mobile>

            <PC>
                <div className="flex flex-col items-center gap-[2.1vh]">

                    <div className="w-[34.3vw] h-[11vh] border-lightgray shadow-inner-shadow-200 rounded-[0.5vh] pl-[1.5vw] pt-[2vh]">
                        <div className="mb-[2.2vh] text-[1.7vh] font-medium">곡 이름을 입력해주세요</div>

                        <Form.Control
                            className="w-[31vw] h-[2.8vh] border-lightgray placeholder-textgray"
                            value={songTitle}
                            onChange={(e) => setSongTitle(e.target.value)}
                            placeholder={songTitle}
                        />
                        {data != null ?

                        <div className="bg-white w-[31vw] pl-[1vw] pt-[1vh] shadow-md rounded-b-[10px] relative z-10">
                            <div className="w-[31vw] h-[16vh] overflow-y-auto">
                                {data.map((title, id) => (
                                    <div key={id} className="text-darkgray text-[1.6vh] mb-[1vh]" onClick={()=>handleSong(title)}>{title}</div>
                                ))}
                            </div>   

                        </div>


                        :
                        ''
                        }


                    </div>

                    <div className="w-[34.3vw] h-[40vh] border-lightgray shadow-inner-shadow-200 rounded-[0.5vh] pl-[1.5vw] pt-[2.3vh]">
                        <div className="font-medium text-[1.7vh]">날짜와 시간을 선택해주세요</div>
                                
                        <div className="mt-[2vh] text-[#333333] font-semibold text-[2.7vh] tracking-[-0.04em] text-shadow-m3-elavationLight-1">
                            {today.getFullYear()}년 {today.getMonth()+1}월
                        </div>

                        <div className="w-[34.3vw] h-[2.1vh] mt-[1.6vh]">
                                <div className="grid grid-cols-7 mb-[1vh]">
                                    {['월', '화', '수', '목', '금', '토', '일'].map((day, idx) => (
                                        <div key={idx} className="w-[3.4vw] font-regular text-[2.1vh]">{day}</div>
                                    ))}
                                </div>

                        </div>


                    </div>

                    <div className="flex justify-center" >
                        <div className="mt-[2.1vh] flex bg-yellow justify-center items-center w-[13vw] h-[4.4vh] rounded-[1vh] text-[1.8vh]">
                            예약하기
                        </div>
                    </div>

                </div>

            </PC>

        </div>
        


    )
}

export default RoomReservation;