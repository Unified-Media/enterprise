var ctx = document.getElementById('degrees').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'bar',
  // The data for our dataset
  data: {
    labels: ['2008-09', '2009-10', '2010-11', '2011-12', '2012-13', '2013-14', '2014-15', '1015-16', '2016-17', '2017-18'],
    datasets: [{
      label: 'Bachelor\'s Degree',
      backgroundColor: 'rgba(12, 124, 89, 0.7)',
        borderColor: 'rgba(255, 255, 255, 0)',
      data: [3057, 3125, 3173, 3299, 3603, 3591, 3682, 3454, 3427, 3361]
    },{
      label: 'Masters\'s Degree',
      backgroundColor: 'rgba(43, 48, 58, 0.7)',
      borderColor: 'rgba(255, 255, 255, 0)',
      data: [1004, 1212, 1302, 1360, 1692, 1556, 1464, 1554, 1702, 1815]
    },{
      label: 'Other',
      backgroundColor: 'rgba(236, 87, 102, 0.7)',
      borderColor: 'rgba(255, 255, 255, 0)',
      data: [371, 338, 503, 332, 328, 403, 471, 419, 407, 490]
    },{
      label: 'Doctoral Degrees',
      backgroundColor: 'rgba(193, 41, 46, 0.7)',
      borderColor: 'rgba(255, 255, 255, 0)',
      data: [68, 74, 65, 65, 69, 73, 82, 70, 79, 61]
    }
  ]
  },
  // Configuration options go here
  options: {}
});

var ctx = document.getElementById('freshmen2010').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'pie',
  // The data for our dataset
  data: {
    labels: ['International/Non resident alien', 'Hispanic/Latino', 'Black or African American', 'White', 'American Indian or Alaskan Native', 'Asians', 'Native Hawaiian or other Pacific Islander', 'Two or more races', 'Unknown'],
    datasets: [{
      label: 'Fall 2010',
      backgroundColor: ['rgba(239, 118, 116, 1)', 'rgba(12, 124, 89, 1)', 'rgba(236, 87, 102, 1)', 'rgba(43, 48, 58, 1)', 'rgba(193, 41, 46, 1)', 'rgb(242, 192, 191)', 'rgb(81, 201, 163)', 'rgb(186, 69, 81)', 'rgb(100, 112, 135)'],
      borderColor: ['rgba(239, 118, 116, 1)', 'rgba(12, 124, 89, 1)', 'rgba(236, 87, 102, 1)', 'rgba(43, 48, 58, 1)', 'rgba(193, 41, 46, 1)', 'rgb(242, 192, 191)', 'rgb(81, 201, 163)', 'rgb(186, 69, 81)', 'rgb(100, 112, 135)'],
      data: [.39, 3.07, 7.52, 84.78, .15, .57, 0, 2.68, .85]
    }
  ]
  },
  // Configuration options go here
  options: {
  }
});

var ctx = document.getElementById('freshmen2019').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'pie',
  // The data for our dataset
  data: {
    labels: ['International/Non resident alien', 'Hispanic/Latino', 'Black or African American', 'White', 'American Indian or Alaskan Native', 'Asians', 'Native Hawaiian or other Pacific Islander', 'Two or more races', 'Unknown'],
    datasets: [{
      label: 'Fall 2019',
      backgroundColor: ['rgba(239, 118, 116, 1)', 'rgba(12, 124, 89, 1)', 'rgba(236, 87, 102, 1)', 'rgba(43, 48, 58, 1)', 'rgba(193, 41, 46, 1)', 'rgb(242, 192, 191)', 'rgb(81, 201, 163)', 'rgb(186, 69, 81)', 'rgb(100, 112, 135)'],
      borderColor: ['rgba(239, 118, 116, 1)', 'rgba(12, 124, 89, 1)', 'rgba(236, 87, 102, 1)', 'rgba(43, 48, 58, 1)', 'rgba(193, 41, 46, 1)', 'rgb(242, 192, 191)', 'rgb(81, 201, 163)', 'rgb(186, 69, 81)', 'rgb(100, 112, 135)'],
      data: [.25, 7.75, 9.01, 75.14, 0, 1.65, .05, 4.90, 1.26]
    }
  ]
  },
  // Configuration options go here
  options: {
      tooltips: {
  callbacks: {
    label: function(tooltipItem, data) {
      //get the concerned dataset
      var dataset = data.datasets[tooltipItem.datasetIndex];
      //calculate the total of this data set
      var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
        return previousValue + currentValue;
      });
      //get the current items value
      var currentValue = dataset.data[tooltipItem.index];
      //calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number


      return currentValue + "%";
    }
  }
}
  }
});

var ctx = document.getElementById('freshmen2019').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'pie',
  // The data for our dataset
  data: {
    labels: ['International/Non resident alien', 'Hispanic/Latino', 'Black or African American', 'White', 'American Indian or Alaskan Native', 'Asians', 'Native Hawaiian or other Pacific Islander', 'Two or more races', 'Unknown'],
    datasets: [{
      label: 'Fall 2019',
      backgroundColor: ['rgba(239, 118, 116, 1)', 'rgba(12, 124, 89, 1)', 'rgba(236, 87, 102, 1)', 'rgba(43, 48, 58, 1)', 'rgba(193, 41, 46, 1)', 'rgb(242, 192, 191)', 'rgb(81, 201, 163)', 'rgb(186, 69, 81)', 'rgb(100, 112, 135)'],
      borderColor: ['rgba(239, 118, 116, 1)', 'rgba(12, 124, 89, 1)', 'rgba(236, 87, 102, 1)', 'rgba(43, 48, 58, 1)', 'rgba(193, 41, 46, 1)', 'rgb(242, 192, 191)', 'rgb(81, 201, 163)', 'rgb(186, 69, 81)', 'rgb(100, 112, 135)'],
      data: [.25, 7.75, 9.01, 75.14, 0, 1.65, .05, 4.90, 1.26]
    }
  ]
  },
  // Configuration options go here
  options: {
      tooltips: {
  callbacks: {
    label: function(tooltipItem, data) {
      //get the concerned dataset
      var dataset = data.datasets[tooltipItem.datasetIndex];
      //calculate the total of this data set
      var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
        return previousValue + currentValue;
      });
      //get the current items value
      var currentValue = dataset.data[tooltipItem.index];
      //calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number


      return currentValue + "%";
    }
  }
}
  }
});


var ctx = document.getElementById('enrollment').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',
  // The data for our dataset
  data: {
    labels: ['2009-10', '2010-11', '2011-12', '2012-13', '2013-14', '2014-15', '1015-16', '2016-17', '2017-18', '2019-20', ],
    datasets: [{
      label: 'Student enrollment',
      backgroundColor: 'rgba(12, 124, 89, 0.5)',
      borderColor: 'rgb(12, 124, 89)',
      data: [21401, 22083, 22147, 21053, 10503, 20655, 21196, 21998, 22513, 21884, 22541]
    }
  ]
  },
  // Configuration options go here
  options: {scales: {
      yAxes: [{
        ticks: {
          suggestedMin: 8000
        }
      }]
    }}
});
