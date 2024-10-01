import React, { useEffect } from "react";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels, CategoryScale, LinearScale, BarElement);

interface SubResponse {
    response_id: number;
    response_text: string;
}

interface ObjResponse {
    choice_id: number;
    choice_text: string;
    people: number;
    percent: string;
}

const Box: React.FC<{ title: string, contents: React.ReactNode }> = ({ title, contents }) => (
    <div className="vote mb-5 mx-auto bg-white border border-gray-300 rounded-lg shadow-md p-6 w-11/12 max-w-md">
        <div className="text-lg font-semibold">{title}</div>
        {contents}
    </div>
);

export const SubjectiveRes: React.FC<{ title: string, responses: SubResponse[] }> = ({ title, responses }) => {
    const [hoveredResponse, setHoveredResponse] = React.useState<number | null>(null);

    return (
        <Box title={title} contents={
            <div>
                <div className="text-gray-500 ml-1 mb-2">응답 {responses.length}개</div>
                {responses.map((response) => (
                    <div
                        key={response.response_id}
                        className="flex items-center bg-gray-100 rounded p-2 mb-1 relative"
                        onMouseEnter={() => setHoveredResponse(response.response_id)}
                        onMouseLeave={() => setHoveredResponse(null)}
                    >
                        <div className="text-lg">{response.response_text}</div>
                        {hoveredResponse === response.response_id && (
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 ml-2 p-2 bg-white border border-gray-300 rounded shadow-lg z-10">
                                <div className="text-sm">response_id: {response.response_id}에 해당하는 이름/학번</div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        } />
    );
};

const ChartDisplay: React.FC<{ type: 'pie' | 'bar', data: any, options: any }> = ({ type, data, options }) => {
    if (type === 'pie') {
        return <Pie data={data} options={options} />;
    }
    return <Bar data={data} options={options} />;
};
export const ObjectiveRes: React.FC<{ title: string, responses: ObjResponse[] }> = ({ title, responses }) => {
    const graphData = {
        labels: responses.map((response) => response.choice_text),
        datasets: [{
            data: responses.map((response) => response.people),
            backgroundColor: [
                "#FFABAB", "#FFD3B4", "#FF677D", "#D4A5A5", "#392F5A",
                "#6D9BF5", "#B9FBC0", "#F6F7D7", "#C8C6E5", "#FFDAB9"
            ],
            borderWidth: 2,
        }]
    };

    const options = {
        plugins: {
            legend: {
                position: 'right', // 오른쪽으로 변경
                align: 'start', // 상단에 정렬
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    font: { size: 16 },
                },
            },
            datalabels: {
                formatter: (_, ctx) => responses[ctx.dataIndex].percent.split('.')[0] + '%',
                color: '#000',
                font: { size: 16 },
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const index = context.dataIndex;
                        return `${responses[index].people}명 (${responses[index].percent.split('.')[0]}%)`;
                    }
                },
                backgroundColor: "#F2F2F2",
                bodyFont: { size: 20 },
                titleFont: { size: 20 },
                bodyColor: "#000",
                titleColor: "#000",
                padding: 10,
            },
        },
    };

    return (
        <Box title={title} contents={
            <div>
                <div className="text-gray-500 ml-1 mb-2">응답 {responses.length}개</div>
                <div className="h-4/5 w-4/5 mx-auto">
                    <ChartDisplay type="pie" data={graphData} options={options} />
                </div>
            </div>
        } />
    );
};

export const MultiObjectiveRes: React.FC<{ title: string, responses: ObjResponse[] }> = ({ title, responses }) => {
    const maxPeople = Math.max(...responses.map((response) => response.people)) * 1.4; // 최대 응답자의 120%로 X축 설정

    const graphData = {
        labels: responses.map((response) => response.choice_text),
        datasets: [
            {
                label: '',
                data: responses.map((response) => response.people),
                backgroundColor: '#F2DCC2', // 크리미한 베이지 색상 적용
                borderWidth: 1,
                borderRadius: 5, // 바 모서리 둥글게
                barThickness: 20, // 막대 두께 설정
            },
        ],
    };

    const options = {
        indexAxis: 'y' as const, // 가로 막대형 차트 설정
        scales: {
            x: {
                beginAtZero: true,
                max: maxPeople, // X축 최대값을 응답자 수 기반으로 설정
                display: false, // X축 숨김
            },
            y: {
                ticks: {
                    font: {
                        size: 14, // Y축 폰트 크기 설정
                        weight: 'bold', // Y축 폰트 굵기 설정
                    },
                },
                grid: {
                    display: false, // Y축 눈금 숨김
                },
            },
        },
        plugins: {
            legend: {
                display: false, // 범례 숨김
            },
            datalabels: {
                align: 'end',
                anchor: 'end',
                color: '#000',
                formatter: (value, ctx) => {
                    const index = ctx.dataIndex;
                    return `${responses[index].people}명 (${responses[index].percent.split('.')[0]}%)`;
                },
                font: {
                    size: 14,
                },
                clip: false, // 라벨이 막대 밖으로 나가도 잘리지 않게 설정
            },
            tooltip: {
                enabled: false, // 툴팁 비활성화
            },
        },
        maintainAspectRatio: false, // 그래프 비율 조정
    };

    return (
        <Box title={title} contents={
            <div>
                <div className="text-gray-500 ml-1 mb-2">응답 {responses.length}개</div>
                <div className="h-40 w-full">
                    <Bar data={graphData} options={options} />
                </div>
            </div>
        } />
    );
};

export const IndivSubjectiveRes: React.FC<{ title: string, response: string | null }> = ({ title, response }) => {
    return (
        <Box title={title} contents={
            <div className="flex items-center p-2 mb-1 border-b-2 border-b-black">
                <div className="text-base">{response}</div>
            </div>
        } />
    );
}

export const IndivObjectiveRes: React.FC<{ title: string, choices: { choice_id: number, choice_text: string }[] | null, choose: number[] }> = ({ title, choices, choose }) => {

    return (
        <Box title={title} contents={
            <div className="pt-2 pl-1">

                {choices?.map((choice) => (
                    <div className="flex items-center mb-1">
                        <div className={`rounded-full h-4 w-4 border-2 border-gray-300 mr-2
                             ${choose.includes(choice.choice_id) ?
                                'bg-[#FFE57B]' : 'bg-white'}`}></div>
                        {choice.choice_text}
                    </div>
                ))}
            </div>
        } />
    );
}