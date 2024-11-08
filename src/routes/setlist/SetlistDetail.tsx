import React, { useEffect } from "react";
import { Mobile, PC } from "../Layout";
import { useSearchParams } from "react-router-dom";
import PageTitle from "../../components/common/PageTitle";
import { getSetlist } from "../../libs/apis/setlist";

const emptyHeart = "https://s3-alpha-sig.figma.com/img/d44e/e4f7/c67e8005c7aedad495f2d819d86be9cd?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kYuZKKLJya~9KVNTLL3HYCmpVqwaClFIAzEn-iDSIwF4TGk0cUB1TYQFoVY7PwGdblTF0c0PL-yURKD5bsMeGH4zIqd7LPAwao9RMoiT6Of59BG0NhhJrVSVUFk7j98Yovys-sEebvYQcF6H74biNPDXJqlAvfnXJ2kFV3u1qBcM~wUEaJlKZ6yABVhI-hrcG-QIiGgvnwDGAXTth8E7ULiaG5-RRqSFYCsroSPri9co901~pCDek~TnQChDd1AhVS81SkZhj1pJkoqnehDa9AipB9QMSHODHX8ag1qyZUUVCkm0bcSK3LQX43KTX4MGcvPgB3KdoIIrTLkvPKe1DA__";
const fullHeart = "https://s3-alpha-sig.figma.com/img/ff3a/a28e/cf91dd37c4f65b8d2a97658185605e8f?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qoVRc~PaFBg0hQFzGEkVa~UwlZDUc7v68r5vu6M2oRKKtNYy8Vbptm7TN5IRrEPbKbpvc1Bos872cGmpWu~DSD9xTrvBu5AFOtH0vs0zkhMEdhz3mWCsHH7h9pq7gVZeatfD3upC1aWcLzTGTMaEtU1rqA2LPgTfk~e0LRAdu-4r3uKz~uvr28e04aSGGlBAkmU9vRY9GBM5FZfnJkq-iCf1AC2ChIiaUIH3jWzVqE1YE~dS2e8x4czmhVjde0Axv2Tg3MgSUi-9JmLlFJCGUBq0AbcLVLICB-GArhMGF1guVQM44ms84bnJgpJVWkxhwphgMdmzP-A4Bq6huoMhdg__";
const arrow_up = "https://s3-alpha-sig.figma.com/img/9a0c/4700/1493a9b8a035379f27652c18daed6ee3?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F6ZT-d6mColTqvXIZcLs12M6CTEkrh~rrIh9ieMFb-SFQOfLMzE8qXezEfaK73Mjv3MyiZcEUAFrDYBqBCCOg-CvaPyCfgL2Z~OH4MrvCdNpJ-8Viw8J2Uu-kVdx~pJ8jVfxfuZNp5RRlB7kuh1dEYYsY4SvBRf8XNq9DpOkRFjrKEqboZLJyGxVw07XbMiORTPV3yr~~mCFRQLt02jx~JDllZ8Xg6~OPxA2-fcmvpV5YnA3LL~M0Hhl6FgyHB1IFMh53NDoXhMKtS3LNVHfy2A~fCFRTL6Df-lUUfK3JNxJmzzJNYoBC9H09R4SVPXMxP3do~5TwrhdM1uQ-5rFvQ__";

const SetlistDetail: React.FC<{ year: number, concert: number }> = ({ year, concert}) => {
    const [concerts, setConcerts] = React.useState([]);
    const [popAddSong, setPopAddSong] = React.useState(false);

    const AddSong: React.FC = () => {

        const sendAPI = (data: {}) => {
            alert(
                JSON.stringify(data)
                +"곡 추가합니다."
            );
        }

        return (
            <div>
                <Mobile>
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="bg-white w-[80vw] p-6 rounded-lg shadow-lg">
                            <div className="text-[100%] font-bold mb-4 relative">
                                곡 추가하기
                                <img
                                    src="https://s3-alpha-sig.figma.com/img/d48e/ea4f/c4fa7c2925b17d7426d01b836093fe1b?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dAu6yT96KkBJ45b7RaXrKC52ubqFqkCPP50zqEVSIVzCCjBpLvA4y60NyFrtuzJCZRy1mmKXKkexepPVSaxh6UdaSexbE-oJqEO71PXBcMJemUsExswnYJZkkK7661R71oT1ojjX2KxYuNW5sCBWpijY4MjmIpHm~tmFk3SOYugMLTewBBukOkNvPHWto2ShspAJjsZ7HIX1BdDJx7wrFvDYwhGDurHIgc6c9JKHWG0PKTV~OP3bkHsSgP3wpvPXQL3wPKk6pjOrxd7OqVgr-d8eimc-LUHHC5DDYoW3RV0AZaQVDax-Pdw4Bpn~-qeNPIqJpCfmf51ZiIu6mfgmjw__"
                                    className="absolute -top-2 -right-2 w-[6vw] h-[6vw]"
                                    onClick={() => {
                                        setPopAddSong(!popAddSong);
                                    }}
                                />
                            </div>

                            <div className=" h-[60vh] overflow-y-auto scrollbar-hide">
                                {[["songTitle", "곡이름"], ["artistName", "가수이름"], ["vocal", "보컬"], ["guitar", "세션(기타)"], ["bass", "세션(베이스)"],
                                ["keyboard", "세션(키보드)"], ["drums", "세션(드럼/카혼)"], ["etc", "세션(etc)"]].map((item) => (
                                    <div className="mb-4">
                                        <label className="block text-[#333333] text-sm font-bold mb-2" htmlFor={item[0]}>
                                            {item[1]}
                                        </label>
                                        <input
                                            id={item[0]}
                                            type="text"
                                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 "
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center justify-center">
                                <button className="bg-[#F5E8D2] hover:bg-[#F2DCC2] font-bold rounded w-[30vw] h-[8vw] "
                                    onClick={() => {
                                        const data = {
                                            title: (document.getElementById('songTitle') as HTMLInputElement).value,
                                            artist: (document.getElementById('artistName') as HTMLInputElement).value,
                                            vocal: (document.getElementById('vocal') as HTMLInputElement).value,
                                            guitar: (document.getElementById('guitar') as HTMLInputElement).value,
                                            bass: (document.getElementById('bass') as HTMLInputElement).value,
                                            keyboard: (document.getElementById('keyboard') as HTMLInputElement).value,
                                            drums: (document.getElementById('drums') as HTMLInputElement).value,
                                            etc: (document.getElementById('etc') as HTMLInputElement).value
                                        }
                                        sendAPI(data);
                                    }}>
                                    곡 추가
                                </button>
                            </div>
                        </div>
                    </div>
                </Mobile>
                <PC>
                    <div className="fixed inset-0 flex items-center justify-center z-50 mt-10">
                        <div className="bg-white w-[60vw] p-6 rounded-xl shadow-lg relative text-[90%]">
                            <img
                                src="https://s3-alpha-sig.figma.com/img/d48e/ea4f/c4fa7c2925b17d7426d01b836093fe1b?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dAu6yT96KkBJ45b7RaXrKC52ubqFqkCPP50zqEVSIVzCCjBpLvA4y60NyFrtuzJCZRy1mmKXKkexepPVSaxh6UdaSexbE-oJqEO71PXBcMJemUsExswnYJZkkK7661R71oT1ojjX2KxYuNW5sCBWpijY4MjmIpHm~tmFk3SOYugMLTewBBukOkNvPHWto2ShspAJjsZ7HIX1BdDJx7wrFvDYwhGDurHIgc6c9JKHWG0PKTV~OP3bkHsSgP3wpvPXQL3wPKk6pjOrxd7OqVgr-d8eimc-LUHHC5DDYoW3RV0AZaQVDax-Pdw4Bpn~-qeNPIqJpCfmf51ZiIu6mfgmjw__"
                                className="absolute top-5 right-5 w-[4vh] h-[4vh]"
                                onClick={() => {
                                    setPopAddSong(!popAddSong);
                                }} />

                            <div className="text-center box1">
                                {[["songTitle", "곡이름"], ["artistName", "가수이름"]].map((item) => (
                                    <div className="mb-4">
                                        <label className="block text-[#333333] text-sm font-bold mb-2" htmlFor={item[0]}>
                                            {item[1]}
                                        </label>
                                        <input
                                            id={item[0]}
                                            type="text"
                                            className="appearance-none border rounded w-[50%] py-2 px-3 text-gray-700 text-[70%] "
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 gap-4 box2 mt-10">
                                {[["vocal", "세션(보컬)"], ["guitar", "세션(기타)"], ["bass", "세션(베이스)"],
                                ["keyboard", "세션(키보드)"], ["drums", "세션(드럼/카혼)"], ["etc", "세션(etc)"]].map((item) => (
                                    <div className="mb-4">
                                        <label className="block text-[#333333] text-sm font-bold mb-2" htmlFor={item[0]}>
                                            {item[1]}
                                        </label>
                                        <input
                                            id={item[0]}
                                            type="text"
                                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 text-[70%] "
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center justify-center text-[120%]">
                                <button className="bg-[#F5E8D2] hover:bg-[#F2DCC2] font-bold rounded w-[30vh] pt-2 pb-2 mt-1 "
                                    onClick={() => {
                                        const data = {
                                            title: (document.getElementById('songTitle') as HTMLInputElement).value,
                                            artist: (document.getElementById('artistName') as HTMLInputElement).value,
                                            vocal: (document.getElementById('vocal') as HTMLInputElement).value,
                                            guitar: (document.getElementById('guitar') as HTMLInputElement).value,
                                            bass: (document.getElementById('bass') as HTMLInputElement).value,
                                            keyboard: (document.getElementById('keyboard') as HTMLInputElement).value,
                                            drums: (document.getElementById('drums') as HTMLInputElement).value,
                                            etc: (document.getElementById('etc') as HTMLInputElement).value
                                        }
                                        sendAPI(data);
                                    }}>
                                    곡 추가하기
                                </button>
                            </div>
                        </div>
                    </div>
                </PC>
            </div>
        )
    };

    const Members: React.FC<{ members: { name: string, session: string }[] }> = (members) => {
        return (
            <div className="Members">
                <Mobile>
                    <div className="w-full grid grid-cols-3 bg-lightgray justify-center z-0">
                        {members.members.map((member) => (
                            <div className="h-[9vh] text-center text-[100%] flex flex-col justify-center">
                                <div className="text-[#333333]">{member.session}
                                    <div className="text-[#7c7c7c]">{member.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Mobile>
                <PC>
                    <div className="w-full grid grid-cols-3 bg-lightgray justify-center z-0">
                        {members.members.map((member) => (
                            <div className="h-[9vh] text-center text-[100%] flex flex-col justify-center">
                                <div className="text-[#333333]">{member.session}
                                    <div className="text-[#7c7c7c]">{member.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </PC>
            </div>

        )
    };

    const Song: React.FC<{ title: string, artist: string, liked: boolean, open: boolean }> = ({ title, artist, liked, open }) => {

        return (
            <div>
                <Mobile>
                    <div className={`w-full h-[10vh] flex items-center border-b-2 border-lightgray ${open ? 'shadow-[0px_0px_10px_0px_#F2DCC2] relative' : ''}`}>
                        <img src={liked ? fullHeart : emptyHeart} className="w-[10vw] h-[10vw] ml-[2vh] mr-[2vh]"
                            onClick={() => {
                                {/* 좋아요 반전 */ }
                            }} />
                        <div className="">
                            <div className="text-[#333333] font-bold text-2xl">{title}</div>
                            <div className="text-gray text-base">{artist}</div>
                        </div>
                        {open && (
                            <div className="bg-lightgray rounded-lg h-[8vw] text-sm text-center px-2 flex items-center justify-center ml-auto mr-5">
                                수정/삭제하기
                            </div>
                        )}
                        <div className={`mr-[2vh] ${open ? '' : 'ml-auto'}`}>
                            <img src={arrow_up} className={`w-[8vw] h-[8vw] ${open ? '' : 'rotate-180'}`} />
                        </div>
                    </div>
                    {open && (
                        <Members members={[{ name: '남구민', session: '보컬' }, { name: '남구민', session: '기타' }, { name: '남구민', session: '베이스' }, { name: '남구민', session: '키보드' }, { name: '남구민', session: '드럼' }]} />
                    )}
                </Mobile>
                <PC>
                    <div className={`w-full h-[8vh] flex items-center border-b-2 border-lightgray ${open ? 'shadow-[0px_0px_10px_0px_#F2DCC2] relative' : ''}`}>
                        <img src={liked ? fullHeart : emptyHeart} className="w-[5vh] h-[5vh] ml-[2vw] mr-[2vw]" />
                        <div className="">
                            <div className="text-[#333333] font-bold text-[100%]">{title}</div>
                            <div className="text-gray text-[80%]">{artist}</div>
                        </div>
                        {open && (
                            <div className="bg-lightgray rounded-lg h-[5vh] text-[80%] text-center pr-2 pl-2 flex items-center justify-center ml-auto mr-2">
                                수정/삭제하기
                            </div>
                        )}
                        <div className={`mr-[3vw] ${open ? '' : 'ml-auto'}`}>
                            <img src={arrow_up} className={`w-[5vh] h-[5vh] ${open ? '' : 'rotate-180'}`} />
                        </div>
                    </div>
                    {open && (
                        <Members members={[{ name: '남구민', session: '보컬' }, { name: '남구민', session: '기타' }, { name: '남구민', session: '베이스' }, { name: '남구민', session: '키보드' }, { name: '남구민', session: '드럼' }]} />
                    )}
                </PC>
            </div>
        )
    };

    return (
        <div>
            <Mobile>
                <div>
                    <div className="w-full flex flex-col">
                        <PageTitle title={year + " " + concert} />
                        <div className="Table w-[90vw] h-[70vh] mr-auto ml-auto overflow-y-auto scrollbar-hide ">
                            {concerts.map((item) => (
                                <div key={item.song_id} onClick={() => {
                                    setConcerts(concerts.map(concertItem =>
                                        concertItem.song_id === item.song_id ? { ...concertItem, open: !item.open } : concertItem))
                                }}>
                                    <Song title={item.title} artist={item.artist} liked={item.liked} open={item.open ? true : false} />
                                </div>
                            ))}

                            <img src="https://s3-alpha-sig.figma.com/img/0acd/1a9f/e44fda3f1f2acb0697afa811f0482a6a?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=myc7lwsykhdrpNEyqaFUiyyW2z66J3iNirA94KlsOKsgHsJkX45S3XQRGfA8afSxi3oEVod9H5-vBs0Ik1eVJ26qmzzFGxK-9mQ7OjCaR0S0GW8w1v6mzX1wh3gED5AsFhNWt4QRz~pfVNQfbQP8F5SeAYpBHWhbDs9X-pexRvTtHml0d1OmswfRpjR4CEQIFUNZlFFwjKy0t8P-nSVwogBB6ZefjxYb~YyN1O2ijwFASSgQeWRu1RrN8~b2oD2lfFbtA542tUrSGf~XgvZ1~B0vFMq8Sd5n09qJuqqHekXztEPAzQmrnlEZa6qQVAESWK-frHtAXctXHnFUMXt3Hw__"
                                className="w-[15vw] h-[15vw] mr-auto ml-auto mt-[2vh]"
                                onClick={() => setPopAddSong(!popAddSong)} />
                        </div>
                    </div>
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
                            총{concerts.length}곡
                        </div>
                    </div>

                    <div className="w-[80vw] bg-[#F2DCC266] absolute bottom-0 left-[10vw] h-[50vh] rounded-lg flex justify-center items-end shadow-[0px_0px_10px_0px_rgba(242,220,194,0.4)]">


                        <div className="w-[35vw] h-[45vh] bg-white rounded-t-xl mx-8 border-[3px] border-lightgray shadow-[0px_0px_5px_0px_#00000040] pl-[1vw] pr-[1vw] overflow-y-auto scrollbar-hide py-3">
                            {concerts.slice(0, Math.ceil(concerts.length / 2)).map((item) => (
                                <div onClick={() => {
                                    setConcerts(concerts.map(concertItem =>
                                        concertItem === item ? { ...concertItem, open: !item.open } : concertItem))
                                }}>
                                    <Song title={item.title} artist={item.artist} liked={item.liked} open={item.open ? true : false} />
                                </div>
                            ))}
                        </div>
                        <div className="w-[35vw] h-[45vh] bg-white rounded-t-xl mx-8 border-[3px] border-lightgray shadow-[0px_0px_5px_0px_#00000040] pl-[1vw] pr-[1vw] overflow-y-auto scrollbar-hide py-3">
                            {concerts.slice(Math.ceil(concerts.length / 2)).map((item) => (
                                <div onClick={() => {
                                    setConcerts(concerts.map(concertItem =>
                                        concertItem === item ? { ...concertItem, open: !item.open } : concertItem))
                                }}>
                                    <Song title={item.title} artist={item.artist} liked={item.liked} open={item.open ? true : false} />
                                </div>
                            ))}
                            <img src="https://s3-alpha-sig.figma.com/img/0acd/1a9f/e44fda3f1f2acb0697afa811f0482a6a?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=myc7lwsykhdrpNEyqaFUiyyW2z66J3iNirA94KlsOKsgHsJkX45S3XQRGfA8afSxi3oEVod9H5-vBs0Ik1eVJ26qmzzFGxK-9mQ7OjCaR0S0GW8w1v6mzX1wh3gED5AsFhNWt4QRz~pfVNQfbQP8F5SeAYpBHWhbDs9X-pexRvTtHml0d1OmswfRpjR4CEQIFUNZlFFwjKy0t8P-nSVwogBB6ZefjxYb~YyN1O2ijwFASSgQeWRu1RrN8~b2oD2lfFbtA542tUrSGf~XgvZ1~B0vFMq8Sd5n09qJuqqHekXztEPAzQmrnlEZa6qQVAESWK-frHtAXctXHnFUMXt3Hw__"
                                className="w-[5vh] h-[5vh] mr-auto ml-auto mt-[2vh]"
                                onClick={() => setPopAddSong(!popAddSong)} />

                        </div>
                    </div>
                </div>
            </PC>

            {popAddSong ?
                <AddSong />
                : null
            }
        </div>
    )
}

export default SetlistDetail;