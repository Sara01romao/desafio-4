// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['mon', 0],
    ['tue', 1.5],
    ['wed', 2.5],
    ['thu', 1],
    ['fri', 4],
    ['sat', 3],
    ['sun', 2]
  ]);

  // Set chart options
  var options = {
    legend: 'none',
    hAxis: { minValue: 0, maxValue: 9 },
    curveType: 'function',
    colors: ['#000'],
    pointSize: 11,
    
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
