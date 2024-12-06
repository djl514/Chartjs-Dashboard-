import ChartComponent from './chartComponent';

function LineChart({ data }){
    const barChartData = {
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
    const barChartOptions = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
      return <ChartComponent type="line" data={barChartData} options={barChartOptions} />;
    };


export default LineChart;