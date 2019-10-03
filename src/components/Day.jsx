import React from 'react';

const Day = ({ day }) => {
    return (
        <div className="info">
            <div>
                <p className="max">
                    Max temp: <span className="max-number">{Math.floor(day.tMax)}ºC</span>
                </p>
                <p className="min">
                    Min temp: <span className="min-number">{Math.floor(day.tMin)}ºC</span>
                </p>
            </div>
            <div className="info-extra">
                <p>PoP: {day.probPrecipita}% </p>
                <p>Wind: {day.rumoPredVento} </p>
            </div>
        </div>
    );
};

export default Day;
