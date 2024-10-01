import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainTab from '../../components/common/MainTab';
import PageTitle from '../../components/common/PageTitle';
import { Nav } from 'react-bootstrap';
import Navbar from '../../components/common/Navbar';
import { getNoticeList } from '../../libs/apis/notice';

const arrowimg: string = "src/assets/common/etc/gray_arrow.png";

interface NoticeItemProps {
    date: string;
    title: string;
    noticeID: number;
}

const NoticeItem: React.FC<NoticeItemProps> = (Notice) => (
    <Link to={`/notice?id=${Notice.noticeID}`}>
        <div className="relative w-full h-20">
            <div className="relative w-full h-full bg-[#ffffff] border-b-2 border-light-gray">
                <div className="absolute w-1/4 top-2/3 left-2 font-medium text-[#9a9a9a] text-sm tracking-tight leading-normal whitespace-nowrap">
                    {Notice.date}
                </div>
                <p className="absolute w-3/4 top-4 left-1 font-semibold text-[#333333] text-xl tracking-tight leading-normal line-clamp-1">
                    {Notice.title}
                </p>
                <img
                    className="absolute w-6 h-6 top-1/3 right-1"
                    alt="Collapse arrow"
                    src={arrowimg}
                />
            </div>
        </div>
    </Link>
);

const NoticeList: React.FC = ({ }) => {
    const imgsrc: string = "https://s3-alpha-sig.figma.com/img/233a/2415/af59911c8eb4c151b5b673b70ac90d6f?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=auXJf1cIO2mhbgWen~jUYHbqxkCkhVU8kc4kFLI~1PWsI9422utCpZXQB9mlLIusuhHG4WVHGDdqDbi73tTRBaibAxJImqsBtLhsT4Qc9dhAAHDLqd48d90c6aL9JFW6H2wGRarlMbml7MCZM3jnCYDhcyjCtYbOB80YeL-U0VRu~k1TvjytJfcQx~3QsYzWnzUC9KLxyBe~0i1CuqVFo3Dfta~zG2XsJoz5YsF0HnD776ME2wfujc1tSZs0ChAPiScjQVS16guLwrsNKl9049g38zVNX6tW-XmvUf9f7sfTJImCZJuMbo1jo26ANUSk9YKj0OqiIVyNeI0ImWDUWg__";

    const [noticeList, setNoticeList] = useState<NoticeItemProps[]>([]);
    const [page, setPage] = useState<number>(1);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const data = await getNoticeList(page);
        setTimeout(() => {
            setNoticeList((prevNoticeList) => [
                ...prevNoticeList,
                ...data.map((item) => ({
                    date: item.created_at.replace(/T/, ' ').substring(0, 16),
                    title: item.title,
                    noticeID: item.notice_id,
                }))]);
            setIsLoading(false);
        }, 500);

    };

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
        const target = entries[0];
        if (target.isIntersecting && !isLoading) {
            setPage((prevPage) => prevPage + 1);

        }
    };


    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            threshold: 0, //  Intersection Observer의 옵션, 0일 때는 교차점이 한 번만 발생해도 실행, 1은 모든 영역이 교차해야 콜백 함수가 실행.
        });
        // 최하단 요소를 관찰 대상으로 지정함
        const observerTarget = document.getElementById("observer");
        // 관찰 시작
        if (observerTarget) {
            observer.observe(observerTarget);
        }
    }, []);

    useEffect(() => {
        console.log("Page Load: ",page);
        fetchData();
    }, [page]);

    return (
        <div>
            <MainTab />
            <div className="h-full w-full flex flex-col">
                <PageTitle title="공지사항" />

                <div className='overflow-y-auto h-[68vh] mt-2 scrollbar-hide noticeList'>
                    <div className="relative w-full h-[10vh]">
                        <img
                            className="w-full h-full object-cover"
                            alt="Notice background"
                            src={imgsrc} />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                    </div>

                    <div className="relative w-full h-auto mt-8 px-4">
                        {noticeList.length === 0 ? (
                            <div className="flex justify-center items-center h-20">
                                <p className="text-lg text-center text-gray-400">공지사항이 없습니다<br />(불러오지 못했습니다)</p>
                            </div>
                        ) : (
                            noticeList.map((item, index) => (
                                <NoticeItem key={index} date={item.date} title={item.title} noticeID={item.noticeID} />
                            ))
                        )}
                        <div id="observer" className="h-20" />
                    </div>
                </div>
            </div>
            <Navbar text='notice' />
        </div>
    );
};

export default NoticeList;