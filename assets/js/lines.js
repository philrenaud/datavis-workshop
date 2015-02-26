/*=====================
phil@affin.io
@phil_renaud
Feb 2015
=====================*/

// Reference piece from 538:
// http://fivethirtyeight.com/features/every-nba-teams-chance-of-winning-in-every-minute-across-every-game/




$(document).ready(function(){
  universalController();
}); //document.ready


/*==( ^ Call universal functions )======================================================*/
function universalController(){
  loadBasketballData();
}; //universalController

// Declaring bigData as a global so we can access it through the console in our talk
var bigData;





/*=======================================================
STEP 1: LOAD EXTERNAL DATA
We'll use d3's .tsv() method to load nba_win_chance.tsv from my server online
=======================================================*/

function loadBasketballData(){
  // d3.tsv("http://dc.riot.industries/nba_win_chance.tsv", function(data) {
  d3.tsv("http://acadia.riot.industries/data/nba_win_chance.tsv", function(data) {
    console.log('data acquired from .tsv online:');
    console.log(data);
    var data = _.sortBy(data, '48').reverse();
    bigData = data;


// move team to front, set as c3.js spec
    columnarData = _.map(data, function(obj,iter){
      var values = _.values(obj);
      values.unshift(values[values.length-1]);
      return values.slice(0, values.length-1);
    })

// once the data is fully downloaded, call the draw methods, passing the data in.
    refreshCharts(data, columnarData);
  }); //d3.tsv
}; //loadBasketballData




function refreshCharts(data, columnarData){
    d3.select('body table').remove();

////// Step 2: Turn our data into a Table
    // tabulate1(data);

////// Step 3: Reflect the highs and lows with color
    // tabulate2(data);

////// Step 4: Relativize the data with a rolling average
    // tabulate3(data);

////// Step 5: Turn our data into line charts
    // drawLineChart(columnarData);
}






/*=======================================================
STEP 2: TURN OUR DATA INTO A TABLE
Using D3 instead of jQuery!
=======================================================*/

// D3 method for table creation
function tabulate1(data) {

// manipulate the headings so that "team" is the first column
  headings = Object.keys(data[0]); //get the initial values from the first entry
  headings = _.without(headings, 'team'); //array removing 'team'
  headings.unshift('team'); //prepend the array with the entry 'team'

// Insert the table into our <body>. Give it a class of "wintable" so we can style it as needed.
  var table = d3.select('body').insert('table', '#world-container').attr('class', 'wintable');
  var thead = table.append('thead')
  var tbody = table.append('tbody')

  thead.append('tr')
    .selectAll('th')
      .data(headings)
      .enter()
    .append('th')
      .text(function (d) { return d })

  data = columnarData;
  var rows = tbody.selectAll('tr')
      .data(data)
      .enter()
    .append('tr')
  var cells = rows.selectAll('td')
      .data(function(row) {
        // console.log(row);
        return headings.map(function (column,iter) {
          // console.log(row[iter]);
          return { column: column, value: row[iter] }
        })
      })
      .enter()
    .append('td')
      .text(function (d) { return isNaN(d.value) ? d.value : parseFloat(d.value).toFixed(2) })
 
  return table;
}; //tabulate








/*=======================================================
STEP 3: COLOR THE HIGHS AND LOWS
=======================================================*/

// D3 method for table creation
function tabulate2(data) {

// manipulate the headings so that "team" is the first column
  headings = Object.keys(data[0]); //get the initial values from the first entry
  headings = _.without(headings, 'team'); //array removing 'team'
  headings.unshift('team'); //prepend the array with the entry 'team'

// Insert the table into our <body>. Give it a class of "wintable" so we can style it as needed.
  var table = d3.select('body').insert('table', '#world-container').attr('class', 'wintable');
  var thead = table.append('thead')
  var tbody = table.append('tbody')

// Let's talk about D3 color scales.
// https://github.com/mbostock/d3/wiki/Ordinal-Scales
  var color = d3.scale.linear()
    .domain([0, 0.5, 1])
    .range(["red", "white", "green"]);

  thead.append('tr')
    .selectAll('th')
      .data(headings)
      .enter()
    .append('th')
      .text(function (d) { return d })

  data = columnarData;
  var rows = tbody.selectAll('tr')
      .data(data)
      .enter()
    .append('tr')
  var cells = rows.selectAll('td')
      .data(function(row) {
        return headings.map(function (column,iter) {
          return { column: column, value: row[iter] }
        })
      })
      .enter()
    .append('td')
      .text(function (d) { return isNaN(d.value) ? d.value : parseFloat(d.value).toFixed(2) })
      .style('background-color', function(d){ return color(d.value); })
 
  return table;
}; //tabulate







/*=======================================================
STEP 4: RELATIVIZE OUR DATA FOR BETTER UNDERSTANDING
=======================================================*/

// D3 method for table creation
function tabulate3(data) {

// manipulate the headings so that "team" is the first column
  headings = Object.keys(data[0]); //get the initial values from the first entry
  headings = _.without(headings, 'team'); //array removing 'team'
  headings.unshift('team'); //prepend the array with the entry 'team'

// Insert the table into our <body>. Give it a class of "wintable" so we can style it as needed.
  var table = d3.select('body').insert('table', '#world-container').attr('class', 'wintable');
  var thead = table.append('thead')
  var tbody = table.append('tbody')


// Let's talk about D3 color scales.
// https://github.com/mbostock/d3/wiki/Ordinal-Scales
  var relativeColor = d3.scale.linear()
    .domain([.8, 1, 1.2])
    .range(["red", "white", "green"]);

  thead.append('tr')
    .selectAll('th')
      .data(headings)
      .enter()
    .append('th')
      .text(function (d) { return d })

  relativeData = _.map(columnarData, function(obj,iter){
    theData = _.map(obj.slice(1,obj.length), function(obj2,iter2){ return parseFloat(obj2) });
// Simple Moving Average: take the average of the previous 12 minutes
    sma12 = simple_moving_averager(12);
    rolling = [obj[0]];
    for (var i in theData) {
        var n = theData[i];
// The current minute as a % of the previous 12 minutes' average. 1.0 is on-par.
        rolling.push(n/sma12(n));
    } //for
    // console.log(rolling);
    return rolling;
  }) //map

data = relativeData;

  var rows = tbody.selectAll('tr')
      .data(data)
      .enter()
    .append('tr')
 
  var cells = rows.selectAll('td')
      .data(function(row) {
        return headings.map(function (column,iter) {
          // console.log(iter, row);
          return { column: column, value: row[iter] }
        })
      })
      .enter()
    .append('td')
      .text(function (d) { return isNaN(d.value) ? d.value : parseFloat(d.value).toFixed(2) })
      .style('background-color', function(d){ return relativeColor(d.value); })
 
  return table;
}; //tabulate










/*=======================================================
STEP 5: TURN OUR TABLE INTO A LINE CHART
Using the c3.js library: http://c3js.org/
=======================================================*/

function drawLineChart(data){
  $('#world-container').append('<div id="chart"></div>');

  chart = c3.generate({
      data: {
          columns: [
              ['data1', 30, 200, 100, 400, 150, 250],
              ['data2', 50, 20, 10, 40, 15, 25]
          ]
      }
  }); //c3.generate


/*=======================================================
STEP 5A: USE OUR DATA FROM EARLIER
=======================================================*/

  // data = columnarData;

  // chart = c3.generate({
  //     bindto: $('#chart')[0],
  //     data: {
  //         columns: columnarData,
  //     },
  //     point: {
  //       r: 1.5,
  //     },
  //     regions: [
  //       {start: 0, end: 12},
  //       {start: 24, end: 36},
  //     ],
  //     legend: { position: 'right' },
  // }); //c3.generate


/*=======================================================
STEP 5B: RELATIVIZED LINES
=======================================================*/

  // $('#world-container').append('<div id="chart2"></div>');


////// cd2: minute by minute differences
  // columnarData2 = _.map(data, function(obj,iter){
  //   return _.map(obj,function(obj2,iter2){
  //     if (isNaN(obj2)) {
  //       return obj2;
  //     } else if (isNaN(obj[iter2-1])) {
  //       return 0;
  //     } else {
  //       return obj2-obj[iter2-1]
  //     } //if
  //   }) //innermap
  // }) //outermap

////// cd3: "How well has this team been playing" in the past minute compared to the past 12 minutes
  // columnarData3 = _.map(columnarData, function(obj,iter){
  // theData3 = _.map(obj.slice(1,obj.length), function(obj2,iter2){ return parseFloat(obj2) });
  // sma12 = simple_moving_averager(12);
  // rolling = [obj[0]];
  // for (var i in theData3) {
  //     var n = theData3[i];
  //     rolling.push(n/sma12(n));
  // } //for
  // // console.log(rolling);
  // return rolling;
  // }) //map

  //   chart2 = c3.generate({
  //       bindto: $('#chart2')[0],
  //       data: {
  //           // columns: columnarData2
  //           columns: columnarData3,
  //           type: 'spline'
  //       },
  //       point: {
  //         r: 1.5,
  //       },
  //       regions: [
  //         {start: 0, end: 12},
  //         {start: 24, end: 36},
  //       ],
  //       legend: { position: 'right' },
  //   });



}; //drawLineChart



















function simple_moving_averager(period) {
    var nums = [];
    return function(num) {
        nums.push(num);
        if (nums.length > period)
            nums.splice(0,1);  // remove the first element of the array
        var sum = 0;
        for (var i in nums)
            sum += nums[i];
        var n = period;
        if (nums.length < period)
            n = nums.length;
        return(sum/n);
    }
}