import ChartComponent from './chartComponent';

function LineChart({ data }){
    const lineChartData = {
      labels: data.months,
      datasets: [
        {
          label: 'Monthly Profits',
          data: data.profits,
          backgroundColor: 'rgba(222,161,147, 0.2)',
          borderColor: 'rgba(222,161,147, 1)',
          borderWidth: 1,
        },
      ],
    };
    const lineChartOptions = {
        scales: {
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
      return <ChartComponent type="line" data={lineChartData} options={lineChartOptions} />;
    };


export default LineChart;