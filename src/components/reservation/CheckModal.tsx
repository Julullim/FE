import React from "react";
import { Modal } from "react-bootstrap";

interface CheckModalProps{
    isOpen: boolean;
    songTitle: string;
    time: Date;
}

const CheckModal : React.FC<CheckModalProps> = ({isOpen, songTitle, time}) =>{

    return(
        <Modal
            show={isOpen}
            backdrop={false}
        >
                <div className="bg-white rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[78vw] h-[36.3vh] border-none">
                    






                </div>

        </Modal>
    )
}

export default CheckModal