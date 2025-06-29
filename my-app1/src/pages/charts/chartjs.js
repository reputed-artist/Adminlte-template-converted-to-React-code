import React, { useEffect } from 'react';

function Chartjs() {
  useEffect(() => {
    if (!window.Chart) return;

    // Destroy previous charts if they exist
    window.areaChartInstance?.destroy?.();
    window.lineChartInstance?.destroy?.();
    window.pieChartInstance?.destroy?.();
    window.barChartInstance?.destroy?.();

    const areaChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        {
          label: 'Electronics',
          fillColor: 'rgba(210, 214, 222, 1)',
          strokeColor: 'rgba(210, 214, 222, 1)',
          pointColor: 'rgba(210, 214, 222, 1)',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Digital Goods',
          fillColor: 'rgba(60,141,188,0.9)',
          strokeColor: 'rgba(60,141,188,0.8)',
          pointColor: '#3b8bba',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    const pieData = [
      { value: 700, color: '#f56954', highlight: '#f56954', label: 'Chrome' },
      { value: 500, color: '#00a65a', highlight: '#00a65a', label: 'IE' },
      { value: 400, color: '#f39c12', highlight: '#f39c12', label: 'Firefox' },
      { value: 600, color: '#00c0ef', highlight: '#00c0ef', label: 'Safari' },
      { value: 300, color: '#3c8dbc', highlight: '#3c8dbc', label: 'Opera' },
      { value: 100, color: '#d2d6de', highlight: '#d2d6de', label: 'Navigator' },
    ];

    const options = { responsive: true, maintainAspectRatio: false };

    const ctxArea = document.getElementById('areaChart').getContext('2d');
    const ctxLine = document.getElementById('lineChart').getContext('2d');
    const ctxPie = document.getElementById('pieChart').getContext('2d');
    const ctxBar = document.getElementById('barChart').getContext('2d');

    window.areaChartInstance = new window.Chart(ctxArea).Line(areaChartData, options);
    window.lineChartInstance = new window.Chart(ctxLine).Line(areaChartData, { ...options, datasetFill: false });
    window.pieChartInstance = new window.Chart(ctxPie).Doughnut(pieData, options);
    const barData = { ...areaChartData };
    barData.datasets[1].fillColor = '#00a65a';
    window.barChartInstance = new window.Chart(ctxBar).Bar(barData, options);
  }, []);

  return (
    <section className="content">
      <div className="row">
        <div className="col-md-6">
          <div className="box box-primary">
            <div className="box-header with-border">
              <h3 className="box-title">Area Chart</h3>
            </div>
            <div className="box-body">
              <canvas id="areaChart" style={{ height: '250px' }}></canvas>
            </div>
          </div>

          <div className="box box-danger">
            <div className="box-header with-border">
              <h3 className="box-title">Donut Chart</h3>
            </div>
            <div className="box-body">
              <canvas id="pieChart" style={{ height: '250px' }}></canvas>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="box box-info">
            <div className="box-header with-border">
              <h3 className="box-title">Line Chart</h3>
            </div>
            <div className="box-body">
              <canvas id="lineChart" style={{ height: '250px' }}></canvas>
            </div>
          </div>

          <div className="box box-success">
            <div className="box-header with-border">
              <h3 className="box-title">Bar Chart</h3>
            </div>
            <div className="box-body">
              <canvas id="barChart" style={{ height: '230px' }}></canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chartjs;
