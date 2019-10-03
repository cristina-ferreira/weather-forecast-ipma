import React from 'react';
import Tab from './Tab';

const Tabs = ({ days, currentDay, onClick }) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Dezember'];
    return (
        <div className="show-days">
            <div>
                {months[new Date(days[0].dataPrevisao).getMonth()]}
                &nbsp;
                {new Date(days[0].dataPrevisao).getFullYear()}
            </div>

            <div className="tabs">
                {
                    days.map(day => (
                        <Tab
                            key={day.dataPrevisao}
                            day={day}
                            active={day.dataPrevisao === currentDay.dataPrevisao}
                            onClick={onClick}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Tabs;
