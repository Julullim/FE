import {React, useState} from "react";
import { Mobile, PC } from "../../routes/Layout";
import { Form } from "react-bootstrap";


const RoomReservation : React.FC = () =>{
    const [songTitle, setSongTitle] = useState<string>('곡이름');
    const [songId, setSongId] = useState<string>('');
    const [data, setData] = useState<string[]>(['무한적아','무한도전', '무한도적', '무한한', '가능한']);


    const handleSong = (key:string, title:string) =>{
        setSongId(key);
        setSongTitle(title);
        setData(null);
        console.log("노래제목!!" , songTitle)
    }

    return(

        <div className="mt-[2.1vh] flex flex-col items-center gap-[2.1vh]">

            <div className="w-[93vw] h-[13.3vh] border-lightgray shadow-inner-shadow-200 rounded-[0.5vh] pl-[4.2vw] pt-[2.3vh]">
                <div className="mb-[2.2vh]">곡 이름을 입력해주세요</div>

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
                            <div key={id} className="text-darkgray text-[1.6vh] mb-[1vh]" onClick={()=>handleSong(id, title)}>{title}</div>
                        ))}
                    </div>   
                </div>
            
            
                :
                ''
                }


            </div>

            <div className="w-[93vw] h-[40vh] border-lightgray shadow-inner-shadow-200 rounded-[0.5vh] pl-[4.2vw] pt-[2.3vh]">
                <div className="mb-[2.2vh]">날짜와 시간을 선택해주세요</div>
            </div>

            <div className="flex justify-center" >
                <div className="mt-[2.1vh] flex bg-yellow justify-center items-center w-[53vw] h-[5vh] rounded-[1vh] text-[2.1vh]">
                    예약하기
                </div>
            </div>


        </div>


    )
}

export default RoomReservation;