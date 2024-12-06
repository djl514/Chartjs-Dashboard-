import ChartComponent from './chartComponent';

function ScatterChart({ data }){
    const scatterChartData = {
      labels: data.expenses,
      datasets: [
        {
          label: 'Expenses vs. Profits',
          data: data.profits,
          backgroundColor: 'rgba(210,10,46, 0.2)',
          borderColor: 'rgba(210,10,46, 1)',
          borderWidth: 1,
        },
      ],
    };
    const scatterChartOptions = {
        scales: {
            x: {
                ticks: {
                    callback: function(value, index, ticks) {
                        return '$' + value;
                    }
                },
                title: {
                    display: true,
                    align: 'center',
                    text: 'Expenses',
                    font: {
                      family: 'Arial',
                      size: 14,
                      weight: 'bold',
                    },
                    padding: {
                      top: 10,
                      bottom: 5,
                      left: 0,
                      right: 0,
                    },
                  },      
    
              },
          y: {
            ticks: {
                callback: function(value, index, ticks) {
                    return '$' + value;
                }
            },
            title: {
                display: true,
                align: 'center',
                text: 'Profits',
                font: {
                  family: 'Arial',
                  size: 14,
                  weight: 'bold',
                },
                padding: {
                  top: 10,
                  bottom: 5,
                  left: 0,
                  right: 0,
                },
              },      
            beginAtZero: true,
          },
        },
      };
      return <ChartComponent type="scatter" data={scatterChartData} options={scatterChartOptions} />;
    };


export default ScatterChart;