import React, { useState } from 'react';
import Input from './Input'; // 정보 입력
import ProfileModal from './ProfileModal'; // 모달
import useUserLoginStore from '../../store/useUserLogin'; //토큰 받아오기
import { Mobile, PC } from '../../routes/Layout';
import { Button } from 'react-bootstrap';
import picselect from '../../assets/siginup/picselect.png' 
import next from '../../assets/siginup/next.png'
import sessionVocal from "../../assets/siginup/sessionvocal.png"
import sessionBass from "../../assets/siginup/sessionbass.png";
import sessionBeer from "../../assets/siginup/sessionbeer.png";
import sessionDrum from "../../assets/siginup/sessiondrum.png";
import sessionGuitar from "../../assets/siginup/sessionguitar.png";
import sessionHeadPhone from "../../assets/siginup/sessionheadphone.png";
import sessionPiano from "../../assets/siginup/sessionpiano.png";



interface SignupFormProps {
    onSignup: (sId: string, name: string, cNum: number, token: string) => Promise<void>;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSignup }) => {
    const [profile, setProfile] = useState<string>(sessionVocal);
    const [name, setName] = useState<string>('');
    const [schoolNum, setSchoolNum] = useState<string>('');
    const [classNum, setClassNum] = useState<string>(''); 
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const {token} = useUserLoginStore()
    const sessions = [sessionGuitar, sessionBass, sessionHeadPhone, sessionDrum, sessionPiano, sessionVocal, sessionBeer];
;
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = (profileImg: string) => {
        setProfile(profileImg);
        setIsOpen(false);
    };

    const nextpic = () => {
        let id = sessions.indexOf(profile)
        if(id == sessions.length-1){
            id = -1;
        }
        setProfile(sessions[id+1]);
    }

    const prevpic = () => {
        let id = sessions.indexOf(profile)
        if(id ==0){
            id = sessions.length;
        }
        setProfile(sessions[id-1]);
    }

    const handleSignup = async () => {
        try {
            await onSignup(schoolNum, name, parseInt(classNum, 10), token); 
        } catch (error) {
            console.error("Signup failed:", error);
        }
    };



    return (
        <div>
            <Mobile>
                <div className='flex flex-col items-center justify-center'>

                    <div className="mt-[3.5vh] flex justify-center relative">
                        <img src={profile} className="w-auto h-[14.6vh]" alt="프로필" />
                        <img onClick={openModal} src={picselect} className="w-auto h-[3.87vh] absolute pl-[10.5vh]" style={{ top: '10.9vh' }} alt="사진 선택" />
                    </div>

                    <div className="mt-[4vh]">
                        <Input title="이름" value={name} setValue={setName} />
                    </div>

                    <div className="mt-[1.8vh]">
                        <Input title="학번 (ex.2024120001)" value={schoolNum} setValue={setSchoolNum} />
                    </div>

                    <div className="mt-[1.8vh]">
                        <Input title="기수" value={classNum} setValue={setClassNum} />
                    </div>

                    <div className="flex items-end absolute bottom-[8.2vh]">
                        <Button className="bg-[#F2DCC2] rounded-[10px] font-pt font-bold text-white w-[76.7vw] h-[7.3vh] shadow-black-blur-5 border-none" onClick={handleSignup}>
                        회원가입 완료
                        </Button>
                    </div>

                </div>
               

                {isOpen && <ProfileModal isOpen={isOpen} select={closeModal} profile={profile} sessions={sessions} />}
           

            </Mobile>

            <PC>
                <div className='flex flex-col items-center justify-center'>

                <div className="flex justify-center items-center relative">
                    <img onClick={prevpic} src={next} className="w-auto h-[3.2vw] absolute mr-[9vw] transform scale-x-[-1]" />
                    <img src={profile} className="w-[10vw] profile-img" alt="프로필" />
                    <img onClick={nextpic} src={next} className="w-auto h-[3.2vw] absolute ml-[9vw]" />
                </div>

                    <div className="mt-[6.6vh]">
                        <Input title="이름" value={name} setValue={setName} />
                    </div>

                    <div className="mt-[2vh]">
                        <Input title="학번 (ex.2024120001)" value={schoolNum} setValue={setSchoolNum} />
                    </div>

                    <div className="mt-[2vh]">
                        <Input title="기수" value={classNum} setValue={setClassNum} />
                    </div>

                    <div className="mt-[6.8vh]">
                        <Button className="bg-[#F2DCC2] rounded-[10px] font-pt font-bold text-white text-[1.3vw] w-[19vw] h-[6vh] shadow-black-blur-5 border-none" onClick={handleSignup}>
                        회원가입 완료
                        </Button>
                    </div>

                </div>                
             

            </PC>

           
        </div>

    );
};

export default SignupForm;

