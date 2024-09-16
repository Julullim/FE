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
                    {/*줄울림 소개*/}
                    <div className="bg-white overflow-hidden w-[100vw] h-[100vh] relative">
                        <div className="absolute w-[100.81vw] h-[100vh] top-0 left-0">
                            <div className="absolute w-[100vw] h-[100vh] top-0 left-0 bg-black bg-[url(https://s3-alpha-sig.figma.com/img/233a/2415/af59911c8eb4c151b5b673b70ac90d6f?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=auXJf1cIO2mhbgWen~jUYHbqxkCkhVU8kc4kFLI~1PWsI9422utCpZXQB9mlLIusuhHG4WVHGDdqDbi73tTRBaibAxJImqsBtLhsT4Qc9dhAAHDLqd48d90c6aL9JFW6H2wGRarlMbml7MCZM3jnCYDhcyjCtYbOB80YeL-U0VRu~k1TvjytJfcQx~3QsYzWnzUC9KLxyBe~0i1CuqVFo3Dfta~zG2XsJoz5YsF0HnD776ME2wfujc1tSZs0ChAPiScjQVS16guLwrsNKl9049g38zVNX6tW-XmvUf9f7sfTJImCZJuMbo1jo26ANUSk9YKj0OqiIVyNeI0ImWDUWg__)] bg-cover bg-[50%_50%]">
                                {/* 어둡게 하기 위한 오버레이 */}
                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
                            </div>
                            <div className="w-[29.92vw] top-[22.65vh] left-[8.97vw] [text-shadow:0px_0px_15px_#ffffff] text-[8.68vw] tracking-[-0.35vw] absolute [font-family:'Happy_Monkey-Regular',Helvetica] font-normal text-main leading-[normal] whitespace-nowrap shadow-white-blur-15">
                                JulAllim
                            </div>
                            <div className="absolute w-[15.46vw] top-[38.76vh] left-[8.97vw] [text-shadow:0px_0px_15px_#ffffff] [font-family:'Pretendard-Light',Helvetica] font-light text-[#ffffff] text-[2.31vw] text-center tracking-[0] leading-[normal] whitespace-nowrap shadow-white-blur-15">
                                줄울림만의 공간
                            </div>
                            <div className="absolute w-[28.59vw] top-[81.73vh] left-[63.47vw] [text-shadow:0px_0px_15px_#ffffff] [font-family:'Pretendard-Light',Helvetica] font-light text-[#ffffff] text-3xl text-right tracking-[0] leading-[normal] whitespace-nowrap shadow-white-blur-15">
                                등의 기능을 제공하고 있습니다.
                            </div>
                            <div className="absolute w-[20.02vw] top-[29.91vh] left-[71.97vw] [text-shadow:0px_0px_15px_#ffffff] [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-main text-[2.31vw] text-right tracking-[0] leading-[normal] whitespace-nowrap shadow-white-blur-15">
                                어쿠스틱 밴드 동아리
                            </div>
                            <div className="absolute w-[32.81vw] top-[45.58vh] left-[59.23vw] [text-shadow:0px_0px_15px_#ffffff] [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-main text-[2.31vw] text-right tracking-[0] leading-[normal] whitespace-nowrap shadow-white-blur-15">
                                웹페이지에 오신 것을 환영합니다!
                            </div>
                            <div className="absolute w-[19.1vw] top-[35.11vh] left-[72.92vw] [text-shadow:0px_0px_15px_#ffffff] [font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-main text-[5.21vw] text-right tracking-[0] leading-[normal] whitespace-nowrap shadow-white-blur-15">
                                Julullim
                            </div>
                            <p className="absolute w-[28.59vw] top-[54.08vh] left-[63.47vw] [text-shadow:0px_0px_15px_#ffffff] [font-family:'Pretendard-SemiBold',Helvetica] font-normal text-transparent text-3xl text-right tracking-[0] leading-[normal] whitespace-nowrap shadow-white-blur-15">
                                <span className="font-semibold text-[#f2dcc2]">‘줄알림’</span>
                                <span className="[font-family:'Pretendard-Light',Helvetica] font-light text-[#ffffff]">에서는</span>
                            </p>
                        </div>

                    </div>

                    {/* 공지사항*/}
                    <div className="top-[100vh] absolute w-[100vw] h-[100vh] left-0 bg-white">
                        <div className="relative h-[100vh] bg-[url(https://s3-alpha-sig.figma.com/img/ea20/29e7/52b5be674fb5da74a911ec3993e7bd7e?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iM9M7y7K89T614SjIqf8qXvVg0fwagc-DNe1D~Ex1iLtbIIs8g1hI6OdxpGcdXnnA1fWnzydn0l0huN49L5VhgVvsgDwWxSAagHxgFvM0h9EQQ1vQzoEOvYBAkoH7x3CbMHQHs0qCo2yVB4gbZfLySSFrwLGyKPNPcmpsDv-yTE40cLlI1Mb146t8BJcheTGtH4iKVcIyDEyX1PywLIKaF-rWllRDzNPatCjvPrSXzS0UFG1zbFf4VXDGTH898dfh16~hlxWPcunQWv7mNPK-F40FbzBNip5hVTMLJs3hhvjyWUvMYMDfihzKYfmC0qrAoVMVZDRdnwoiL7HuQ9n1Q__)] bg-cover bg-[50%_50%]">
                            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-60" />
                            <div className="absolute top-[20vh] left-[30vw]">
                                <div className="absolute top-[2vh] left-[11vw] flex items-end w-[30vw]">
                                    <div className="w-[1vw]" />
                                    <div className="[text-shadow:0px_0px_0.5vh_#00000040] text-[#F2DCC2] text-[320%] shadow-black-blur-5 whitespace-nowrap">
                                        JulAllim
                                    </div>
                                    <div className="text-black font-semibold text-[160%] ml-[0.3vw] whitespace-nowrap mb-[1vh]">
                                        에서는
                                    </div>
                                </div>
                                <div className="absolute top-[8.5vh] left-[3vw]">
                                    <div className="w-[38.4vw] h-[8.5vh] flex items-end">
                                        <div className="font-bold text-blue text-[400%] whitespace-nowrap">
                                            공지사항
                                        </div>
                                        <div className="font-semibold text-black text-[220%] mb-[0.3vh] whitespace-nowrap">
                                            을 확인할 수 있어요.
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-[20vh] left-[10vw] w-[50vw] text-[150%] font-semibold whitespace-nowrap">
                                    각종 정보와 신청/결과, 굿즈까지<br />
                                    &nbsp;&nbsp;다양한 소식을 놓치지 말아요 !
                                </div>
                            </div>
                            <div className="absolute top-[47vh] left-[65vw] flex items-center">
                                <div className="font-bold text-black text-[170%] whitespace-nowrap text-center">
                                    공지사항 보러가기
                                </div>
                                <img className="w-[2vw] h-[2vw] top-[0.9vh] left-[13.2vw]" alt="arrow" src="src/assets/common/etc/gray_arrow.png" />
                            </div>
                            {/*공지사항*/}
                            <div className="absolute top-[53vh] left-[20%] w-[60%] flex justify-center">
                                <div className="flex justify-center ml-[2vw] mr-[2vw]">
                                    <div className="w-[18vw] h-[13vw] bg-white border border-solid border-text-gray border-[##9A9A9A] border-[2px]">
                                        <div className="whitespace-nowrap text-[150%] mt-[3vh] ml-[1.7vw] font-semibold">
                                            악기스터디 신청
                                        </div>
                                        <p className="ml-[1.7vw] mr-[1.7vw] mt-[0.7vw]">
                                            🥁줄울림에서 커스텀 드럼스틱을 제작합니다!🥁&nbsp;&nbsp;줄울림 커스텀 드럼스틱 수요조사를 하려고 합니다.
                                        </p>
                                        <p className="text-[#7c7c7c] ml-[1.7vw] mt-[1vw]">
                                            2024.07.23
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-center ml-[2vw] mr-[2vw]">
                                    <div className="w-[18vw] h-[13vw] bg-white border border-solid border-text-gray border-[##9A9A9A] border-[2px]">
                                        <div className="whitespace-nowrap text-[150%] mt-[3vh] ml-[1.7vw] font-semibold">
                                            악기스터디 신청
                                        </div>
                                        <p className="ml-[1.7vw] mr-[1.7vw] mt-[0.7vw]">
                                            🥁줄울림에서 커스텀 드럼스틱을 제작합니다!🥁&nbsp;&nbsp;줄울림 커스텀 드럼스틱 수요조사를 하려고 합니다.
                                        </p>
                                        <p className="text-[#7c7c7c] ml-[1.7vw] mt-[1vw]">
                                            2024.07.23
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-center ml-[2vw] mr-[2vw]">
                                    <div className="w-[18vw] h-[13vw] bg-white border border-solid border-text-gray border-[##9A9A9A] border-[2px]">
                                        <div className="whitespace-nowrap text-[150%] mt-[3vh] ml-[1.7vw] font-semibold">
                                            악기스터디 신청
                                        </div>
                                        <p className="ml-[1.7vw] mr-[1.7vw] mt-[0.7vw]">
                                            🥁줄울림에서 커스텀 드럼스틱을 제작합니다!🥁&nbsp;&nbsp;줄울림 커스텀 드럼스틱 수요조사를 하려고 합니다.
                                        </p>
                                        <p className="text-[#7c7c7c] ml-[1.7vw] mt-[1vw]">
                                            2024.07.23
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/*캘린더*/}
                    <div className="absolute w-[100vw] h-[100vh] top-[200vh] left-0 bg-white">
                        <div className="relative h-full bg-[url(https://s3-alpha-sig.figma.com/img/89f2/a0b2/e3431b16e1de7839ea3cce9af9203a78?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fi67PtoUAqhVH16dpsXJa8msBA4MTSAbmMCTGNCICyV51OjTGtD3YreYKC5ziBG5jvpx49Us-y6qGuH4WDt9-x~whD17h-7nebFt7eaHTkXmxiuu9MJfEAVGi0h3NsLliudruOvdKzfQPwjGR0xxMdWVo3kiYtG7uhi~ss4Ok~xAJzJZ4RDQ9zgtc3taVgj3Rn2YIfputeu9rINGXLmpvYlPAMjHR6lQSSDDCynXefzm5DEfCo96MNDGJW8CGu9DAueM4hErOar8AGB73PSlhgc0gImATQNaypwSib2O4jUVgzByTwfFM~Qptj69M1z-WlGesmZv8ZWDZUnAsNyYmw__)] bg-cover bg-[50%_50%]">
                            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-60" />

                            <div className="absolute top-[20vh] right-[40vw]">
                                <div className="absolute top-[2vw] mr-[10vw]">
                                    <div className="flex items-end w-[30vw]">
                                        <div className="[text-shadow:0px_0px_0.5vh_#00000040] text-[#F2DCC2] text-[320%] shadow-black-blur-5 whitespace-nowrap ml-auto mr-0">
                                            JulAllim
                                        </div>
                                        <div className="text-black font-semibold text-[160%] ml-[0.3vw] whitespace-nowrap mb-[1vh]">
                                            에서는
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-contents h-[8.5vh flex items-end">
                                            <div className="font-bold text-blue text-[400%] whitespace-nowrap">
                                                캘린더
                                            </div>
                                            <div className="font-semibold text-black text-[220%] mb-[0.3vh] whitespace-nowrap">
                                                을 확인할 수 있어요.
                                            </div>
                                        </div>
                                    </div>

                                    <div className=" w-contens text-[140%] font-semibold text-right mt-[2vh]">
                                        이번 달의 동아리 일정을 확인 할 수 있어요 !<br></br>
                                        MT, 공연 등 동아리 행사,<br></br>
                                        합주, 악기스터디 등 개인 일정까지 !
                                    </div>

                                    <div className="flex items-center mt-[7vh] justify-end">
                                        <div className="font-bold text-black text-[170%] whitespace-nowrap text-center">
                                            캘린더 보러가기
                                        </div>
                                        <img className="w-[2vw] h-[2vw] top-[0.9vh] left-[13.2vw]" alt="arrow" src="src/assets/common/etc/gray_arrow.png" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white w-[55vh] h-[68vh] absolute ml-[10vw] mt-[16vh]">
                                <img className="w-[50vh] h-[60vh] ml-auto mr-auto mt-[4vh]"
                                    src="src/assets/test/Group 898 (1).png" alt="exCalendar1" />
                            </div>
                        </div>
                    </div>

                    {/*동방예약*/}
                    <div className="absolute w-[100vw] h-[100vh] top-[300vh] left-0 bg-white">
                        <div className="relative h-full bg-[url(https://s3-alpha-sig.figma.com/img/798c/d26c/d7e0f8cfc949a81ec10d5fd6f1ddd701?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WH14inGrF8GpF47EmYeb3RjfUFx7y6YrVWLRqygcc7CvJ9ADeov8NO6UZa7h0p6QCRiX5qVxbIGi1OJ545yF~zWBt25eaNgLtLxldMxhklg~xqb4~twYTVHtCrUo1w3NHyfeuoczetZ0a7TK2qCivCnA15DFo0UmLAE0-8jSW4TiMxrrnx2KJuz-zR6XyHWxuIC4QUFUenCQ0gml31eURvZlzGFfnqe8WFDPp~eoLvOt3oF-tifRxpp3Txc7piUMEFlazWAz~7hkIwBLNY6RdDmnXTOgVTqsGzwMg5xTJlz16IirSHadOiT3GKWp8OpguLSLNTiuUJPVJ0xDTxODzw__)] bg-cover bg-[50%_50%]">
                            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-60" />

                            <div className="absolute top-[28vh] left-[14vw]">
                                <div className="absolute top-[2vw] mr-[10vw]">
                                    <div className="flex items-end w-[30vw]">
                                        <div className="[text-shadow:0px_0px_0.5vh_#00000040] text-[#F2DCC2] text-[320%] shadow-black-blur-5 whitespace-nowrap ml-0">
                                            JulAllim
                                        </div>
                                        <div className="text-black font-semibold text-[160%] ml-[0.3vw] whitespace-nowrap mb-[1vh]">
                                            에서는
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-contents h-[8.5vh flex items-end">
                                            <div className="font-bold text-blue text-[400%] whitespace-nowrap">
                                                동방예약
                                            </div>
                                            <div className="font-semibold text-black text-[220%] mb-[0.3vh] whitespace-nowrap">
                                                을 할 수 있어요.
                                            </div>
                                        </div>
                                    </div>

                                    <div className=" w-contens text-[140%] font-semibold text-left mt-[2vh]">
                                        이젠 동방예약도 웹에서 간편하게 !<br></br>
                                        원하는 시간에 동아리방에서 합주할 수 있도록<br></br>
                                        예약해보세요 !
                                    </div>

                                    <div className="flex items-center mt-[3vh] justify-end">
                                        <div className="font-bold text-black text-[170%] whitespace-nowrap text-center">
                                            동방예약 하러가기
                                        </div>
                                        <img className="w-[2vw] h-[2vw] top-[0.9vh] left-[13.2vw]" alt="arrow" src="src/assets/common/etc/gray_arrow.png" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white w-[50vh] h-[60vh] absolute mr-[14vw] mt-[20vh] right-0">
                                <img className="w-[50vh] h-[60vh] ml-auto mr-auto]"
                                    src="src/assets/test/image 1.png" alt="exReserv" />
                            </div>
                        </div>
                    </div>

                    {/*굿즈*/}
                    <div className="absolute w-[100vw] h-[100vh] top-[400vh] left-0 bg-white">
                        <div className="relative h-full bg-[url(https://s3-alpha-sig.figma.com/img/ea20/29e7/52b5be674fb5da74a911ec3993e7bd7e?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EwlfAIsMr8hSldZLuQV8VLucOfM5mi3IPTdLDC8Pv6~Iyhnox41Aav6m9lfwEmElz-RgX-UDmhbEFAWAnqE2lrw2x6MbVqOUmgONrWZo8XiGLFt~4DUVfa4s9S9iMZ1aFoQMQzM5FnOKeCitqyUgYfmCGjBdsZaFhMaRZ229NiqxLlcD7hLYsr-nM2mHgGLl8sXfumusx-whNZRBoiX4BjdERUMr7xxS7kz2-Ov9iCfS6Rtwc03UqcrlBfDnTg-w6YjGxqRSWR2l~NlhWrBWJJYoWm315M2Ib1Y-~iYWrNNQpTi-sqNg4GSLVItdHcluMLgrhcXS4wBEqjiNl6~D0g__)] bg-cover bg-[50%_50%]">
                            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-60" />

                            <div className="absolute top-[20vh] left-[30vw]">
                                <div className="absolute top-[2vh] left-[11vw] flex items-end w-[30vw]">
                                    <div className="w-[1vw]" />
                                    <div className="[text-shadow:0px_0px_0.5vh_#00000040] text-[#F2DCC2] text-[320%] shadow-black-blur-5 whitespace-nowrap">
                                        JulAllim
                                    </div>
                                    <div className="text-black font-semibold text-[160%] ml-[0.3vw] whitespace-nowrap mb-[1vh]">
                                        에서는
                                    </div>
                                </div>
                                <div className="absolute top-[8.5vh] left-[7vw]">
                                    <div className="w-[38.4vw] h-[8.5vh] flex items-end">
                                        <div className="font-bold text-blue text-[400%] whitespace-nowrap">
                                            굿즈
                                        </div>
                                        <div className="font-semibold text-black text-[220%] mb-[0.3vh] whitespace-nowrap">
                                            를 확인할 수 있어요.
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-[20vh] left-[8vw] w-[50vw] text-[150%] font-semibold whitespace-nowrap">
                                    다양한 줄울림만의 굿즈 정보를 한눈에 !
                                </div>
                            </div>
                            <div className="absolute top-[47vh] left-[65vw] flex items-center">
                                <div className="font-bold text-black text-[170%] whitespace-nowrap text-center">
                                    굿즈 구경하러 가기
                                </div>
                                <img className="w-[2vw] h-[2vw] top-[0.9vh] left-[13.2vw]" alt="arrow" src="src/assets/common/etc/gray_arrow.png" />
                            </div>

                            <div className="absolute top-[53vh] left-[20%] w-[60%] flex justify-center">
                                <div className="flex justify-center ml-[2vw] mr-[2vw]">
                                    <div className="w-[18vw] h-[18vw] bg-white border border-solid border-text-gray border-[##9A9A9A] border-[2px]">
                                        
                                    </div>
                                </div>
                                <div className="flex justify-center ml-[2vw] mr-[2vw]">
                                    <div className="w-[18vw] h-[18vw] bg-white border border-solid border-text-gray border-[##9A9A9A] border-[2px]">
                                        
                                    </div>
                                </div>
                                <div className="flex justify-center ml-[2vw] mr-[2vw]">
                                    <div className="w-[18vw] h-[18vw] bg-white border border-solid border-text-gray border-[##9A9A9A] border-[2px]">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </PC >
        </div >
    )
};

export default MainPage;
