import React, { useEffect } from "react";
import { Mobile, PC } from "../Layout";
import { Link } from "react-router-dom";
import AddConcert from "../../components/setlist/AddConcert";
import SelctConcert from "../../components/setlist/SelectConcert";
import { useSearchParams } from "react-router-dom";
import { SetlistDetail } from "./SetlistDetail";
import MainTab from "../../components/common/MainTab";
import Navbar from "../../components/common/Navbar";

const emptyHeart = "https://s3-alpha-sig.figma.com/img/d44e/e4f7/c67e8005c7aedad495f2d819d86be9cd?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kYuZKKLJya~9KVNTLL3HYCmpVqwaClFIAzEn-iDSIwF4TGk0cUB1TYQFoVY7PwGdblTF0c0PL-yURKD5bsMeGH4zIqd7LPAwao9RMoiT6Of59BG0NhhJrVSVUFk7j98Yovys-sEebvYQcF6H74biNPDXJqlAvfnXJ2kFV3u1qBcM~wUEaJlKZ6yABVhI-hrcG-QIiGgvnwDGAXTth8E7ULiaG5-RRqSFYCsroSPri9co901~pCDek~TnQChDd1AhVS81SkZhj1pJkoqnehDa9AipB9QMSHODHX8ag1qyZUUVCkm0bcSK3LQX43KTX4MGcvPgB3KdoIIrTLkvPKe1DA__";
const fullHeart = "https://s3-alpha-sig.figma.com/img/ff3a/a28e/cf91dd37c4f65b8d2a97658185605e8f?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qoVRc~PaFBg0hQFzGEkVa~UwlZDUc7v68r5vu6M2oRKKtNYy8Vbptm7TN5IRrEPbKbpvc1Bos872cGmpWu~DSD9xTrvBu5AFOtH0vs0zkhMEdhz3mWCsHH7h9pq7gVZeatfD3upC1aWcLzTGTMaEtU1rqA2LPgTfk~e0LRAdu-4r3uKz~uvr28e04aSGGlBAkmU9vRY9GBM5FZfnJkq-iCf1AC2ChIiaUIH3jWzVqE1YE~dS2e8x4czmhVjde0Axv2Tg3MgSUi-9JmLlFJCGUBq0AbcLVLICB-GArhMGF1guVQM44ms84bnJgpJVWkxhwphgMdmzP-A4Bq6huoMhdg__";
const arrow_up = "https://s3-alpha-sig.figma.com/img/9a0c/4700/1493a9b8a035379f27652c18daed6ee3?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F6ZT-d6mColTqvXIZcLs12M6CTEkrh~rrIh9ieMFb-SFQOfLMzE8qXezEfaK73Mjv3MyiZcEUAFrDYBqBCCOg-CvaPyCfgL2Z~OH4MrvCdNpJ-8Viw8J2Uu-kVdx~pJ8jVfxfuZNp5RRlB7kuh1dEYYsY4SvBRf8XNq9DpOkRFjrKEqboZLJyGxVw07XbMiORTPV3yr~~mCFRQLt02jx~JDllZ8Xg6~OPxA2-fcmvpV5YnA3LL~M0Hhl6FgyHB1IFMh53NDoXhMKtS3LNVHfy2A~fCFRTL6Df-lUUfK3JNxJmzzJNYoBC9H09R4SVPXMxP3do~5TwrhdM1uQ-5rFvQ__";
const concertList = { "1": "울챙이", "2": "봄공연", "3": "항공우주캠프", "4": "정기공연", "5": "기타" };

const SetlistPage: React.FC = () => {
    const response = {
        "isSuccess": true,
        "code": 2000,
        "message": "success!",
        "result": [
            {
                "song_id": 2,
                "title": "만시간",
                "artist": "Artist A",
                "liked": true
            },
            {
                "song_id": 31,
                "title": "나의우주",
                "artist": "Artist B",
                "liked": false
            }
            ,
            {
                "song_id": 32,
                "title": "별빛",
                "artist": "Artist C",
                "liked": true
            },
            {
                "song_id": 33,
                "title": "바람",
                "artist": "Artist D",
                "liked": false
            },
            {
                "song_id": 34,
                "title": "하늘",
                "artist": "Artist E",
                "liked": true
            },
            {
                "song_id": 35,
                "title": "구름",
                "artist": "Artist F",
                "liked": false
            }
            ,

        ]
    }

    const [songs, setSongs] = React.useState(response.result.map((song) => { return {...song, open:false} }))
    
    const [searchParams, setSearchParams] = useSearchParams()
    const year = searchParams.get("year");
    const concert = searchParams.get("concert")

    return (
        <div className="whitespace-nowrap">
            <Mobile>
                <MainTab />
                <div className="setlist">
                    {year && concert ? (
                        <SetlistDetail year={year} concert={concertList[concert]} table={songs} />

                    ) : (
                        <div className="h-full w-full flex flex-col">
                            <div className="items-center mt-[3.5vh] ml-[4vh] mr-[4vh] mb-[2vh] flex">
                                <div className="font-semibold text-[#333333] text-[120%] text-center">
                                    공연 곡 리스트
                                    <div className="h-1 left-px [background:radial-gradient(50%_50%_at_50%_50%,rgb(242,220,194)_0%,rgb(255,255,255)_100%)]" />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <div className="relative">
                                    <img src="https://s3-alpha-sig.figma.com/img/bb13/df41/148e7d8d7be701deddd618771d598a0f?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LaK6hF8D9KzYRhSV0CzJZNPHtrogTLb4RmfSjlX040MX2tnlHAGgFyt7NrRCHdvk5Ht5WzrGpwxIIzkpyJ0Zgd319BoSVhGnNaMlKdhHNa0JG3aDjp2ftpto~h7UFoozCVwW44wFvIJyx-InXGdqZQM-xJvlkcWvkAL5i-541dhwc68b7tNN2oj0Fpv3MIUdW9RJP~FPwbQv4IUUxLoBrucbo2mEMfGxJ5yN8HSO6D9aV9peJ8oFzFi5EfICRTw8z-HYWfcuWJUHdZig1~XKQH7EWaB0pCHsPoY-pPmo1qJ3f-W787LvZg9J4jkF~hlbuzGtLE-ZXEJH0cWZ2uG-sA__"
                                        className="w-full h-[28vh]" />
                                    <div className="absolute top-0 left-0 w-full h-[28vh] bg-black opacity-60" />
                                    <div className="absolute top-[2vw] left-[3vw] text-white">
                                    </div>
                                </div>
                                <div className="relative">
                                    <img src="https://s3-alpha-sig.figma.com/img/bb13/df41/148e7d8d7be701deddd618771d598a0f?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LaK6hF8D9KzYRhSV0CzJZNPHtrogTLb4RmfSjlX040MX2tnlHAGgFyt7NrRCHdvk5Ht5WzrGpwxIIzkpyJ0Zgd319BoSVhGnNaMlKdhHNa0JG3aDjp2ftpto~h7UFoozCVwW44wFvIJyx-InXGdqZQM-xJvlkcWvkAL5i-541dhwc68b7tNN2oj0Fpv3MIUdW9RJP~FPwbQv4IUUxLoBrucbo2mEMfGxJ5yN8HSO6D9aV9peJ8oFzFi5EfICRTw8z-HYWfcuWJUHdZig1~XKQH7EWaB0pCHsPoY-pPmo1qJ3f-W787LvZg9J4jkF~hlbuzGtLE-ZXEJH0cWZ2uG-sA__"
                                        className="w-full h-[28vh]" />
                                    <div className="absolute top-0 left-0 w-full h-[28vh] bg-black opacity-60" />
                                    <div className="absolute top-[2vw] right-[3vw] text-white text-right">
                                    </div>
                                </div>
                                <div className="relative">
                                    <img src="https://s3-alpha-sig.figma.com/img/bb13/df41/148e7d8d7be701deddd618771d598a0f?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LaK6hF8D9KzYRhSV0CzJZNPHtrogTLb4RmfSjlX040MX2tnlHAGgFyt7NrRCHdvk5Ht5WzrGpwxIIzkpyJ0Zgd319BoSVhGnNaMlKdhHNa0JG3aDjp2ftpto~h7UFoozCVwW44wFvIJyx-InXGdqZQM-xJvlkcWvkAL5i-541dhwc68b7tNN2oj0Fpv3MIUdW9RJP~FPwbQv4IUUxLoBrucbo2mEMfGxJ5yN8HSO6D9aV9peJ8oFzFi5EfICRTw8z-HYWfcuWJUHdZig1~XKQH7EWaB0pCHsPoY-pPmo1qJ3f-W787LvZg9J4jkF~hlbuzGtLE-ZXEJH0cWZ2uG-sA__"
                                        className="w-full h-[28vh]" />
                                    <div className="absolute top-0 left-0 w-full h-[28vh] bg-black opacity-60" />
                                </div>
                            </div>

                            <div className="absolute top-[40vh] text-white text-[85%] text-center w-full">
                                함께 했던 곡 리스트
                                <div className="relative bg-[#FFE57B] w-[35vw] h-[10vw] ml-auto mr-auto mt-[2vh] rounded-lg flex items-center">
                                    <p className="text-black text-[120%] w-[35vw]">
                                        보러가기
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white w-full h-[30vh] rounded-t-3xl absolute bottom-0 flex">
                                <img src="https://s3-alpha-sig.figma.com/img/d48e/ea4f/c4fa7c2925b17d7426d01b836093fe1b?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K2sNN~1rk4HUWwy1Pk5tvywpqDcUJnI-pqRgRcufupJsvqyWQTYOBkMtLHQ-SmEbh7fJZvKskTFYotNv17NYW~noWoZE-2OIkNj86UXmufHM4~SNJyvByjMxwdAYSD~TjluEThQ9W1vtOPpAv82o7xvXfixd0zZo3q3ul-jTQFdWn6oReLORb6QlGl8JkHc~DiE0A9exbGWeFf64T1HW85Ae3iEE1OGnQ2YcqAooBrduSDMBmRFm7B1aVxCkQTk2wwTWVUDpiNrigoXxypLQ6pkJtDS9PH92CIM4ryQeUFiqWQExzF-7NZSVdAdwe0~EOpwfGJ-ykX1icquh~BDR-g__"
                                    className="top-[5vw] right-[5vw] absolute w-[5vw] h-[5vw]"></img>
                                <div className="relative ml-[10vw] mr-[10vw] mt-[4vh] mb-[3vh] flex-grow">
                                    {
                                        <AddConcert />
                                        //<SelctConcert/>
                                    }
                                </div>
                            </div>

                        </div>
                    )}
                </div>

            </Mobile>
            <PC>
                {year && concert ? (
                    <SetlistDetail year={year} concert={concertList[concert]} table={songs} />
                ) : (
                    <SetlistDetail year={"2024"} concert={concertList['1']} table={songs} />
                )}
            </PC>

            <Navbar text="Setlist" />
        </div>
    );
};

export default SetlistPage;
