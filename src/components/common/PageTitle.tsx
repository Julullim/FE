import React, { ReactNode } from 'react';

export const PageTitle:React.FC<{ title: string, more?: ReactNode }> = ({ title, more }) => {
    return (
        <div className="items-center ml-[4vh] mr-[4vh] flex">
            <div className="font-semibold text-[#333333] text-2xl text-center" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                {title}
                <div className="h-2 left-0 [background:radial-gradient(50%_50%_at_50%_50%,rgb(242,220,194)_0%,rgb(255,255,255)_100%)]" />
            </div>
            {more}
        </div>
    );
}; export default PageTitle;