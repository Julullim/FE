import React from "react";
import { Mobile } from "../Layout";
import { Link } from "react-router-dom";
import AddConcert from "../../components/setlist/AddConcert";
import SelctConcert from "../../components/setlist/SelectConcert";

const SetlistPage: React.FC = () => {

    return (
        <div>
            <Mobile>
                <div className="h-[100vh] w-[100vw] flex flex-col">
                    <div className="items-center mt-[3.5vh] ml-[4vh] mr-[4vh] mb-[2vh] flex">
                        <div className="font-semibold text-[#333333] text-[120%] text-center">
                            공연 곡 리스트
                            <div className="h-1 left-px [background:radial-gradient(50%_50%_at_50%_50%,rgb(242,220,194)_0%,rgb(255,255,255)_100%)]" />
                        </div>
                    </div>
                    <div className="flex-grow">
                        <div className="relative">
                            <img src="https://s3-alpha-sig.figma.com/img/bb13/df41/148e7d8d7be701deddd618771d598a0f?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LaK6hF8D9KzYRhSV0CzJZNPHtrogTLb4RmfSjlX040MX2tnlHAGgFyt7NrRCHdvk5Ht5WzrGpwxIIzkpyJ0Zgd319BoSVhGnNaMlKdhHNa0JG3aDjp2ftpto~h7UFoozCVwW44wFvIJyx-InXGdqZQM-xJvlkcWvkAL5i-541dhwc68b7tNN2oj0Fpv3MIUdW9RJP~FPwbQv4IUUxLoBrucbo2mEMfGxJ5yN8HSO6D9aV9peJ8oFzFi5EfICRTw8z-HYWfcuWJUHdZig1~XKQH7EWaB0pCHsPoY-pPmo1qJ3f-W787LvZg9J4jkF~hlbuzGtLE-ZXEJH0cWZ2uG-sA__"
                                className="w-[100vw] h-[28vh]" />
                            <div className="absolute top-0 left-0 w-[100vw] h-[28vh] bg-black opacity-60" />
                            <div className="absolute top-[2vw] left-[3vw] text-white">
                            </div>
                        </div>
                        <div className="relative">
                            <img src="https://s3-alpha-sig.figma.com/img/bb13/df41/148e7d8d7be701deddd618771d598a0f?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LaK6hF8D9KzYRhSV0CzJZNPHtrogTLb4RmfSjlX040MX2tnlHAGgFyt7NrRCHdvk5Ht5WzrGpwxIIzkpyJ0Zgd319BoSVhGnNaMlKdhHNa0JG3aDjp2ftpto~h7UFoozCVwW44wFvIJyx-InXGdqZQM-xJvlkcWvkAL5i-541dhwc68b7tNN2oj0Fpv3MIUdW9RJP~FPwbQv4IUUxLoBrucbo2mEMfGxJ5yN8HSO6D9aV9peJ8oFzFi5EfICRTw8z-HYWfcuWJUHdZig1~XKQH7EWaB0pCHsPoY-pPmo1qJ3f-W787LvZg9J4jkF~hlbuzGtLE-ZXEJH0cWZ2uG-sA__"
                                className="w-[100vw] h-[28vh]" />
                            <div className="absolute top-0 left-0 w-[100vw] h-[28vh] bg-black opacity-60" />
                            <div className="absolute top-[2vw] right-[3vw] text-white text-right">
                            </div>
                        </div>
                        <div className="relative">
                            <img src="https://s3-alpha-sig.figma.com/img/bb13/df41/148e7d8d7be701deddd618771d598a0f?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LaK6hF8D9KzYRhSV0CzJZNPHtrogTLb4RmfSjlX040MX2tnlHAGgFyt7NrRCHdvk5Ht5WzrGpwxIIzkpyJ0Zgd319BoSVhGnNaMlKdhHNa0JG3aDjp2ftpto~h7UFoozCVwW44wFvIJyx-InXGdqZQM-xJvlkcWvkAL5i-541dhwc68b7tNN2oj0Fpv3MIUdW9RJP~FPwbQv4IUUxLoBrucbo2mEMfGxJ5yN8HSO6D9aV9peJ8oFzFi5EfICRTw8z-HYWfcuWJUHdZig1~XKQH7EWaB0pCHsPoY-pPmo1qJ3f-W787LvZg9J4jkF~hlbuzGtLE-ZXEJH0cWZ2uG-sA__"
                                className="w-[100vw] h-[28vh]" />
                            <div className="absolute top-0 left-0 w-[100vw] h-[28vh] bg-black opacity-60" />
                        </div>
                    </div>

                    <div className="absolute top-[40vh] text-white text-[85%] text-center w-[100vw]">
                        함께 했던 곡 리스트
                        <div className="relative bg-[#FFE57B] w-[35vw] h-[10vw] ml-auto mr-auto mt-[2vh] rounded-lg flex items-center">
                            <p className="text-black text-[120%] w-[35vw]">
                                보러가기
                            </p>
                        </div>
                    </div>

                    <div className="bg-white w-[100vw] h-[30vh] rounded-t-3xl absolute bottom-0 flex">
                        <img src="https://s3-alpha-sig.figma.com/img/d48e/ea4f/c4fa7c2925b17d7426d01b836093fe1b?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K2sNN~1rk4HUWwy1Pk5tvywpqDcUJnI-pqRgRcufupJsvqyWQTYOBkMtLHQ-SmEbh7fJZvKskTFYotNv17NYW~noWoZE-2OIkNj86UXmufHM4~SNJyvByjMxwdAYSD~TjluEThQ9W1vtOPpAv82o7xvXfixd0zZo3q3ul-jTQFdWn6oReLORb6QlGl8JkHc~DiE0A9exbGWeFf64T1HW85Ae3iEE1OGnQ2YcqAooBrduSDMBmRFm7B1aVxCkQTk2wwTWVUDpiNrigoXxypLQ6pkJtDS9PH92CIM4ryQeUFiqWQExzF-7NZSVdAdwe0~EOpwfGJ-ykX1icquh~BDR-g__"
                            className="top-[5vw] right-[5vw] absolute w-[5vw] h-[5vw]"></img>
                        <div className="relative ml-[10vw] mr-[10vw] mt-[4vh] mb-[3vh] flex-grow">
                            {
                                //<AddConcert/>
                                <SelctConcert/>
                            }
                        </div>
                    </div>

                </div>


            </Mobile>

        </div>
    );
};

export default SetlistPage;
