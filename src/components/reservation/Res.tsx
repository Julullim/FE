import React from "react";

const Reservation: React.FC = () => {
    return (
        <div className="reservation-section">
            <h2>이주의 동방예약</h2>
            <div className="calendar">
                {/* 여기에 캘린더 라이브러리 등을 추가해도 좋습니다 */}
                <p>캘린더 위치</p>
            </div>
            <div className="events">
                <p>축제: 동아리 티 입금 마감 - 23:59</p>
                <p>건물장미: 오전 11:00 - 오후 1:00</p>
                <p>일만시간: 오후 3:00 - 오후 5:00</p>
            </div>
        </div>
    );
};

export default Reservation;
