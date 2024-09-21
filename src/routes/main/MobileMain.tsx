import React from 'react';
import ImgSlider from '../../components/main/ImgSlider';
import PageTitle from '../../components/common/PageTitle';
import NoticeRecItems from '../../components/main/Notice';
import CalendarMain from '../../components/main/Calendar';
import Goods from "../../components/goods/Goods";

export const MobileMain: React.FC = () => {
    return (
        <div className="main-page">
            <ImgSlider />
            <PageTitle title="공지사항" more={
                <div className="mr-0 flex items-center ml-auto">
                    <div className="text-sm text-center align-middle font-semibold">
                        더보기
                    </div>
                    <img className="w-[2vh] rotate-180 ml-[1vh]" alt="Back" src="src/assets/common/etc/black_arrow.png" />
                </div>
            }
            />

            <div className="ml-[2vh] mr-[2vh] mt-[1vh]">
                <NoticeRecItems />
            </div>

            <PageTitle title="이주의 동방예약" />

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
    )
};