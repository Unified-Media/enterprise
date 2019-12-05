var ctx = document.getElementById('green').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['2007', '2016', '2024'],
        datasets: [{
            label: 'Metric tons of carbon dioxide',
            backgroundColor: 'rgba(12, 124, 89, 0.7)',
            borderColor: 'rgba(255, 255, 255, 0)',
            data: [159250, 104442, 60000]
        }
    ]
    },

    // Configuration options go here
    options: {scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: 20000,
                    suggestedMax:180000
                }
            }]
        }}
});
