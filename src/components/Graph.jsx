import React from 'react';
import Plot from 'react-plotly.js';


const Graph = ({ days, onClick }) => {
    const handleClick = (e) => {
        const day = days.find(d => d.dataPrevisao === e.points[0].x);
        onClick(day);
    };

    return (
        <Plot
            data={[
                {
                    x: days.map(day => day.dataPrevisao),
                    y: days.map(day => day.tMax),
                    type: 'scatter',
                    mode: 'lines',
                    marker: { color: 'red' },
                    name: 'Max temp',
                },
                {
                    x: days.map(day => day.dataPrevisao),
                    y: days.map(day => day.tMin),
                    type: 'scatter',
                    mode: 'lines',
                    marker: { color: 'blue' },
                    name: 'Min temp',
                },
            ]}
            layout={{ 
                width: 800,
                height: 400,
                title: 'IPMA - Lisbon wheather forecast [5] days '
            }}
            config={{
                displayModeBar: false,
            }}
            onClick={handleClick}
        />
    );
};

export default Graph;
