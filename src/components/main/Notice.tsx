import React from "react";
import { Mobile } from "../../routes/Layout";
import { Link } from "react-router-dom";

const NoticeRecItems: React.FC = () => {

    var items = []
    // api 연결 했다 치고
    items.push({ title: "[악기 스터디 신청]", noticeN: "1", date: "2024.04.28" })
    items.push({ title: "[동방예약] 댓글 남겨주시면 선착순 반영하겠습니다 :)", noticeN: "0", date: "2024.04.28" })


    return (
        <ul>
            {items.map((item) => (
                <li>
                    <Link to={`/notice/${item.noticeN}`}>
                        <div className="flex border-b-2 [border-bottom-style:solid] border-light-gray">
                            <div>
                                <div className="text-[80%] mt-[2vh] mb-[1.5vh] font-bold">
                                    {item.title}
                                </div>
                                <div className="text-[#9a9a9a] text-[20%] mb-[2vh]">
                                    {item.date}
                                </div>
                            </div>
                            <img
                                className="rotate-180 w-[2.8vh] h-[2.8vh] ml-auto mr-[1vh] mt-auto mb-auto"
                                alt="Collapse arrow"
                                src="src/assets/common/etc/black_arrow.png"
                            />
                        </div>
                    </Link>
                </li>
            ))}

        </ul>
    )
}
export default NoticeRecItems