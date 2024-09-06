import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import closeButton from "../../assets/siginup/close.png";

interface ProfileModalProps {
    select: (option: string) => void;
    isOpen: boolean;
    profile: string;
    sessions: string[];
}

const ProfileModal: React.FC<ProfileModalProps> = ({ select, isOpen, profile, sessions }) => {

    useEffect(() => {
        if (isOpen) {
            const modalContent = document.querySelector('.modal-content');
            if (modalContent) {
                modalContent.classList.add('w-[78vw]', 'h-[77.3vh]', 'border-none',);
            }
        }
    }, [isOpen]);

    return (
        <Modal
            show={isOpen}
            onHide={() => select('')}
            backdrop={false}
            dialogClassName="fixed inset-0 flex items-center justify-center"
        >
            <div className="bg-white rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex flex-col overflow-y-auto w-[78vw] h-[77.3vh] border-none">
                <div className="flex justify-between items-center ml-[8.1vw] mt-[2.4vh]">
                    <div className="mt-[1.6vh] font-pt font-bold text-[4.6vw]">프로필 사진 선택</div>
                    <img className='w-[7.4vw] h-auto mr-[5.8vw]' src={closeButton} onClick={() => select(profile)} />
                </div>

                <Modal.Body className="overflow-auto">
                    <div className="flex flex-wrap justify-center mt-[1.7vh]">
                        {sessions.map((session, index) => (
                            <div key={index} className="mx-[3.9vw] my-[2.8vh]" onClick={() => select(session)}>
                                <img 
                                    src={session} 
                                    alt={`session-${index}`} 
                                    className="w-[23.8vw] h-auto cursor-pointer" 
                                />
                            </div>
                        ))}
                    </div>
                </Modal.Body>
            </div>
        </Modal>
    );
}

export default ProfileModal;
