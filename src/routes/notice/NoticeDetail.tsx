import React, { useEffect, useState } from 'react';
import { Subjective, Voted, Vote } from '../../components/survey/forms';
import Navbar from '../../components/common/Navbar';
import MainTab from '../../components/common/MainTab';
import { Mobile } from '../Layout';

export interface Notice {
    id: string;
    title: string;
    content: string;
    date: string;
    imgs: string[];

}

export interface Question {
    survey_id: number;
    question_type: string;
    question_text: string;
    picture_id: number | null;
    choices: { choice_id: number, choice_text: string }[] | null;
}

const FixButton: React.FC = () => {
    return (
        <div className="z-10 w-[20vw] h-20 fixed top-10 right-[15vw] bg-white rounded-lg shadow-lg">
            <button className='w-full h-1/2 rounded-t-lg text-left pl-4 hover:bg-lightgray '
                onClick={() => {
                    alert('수정 페이지로 이동합니다.');
                }
                }>수정</button>
            <button className='w-full h-1/2 rounded-ㅠ-lg text-left pl-4 hover:bg-lightgray'
                onClick={() => {
                    if (window.confirm('삭제하시겠습니까?')) {
                        alert('삭제되었습니다');
                    } else {
                        alert('취소되었습니다');
                    }
                }}>삭제</button>
        </div>
    )
};

const _3dotimg: string = "https://cdn-icons-png.flaticon.com/512/7066/7066144.png"

const NoticeDetail: React.FC<{ noticeID: String }> = ({ noticeID }) => {
    const [notice, setNotice] = useState<Notice | null>(null);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [popFix, setPopFix] = useState<boolean>(false);

    useEffect(() => {
        // API 호출
        const resResult = {
            "isSuccess": true,
            "code": 2000,
            "message": "success!",
            "result": {
                "notice": {
                    "notice_id": 38,
                    "title": "공지 제목",
                    "content": "공지 내용",
                    "img": ['https://s3-alpha-sig.figma.com/img/1120/b33b/280f8b012e44cdcf3502ac4476a2acd7?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E6WwRR6LcrFnLMCPa8wNmIwlMIgarkELOAqsEC-uVka6S2CZrvirIfGTfXwvqEgb3JNKQSRNMRw-hNbo14thrBe239k979q1fJYE6PvS7xbaePewXGWapm8aqBgXmJWlit2wi-swV48HanEJavDaMwkT75Pc8KdmqU0C7Bu6q5iKzdTxNg1K64LgKWBd1fc7vKrx0BqQUKpv-XNsQihjhb49RPFwvVsXXbxOPxyGhsmQobnU-QtN3AyKt93vcOe4xcJ8TBf7gH3QQKrOWNP5NPjmxxqJteToBOpF8IKk81eWig1m2CTBLEhwvaSFiLyQEFYJrXJUwW6vcukK7wRN8A__',
                        'https://s3-alpha-sig.figma.com/img/1120/b33b/280f8b012e44cdcf3502ac4476a2acd7?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E6WwRR6LcrFnLMCPa8wNmIwlMIgarkELOAqsEC-uVka6S2CZrvirIfGTfXwvqEgb3JNKQSRNMRw-hNbo14thrBe239k979q1fJYE6PvS7xbaePewXGWapm8aqBgXmJWlit2wi-swV48HanEJavDaMwkT75Pc8KdmqU0C7Bu6q5iKzdTxNg1K64LgKWBd1fc7vKrx0BqQUKpv-XNsQihjhb49RPFwvVsXXbxOPxyGhsmQobnU-QtN3AyKt93vcOe4xcJ8TBf7gH3QQKrOWNP5NPjmxxqJteToBOpF8IKk81eWig1m2CTBLEhwvaSFiLyQEFYJrXJUwW6vcukK7wRN8A__',],
                    
                    "link": "http://example.com",
                    "created_at": "2024-09-21T16:01:22.000Z",
                    "updated_at": "2024-09-21T16:01:22.000Z"
                },
                "questions": [
                    {
                        "survey_id": 39,
                        "question_type": "subjective",
                        "question_text": "주관식 질문 텍스트",
                        "picture_id": null,
                        "choices": []
                    },
                    {
                        "survey_id": 40,
                        "question_type": "objective",
                        "question_text": "객관식 질문 텍스트",
                        "picture_id": null,
                        "choices": [
                            {
                                "choice_id": 47,
                                "choice_text": "옵션 1"
                            },
                            {
                                "choice_id": 48,
                                "choice_text": "옵션 2"
                            }
                        ]
                    },
                    {
                        "survey_id": 41,
                        "question_type": "multiple_choice",
                        "question_text": "다중 선택 객관식 질문 텍스트",
                        "picture_id": null,
                        "choices": [
                            {
                                "choice_id": 49,
                                "choice_text": "옵션 A"
                            },
                            {
                                "choice_id": 50,
                                "choice_text": "옵션 B"
                            },
                            {
                                "choice_id": 51,
                                "choice_text": "옵션 C"
                            }
                        ]
                    },
                    {
                        "survey_id": 42,
                        "question_type": "deadline",
                        "question_text": "2024-12-31T23:59:00.000Z",
                        "picture_id": null,
                        "choices": []
                    }
                ]
            }
        }.result;

        setNotice({ id: resResult.notice.notice_id.toString(), title: resResult.notice.title, content: resResult.notice.content, date: resResult.notice.created_at, imgs: resResult.notice.imgs });
        setQuestions(resResult.questions.map((q) => ({
            survey_id: q.survey_id,
            question_type: q.question_type,
            question_text: q.question_text,
            picture_id: null,
            choices: q.choices.map((c) => ({ choice_id: c.choice_id, choice_text: c.choice_text }))
        })));

    }, [])


    return (
        <div className={"Notice" + noticeID.toString()}>
            <Mobile>
            <MainTab />

            <div className='w-[80vw] h-[10vh] border-b-light-gray border-b-2 z-10 ml-[10vw]'>
                <div className="relative w-full h-full border-light-gray">
                    <div className="absolute w-1/4 top-2/3 left-1 font-medium text-[#9a9a9a] text-sm tracking-tight leading-normal whitespace-nowrap">
                        {notice?.date}
                    </div>
                    <p className="absolute w-3/4 top-5 left-1 font-semibold text-[#333333] text-2xl tracking-tight leading-normal line-clamp-1">
                        {notice?.title}
                    </p>
                    <img
                        className="absolute w-2 h-7 top-[40%] right-0 opacity-50 object-cover"
                        alt="_3dotimg"
                        src={_3dotimg}
                        onClick={() => {
                            setPopFix(!popFix);
                        }}
                    />
                </div>
            </div>

            {popFix ? <FixButton /> : null}

            <div className='w-[80vw] pt-3 overflow-y-auto ml-[10vw] scrollbar-hide h-[70vh]'>
                <p className='text-[#333333] text-base tracking-tight leading-normal'>
                    {notice?.content.split('\n').map((line, index) => (
                        <span key={index}>
                            {line}
                            <br />
                        </span>
                    ))}
                </p>
                {notice?.imgs?.map((img) => (
                    <img src={img} alt='notice_img' className='w-80 h-60 mt-4 object-cover' />
                ))}

                <div className='Questions mt-3'>
                    {questions.map((q) => {
                        if (q.question_type === 'multiple_choice') {
                            return <Vote key={q.survey_id} title={q.question_text} option={q.choices.map((c) => ({ opt: c.choice_text, n: 10 }))} ismulti={true} submit={true} />
                        } else if (q.question_type === 'subjective') {
                            return <Subjective key={q.survey_id} title={q.question_text} ex="..." />
                        } else if (q.question_type === 'voted') {
                            return <Voted key={q.survey_id} title={q.question_text} option={q.choices.map((c) => ({ opt: c.choice_text, n: 10 }))} mypick={[]} />
                        }
                    })}
                </div>
            </div>

            <Navbar text={"calendar"} />
            </Mobile>
        </div>
    );
};

export default NoticeDetail;