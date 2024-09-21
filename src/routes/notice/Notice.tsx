import React from 'react';

import { useLocation } from 'react-router-dom';
import NoticeDetail from './NoticeDetail';
import NoticeList from './NoticeList';

export const NoticePage: React.FC = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const noticeID = queryParams.get('id');

    return (
        <div>
            {noticeID ? <NoticeDetail noticeID={noticeID} /> : <NoticeList />}
        </div>
    );
};

export default NoticePage;