
import React from 'react';
import Plot from 'react-plotly.js';

export default function AbsorbSimPlot(){
    return (
        <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {autosize: true, title: {text: 'A Fancy Plot'}} }
        config={{
            responsive: true,
            displaylogo: false,
            modeBarButtonsToRemove: ['toImage'],
        }}
        useResizeHandler={true}
        style={{ width: '100%', height: '100%' }}
        ></Plot>
               
    )
}