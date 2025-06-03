
import React from 'react';
import { use } from 'react';
import { useState } from 'react';
import Plot from 'react-plotly.js';

export default function AbsorbSimPlot(props){

    const LineColor = "#06b6d4";
    const TextColor = "#e2e8f0";
    const GridColor = "rgba(200,200,200,0.4)";
    const TableColor = "#1e293b";

    const [hover_color, SetHoverColor] = useState("#06b6d4");

    const handleHover = () => SetHoverColor("#67e8f9")
    const handleUnhover = () => SetHoverColor("#06b6d4")




    return (
        <Plot
        data={[
          {
            x: props.x_data,
            y: props.y_data,
            type: 'scatter',
            mode: 'lines',
            marker: {color: hover_color},
            
          },
        ]}
        layout={{
          autosize: true, 
          title: {
            text: props.title + ' ' + 'Abs. Spectroscopy ',
            font: {family: "Roboto", size: 22, color: TextColor},
            
            
          },
          plot_bgcolor: "rgba(0,0,0,0)",
          paper_bgcolor: "rgba(0,0,0,0)",
          xaxis: {
            showgrid: true,
            gridcolor: GridColor,
            tickfont: {color: TextColor}
          },
          yaxis: {
            showgrid: true,
            gridcolor: GridColor,
            tickfont: {color: TextColor}
          }               
        }}
        onHover={handleHover}
        onUnhover={handleUnhover}
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