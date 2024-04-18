import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarGraph = ({ data }) => {
  const chartRef = useRef(null);
  
  useEffect(() => {
    if (data && chartRef && chartRef.current) {
      const convertToPercentArray = (numbers) => {
        let countLessThan40 = 0;
        let countBetween40And80 = 0;
        let countGreaterThan80 = 0;
      
        numbers.forEach(number => {
          if (number < 40) {
            countLessThan40++;
          } else if (number >= 40 && number < 80) {
            countBetween40And80++;
          } else {
            countGreaterThan80++;
          }
        });
      
        const totalCount = numbers.length;
        const percentLessThan40 = (countLessThan40 / totalCount) * 100;
        const percentBetween40And80 = (countBetween40And80 / totalCount) * 100;
        const percentGreaterThan80 = (countGreaterThan80 / totalCount) * 100;
      
        return [percentLessThan40, percentBetween40And80, percentGreaterThan80];
      };
      
      const overallDifficulties = convertToPercentArray(data.map(item => item.overall_difficulty));
      const labels = ['very hard', 'easy', 'very easy'];
      console.log(overallDifficulties)

      const backgroundColors = ['red', 'orange', 'green'];

      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Overall Difficulty',
            data: overallDifficulties,
            backgroundColor: backgroundColors,
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, [data]);

  return (
    <div style={{height:'400px'}}>
      {data ? (
        <canvas ref={chartRef} style={{ height: '400px' }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BarGraph;
