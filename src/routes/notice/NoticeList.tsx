import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainTab from '../../components/common/MainTab';
import PageTitle from '../../components/common/PageTitle';
import { Nav } from 'react-bootstrap';
import Navbar from '../../components/common/Navbar';

const arrowimg: string = "src/assets/common/etc/gray_arrow.png";

interface NoticeItemProps {
    date: string;
    title: string;
    noticeID: number;
}

const NoticeItem: React.FC<NoticeItemProps> = ({ date, title, noticeID }) => (
    <Link to={`/notice?id=${noticeID}`}>
        <div className="relative w-full h-20">
            <div className="relative w-full h-full bg-[#ffffff] border-b-2 border-light-gray">
                <div className="absolute w-1/4 top-2/3 left-2 font-medium text-[#9a9a9a] text-sm tracking-tight leading-normal whitespace-nowrap">
                    {date}
                </div>
                <p className="absolute w-3/4 top-4 left-1 font-semibold text-[#333333] text-xl tracking-tight leading-normal line-clamp-1">
                    {title}
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

const NoticeList: React.FC = () => {
    const imgsrc: string = "https://s3-alpha-sig.figma.com/img/233a/2415/af59911c8eb4c151b5b673b70ac90d6f?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=auXJf1cIO2mhbgWen~jUYHbqxkCkhVU8kc4kFLI~1PWsI9422utCpZXQB9mlLIusuhHG4WVHGDdqDbi73tTRBaibAxJImqsBtLhsT4Qc9dhAAHDLqd48d90c6aL9JFW6H2wGRarlMbml7MCZM3jnCYDhcyjCtYbOB80YeL-U0VRu~k1TvjytJfcQx~3QsYzWnzUC9KLxyBe~0i1CuqVFo3Dfta~zG2XsJoz5YsF0HnD776ME2wfujc1tSZs0ChAPiScjQVS16guLwrsNKl9049g38zVNX6tW-XmvUf9f7sfTJImCZJuMbo1jo26ANUSk9YKj0OqiIVyNeI0ImWDUWg__";

    const response = {
        isSuccess: true,
        code: 2000,
        message: "success!",
        result: [
            { notice_id: 12, title: "페이징테스트", created_at: "2024-09-14T10:51:55.000Z" },
            { notice_id: 11, title: "페이징테스트", created_at: "2024-09-14T10:51:53.000Z" },
            { notice_id: 10, title: "공지제목", created_at: "2024-09-14T10:03:01.000Z" },
            { notice_id: 9, title: "공지제목만 수정", created_at: "2024-09-14T10:02:37.000Z" },
            { notice_id: 8, title: "줄알림", created_at: "2024-08-29T07:58:19.000Z" },
            { notice_id: 7, title: "줄알림", created_at: "2024-08-29T07:57:47.000Z" },
            { notice_id: 6, title: "줄알림", created_at: "2024-08-29T07:57:12.000Z" },
            { notice_id: 5, title: "줄알림", created_at: "2024-08-29T07:56:41.000Z" },
            { notice_id: 4, title: "줄알림", created_at: "2024-08-29T07:56:28.000Z" }
        ]
    };

    const [noticeList, setNoticeList] = useState<NoticeItemProps[]>([]);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        setNoticeList(response.result.map((item) => ({
            date: item.created_at.replace(/T/, ' ').substring(0, 16),
            title: item.title,
            noticeID: item.notice_id
        })));
    }, []);

    const handleScroll = useCallback((): void => {
        const noticeListElement = document.querySelector('.noticeList');
        if (noticeListElement) {
            const { scrollHeight, scrollTop, clientHeight } = noticeListElement;
            if (scrollTop + clientHeight >= scrollHeight - 10) {
                setPage((prevPage) => prevPage + 1);
                setNoticeList((prevNoticeList) => [
                    ...prevNoticeList,
                    ...response.result.map((item) => ({
                        date: item.created_at.replace(/T/, ' ').substring(0, 16),
                        title: item.title,
                        noticeID: item.notice_id
                    }))
                ]);
            }
        }
    }, []);

    useEffect(() => {
        const noticeListElement = document.querySelector('.noticeList');
        if (noticeListElement) {
            noticeListElement.addEventListener('scroll', handleScroll, true);
        }

        return () => {
            if (noticeListElement) {
                noticeListElement.removeEventListener('scroll', handleScroll, true);
            }
        };
    }, [handleScroll]);

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
                        {noticeList.map((item) => (
                            <NoticeItem key={item.noticeID} date={item.date} title={item.title} noticeID={item.noticeID} />
                        ))}
                    </div>
                </div>
            </div>
            <Navbar text='notice' />
        </div>
    );
};

export default NoticeList;