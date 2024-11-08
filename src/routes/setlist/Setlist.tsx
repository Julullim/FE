import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SelectPage from './SelectPage';
import MainTab from '../../components/common/MainTab';
import Navbar from '../../components/common/Navbar';
import SetlistDetail from './SetlistDetail';


const SetlistPage: React.FC = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const year = Number(searchParams.get("year"))
    const concert = Number(searchParams.get("concert"))
    
    return (
        <div className='SetlistPage'>
            <MainTab />
            {year && concert ?
                <SetlistDetail year={year} concert={concert} />
                :
                <SelectPage />
            }
            <Navbar text='Setlist' />
        </div >
    );
}

export default SetlistPage;