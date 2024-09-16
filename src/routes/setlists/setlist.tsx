import React from "react";
import { Mobile, PC } from "../Layout";
import { Link } from "react-router-dom";
import AddConcert from "../../components/setlist/AddConcert";
import SelctConcert from "../../components/setlist/SelectConcert";
import { useSearchParams } from "react-router-dom";

const SetlistPage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const year = searchParams.get("year");
    const concert = searchParams.get("concert");

    const emptyHeart = "https://s3-alpha-sig.figma.com/img/d44e/e4f7/c67e8005c7aedad495f2d819d86be9cd?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kYuZKKLJya~9KVNTLL3HYCmpVqwaClFIAzEn-iDSIwF4TGk0cUB1TYQFoVY7PwGdblTF0c0PL-yURKD5bsMeGH4zIqd7LPAwao9RMoiT6Of59BG0NhhJrVSVUFk7j98Yovys-sEebvYQcF6H74biNPDXJqlAvfnXJ2kFV3u1qBcM~wUEaJlKZ6yABVhI-hrcG-QIiGgvnwDGAXTth8E7ULiaG5-RRqSFYCsroSPri9co901~pCDek~TnQChDd1AhVS81SkZhj1pJkoqnehDa9AipB9QMSHODHX8ag1qyZUUVCkm0bcSK3LQX43KTX4MGcvPgB3KdoIIrTLkvPKe1DA__";
    const fullHeart = "https://s3-alpha-sig.figma.com/img/ff3a/a28e/cf91dd37c4f65b8d2a97658185605e8f?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qoVRc~PaFBg0hQFzGEkVa~UwlZDUc7v68r5vu6M2oRKKtNYy8Vbptm7TN5IRrEPbKbpvc1Bos872cGmpWu~DSD9xTrvBu5AFOtH0vs0zkhMEdhz3mWCsHH7h9pq7gVZeatfD3upC1aWcLzTGTMaEtU1rqA2LPgTfk~e0LRAdu-4r3uKz~uvr28e04aSGGlBAkmU9vRY9GBM5FZfnJkq-iCf1AC2ChIiaUIH3jWzVqE1YE~dS2e8x4czmhVjde0Axv2Tg3MgSUi-9JmLlFJCGUBq0AbcLVLICB-GArhMGF1guVQM44ms84bnJgpJVWkxhwphgMdmzP-A4Bq6huoMhdg__";
    const arrow_up = "https://s3-alpha-sig.figma.com/img/9a0c/4700/1493a9b8a035379f27652c18daed6ee3?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F6ZT-d6mColTqvXIZcLs12M6CTEkrh~rrIh9ieMFb-SFQOfLMzE8qXezEfaK73Mjv3MyiZcEUAFrDYBqBCCOg-CvaPyCfgL2Z~OH4MrvCdNpJ-8Viw8J2Uu-kVdx~pJ8jVfxfuZNp5RRlB7kuh1dEYYsY4SvBRf8XNq9DpOkRFjrKEqboZLJyGxVw07XbMiORTPV3yr~~mCFRQLt02jx~JDllZ8Xg6~OPxA2-fcmvpV5YnA3LL~M0Hhl6FgyHB1IFMh53NDoXhMKtS3LNVHfy2A~fCFRTL6Df-lUUfK3JNxJmzzJNYoBC9H09R4SVPXMxP3do~5TwrhdM1uQ-5rFvQ__";

    return (
        <div className="whitespace-nowrap">
            <Mobile>
                <div className="setlist">
                    {year && concert ? (
                        <div>
                            <div className="h-full w-full flex flex-col">
                                <div className="items-center mt-[3.5vh] ml-[4vh] mr-[4vh] flex">
                                    <div className="font-semibold text-[#333333] text-[120%] text-center">
                                        {year} {concert}
                                        <div className="h-1 left-px [background:radial-gradient(50%_50%_at_50%_50%,rgb(242,220,194)_0%,rgb(255,255,255)_100%)]" />
                                    </div>
                                </div>
                                <div className="Table w-[90vw] mr-auto ml-auto ">
                                    <div className="w-full h-[10vh] flex items-center border-b-2 border-lightgray">
                                        <img src={emptyHeart} className="w-[10vw] h-[10vw] ml-[2vh] mr-[2vh]" />
                                        <div className="">
                                            <div className="text-[#333333] font-bold text-[100%] whitespace-nowrap">아지랑이</div>
                                            <div className="text-gray text-[80%] whitespace-nowrap">LUCY</div>
                                        </div>
                                        <div className="ml-auto mr-[2vh]">
                                            <img src={arrow_up} className="w-[8vw] h-[8vw] rotate-180" />
                                        </div>
                                    </div>

                                    <div className="w-full h-[10vh] flex items-center border-b-2 border-lightgray">
                                        <img src={emptyHeart} className="w-[10vw] h-[10vw] ml-[2vh] mr-[2vh]" />
                                        <div className="">
                                            <div className="text-[#333333] font-bold text-[100%]">아지랑이</div>
                                            <div className="text-gray text-[80%]">LUCY</div>
                                        </div>
                                        <div className="ml-auto mr-[2vh]">
                                            <img src={arrow_up} className="w-[8vw] h-[8vw] rotate-180" />
                                        </div>
                                    </div>

                                    <div className="w-full h-[10vh] flex items-center border-b-2 border-lightgray">
                                        <img src={emptyHeart} className="w-[10vw] h-[10vw] ml-[2vh] mr-[2vh]" />
                                        <div className="">
                                            <div className="text-[#333333] font-bold text-[100%]">아지랑이</div>
                                            <div className="text-gray text-[80%]">LUCY</div>
                                        </div>
                                        <div className="ml-auto mr-[2vh]">
                                            <img src={arrow_up} className="w-[8vw] h-[8vw] rotate-180" />
                                        </div>
                                    </div>

                                    <div className="w-full h-[10vh] flex items-center border-b-2 border-lightgray">
                                        <img src={emptyHeart} className="w-[10vw] h-[10vw] ml-[2vh] mr-[2vh]" />
                                        <div className="">
                                            <div className="text-[#333333] font-bold text-[100%]">아지랑이</div>
                                            <div className="text-gray text-[80%]">LUCY</div>
                                        </div>
                                        <div className="ml-auto mr-[2vh]">
                                            <img src={arrow_up} className="w-[8vw] h-[8vw] rotate-180" />
                                        </div>
                                    </div>


                                    <div className="w-full h-[10vh] flex items-center border-b-2 border-lightgray shadow-[0px_0px_10px_0px_#F2DCC2] relative">
                                        <img src={emptyHeart} className="w-[10vw] h-[10vw] ml-[2vh] mr-[2vh]" />
                                        <div className="">
                                            <div className="text-[#333333] font-bold text-[100%]">아지랑이</div>
                                            <div className="text-gray text-[80%]">LUCY</div>
                                        </div>
                                        <div className="bg-lightgray rounded-lg h-[8vw] text-[80%] text-center pr-1 pl-1 flex items-center justify-center ml-20">
                                            수정/삭제하기
                                        </div>
                                        <div className="ml-auto mr-[2vh]">
                                            <img src={arrow_up} className="w-[8vw] h-[8vw] rotate-180" />
                                        </div>
                                    </div>

                                    {/* 펼쳐진 테이블 */}
                                    <div className="w-full grid grid-cols-3 bg-lightgray justify-center z-0">
                                        <div className="h-[9vh] text-center text-[100%] flex flex-col justify-center">
                                            <div className="text-[#333333]">보컬
                                                <div className="text-[#7c7c7c]">남구민</div>
                                            </div>
                                        </div>
                                        <div className="h-[9vh] text-center text-[100%] flex flex-col justify-center">
                                            <div className="text-[#333333]">기타
                                                <div className="text-[#7c7c7c]">남구민</div>
                                            </div>
                                        </div>
                                        <div className="h-[9vh] text-center text-[100%] flex flex-col justify-center">
                                            <div className="text-[#333333]">베이스
                                                <div className="text-[#7c7c7c]">남구민</div>
                                            </div>
                                        </div>
                                        <div className="h-[9vh] text-center text-[100%] flex flex-col justify-center">
                                            <div className="text-[#333333]">키보드
                                                <div className="text-[#7c7c7c]">남구민</div>
                                            </div>
                                        </div>
                                        <div className="h-[9vh] text-center text-[100%] flex flex-col justify-center">
                                            <div className="text-[#333333]">드럼
                                                <div className="text-[#7c7c7c]">남구민</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full h-[10vh] flex items-center border-b-2 border-lightgray">
                                        <img src={emptyHeart} className="w-[10vw] h-[10vw] ml-[2vh] mr-[2vh]" />
                                        <div className="">
                                            <div className="text-[#333333] font-bold text-[100%]">아지랑이</div>
                                            <div className="text-gray text-[80%]">LUCY</div>
                                        </div>
                                        <div className="ml-auto mr-[2vh]">
                                            <img src={arrow_up} className="w-[8vw] h-[8vw] rotate-180" />
                                        </div>
                                    </div>

                                    <img src="https://s3-alpha-sig.figma.com/img/0acd/1a9f/e44fda3f1f2acb0697afa811f0482a6a?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=myc7lwsykhdrpNEyqaFUiyyW2z66J3iNirA94KlsOKsgHsJkX45S3XQRGfA8afSxi3oEVod9H5-vBs0Ik1eVJ26qmzzFGxK-9mQ7OjCaR0S0GW8w1v6mzX1wh3gED5AsFhNWt4QRz~pfVNQfbQP8F5SeAYpBHWhbDs9X-pexRvTtHml0d1OmswfRpjR4CEQIFUNZlFFwjKy0t8P-nSVwogBB6ZefjxYb~YyN1O2ijwFASSgQeWRu1RrN8~b2oD2lfFbtA542tUrSGf~XgvZ1~B0vFMq8Sd5n09qJuqqHekXztEPAzQmrnlEZa6qQVAESWK-frHtAXctXHnFUMXt3Hw__"
                                        className="w-[15vw] h-[15vw] mr-auto ml-auto mt-[2vh]" />

                                    {/* 곡 추가 팝업 
                                    <div className="fixed inset-0 flex items-center justify-center z-50">
                                        <div className="bg-white w-[80vw] p-6 rounded-lg shadow-lg">
                                            <div className="text-[100%] font-bold mb-4 relative">
                                                곡 추가하기
                                                <img
                                                    src="https://s3-alpha-sig.figma.com/img/d48e/ea4f/c4fa7c2925b17d7426d01b836093fe1b?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dAu6yT96KkBJ45b7RaXrKC52ubqFqkCPP50zqEVSIVzCCjBpLvA4y60NyFrtuzJCZRy1mmKXKkexepPVSaxh6UdaSexbE-oJqEO71PXBcMJemUsExswnYJZkkK7661R71oT1ojjX2KxYuNW5sCBWpijY4MjmIpHm~tmFk3SOYugMLTewBBukOkNvPHWto2ShspAJjsZ7HIX1BdDJx7wrFvDYwhGDurHIgc6c9JKHWG0PKTV~OP3bkHsSgP3wpvPXQL3wPKk6pjOrxd7OqVgr-d8eimc-LUHHC5DDYoW3RV0AZaQVDax-Pdw4Bpn~-qeNPIqJpCfmf51ZiIu6mfgmjw__"
                                                    className="absolute -top-2 -right-2 w-[6vw] h-[6vw]"
                                                    onClick={() => {
                                                        console.log("close");
                                                    }}
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-[#333333] text-sm font-bold mb-2" htmlFor="songTitle">
                                                    곡이름
                                                </label>
                                                <input
                                                    id="songTitle"
                                                    type="text"
                                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 "
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="artistName">
                                                    가수이름
                                                </label>
                                                <input
                                                    id="artistName"
                                                    type="text"
                                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 "
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guitar">
                                                    세션(기타)
                                                </label>
                                                <input
                                                    id="guitar"
                                                    type="text"
                                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 "
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bass">
                                                    세션(베이스)
                                                </label>
                                                <input
                                                    id="bass"
                                                    type="text"
                                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 "
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="keyboard">
                                                    세션(키보드)
                                                </label>
                                                <input
                                                    id="keyboard"
                                                    type="text"
                                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 "
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="drums">
                                                    세션(드럼/카혼)
                                                </label>
                                                <input
                                                    id="drums"
                                                    type="text"
                                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 "
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="etc">
                                                    세션(etc)
                                                </label>
                                                <input
                                                    id="etc"
                                                    type="text"
                                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 "
                                                />
                                            </div>

                                            <div className="flex items-center justify-center">
                                                <button className="bg-[#F5E8D2] hover:bg-[#F2DCC2] font-bold rounded w-[30vw] h-[8vw] ">
                                                    곡 추가
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    */}
                                </div>
                            </div>
                        </div>
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
                <div className="setlist">
                    <img src="https://s3-alpha-sig.figma.com/img/ea20/29e7/52b5be674fb5da74a911ec3993e7bd7e?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GSZc4ALwgTa1Zl2glToTrYAmqQHYsNXbtuy4cfugm6OLH0ya2GbGEBFcfLMaqB-vc0dlJmNVosz3-W1AuKkzC0mHSu92Kh-AdwrfTZZpr29EKKtKp9DUtCV~wdGiUoXQTLEoKQ7QC7kVNKcboOqezmvLT30w2AlKW~y1tR-iDWhTTmhGMtlUUn4Rr7FyAumIGwizi0UTWqeDUpfJ4Gz3AEJRwW1nx-gVK2Wn4VyH6ZrglI1Cl9bBXNM0KceDonYd5H4hFpqEIVqvRTZtDjs3cy5NInetPfnrZIC5XQlQv-I52cmW28n-qtSmQ-8-aywQ3STw-wkwv8f5fatYgYRT7g__"
                        className="w-full h-[25vh] object-cover" />
                    <div className="h-[10vh] w-full text-center text-[180%] font-bold mt-[6vh]">곡 리스트 </div>

                    <div className="mt-[1vh] ml-[11vw] flex items-center">
                        <div className="font-semibold text-[#333333] text-[140%] text-center">
                            {year} {concert}
                            <div className="h-1 left-px [background:radial-gradient(50%_50%_at_50%_50%,rgb(242,220,194)_0%,rgb(255,255,255)_100%)]" />
                        </div>
                        <img src={arrow_up} className=" ml-2 w-[1.8vw] h-[1.8vw] rotate-180" />

                        <div className="text-[100%] ml-auto mr-[11vw] mt-[2vh]">
                            총 99곡
                        </div>
                    </div>

                    <div className="w-[80vw] bg-[#F2DCC266] absolute bottom-0 left-[10vw] h-[50vh] rounded-lg flex justify-center items-end shadow-[0px_0px_10px_0px_rgba(242,220,194,0.4)]">
                        <div className="w-[35vw] h-[45vh] bg-white rounded-t-xl mx-8 border-[3px] border-lightgray shadow-[0px_0px_5px_0px_#00000040] pl-[1vw] pr-[1vw]">

                            <div className="w-full h-[8vh] flex items-center border-b-2 border-lightgray">
                                <img src={emptyHeart} className="w-[5vh] h-[5vh] ml-[2vw] mr-[2vw]" />
                                <div className="">
                                    <div className="text-[#333333] font-bold text-[100%]">아지랑이</div>
                                    <div className="text-gray text-[80%]">LUCY</div>
                                </div>
                                <div className="ml-auto mr-[3vw]">
                                    <img src={arrow_up} className="w-[5vh] h-[5vh] rotate-180" />
                                </div>
                            </div>
                            <div className="w-full h-[8vh] flex items-center border-b-2 border-lightgray">
                                <img src={emptyHeart} className="w-[5vh] h-[5vh] ml-[2vw] mr-[2vw]" />
                                <div className="">
                                    <div className="text-[#333333] font-bold text-[100%]">아지랑이</div>
                                    <div className="text-gray text-[80%]">LUCY</div>
                                </div>
                                <div className="ml-auto mr-[3vw]">
                                    <img src={arrow_up} className="w-[5vh] h-[5vh] rotate-180" />
                                </div>
                            </div>
                            <div className="w-full h-[8vh] flex items-center border-b-2 border-lightgray">
                                <img src={emptyHeart} className="w-[5vh] h-[5vh] ml-[2vw] mr-[2vw]" />
                                <div className="">
                                    <div className="text-[#333333] font-bold text-[100%]">아지랑이</div>
                                    <div className="text-gray text-[80%]">LUCY</div>
                                </div>
                                <div className="ml-auto mr-[3vw]">
                                    <img src={arrow_up} className="w-[5vh] h-[5vh] rotate-180" />
                                </div>
                            </div>
                            <div className="w-full h-[8vh] flex items-center border-b-2 border-lightgray">
                                <img src={emptyHeart} className="w-[5vh] h-[5vh] ml-[2vw] mr-[2vw]" />
                                <div className="">
                                    <div className="text-[#333333] font-bold text-[100%]">아지랑이</div>
                                    <div className="text-gray text-[80%]">LUCY</div>
                                </div>
                                <div className="ml-auto mr-[3vw]">
                                    <img src={arrow_up} className="w-[5vh] h-[5vh] rotate-180" />
                                </div>
                            </div>
                            <div className="w-full h-[8vh] flex items-center border-b-2 border-lightgray">
                                <img src={emptyHeart} className="w-[5vh] h-[5vh] ml-[2vw] mr-[2vw]" />
                                <div className="">
                                    <div className="text-[#333333] font-bold text-[100%]">아지랑이</div>
                                    <div className="text-gray text-[80%]">LUCY</div>
                                </div>
                                <div className="ml-auto mr-[3vw]">
                                    <img src={arrow_up} className="w-[5vh] h-[5vh] rotate-180" />
                                </div>
                            </div>
                        </div>
                        <div className="w-[35vw] h-[45vh] bg-white rounded-t-xl mx-8 border-[3px] border-lightgray shadow-[0px_0px_5px_0px_#00000040] pl-[1vw] pr-[1vw]">

                            <div className="w-full h-[8vh] flex items-center border-b-2 border-lightgray">
                                <img src={emptyHeart} className="w-[5vh] h-[5vh] ml-[2vw] mr-[2vw]" />
                                <div className="">
                                    <div className="text-[#333333] font-bold text-[100%]">아지랑이</div>
                                    <div className="text-gray text-[80%]">LUCY</div>
                                </div>
                                <div className="ml-auto mr-[3vw]">
                                    <img src={arrow_up} className="w-[5vh] h-[5vh] rotate-180" />
                                </div>
                            </div>
                            <div className="w-full h-[8vh] flex items-center border-b-2 border-lightgray shadow-[0px_0px_10px_0px_#F2DCC2] relative">
                                <img src={emptyHeart} className="w-[5vh] h-[5vh] ml-[2vw] mr-[2vw]" />
                                <div className="">
                                    <div className="text-[#333333] font-bold text-[100%]">아지랑이</div>
                                    <div className="text-gray text-[80%]">LUCY</div>
                                </div>
                                <div className="bg-lightgray rounded-lg h-[5vh] text-[80%] text-center pr-2 pl-2 flex items-center justify-center ml-auto mr-2">
                                    수정/삭제하기
                                </div>
                                <div className="mr-[3vw]">
                                    <img src={arrow_up} className="w-[5vh] h-[5vh] " />
                                </div>
                            </div>



                            {/* 펼쳐진 테이블 */}
                            <div className="w-full grid grid-cols-3 bg-lightgray justify-center z-0">
                                <div className="h-[9vh] text-center text-[100%] flex flex-col justify-center">
                                    <div className="text-[#333333]">보컬
                                        <div className="text-[#7c7c7c]">남구민</div>
                                    </div>
                                </div>
                                <div className="h-[9vh] text-center text-[100%] flex flex-col justify-center">
                                    <div className="text-[#333333]">기타
                                        <div className="text-[#7c7c7c]">남구민</div>
                                    </div>
                                </div>
                                <div className="h-[9vh] text-center text-[100%] flex flex-col justify-center">
                                    <div className="text-[#333333]">베이스
                                        <div className="text-[#7c7c7c]">남구민</div>
                                    </div>
                                </div>
                                <div className="h-[9vh] text-center text-[100%] flex flex-col justify-center">
                                    <div className="text-[#333333]">키보드
                                        <div className="text-[#7c7c7c]">남구민</div>
                                    </div>
                                </div>
                                <div className="h-[9vh] text-center text-[100%] flex flex-col justify-center">
                                    <div className="text-[#333333]">드럼
                                        <div className="text-[#7c7c7c]">남구민</div>
                                    </div>
                                </div>
                            </div>

                            <img src="https://s3-alpha-sig.figma.com/img/0acd/1a9f/e44fda3f1f2acb0697afa811f0482a6a?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=myc7lwsykhdrpNEyqaFUiyyW2z66J3iNirA94KlsOKsgHsJkX45S3XQRGfA8afSxi3oEVod9H5-vBs0Ik1eVJ26qmzzFGxK-9mQ7OjCaR0S0GW8w1v6mzX1wh3gED5AsFhNWt4QRz~pfVNQfbQP8F5SeAYpBHWhbDs9X-pexRvTtHml0d1OmswfRpjR4CEQIFUNZlFFwjKy0t8P-nSVwogBB6ZefjxYb~YyN1O2ijwFASSgQeWRu1RrN8~b2oD2lfFbtA542tUrSGf~XgvZ1~B0vFMq8Sd5n09qJuqqHekXztEPAzQmrnlEZa6qQVAESWK-frHtAXctXHnFUMXt3Hw__"
                                className="w-[5vh] h-[5vh] mr-auto ml-auto mt-[2vh]" />

                        </div>


                    </div>

                    {/* 곡 추가 팝업 */}
                    <div className="fixed inset-0 flex items-center justify-center z-50 mt-10">
                        <div className="bg-white w-[60vw] p-6 rounded-xl shadow-lg relative text-[90%]">
                            <img
                                src="https://s3-alpha-sig.figma.com/img/d48e/ea4f/c4fa7c2925b17d7426d01b836093fe1b?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dAu6yT96KkBJ45b7RaXrKC52ubqFqkCPP50zqEVSIVzCCjBpLvA4y60NyFrtuzJCZRy1mmKXKkexepPVSaxh6UdaSexbE-oJqEO71PXBcMJemUsExswnYJZkkK7661R71oT1ojjX2KxYuNW5sCBWpijY4MjmIpHm~tmFk3SOYugMLTewBBukOkNvPHWto2ShspAJjsZ7HIX1BdDJx7wrFvDYwhGDurHIgc6c9JKHWG0PKTV~OP3bkHsSgP3wpvPXQL3wPKk6pjOrxd7OqVgr-d8eimc-LUHHC5DDYoW3RV0AZaQVDax-Pdw4Bpn~-qeNPIqJpCfmf51ZiIu6mfgmjw__"
                                className="absolute top-5 right-5 w-[4vh] h-[4vh]"
                                onClick={() => {
                                    console.log("close");
                                }} />

                            <div className="text-center box1">
                                <div className="mb-4">
                                    <label className="block text-[#333333] text-sm font-bold mb-2" htmlFor="songTitle">
                                        곡이름
                                    </label>
                                    <input
                                        id="songTitle"
                                        type="text"
                                        className="appearance-none border rounded w-[50%] py-2 px-3 text-gray-700 text-[70%] "
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="artistName">
                                        가수이름
                                    </label>
                                    <input
                                        id="artistName"
                                        type="text"
                                        className="appearance-none border rounded w-[50%] py-2 px-3 text-gray-700 text-[70%] "
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 box2 mt-10">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-center" htmlFor="vocal">
                                        세션(보컬)
                                    </label>
                                    <input
                                        id="guitar"
                                        type="text"
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 text-[70%] "
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-center" htmlFor="guitar">
                                        세션(기타)
                                    </label>
                                    <input
                                        id="guitar"
                                        type="text"
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 text-[70%] "
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-center" htmlFor="bass">
                                        세션(베이스)
                                    </label>
                                    <input
                                        id="bass"
                                        type="text"
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 text-[70%] "
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-center" htmlFor="keyboard">
                                        세션(키보드)
                                    </label>
                                    <input
                                        id="keyboard"
                                        type="text"
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 text-[70%] "
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-center" htmlFor="drums">
                                        세션(드럼/카혼)
                                    </label>
                                    <input
                                        id="drums"
                                        type="text"
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 text-[70%] "
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-center" htmlFor="etc">
                                        세션(etc)
                                    </label>
                                    <input
                                        id="etc"
                                        type="text"
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 text-[70%] "
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-center text-[120%]">
                                <button className="bg-[#F5E8D2] hover:bg-[#F2DCC2] font-bold rounded w-[30vh] pt-2 pb-2 mt-1 ">
                                    곡 추가하기
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </PC>

        </div>
    );
};

export default SetlistPage;
