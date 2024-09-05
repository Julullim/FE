import React from "react";
import Goods from "../../components/goods/Goods";
import ImgSlider from "../../components/main/ImgSlider";
import Reservation from "../../components/reservation/Res";
import { Mobile, PC } from "../Layout";
import NoticeRecItems from "../../components/main/Notice";
import CalendarMain from "../../components/main/Calendar";

const MainPage: React.FC = () => {
    return (
        <div>
            <Mobile>
                <div className="main-page">
                    <ImgSlider />

                    <div className="items-center mt-[3.5vh] ml-[4vh] mr-[4vh] flex">
                        <div className="font-semibold text-[#333333] text-[100%] text-center">
                            공지사항<div className="h-1 left-px [background:radial-gradient(50%_50%_at_50%_50%,rgb(242,220,194)_0%,rgb(255,255,255)_100%)]" />

                        </div>
                        <div className="mr-0 flex items-center ml-auto">
                            <div className="text-[50%] text-center align-middle font-semibold">
                                더보기
                            </div>
                            <img className="w-[2vh] rotate-180 ml-[1vh]" alt="Back" src="src/assets/common/etc/black_arrow.png" />
                        </div>
                    </div>

                    <div className="ml-[2vh] mr-[2vh] mt-[1vh]">
                        <NoticeRecItems />
                    </div>

                    <div className="items-center mt-[4vh] ml-[4vh] mr-[4vh] flex">
                        <div className="font-semibold text-[#333333] text-[100%] text-center">
                            이주의 동방예약
                            <div className="h-1 left-px [background:radial-gradient(50%_50%_at_50%_50%,rgb(242,220,194)_0%,rgb(255,255,255)_100%)]" />
                        </div>
                    </div>

                    <CalendarMain />

                    <div className="items-center mt-[6vh] ml-[4vh] mr-[4vh] flex">
                        <div className="font-semibold text-[#333333] text-[100%] text-center">
                            구매 가능한 굿즈
                            <div className="h-1 left-px [background:radial-gradient(50%_50%_at_50%_50%,rgb(242,220,194)_0%,rgb(255,255,255)_100%)]" />
                        </div>
                    </div>

                    <Goods />

                    <div className="items-center mt-[4vh] ml-[4vh] mr-[4vh] flex">
                        <div className="font-semibold text-[#333333] text-[100%] text-center">
                            수요조사 중인 굿즈
                            <div className="h-1 left-px [background:radial-gradient(50%_50%_at_50%_50%,rgb(242,220,194)_0%,rgb(255,255,255)_100%)]" />
                        </div>
                    </div>

                    <Goods />
                </div>
            </Mobile>

            <PC>
                <div className="bg-[#ffffff] flex flex-row justify-center w-full">
                    <div className="bg-white overflow-hidden w-[1728px] h-[5839px] relative">
                        <div className="absolute w-[1742px] h-[1117px] top-0 left-0">
                            <div className="absolute w-[1728px] h-[1117px] top-0 left-0 bg-black bg-[url(/image-70.png)] bg-[100%_100%]" />
                            <div className="w-[517px] top-[253px] left-[155px] [text-shadow:0px_0px_15px_#ffffff] text-[150px] tracking-[-6.00px] absolute [font-family:'Happy_Monkey-Regular',Helvetica] font-normal text-main leading-[normal] whitespace-nowrap shadow-white-blur-15">
                                JulAllim
                            </div>
                            <div className="absolute w-[267px] top-[433px] left-[155px] [text-shadow:0px_0px_15px_#ffffff] [font-family:'Pretendard-Light',Helvetica] font-light text-[#ffffff] text-[40px] text-center tracking-[0] leading-[normal] whitespace-nowrap shadow-white-blur-15">
                                줄울림만의 공간
                            </div>
                            <div className="absolute w-[494px] top-[913px] left-[1096px] [text-shadow:0px_0px_15px_#ffffff] [font-family:'Pretendard-Light',Helvetica] font-light text-[#ffffff] text-3xl text-right tracking-[0] leading-[normal] whitespace-nowrap shadow-white-blur-15">
                                등의 기능을 제공하고 있습니다.
                            </div>
                            <div className="absolute w-[346px] top-[334px] left-[1244px] [text-shadow:0px_0px_15px_#ffffff] [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-main text-[40px] text-right tracking-[0] leading-[normal] whitespace-nowrap shadow-white-blur-15">
                                어쿠스틱 밴드 동아리
                            </div>
                            <div className="absolute w-[567px] top-[509px] left-[1023px] [text-shadow:0px_0px_15px_#ffffff] [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-main text-[40px] text-right tracking-[0] leading-[normal] whitespace-nowrap shadow-white-blur-15">
                                웹페이지에 오신 것을 환영합니다!
                            </div>
                            <div className="absolute w-[330px] top-[392px] left-[1260px] [text-shadow:0px_0px_15px_#ffffff] [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-main text-[90px] text-right tracking-[0] leading-[normal] whitespace-nowrap shadow-white-blur-15">
                                Julullim
                            </div>
                            <p className="absolute w-[494px] top-[604px] left-[1096px] [text-shadow:0px_0px_15px_#ffffff] [font-family:'Pretendard-SemiBold',Helvetica] font-normal text-transparent text-3xl text-right tracking-[0] leading-[normal] whitespace-nowrap shadow-white-blur-15">
                                <span className="font-semibold text-[#f2dcc2]">‘줄알림’</span>
                                <span className="[font-family:'Pretendard-Light',Helvetica] font-light text-[#ffffff]">에서는</span>
                            </p>
                            <div className="gap-5 w-[161px] h-[252px] top-[650px] left-[1429px] flex flex-col items-start absolute">
                                <p className="relative self-stretch [text-shadow:0px_0px_15px_#ffffff] [font-family:'Pretendard-Bold',Helvetica] font-bold text-[#ffffff] text-[40px] text-right tracking-[0] leading-[normal] shadow-white-blur-15">
                                    <span className="[font-family:'Pretendard-Bold',Helvetica] font-bold text-[#ffffff] text-[40px] tracking-[0]">
                                        공지사항
                                        <br />
                                    </span>
                                </p>
                                <p className="relative self-stretch [text-shadow:0px_0px_15px_#ffffff] [font-family:'Pretendard-Bold',Helvetica] font-bold text-[#ffffff] text-[40px] text-right tracking-[0] leading-[normal] shadow-white-blur-15">
                                    <span className="[font-family:'Pretendard-Bold',Helvetica] font-bold text-[#ffffff] text-[40px] tracking-[0]">
                                        캘린더
                                        <br />
                                    </span>
                                </p>
                                <p className="relative self-stretch [text-shadow:0px_0px_15px_#ffffff] [font-family:'Pretendard-Bold',Helvetica] font-bold text-[#ffffff] text-[40px] text-right tracking-[0] leading-[normal] shadow-white-blur-15">
                                    <span className="[font-family:'Pretendard-Bold',Helvetica] font-bold text-[#ffffff] text-[40px] tracking-[0]">
                                        동방예약
                                        <br />
                                    </span>
                                </p>
                                <p className="relative self-stretch [text-shadow:0px_0px_15px_#ffffff] [font-family:'Pretendard-Bold',Helvetica] font-bold text-[#ffffff] text-[40px] text-right tracking-[0] leading-[normal] shadow-white-blur-15">
                                    <span className="[font-family:'Pretendard-Bold',Helvetica] font-bold text-[#ffffff] text-[40px] tracking-[0]">
                                        굿즈
                                    </span>
                                </p>
                            </div>
                            <div className="absolute w-[1742px] h-[71px] top-0 left-0">
                                <div className="relative w-[1728px] h-[71px] bg-white">
                                    <div className="w-[60px] left-[1560px] text-xl absolute h-4 top-7 [font-family:'Pretendard-Medium',Helvetica] font-medium text-dark-gray text-center tracking-[0] leading-[normal] whitespace-nowrap">
                                        윤서진
                                    </div>
                                    <img className="absolute w-[37px] h-[25px] top-[23px] left-[1523px]" alt="User" src="user.png" />
                                    <img
                                        className="absolute w-[47px] h-[25px] top-[23px] left-[1453px]"
                                        alt="Notification"
                                        src="notification.png"
                                    />
                                    <img
                                        className="absolute w-px h-[18px] top-[29px] left-[1507px] object-cover"
                                        alt="Line"
                                        src="line-11.svg"
                                    />
                                    <div className="w-[91px] left-[458px] text-[25px] absolute h-4 top-7 [font-family:'Pretendard-Medium',Helvetica] font-medium text-dark-gray text-center tracking-[0] leading-[normal] whitespace-nowrap">
                                        공지사항
                                    </div>
                                    <div className="w-[91px] left-[615px] text-[25px] absolute h-4 top-7 [font-family:'Pretendard-Medium',Helvetica] font-medium text-dark-gray text-center tracking-[0] leading-[normal] whitespace-nowrap">
                                        캘린더
                                    </div>
                                    <div className="w-[91px] left-[772px] text-[25px] absolute h-4 top-7 [font-family:'Pretendard-Medium',Helvetica] font-medium text-dark-gray text-center tracking-[0] leading-[normal] whitespace-nowrap">
                                        동방예약
                                    </div>
                                    <div className="w-[91px] left-[929px] text-[25px] absolute h-4 top-7 [font-family:'Pretendard-Medium',Helvetica] font-medium text-dark-gray text-center tracking-[0] leading-[normal] whitespace-nowrap">
                                        굿즈
                                    </div>
                                    <div className="w-[91px] left-[1086px] text-[25px] absolute h-4 top-7 [font-family:'Pretendard-Medium',Helvetica] font-medium text-dark-gray text-center tracking-[0] leading-[normal] whitespace-nowrap">
                                        전지
                                    </div>
                                    <div className="absolute w-[304px] h-[35px] top-[18px] left-[73px] [text-shadow:0px_0px_5px_#00000040] [font-family:'Happy_Monkey-Regular',Helvetica] font-normal text-main text-[50px] tracking-[5.00px] leading-[normal] whitespace-nowrap shadow-black-blur-5">
                                        JulAllim
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute w-[1728px] h-[1117px] top-[2234px] left-0 bg-white">
                            <div className="relative h-[1117px] bg-[url(/image-68.png)] bg-cover bg-[50%_50%]">
                                <div className="absolute w-[316px] top-[382px] left-[1229px] [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-black text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
                                    를 확인할 수 있어요.
                                </div>
                                <div className="absolute w-60 top-[335px] left-[989px] [font-family:'Pretendard-Bold',Helvetica] font-bold text-blue text-[90px] tracking-[0] leading-[normal] whitespace-nowrap">
                                    캘린더
                                </div>
                                <div className="absolute w-[284px] h-[57px] top-[264px] left-[1265px]">
                                    <div className="absolute w-[78px] h-[29px] top-[23px] left-[202px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
                                        에서는
                                    </div>
                                    <div className="absolute w-[196px] h-[57px] top-0 left-0 [text-shadow:0px_0px_5px_#00000040] [font-family:'Happy_Monkey-Regular',Helvetica] font-normal text-main text-6xl tracking-[-2.40px] leading-[normal] whitespace-nowrap shadow-black-blur-5">
                                        JulAllim
                                    </div>
                                </div>
                                <div className="absolute w-[509px] h-32 top-[465px] left-[1036px]">
                                    <div className="absolute w-[509px] h-[15px] top-6 left-0 [background:linear-gradient(180deg,rgb(255,229,123)_48.14%,rgba(255,255,255,0)_100%)]" />
                                    <div className="gap-2.5 w-[509px] h-32 top-0 left-0 flex flex-col items-start absolute">
                                        <p className="relative self-stretch [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-3xl text-right tracking-[0] leading-[normal]">
                                            <span className="[font-family:'Pretendard-Medium',Helvetica] font-medium text-[#000000] text-3xl tracking-[0]">
                                                이번 달의 동아리 일정을 확인 할 수 있어요 !<br />
                                            </span>
                                        </p>
                                        <p className="relative self-stretch [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-3xl text-right tracking-[0] leading-[normal]">
                                            <span className="[font-family:'Pretendard-Medium',Helvetica] font-medium text-[#000000] text-3xl tracking-[0]">
                                                MT, 공연 등 동아리 행사,
                                                <br />
                                            </span>
                                        </p>
                                        <p className="relative self-stretch [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-3xl text-right tracking-[0] leading-[normal]">
                                            <span className="[font-family:'Pretendard-Medium',Helvetica] font-medium text-[#000000] text-3xl tracking-[0]">
                                                합주, 악기스터디 등 개인 일정까지 !
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute w-[708px] h-[724px] top-[235px] left-[152px]">
                                    <div className="absolute w-[649px] h-[724px] top-0 left-0 bg-white shadow-black-blur-10" />
                                    <div className="absolute w-[688px] h-[644px] top-10 left-5">
                                        <div className="w-[23px] top-24 left-[557px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] text-xl tracking-[-0.80px] absolute leading-[normal] whitespace-nowrap">
                                            일
                                        </div>
                                        <div className="absolute w-[23px] top-[222px] left-[561px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] text-xl tracking-[-0.80px] leading-[normal] whitespace-nowrap">
                                            11
                                        </div>
                                        <div className="w-[23px] top-[136px] left-[561px] text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            4
                                        </div>
                                        <div className="absolute w-[181px] h-10 top-0 left-[19px]">
                                            <div className="w-[146px] top-0 left-0 [text-shadow:0px_1px_3px_1px_#00000026] [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-[#333333] text-3xl tracking-[-1.20px] whitespace-nowrap absolute leading-[normal] shadow-m3-elevation-light-1">
                                                2024년 7월
                                            </div>
                                            <img className="absolute w-9 h-9 top-1 left-[145px]" alt="Back" src="back.png" />
                                        </div>
                                        <div className="absolute w-[251px] h-[30px] top-[3px] left-[218px]">
                                            <div className="absolute w-[77px] h-[30px] top-0 left-0">
                                                <div className="relative w-[75px] h-[30px] bg-[#f2dcc2] rounded-[10px]">
                                                    <img
                                                        className="absolute w-[27px] h-[27px] top-px left-[5px] object-cover"
                                                        alt="Element"
                                                        src="3dicons.png"
                                                    />
                                                    <div className="absolute w-[30px] top-[5px] left-8 [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#ffffff] text-base tracking-[-0.64px] leading-[normal]">
                                                        일정
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute w-[77px] h-[30px] top-0 left-[88px]">
                                                <div className="relative w-[75px] h-[30px] bg-[#ff8080] rounded-[10px]">
                                                    <img
                                                        className="absolute w-[27px] h-[27px] top-px left-[5px] object-cover"
                                                        alt="Element"
                                                        src="image.png"
                                                    />
                                                    <div className="absolute w-[30px] top-[5px] left-[35px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#ffffff] text-base tracking-[-0.64px] leading-[normal]">
                                                        마감
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute w-[77px] h-[30px] top-0 left-44">
                                                <div className="relative w-[75px] h-[30px] bg-[#1c2b59] rounded-[10px]">
                                                    <img
                                                        className="absolute w-[27px] h-[27px] top-[3px] left-[5px] object-cover"
                                                        alt="Element"
                                                        src="3dicons-2.png"
                                                    />
                                                    <div className="absolute w-[30px] top-1.5 left-[34px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#ffffff] text-base tracking-[-0.64px] leading-[normal]">
                                                        합주
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute w-[23px] top-24 left-[30px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] text-xl tracking-[-0.80px] leading-[normal] whitespace-nowrap">
                                            월
                                        </div>
                                        <div className="absolute w-[23px] top-24 left-[118px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] text-xl tracking-[-0.80px] leading-[normal] whitespace-nowrap">
                                            화
                                        </div>
                                        <div className="absolute w-[23px] top-24 left-[206px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] text-xl tracking-[-0.80px] leading-[normal] whitespace-nowrap">
                                            수
                                        </div>
                                        <div className="absolute w-[23px] top-24 left-[294px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] text-xl tracking-[-0.80px] leading-[normal] whitespace-nowrap">
                                            목
                                        </div>
                                        <div className="absolute w-[23px] top-24 left-[382px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] text-xl tracking-[-0.80px] leading-[normal] whitespace-nowrap">
                                            금
                                        </div>
                                        <div className="absolute w-[23px] top-24 left-[470px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] text-xl tracking-[-0.80px] leading-[normal] whitespace-nowrap">
                                            토
                                        </div>
                                        <div className="w-[23px] top-[222px] left-[35px] text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            5
                                        </div>
                                        <div className="w-[23px] top-[222px] left-[123px] text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            6
                                        </div>
                                        <div className="w-[23px] top-[222px] left-[211px] text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            7
                                        </div>
                                        <div className="w-[23px] top-[222px] left-[299px] text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            8
                                        </div>
                                        <div className="w-[23px] top-[222px] left-[387px] text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            9
                                        </div>
                                        <div className="w-[29px] top-[222px] left-[475px] text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            10
                                        </div>
                                        <div className="w-[29px] top-[327px] left-[29px] text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            12
                                        </div>
                                        <div className="w-[29px] top-[327px] left-[117px] text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            13
                                        </div>
                                        <div className="w-[29px] top-[327px] left-[205px] text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            14
                                        </div>
                                        <div className="w-[22px] top-[327px] left-[292px] text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            15
                                        </div>
                                        <div className="absolute w-[54px] top-[402px] left-[277px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#a7a7a7] text-[15px] text-center tracking-[-0.60px] leading-[normal] whitespace-nowrap">
                                            +2개
                                        </div>
                                        <div className="w-[30px] top-[327px] left-[381px] text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            16
                                        </div>
                                        <div className="w-[29px] top-[327px] left-[469px] text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            17
                                        </div>
                                        <div className="w-8 top-[327px] left-[557px] text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            18
                                        </div>
                                        <div className="w-[29px] top-[432px] left-6 text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            19
                                        </div>
                                        <div className="w-[29px] top-[432px] left-28 text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            20
                                        </div>
                                        <div className="w-[29px] top-[432px] left-[200px] text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            21
                                        </div>
                                        <div className="w-[29px] top-[432px] left-72 text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            22
                                        </div>
                                        <div className="w-[31px] top-[432px] left-[376px] text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            23
                                        </div>
                                        <div className="w-[29px] top-[432px] left-[464px] text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            24
                                        </div>
                                        <div className="w-8 top-[432px] left-[552px] text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            25
                                        </div>
                                        <div className="w-[29px] top-[537px] left-6 text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            26
                                        </div>
                                        <div className="w-[29px] top-[537px] left-28 text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            27
                                        </div>
                                        <div className="w-[29px] top-[537px] left-[200px] text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            28
                                        </div>
                                        <div className="w-[29px] top-[537px] left-72 text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            29
                                        </div>
                                        <div className="w-[31px] top-[537px] left-[376px] text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            30
                                        </div>
                                        <div className="w-[23px] top-[136px] left-[299px] text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            1
                                        </div>
                                        <div className="w-[23px] top-[136px] left-[387px] text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            2
                                        </div>
                                        <div className="w-[29px] top-[136px] left-[475px] text-xl tracking-[-0.80px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                            3
                                        </div>
                                        <div className="absolute w-[610px] h-0.5 top-[126px] left-0 bg-[#f2f2f2]" />
                                        <div className="absolute w-[610px] h-0.5 top-[212px] left-0 bg-[#f2f2f2]" />
                                        <div className="absolute w-[610px] h-0.5 top-[317px] left-0 bg-[#f2f2f2]" />
                                        <div className="absolute w-[610px] h-0.5 top-[422px] left-0 bg-[#f2f2f2]" />
                                        <div className="absolute w-[610px] h-0.5 top-[527px] left-0 bg-[#f2f2f2]" />
                                        <div className="absolute w-[610px] h-0.5 top-[642px] left-0 bg-[#f2f2f2]" />
                                        <div className="absolute w-[85px] h-[22px] top-[353px] left-[261px]">
                                            <div className="relative w-[83px] h-[22px] bg-[#ff8080] rounded-[3px]">
                                                <div className="absolute w-[74px] h-[7px] top-[7px] left-[5px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#ffffff] text-[15px] text-center tracking-[-0.60px] leading-[normal] whitespace-nowrap">
                                                    동티 입금
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute w-[85px] h-[22px] top-[353px] left-0">
                                            <div className="relative w-[83px] h-[22px] bg-blue rounded-[3px]">
                                                <div className="absolute w-[74px] h-[7px] top-[7px] left-[5px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#ffffff] text-[15px] text-center tracking-[-0.60px] leading-[normal] whitespace-nowrap">
                                                    우리의밤
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute w-[85px] h-[22px] top-[353px] left-[527px]">
                                            <div className="relative w-[83px] h-[22px] bg-blue rounded-[3px]">
                                                <div className="absolute w-[74px] h-[7px] top-[7px] left-[5px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#ffffff] text-[15px] text-center tracking-[-0.60px] leading-[normal] whitespace-nowrap">
                                                    티라미수케
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute w-[259px] h-[22px] top-[458px] left-[262px]">
                                            <div className="relative w-[257px] h-[22px] bg-main rounded-[3px]">
                                                <div className="absolute w-[227px] h-[7px] top-[7px] left-[15px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#ffffff] text-[15px] text-center tracking-[-0.60px] leading-[normal] whitespace-nowrap">
                                                    항공우주캠프
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute w-[85px] h-[22px] top-[377px] left-[261px]">
                                            <div className="relative w-[83px] h-[22px] bg-blue rounded-[3px]">
                                                <div className="absolute w-[74px] h-[7px] top-[7px] left-[5px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#ffffff] text-[15px] text-center tracking-[-0.60px] leading-[normal] whitespace-nowrap">
                                                    건물 장미
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute w-[222px] h-9 top-[641px] left-[1282px] [font-family:'Pretendard-Bold',Helvetica] font-bold text-black text-3xl text-center tracking-[0] leading-[normal]">
                                    캘린더 보러가기
                                </div>
                                <img
                                    className="absolute w-[37px] h-[25px] top-[648px] left-[1508px]"
                                    alt="Collapse arrow"
                                    src="collapse-arrow-2.png"
                                />
                            </div>
                        </div>
                        <div className="top-[3351px] absolute w-[1728px] h-[1117px] left-0 bg-white">
                            <div className="relative h-[1117px] bg-[url(/image-69.png)] bg-cover bg-[50%_50%]">
                                <div className="absolute w-[649px] h-[724px] top-[235px] left-[907px] bg-white shadow-black-blur-10">
                                    <div className="absolute w-[595px] h-[124px] top-[55px] left-[27px] bg-[#ffffff] rounded-[5px] border border-solid border-light-gray shadow-[0px_1px_2px_#0000004c]">
                                        <div className="relative w-[544px] h-[72px] top-[21px] left-[26px]">
                                            <div className="absolute w-[297px] top-0 left-0 [font-family:'Pretendard-Medium',Helvetica] font-medium text-[#333333] text-lg tracking-[-0.72px] leading-[normal] whitespace-nowrap">
                                                곡 이름을 입력해주세요.
                                            </div>
                                            <div className="absolute w-[540px] h-8 top-10 left-0 bg-[#ffffff] rounded-[5px] border border-solid border-light-gray">
                                                <div className="absolute w-[194px] h-3.5 top-2 left-3 [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#999999] text-[15px] tracking-[-0.60px] leading-[normal] whitespace-nowrap">
                                                    Party
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute w-[618px] h-[465px] top-[203px] left-[27px]">
                                        <div className="absolute w-[595px] h-[465px] top-0 left-0 bg-[#ffffff] rounded-[5px] border border-solid border-light-gray shadow-[0px_1px_2px_#0000004c]" />
                                        <div className="absolute w-[45px] h-5 top-[394px] left-[30px]">
                                            <div className="absolute w-[21px] h-5 top-0 left-[22px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-text-gray text-xs tracking-[-0.48px] leading-[normal]">
                                                마감
                                            </div>
                                            <div className="absolute w-4 h-4 top-0.5 left-0 bg-light-gray rounded-sm" />
                                        </div>
                                        <div className="absolute w-[67px] h-5 top-[394px] left-[85px]">
                                            <div className="absolute w-11 h-5 top-0 left-[21px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-text-gray text-xs tracking-[-0.48px] leading-[normal]">
                                                예약 가능
                                            </div>
                                            <div className="absolute w-[15px] h-[15px] top-0.5 left-0 bg-yellow rounded-sm" />
                                        </div>
                                        <div className="absolute w-[76px] h-5 top-[394px] left-[162px]">
                                            <div className="absolute w-[53px] h-5 top-0 left-[21px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-text-gray text-xs tracking-[-0.48px] leading-[normal]">
                                                선택한 시간
                                            </div>
                                            <div className="absolute w-[15px] h-[15px] top-0.5 left-0 bg-blue rounded-sm" />
                                        </div>
                                        <div className="absolute w-[601px] h-[173px] top-28 left-[17px]">
                                            <div className="absolute w-[76px] h-[61px] top-[35px] left-[242px] bg-light-yellow rounded-sm">
                                                <div className="w-[22px] top-px left-[31px] text-lg tracking-[-0.72px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                                    8
                                                </div>
                                            </div>
                                            <div className="absolute w-[75px] h-[61px] top-[35px] left-[323px] bg-light-yellow rounded-sm">
                                                <div className="w-[21px] top-px left-8 text-lg tracking-[-0.72px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                                    9
                                                </div>
                                            </div>
                                            <div className="absolute w-5 top-0 left-[511px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] text-lg text-center tracking-[-0.72px] leading-[normal] whitespace-nowrap">
                                                일
                                            </div>
                                            <div className="w-[19px] top-9 left-[516px] text-lg tracking-[-0.72px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                                11
                                            </div>
                                            <div className="absolute w-5 top-0 left-7 [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] text-lg text-center tracking-[-0.72px] leading-[normal] whitespace-nowrap">
                                                월
                                            </div>
                                            <div className="absolute w-[21px] top-0 left-[108px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] text-lg text-center tracking-[-0.72px] leading-[normal] whitespace-nowrap">
                                                화
                                            </div>
                                            <div className="absolute w-[22px] top-0 left-[189px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] text-lg text-center tracking-[-0.72px] leading-[normal] whitespace-nowrap">
                                                수
                                            </div>
                                            <div className="absolute w-[21px] top-0 left-[270px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] text-lg text-center tracking-[-0.72px] leading-[normal] whitespace-nowrap">
                                                목
                                            </div>
                                            <div className="absolute w-[22px] top-0 left-[349px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] text-lg text-center tracking-[-0.72px] leading-[normal] whitespace-nowrap">
                                                금
                                            </div>
                                            <div className="absolute w-[22px] top-0 left-[430px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] text-lg text-center tracking-[-0.72px] leading-[normal] whitespace-nowrap">
                                                토
                                            </div>
                                            <div className="w-[22px] top-9 left-8 text-lg tracking-[-0.72px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                                5
                                            </div>
                                            <div className="w-[21px] top-9 left-[113px] text-lg tracking-[-0.72px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                                6
                                            </div>
                                            <div className="w-[22px] top-9 left-[193px] text-lg tracking-[-0.72px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                                7
                                            </div>
                                            <div className="w-[26px] top-9 left-[436px] text-lg tracking-[-0.72px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                                10
                                            </div>
                                            <div className="w-[27px] top-[108px] left-[27px] text-lg tracking-[-0.72px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                                12
                                            </div>
                                            <div className="w-[27px] top-[108px] left-[107px] text-lg tracking-[-0.72px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                                13
                                            </div>
                                            <div className="w-[27px] top-[108px] left-[188px] text-lg tracking-[-0.72px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                                14
                                            </div>
                                            <div className="w-[19px] top-[108px] left-[269px] text-lg tracking-[-0.72px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                                15
                                            </div>
                                            <div className="w-[29px] top-[108px] left-[348px] text-lg tracking-[-0.72px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                                16
                                            </div>
                                            <div className="w-[26px] top-[108px] left-[430px] text-lg tracking-[-0.72px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                                17
                                            </div>
                                            <div className="w-[30px] top-[108px] left-[511px] text-lg tracking-[-0.72px] absolute [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#333333] leading-[normal] whitespace-nowrap">
                                                18
                                            </div>
                                            <div className="absolute w-[559px] h-0.5 top-7 left-0 bg-[#f2f2f2]" />
                                            <div className="absolute w-[559px] h-px top-[99px] left-0 bg-[#f2f2f2]" />
                                            <div className="absolute w-[559px] h-0.5 top-[171px] left-0 bg-[#f2f2f2]" />
                                        </div>
                                        <div className="absolute w-[140px] h-[30px] top-16 left-[21px]">
                                            <div className="relative w-[138px] h-[30px]">
                                                <div className="absolute w-[138px] top-0 left-0 [text-shadow:0px_1px_3px_1px_#00000026] [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-[#333333] text-xl tracking-[-0.80px] leading-[normal] shadow-m3-elevation-light-1">
                                                    2024년 7월
                                                </div>
                                                <img className="absolute w-[26px] h-[26px] top-[3px] left-[98px]" alt="Back" src="back-2.png" />
                                            </div>
                                        </div>
                                        <div className="absolute w-[200px] top-[22px] left-[18px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-[#333333] text-lg tracking-[-0.72px] leading-[normal] whitespace-nowrap">
                                            날짜와 시간을 선택해주세요.
                                        </div>
                                        <div className="absolute w-6 h-5 top-[319px] left-[17px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-text-gray text-xs text-center tracking-[-0.48px] leading-[normal]">
                                            8시
                                        </div>
                                        <div className="absolute w-6 h-5 top-[319px] left-[57px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-text-gray text-xs text-center tracking-[-0.48px] leading-[normal]">
                                            9시
                                        </div>
                                        <div className="absolute w-6 h-5 top-[319px] left-[97px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-text-gray text-xs text-center tracking-[-0.48px] leading-[normal]">
                                            10시
                                        </div>
                                        <div className="absolute w-6 h-5 top-[319px] left-[137px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-text-gray text-xs text-center tracking-[-0.48px] leading-[normal]">
                                            11시
                                        </div>
                                        <div className="absolute w-6 h-5 top-[319px] left-[177px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-text-gray text-xs text-center tracking-[-0.48px] leading-[normal]">
                                            12시
                                        </div>
                                        <div className="absolute w-6 h-5 top-[319px] left-[217px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-text-gray text-xs text-center tracking-[-0.48px] leading-[normal]">
                                            13시
                                        </div>
                                        <div className="absolute w-6 h-5 top-[319px] left-[257px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-text-gray text-xs text-center tracking-[-0.48px] leading-[normal]">
                                            14시
                                        </div>
                                        <div className="absolute w-6 h-5 top-[319px] left-[297px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-text-gray text-xs text-center tracking-[-0.48px] leading-[normal]">
                                            15시
                                        </div>
                                        <div className="absolute w-6 h-5 top-[319px] left-[337px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-text-gray text-xs text-center tracking-[-0.48px] leading-[normal]">
                                            16시
                                        </div>
                                        <div className="absolute w-6 h-5 top-[319px] left-[377px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-text-gray text-xs text-center tracking-[-0.48px] leading-[normal]">
                                            17시
                                        </div>
                                        <div className="absolute w-6 h-5 top-[319px] left-[417px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-text-gray text-xs text-center tracking-[-0.48px] leading-[normal]">
                                            18시
                                        </div>
                                        <div className="absolute w-[39px] h-[42px] top-[343px] left-[29px] bg-light-gray rounded-sm" />
                                        <div className="absolute w-[39px] h-[42px] top-[343px] left-[69px] bg-light-gray rounded-sm" />
                                        <div className="absolute w-[39px] h-[42px] top-[343px] left-[109px] bg-light-gray rounded-sm" />
                                        <div className="absolute w-[39px] h-[42px] top-[343px] left-[149px] bg-blue rounded-sm" />
                                        <div className="absolute w-[39px] h-[42px] top-[343px] left-[189px] bg-blue rounded-sm" />
                                        <div className="absolute w-[39px] h-[42px] top-[343px] left-[229px] bg-blue rounded-sm" />
                                        <div className="absolute w-[39px] h-[42px] top-[343px] left-[269px] bg-yellow rounded-sm" />
                                        <div className="absolute w-[39px] h-[42px] top-[343px] left-[309px] bg-yellow rounded-sm" />
                                        <div className="absolute w-[39px] h-[42px] top-[343px] left-[349px] bg-yellow rounded-sm" />
                                        <div className="absolute w-[39px] h-[42px] top-[343px] left-[389px] bg-yellow rounded-sm" />
                                        <div className="absolute w-6 h-5 top-[319px] left-[457px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-text-gray text-xs text-center tracking-[-0.48px] leading-[normal]">
                                            19시
                                        </div>
                                        <div className="absolute w-6 h-5 top-[319px] left-[497px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-text-gray text-xs text-center tracking-[-0.48px] leading-[normal]">
                                            20시
                                        </div>
                                        <div className="absolute w-6 h-5 top-[319px] left-[537px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-text-gray text-xs text-center tracking-[-0.48px] leading-[normal]">
                                            21시
                                        </div>
                                        <div className="absolute w-[39px] h-[42px] top-[343px] left-[429px] bg-yellow rounded-sm" />
                                        <div className="absolute w-[39px] h-[42px] top-[343px] left-[469px] bg-yellow rounded-sm" />
                                        <div className="absolute w-[39px] h-[42px] top-[343px] left-[509px] bg-yellow rounded-sm" />
                                        <div className="absolute w-[39px] h-[42px] top-[343px] left-[549px] bg-yellow rounded-sm" />
                                        <div className="absolute w-[5px] h-[42px] top-[343px] left-[589px] bg-yellow rounded-sm" />
                                    </div>
                                </div>
                                <div className="absolute w-28 h-[29px] top-[285px] left-[359px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
                                    에서는
                                </div>
                                <div className="absolute w-[663px] h-[95px] top-[335px] left-[157px]">
                                    <div className="absolute w-[337px] top-[47px] left-[326px] [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-black text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
                                        을 할 수 있어요.
                                    </div>
                                    <div className="absolute w-[330px] top-0 left-0 [font-family:'Pretendard-Bold',Helvetica] font-bold text-blue text-[90px] tracking-[0] leading-[normal] whitespace-nowrap">
                                        동방예약
                                    </div>
                                </div>
                                <div className="w-[196px] h-[57px] top-[262px] left-[157px] [text-shadow:0px_0px_5px_#00000040] text-6xl tracking-[-2.40px] absolute [font-family:'Happy_Monkey-Regular',Helvetica] font-normal text-main leading-[normal] whitespace-nowrap shadow-black-blur-5">
                                    JulAllim
                                </div>
                                <div className="absolute w-[615px] h-32 top-[465px] left-[157px]">
                                    <div className="w-[529px] top-[70px] left-0 absolute h-[15px] [background:linear-gradient(180deg,rgb(255,229,123)_48.14%,rgba(255,255,255,0)_100%)]" />
                                    <div className="gap-2.5 w-[615px] h-32 top-0 left-0 flex flex-col items-start absolute">
                                        <p className="relative self-stretch [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-3xl tracking-[0] leading-[normal]">
                                            <span className="[font-family:'Pretendard-Medium',Helvetica] font-medium text-[#000000] text-3xl tracking-[0]">
                                                이젠 동방예약도 웹에서 간편하게 !<br />
                                            </span>
                                        </p>
                                        <p className="relative self-stretch [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-3xl tracking-[0] leading-[normal]">
                                            <span className="[font-family:'Pretendard-Medium',Helvetica] font-medium text-[#000000] text-3xl tracking-[0]">
                                                원하는 시간에 동아리방에서 합주할 수 있도록
                                                <br />
                                            </span>
                                        </p>
                                        <p className="relative self-stretch [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-3xl tracking-[0] leading-[normal]">
                                            <span className="[font-family:'Pretendard-Medium',Helvetica] font-medium text-[#000000] text-3xl tracking-[0]">
                                                예약해보세요 !
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute w-[222px] h-9 top-[644px] left-[557px] [font-family:'Pretendard-Bold',Helvetica] font-bold text-black text-3xl text-center tracking-[0] leading-[normal]">
                                    동방예약 하러가기
                                </div>
                                <img
                                    className="absolute w-[37px] h-[25px] top-[651px] left-[783px]"
                                    alt="Collapse arrow"
                                    src="collapse-arrow-3.png"
                                />
                            </div>
                        </div>
                        <div className="top-[4468px] absolute w-[1728px] h-[1117px] left-0 bg-white">
                            <div className="relative h-[1117px] bg-[url(/image-67-2.png)] bg-cover bg-[50%_50%]">
                                <div className="absolute w-[511px] h-[241px] top-[237px] left-[608px]">
                                    <div className="absolute w-[515px] h-[95px] top-[73px] left-0">
                                        <div className="absolute w-[337px] top-[47px] left-[174px] [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-black text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
                                            를 확인할 수 있어요.
                                        </div>
                                        <div className="absolute w-[162px] top-0 left-0 [font-family:'Pretendard-Bold',Helvetica] font-bold text-blue text-[90px] tracking-[0] leading-[normal] whitespace-nowrap">
                                            굿즈
                                        </div>
                                    </div>
                                    <div className="absolute w-[318px] h-[57px] top-0 left-[99px]">
                                        <div className="absolute w-28 h-[29px] top-[23px] left-[202px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
                                            에서는
                                        </div>
                                        <div className="absolute w-[196px] h-[57px] top-0 left-0 [text-shadow:0px_0px_5px_#00000040] [font-family:'Happy_Monkey-Regular',Helvetica] font-normal text-main text-6xl tracking-[-2.40px] leading-[normal] whitespace-nowrap shadow-black-blur-5">
                                            JulAllim
                                        </div>
                                    </div>
                                    <div className="absolute w-[462px] h-[38px] top-[203px] left-[26px]">
                                        <div className="relative w-[460px] h-[38px]">
                                            <div className="w-[460px] top-[23px] left-0 absolute h-[15px] [background:linear-gradient(180deg,rgb(255,229,123)_48.14%,rgba(255,255,255,0)_100%)]" />
                                            <p className="absolute w-[460px] top-0 left-0 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-3xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
                                                다양한 줄울림만의 굿즈 정보를 한눈에 !
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute w-[326px] h-[387px] top-[559px] left-[346px]">
                                    <div className="absolute w-[324px] h-[332px] top-0 left-0">
                                        <div className="relative h-[332px]">
                                            <img className="absolute w-[324px] h-[324px] top-2 left-0" alt="Rectangle" src="rectangle-14.png" />
                                            <div className="absolute w-[146px] h-[62px] top-0 left-[162px]">
                                                <div className="relative w-36 h-[62px]">
                                                    <div className="absolute w-[125px] h-[42px] top-5 left-[19px] bg-red rounded-[20px] shadow-[0px_4px_4px_#00000040]" />
                                                    <div className="absolute w-[116px] top-7 left-[23px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffff] text-xl text-center tracking-[0] leading-[normal]">
                                                        오늘 마감
                                                    </div>
                                                    <div className="absolute w-[61px] h-14 top-0 left-0">
                                                        <div className="relative h-14">
                                                            <img className="absolute w-14 h-[53px] top-[3px] left-0" alt="Element" src="3dicons-3.png" />
                                                            <img className="absolute w-[34px] h-8 top-0 left-[27px]" alt="Element" src="3dicons-4.png" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[125px] top-[351px] left-[99px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-3xl tracking-[0] absolute leading-[normal] whitespace-nowrap">
                                        36기 동잠
                                    </div>
                                </div>
                                <div className="absolute w-[326px] h-[387px] top-[559px] left-[702px]">
                                    <div className="absolute w-[324px] h-[332px] top-0 left-0">
                                        <div className="relative h-[332px]">
                                            <img className="absolute w-[324px] h-[324px] top-2 left-0" alt="Rectangle" src="rectangle-14-2.png" />
                                            <div className="absolute w-[146px] h-[62px] top-0 left-[162px]">
                                                <div className="relative w-36 h-[62px]">
                                                    <div className="absolute w-[125px] h-[42px] top-5 left-[19px] bg-red rounded-[20px] shadow-[0px_4px_4px_#00000040]" />
                                                    <div className="absolute w-[116px] top-7 left-[23px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffff] text-xl text-center tracking-[0] leading-[normal]">
                                                        오늘 마감
                                                    </div>
                                                    <div className="absolute w-[61px] h-14 top-0 left-0">
                                                        <div className="relative h-14">
                                                            <img className="absolute w-14 h-[53px] top-[3px] left-0" alt="Element" src="3dicons-5.png" />
                                                            <img className="absolute w-[34px] h-8 top-0 left-[27px]" alt="Element" src="3dicons-6.png" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[125px] top-[351px] left-[99px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-3xl tracking-[0] absolute leading-[normal] whitespace-nowrap">
                                        36기 동잠
                                    </div>
                                </div>
                                <div className="absolute w-[326px] h-[387px] top-[559px] left-[1058px]">
                                    <div className="absolute w-[324px] h-[332px] top-0 left-0">
                                        <div className="relative h-[332px]">
                                            <img className="absolute w-[324px] h-[324px] top-2 left-0" alt="Rectangle" src="rectangle-14-3.png" />
                                            <div className="absolute w-[146px] h-[62px] top-0 left-[162px]">
                                                <div className="relative w-36 h-[62px]">
                                                    <div className="absolute w-[125px] h-[42px] top-5 left-[19px] bg-red rounded-[20px] shadow-[0px_4px_4px_#00000040]" />
                                                    <div className="absolute w-[116px] top-7 left-[23px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffff] text-xl text-center tracking-[0] leading-[normal]">
                                                        오늘 마감
                                                    </div>
                                                    <div className="absolute w-[61px] h-14 top-0 left-0">
                                                        <div className="relative h-14">
                                                            <img className="absolute w-14 h-[53px] top-[3px] left-0" alt="Element" src="3dicons-7.png" />
                                                            <img className="absolute w-[34px] h-8 top-0 left-[27px]" alt="Element" src="3dicons-8.png" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[125px] top-[351px] left-[99px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-3xl tracking-[0] absolute leading-[normal] whitespace-nowrap">
                                        36기 동잠
                                    </div>
                                </div>
                                <img
                                    className="absolute w-[77px] h-[116px] top-[671px] left-[1428px]"
                                    alt="Collapse arrow"
                                    src="collapse-arrow-4.png"
                                />
                                <img
                                    className="absolute w-[77px] h-[116px] top-[671px] left-[223px]"
                                    alt="Collapse arrow"
                                    src="collapse-arrow-5.png"
                                />
                                <div className="absolute w-[222px] h-9 top-[477px] left-[1150px] [font-family:'Pretendard-Bold',Helvetica] font-bold text-black text-3xl text-center tracking-[0] leading-[normal]">
                                    굿즈 구경하러 가기
                                </div>
                                <img
                                    className="absolute w-[37px] h-[25px] top-[484px] left-[1376px]"
                                    alt="Collapse arrow"
                                    src="collapse-arrow-6.png"
                                />
                            </div>
                        </div>
                        <div className="top-[1117px] absolute w-[1728px] h-[1117px] left-0 bg-white">
                            <div className="relative h-[1117px] bg-[url(/image-67.png)] bg-cover bg-[50%_50%]">
                                <div className="absolute w-[663px] h-[287px] top-[263px] left-[533px]">
                                    <div className="absolute w-[667px] h-[95px] top-[73px] left-0">
                                        <div className="relative w-[663px] h-[95px]">
                                            <div className="absolute w-[337px] top-[47px] left-[326px] [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-black text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
                                                을 확인할 수 있어요.
                                            </div>
                                            <div className="absolute w-[330px] top-0 left-0 [font-family:'Pretendard-Bold',Helvetica] font-bold text-blue text-[90px] tracking-[0] leading-[normal] whitespace-nowrap">
                                                공지사항
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute w-[318px] h-[57px] top-0 left-[175px]">
                                        <div className="absolute w-28 h-[29px] top-[23px] left-[202px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
                                            에서는
                                        </div>
                                        <div className="absolute w-[196px] h-[57px] top-0 left-0 [text-shadow:0px_0px_5px_#00000040] [font-family:'Happy_Monkey-Regular',Helvetica] font-normal text-main text-6xl tracking-[-2.40px] leading-[normal] whitespace-nowrap shadow-black-blur-5">
                                            JulAllim
                                        </div>
                                    </div>
                                    <div className="absolute w-[391px] h-[84px] top-[203px] left-[137px]">
                                        <div className="relative w-[389px] h-[84px]">
                                            <div className="w-60 top-[69px] left-[21px] absolute h-[15px] [background:linear-gradient(180deg,rgb(255,229,123)_48.14%,rgba(255,255,255,0)_100%)]" />
                                            <div className="gap-2.5 w-[389px] h-[82px] top-0 left-0 flex flex-col items-start absolute">
                                                <p className="relative self-stretch [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-3xl text-center tracking-[0] leading-[normal]">
                                                    <span className="[font-family:'Pretendard-Medium',Helvetica] font-medium text-[#000000] text-3xl tracking-[0]">
                                                        각종 정보와 신청/결과, 굿즈까지
                                                        <br />
                                                    </span>
                                                </p>
                                                <p className="relative self-stretch [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-3xl text-center tracking-[0] leading-[normal]">
                                                    <span className="[font-family:'Pretendard-Medium',Helvetica] font-medium text-[#000000] text-3xl tracking-[0]">
                                                        다양한 소식을 놓치지 말아요 !
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute w-[265px] h-9 top-[573px] left-[1244px]">
                                    <div className="absolute w-[222px] h-9 top-0 left-0 [font-family:'Pretendard-Bold',Helvetica] font-bold text-black text-3xl text-center tracking-[0] leading-[normal]">
                                        공지사항 보러가기
                                    </div>
                                    <img
                                        className="absolute w-[37px] h-[25px] top-[5px] left-[226px]"
                                        alt="Collapse arrow"
                                        src="collapse-arrow.png"
                                    />
                                </div>
                                <div className="absolute w-[1327px] h-[291px] top-[641px] left-[201px]">
                                    <div className="absolute w-[387px] h-[291px] top-0 left-0">
                                        <div className="relative w-[381px] h-[291px] bg-[#ffffff] border border-solid border-text-gray">
                                            <div className="w-[236px] h-[59px] top-[30px] left-[33px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-[#000000] text-3xl tracking-[0] absolute leading-[normal]">
                                                악기스터디 신청
                                            </div>
                                            <p className="w-[305px] h-[59px] top-[121px] left-[33px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#000000] text-xl tracking-[0] absolute leading-[normal]">
                                                🥁줄울림에서 커스텀 드럼스틱을 제작합니다!🥁&nbsp;&nbsp;줄울림 커스텀 드럼스틱 수요조사를 하려고
                                                합니다.
                                            </p>
                                            <div className="absolute w-[236px] h-[59px] top-[212px] left-[33px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#7c7c7c] text-xl tracking-[0] leading-[normal]">
                                                2024.07.23
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute w-[387px] h-[291px] top-0 left-[473px]">
                                        <div className="relative w-[381px] h-[291px] bg-[#ffffff] border border-solid border-text-gray">
                                            <div className="w-[236px] h-[59px] top-[30px] left-[33px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-[#000000] text-3xl tracking-[0] absolute leading-[normal]">
                                                악기스터디 신청
                                            </div>
                                            <p className="w-[305px] h-[59px] top-[121px] left-[33px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#000000] text-xl tracking-[0] absolute leading-[normal]">
                                                🥁줄울림에서 커스텀 드럼스틱을 제작합니다!🥁&nbsp;&nbsp;줄울림 커스텀 드럼스틱 수요조사를 하려고
                                                합니다.
                                            </p>
                                            <div className="absolute w-[236px] h-[59px] top-[212px] left-[33px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#7c7c7c] text-xl tracking-[0] leading-[normal]">
                                                2024.07.23
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute w-[387px] h-[291px] top-0 left-[946px]">
                                        <div className="relative w-[381px] h-[291px] bg-[#ffffff] border border-solid border-text-gray">
                                            <div className="w-[236px] h-[59px] top-[30px] left-[33px] [font-family:'Pretendard-Medium',Helvetica] font-medium text-[#000000] text-3xl tracking-[0] absolute leading-[normal]">
                                                악기스터디 신청
                                            </div>
                                            <p className="w-[305px] h-[59px] top-[121px] left-[33px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#000000] text-xl tracking-[0] absolute leading-[normal]">
                                                🥁줄울림에서 커스텀 드럼스틱을 제작합니다!🥁&nbsp;&nbsp;줄울림 커스텀 드럼스틱 수요조사를 하려고
                                                합니다.
                                            </p>
                                            <div className="absolute w-[236px] h-[59px] top-[212px] left-[33px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-[#7c7c7c] text-xl tracking-[0] leading-[normal]">
                                                2024.07.23
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PC>
        </div>
    )
};

export default MainPage;
