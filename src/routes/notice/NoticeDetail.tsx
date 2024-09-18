import React, { useEffect, useState } from 'react';
import { Subjective, Voted, Vote } from '../../components/survey/forms';

interface Notice {
    id: string;
    title: string;
    content: string;
    date: string;

}

interface Question {
    survey_id: number;
    question_type: string;
    question_text: string;
    picture_id: number|null;
    deadline: string|null;
    choices: { choice_id: number, choice_text: string }[]|null;
}

const _3dotimg: string = "https://cdn-icons-png.flaticon.com/512/7066/7066144.png"

const NoticeDetail: React.FC<{ noticeID: String }> = ({ noticeID }) => {
    const [notice, setNotice] = useState<Notice | null>(null);
    const [questions, setQuestions] = useState<Question[]>([]);

    useEffect(() => {
        // API 호출
        const resResult = {
            "isSuccess": true,
            "code": 2000,
            "message": "success!",
            "result": {
                "notice": {
                    "notice_id": 26,
                    "title": "공지 제목",
                    "content": "🥁줄울림에서 커스텀 드럼스틱을 제작합니다!🥁\n\n줄울림 커스텀 드럼스틱 수요조사를 하려고 합니다. 디자인 시안은 다음 그림의 글씨에 영어로 “Julullim”이 새겨질 예정입니다. 스틱은 메이플 5A 입니다.\n\n가격은 개당 10,000원입니다. 커스텀 드럼스틱을 원하시는 분들은 아래 댓글에 수량을 적어주시기 바랍니다.\n\n\n*마감기한: ~4/22",
                    "link": null,
                    "created_at": "2024-09-17T18:44:08.000Z",
                    "updated_at": "2024-09-17T18:44:08.000Z"
                },
                "questions": [
                    {
                        "survey_id": 15,
                        "question_type": "multiple_choice",
                        "question_text": "다중 선택 객관식 질문 텍스트",
                        "choices": [
                            {
                                "choice_id": 18,
                                "choice_text": "옵션 A"
                            },
                            {
                                "choice_id": 19,
                                "choice_text": "옵션 B"
                            },
                            {
                                "choice_id": 20,
                                "choice_text": "옵션 C"
                            }
                        ]
                    }
                ]
            }
        }.result;

        setNotice({ id: "567", title: resResult.notice.title, content: resResult.notice.content, date: resResult.notice.created_at });
        setQuestions(resResult.questions.map((q) => ({
            survey_id: q.survey_id,
            question_type: q.question_type,
            question_text: q.question_text,
            picture_id: null,
            deadline: null,
            choices: q.choices.map((c) => ({ choice_id: c.choice_id, choice_text: c.choice_text }))
        })));
            
    }, [])


    return (
        <div className={"Notice" + noticeID.toString()}>
            <div className='w-[80vw] h-20 border-b-light-gray border-b-2 z-10 absolute top-0 left-[10vw]'>
                <div className="relative w-full h-full border-light-gray">
                    <div className="absolute w-1/4 top-2/3 left-1 font-medium text-[#9a9a9a] text-xs tracking-tight leading-normal whitespace-nowrap">
                        {notice?.date}
                    </div>
                    <p className="absolute w-3/4 top-5 left-1 font-semibold text-[#333333] text-lg tracking-tight leading-normal line-clamp-1">
                        {notice?.title}
                    </p>
                    <img
                        className="absolute w-2 h-7 top-[40%] right-0 opacity-50 object-cover"
                        alt="_3dotimg"
                        src={_3dotimg}
                    />
                </div>
            </div>

            <div className='w-[80vw] mt-1 absolute top-20 overflow-y-auto left-[10vw] scrollbar-hide h-[calc(100vh-20vh)]'>
                <p className='text-[#333333] text-sm tracking-tight leading-normal'>
                    {notice?.content.split('\n').map((line, index) => (
                        <span key={index}>
                            {line}
                            <br />
                        </span>
                    ))}
                </p>

                <img src='https://s3-alpha-sig.figma.com/img/1120/b33b/280f8b012e44cdcf3502ac4476a2acd7?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E6WwRR6LcrFnLMCPa8wNmIwlMIgarkELOAqsEC-uVka6S2CZrvirIfGTfXwvqEgb3JNKQSRNMRw-hNbo14thrBe239k979q1fJYE6PvS7xbaePewXGWapm8aqBgXmJWlit2wi-swV48HanEJavDaMwkT75Pc8KdmqU0C7Bu6q5iKzdTxNg1K64LgKWBd1fc7vKrx0BqQUKpv-XNsQihjhb49RPFwvVsXXbxOPxyGhsmQobnU-QtN3AyKt93vcOe4xcJ8TBf7gH3QQKrOWNP5NPjmxxqJteToBOpF8IKk81eWig1m2CTBLEhwvaSFiLyQEFYJrXJUwW6vcukK7wRN8A__'
                    alt='notice_img'
                    className='w-80 h-60 mt-4 object-cover' />

                <div className='Questions'>
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
        </div >
    );
};

export default NoticeDetail;