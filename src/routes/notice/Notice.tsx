import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import NoticeDetail from './NoticeDetail';
import NoticeList from './NoticeList';
import { getNoticeList } from '../../libs/apis/notice';
import { SurveyCheck } from './NoticeCheck'

export const NoticePage: React.FC = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const noticeID = queryParams.get('id');
    const check = queryParams.get('check')

    return (
        <div>
            {check ? <SurveyCheck noticeID={noticeID} /> :
                noticeID ? <NoticeDetail noticeID={noticeID} /> : <NoticeList />}

        </div>
    );
};

export default NoticePage;