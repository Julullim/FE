import {React, useState} from "react";
import { Mobile, PC } from "../../routes/Layout";
import { Form } from "react-bootstrap";
import NameCard from "../common/NameCard";

const StudyReservation : React.FC = () =>{
    const [mentorId, setMentorId] = useState<string>('');
    const [mentorName, setMentorName] = useState<string>('');
    const [menteeIdList, setMenteeIdList] = useState<string[]>(null);

    const removeName = (name: string) => {
        setMenteeIdList((prev) => prev.filter((n) => n !== name));
      };


    return(

        <div>
            <Mobile>
                    <div className="mt-[2.1vh] flex flex-col items-center gap-[2.1vh]">

                        <div className="w-[93vw] h-[13.3vh] border-lightgray shadow-inner-shadow-200 rounded-[0.5vh] pl-[4.2vw] pt-[2.3vh]">
                            <div className="mb-[2.2vh]">멘토 이름을 입력해주세요</div>
                            <Form.Control
                                className="w-[84vw] h-[3.4vh] border-lightgray placeholder-textgray"
                                value={mentorName}
                                onChange={(e) => setMentorName(e.target.value)}
                                placeholder="김멘토"
                            />


                        </div>

                        <div className="w-[93vw] h-[15.6vh] border-lightgray shadow-inner-shadow-200 rounded-[0.5vh] pl-[4.2vw] pt-[2.3vh]">
                            <div className="mb-[2.2vh]">멘티 이름을 입력해주세요</div>
                            <Form.Control
                                className="w-[84vw] h-[3.4vh] border-lightgray placeholder-textgray"
                                value={mentorName}
                                onChange={(e) => setMentorName(e.target.value)}
                                placeholder="김멘티"
                            />

                            <div className="mt-[0.9vh]">
                                <NameCard nameList={menteeIdList} onRemoveName={removeName}/>
                            </div>
                            
                        </div>

                        <div className="w-[93vw] h-[15.6vh] border-lightgray shadow-inner-shadow-200 rounded-[0.5vh] pl-[4.2vw] pt-[2.3vh]">
                            <div className="mb-[2.2vh]">요일과 시간을 입력해주세요</div>
                            <Form.Control
                                className="w-[84vw] h-[3.4vh] border-lightgray placeholder-textgray"
                                value={mentorName}
                                onChange={(e) => setMentorName(e.target.value)}
                                placeholder="김멘티"
                            />

                            
                            
                        </div>

                        <div className="flex justify-center" >
                            <div className="mt-[2.1vh] flex bg-yellow justify-center items-center w-[53vw] h-[5vh] rounded-[1vh] text-[2.1vh]">
                                신청하기
                            </div>
                        </div>


                    </div>

            </Mobile>
        </div>

       

    )

}

export default StudyReservation