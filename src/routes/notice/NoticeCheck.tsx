import React, { useEffect, useState } from 'react';
import { Subjective, Voted, Vote } from '../../components/survey/forms';
import TabBar from '../../components/common/TabBar';
import { Notice, Question } from './NoticeDetail';
import Navbar from '../../components/common/Navbar';
import { IndivObjectiveRes, IndivSubjectiveRes, MultiObjectiveRes, ObjectiveRes, SubjectiveRes } from '../../components/survey/forms_check';

export const SurveyCheck: React.FC<{ noticeID: String }> = ({ noticeID }) => {
    const [notice, setNotice] = useState<Notice | null>(null);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [isAll, setIsAll] = useState<boolean>(true);

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

    const AllDetail = () => {
        const [table, setTable] = useState<any[]>([]);
        useEffect(() => {
            // API 호출
            const resResult = {
                "isSuccess": true,
                "code": 2000,
                "message": "success!",
                "result": [
                    {
                        "survey_id": 39,
                        "question_type": "subjective",
                        "question_text": "주관식 질문 텍스트",
                        "response": [
                            {
                                "response_id": 49,
                                "response_text": "웅나양지훈"
                            },
                            {
                                "response_id": 53,
                                "response_text": "웅나배별하"
                            },
                            {
                                "response_id": 57,
                                "response_text": "웅나임세현"
                            },
                            {
                                "response_id": 60,
                                "response_text": "웅나윤서진"
                            }
                        ]
                    },
                    {
                        "survey_id": 40,
                        "question_type": "objective",
                        "question_text": "객관식 질문 텍스트",
                        "choices": [
                            {
                                "choice_id": 47,
                                "choice_text": "옵션 1",
                                "people": 3,
                                "percent": "75.0000"
                            },
                            {
                                "choice_id": 48,
                                "choice_text": "옵션 2",
                                "people": 1,
                                "percent": "25.0000"
                            }
                        ]
                    },
                    {
                        "survey_id": 41,
                        "question_type": "multiple_choice",
                        "question_text": "다중 선택 객관식 질문 텍스트",
                        "choices": [
                            {
                                "choice_id": 49,
                                "choice_text": "옵션 A",
                                "people": 2,
                                "percent": "25.0000"
                            },
                            {
                                "choice_id": 50,
                                "choice_text": "옵션 B",
                                "people": 2,
                                "percent": "25.0000"
                            },
                            {
                                "choice_id": 51,
                                "choice_text": "옵션 C",
                                "people": 4,
                                "percent": "50.0000"
                            }
                        ]
                    }
                ]
            }.result;
            setTable(resResult);
        }, [])

        return (
            <div className='pt-2'>
                {table.map((t) => {
                    if (t.question_type === "subjective") {
                        return <SubjectiveRes title={t.question_text} responses={t.response} />
                    } else if (t.question_type === "objective") {
                        return <ObjectiveRes title={t.question_text} responses={t.choices} />
                    } else if (t.question_type === "multiple_choice") {
                        return <MultiObjectiveRes title={t.question_text} responses={t.choices} />
                    }
                })}
            </div>
        )
    }
    const NotAllDetail = () => {
        const [table, setTable] = useState<{
            survey_id: number;
            question_type: string;   // 'subjective', 'objective', 'multiple_choice' 등의 타입을 가짐
            question_text: string;
            response_text: string | null;   // 주관식 답변의 경우, 응답 텍스트가 들어가며 없을 경우 null
            choices: {
                choice_id: number;
                choice_text: string;
            }[];
        }[]>([]);
        useEffect(() => {
            // API 호출
            const resResult = {
                "isSuccess": true,
                "code": 2000,
                "message": "success!",
                "result": [
                    {
                        "survey_id": 39,
                        "question_type": "subjective",
                        "question_text": "주관식 질문 텍스트",
                        "response_text": "웅나윤서진",
                        "choices": []
                    },
                    {
                        "survey_id": 40,
                        "question_type": "objective",
                        "question_text": "객관식 질문 텍스트",
                        "response_text": null,
                        "choices": [
                            {
                                "choice_id": 47,
                                "choice_text": "옵션 1"
                            }
                        ]
                    },
                    {
                        "survey_id": 41,
                        "question_type": "multiple_choice",
                        "question_text": "다중 선택 객관식 질문 텍스트",
                        "response_text": null,
                        "choices": [
                            {
                                "choice_id": 49,
                                "choice_text": "옵션 A"
                            },
                            {
                                "choice_id": 51,
                                "choice_text": "옵션 C"
                            }
                        ]
                    }
                ]
            }.result;
            setTable(resResult);
        }, [])
        return (
            <div className='pt-2'>
                {table.map((t) => {
                    if (t.question_type === "subjective") {
                        return <IndivSubjectiveRes title={t.question_text} response={t.response_text} />
                    } else if (t.question_type === "objective") {
                        return <IndivObjectiveRes
                            title={t.question_text}
                            choices={questions.filter((q) => q.survey_id === t.survey_id)[0].choices}
                            choose={t.choices.map((c) => c.choice_id)} />

                    } else if (t.question_type === "multiple_choice") {
                        return <IndivObjectiveRes
                            title={t.question_text}
                            choices={questions.filter((q) => q.survey_id === t.survey_id)[0].choices}
                            choose={t.choices.map((c) => c.choice_id)} />
                    }
                })}
            </div>
        )
    }

    return (
        <div>
            <TabBar text="투표 확인" />
            <div className="contents h-[100vh]">
                <div className='flex items-end justify-center'>
                    <div className='text-2xl font-semibold'>{notice?.title}</div>
                    <div className='text-sm text-gray ml-2'>2024.04.28 마감</div>
                </div>
                <div className='mt-4 flex w-full justify-center text-xl'>
                    <div className='mr-4'
                        onClick={() => setIsAll(true)}>통계
                        {isAll ? <div className="h-[0.5vh] bg-[radial-gradient(50%_987.5%_at_50%_50%,_#F2DCC2_0%,_#FFFFFF_100%)] mx-auto w-[100%]" /> : null}
                    </div>
                    <div className='ml-4'
                        onClick={() => setIsAll(false)}>개별 확인
                        {!isAll ? <div className="h-[0.5vh] bg-[radial-gradient(50%_987.5%_at_50%_50%,_#F2DCC2_0%,_#FFFFFF_100%)] mx-auto w-[100%]" /> : null}
                    </div>
                </div>
                <div className='h-[70vh] overflow-y-auto scrollbar-hide'>
                    {isAll ? <AllDetail /> : <NotAllDetail />}
                </div>
                <Navbar text="notice" />
            </div>
        </div>
    )
}