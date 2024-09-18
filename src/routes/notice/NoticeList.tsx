import React from 'react';
import { Link } from 'react-router-dom';

const arrowimg: string = "src/assets/common/etc/gray_arrow.png"

const NoticeItem: React.FC<{ date: string, title: string, noticeID: number }> = ({ date, title, noticeID }) => (
    <Link to={`/notice?id=${noticeID}`}>
        <div className="relative w-full h-20">
            <div className="relative w-full h-full bg-[#ffffff] border-b-2 border-light-gray">
                <div className="absolute w-1/4 top-2/3 left-2 font-medium text-[#9a9a9a] text-sm tracking-tight leading-normal whitespace-nowrap">
                    {date}
                </div>
                <p className="absolute w-3/4 top-4 left-1 font-semibold text-[#333333] text-lg tracking-tight leading-normal line-clamp-1">
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

export const NoticeList: React.FC = () => {
    const imgsrc: string = "https://s3-alpha-sig.figma.com/img/233a/2415/af59911c8eb4c151b5b673b70ac90d6f?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=auXJf1cIO2mhbgWen~jUYHbqxkCkhVU8kc4kFLI~1PWsI9422utCpZXQB9mlLIusuhHG4WVHGDdqDbi73tTRBaibAxJImqsBtLhsT4Qc9dhAAHDLqd48d90c6aL9JFW6H2wGRarlMbml7MCZM3jnCYDhcyjCtYbOB80YeL-U0VRu~k1TvjytJfcQx~3QsYzWnzUC9KLxyBe~0i1CuqVFo3Dfta~zG2XsJoz5YsF0HnD776ME2wfujc1tSZs0ChAPiScjQVS16guLwrsNKl9049g38zVNX6tW-XmvUf9f7sfTJImCZJuMbo1jo26ANUSk9YKj0OqiIVyNeI0ImWDUWg__"
    return (
        <div>
            <div className="h-full w-full flex flex-col">
                <div className="items-center mt-[3.5vh] ml-[4vh] mr-[4vh] flex">
                    <div className="font-semibold text-[#333333] text-[120%] text-center">
                        공지사항
                        <div className="h-1 left-px [background:radial-gradient(50%_50%_at_50%_50%,rgb(242,220,194)_0%,rgb(255,255,255)_100%)]" />
                    </div>
                </div>
                
                <div className='overflow-y-auto h-[calc(100vh-20vh)] mt-2'>
                    <div className="relative w-full h-[20vh]">
                        <img
                            className="w-full h-full object-cover"
                            alt="Notice background"
                            src={imgsrc} />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                    </div>

                    <div className="relative w-full h-auto mt-8 px-4">
                        <NoticeItem date="2024.04.28" title="[악기 스터디 신청]" noticeID={567} />
                        <NoticeItem date="2024.04.28" title="[축제 줄울림 공연(5/13) 뒷풀이 수요조사]" noticeID={345} />
                        <NoticeItem date="2024.04.28" title="[축제 줄울림 공연(5/13) 뒷풀이 수요조사]" noticeID={1345} />
                        <NoticeItem date="2024.04.28" title="[축제 줄울림 공연(5/13) 뒷풀이 수요조사]" noticeID={1234} />
                        <NoticeItem date="2024.04.28" title="[축제 줄울림 공연(5/13) 뒷풀이 수요조사]" noticeID={1123} />
                        <NoticeItem date="2024.04.29" title="[새로운 공지사항 1]" noticeID={5671} />
                        <NoticeItem date="2024.04.30" title="[새로운 공지사항 2]" noticeID={5672} />
                        <NoticeItem date="2024.05.01" title="[새로운 공지사항 3]" noticeID={5673} />
                        <NoticeItem date="2024.05.02" title="[새로운 공지사항 4]" noticeID={5674} />
                        <NoticeItem date="2024.05.03" title="[새로운 공지사항 5]" noticeID={5675} />
                        <NoticeItem date="2024.05.04" title="[새로운 공지사항 6]" noticeID={5676} />
                        <NoticeItem date="2024.05.05" title="[새로운 공지사항 7]" noticeID={5677} />
                        <NoticeItem date="2024.05.06" title="[새로운 공지사항 8]" noticeID={5678} />
                        <NoticeItem date="2024.05.07" title="[새로운 공지사항 9]" noticeID={5679} />
                        <NoticeItem date="2024.05.08" title="[새로운 공지사항 10]" noticeID={5680} />
                        <NoticeItem date="2024.05.09" title="[새로운 공지사항 11]" noticeID={5681} />
                        <NoticeItem date="2024.05.10" title="[새로운 공지사항 12]" noticeID={5682} />
                        <NoticeItem date="2024.05.11" title="[새로운 공지사항 13]" noticeID={5683} />
                        <NoticeItem date="2024.05.12" title="[새로운 공지사항 14]" noticeID={5684} />
                        <NoticeItem date="2024.05.13" title="[새로운 공지사항 15]" noticeID={5685} />
                        <NoticeItem date="2024.05.14" title="[새로운 공지사항 16]" noticeID={5686} />
                        <NoticeItem date="2024.05.15" title="[새로운 공지사항 17]" noticeID={5687} />
                        <NoticeItem date="2024.05.16" title="[새로운 공지사항 18]" noticeID={5688} />
                        <NoticeItem date="2024.05.17" title="[새로운 공지사항 19]" noticeID={5689} />
                        <NoticeItem date="2024.05.18" title="[새로운 공지사항 20]" noticeID={5690} />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default NoticeList;