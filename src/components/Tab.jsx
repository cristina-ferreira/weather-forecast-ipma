import React from 'react';

const Tab = ({ day, active, onClick }) => {
    return (
        <div
            className={`tab ${active ? 'tab-selected' : ''}`}
            key={day.dataPrevisao}
            role="presentation"
            onClick={() => onClick(day)}
        >
            {/* return the day of the month (1 to 31) from dataPrevisao */}
            {new Date(day.dataPrevisao).getDate()}
        </div>
    );
};

export default Tab;
