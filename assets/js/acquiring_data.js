/*=====================
phil@affin.io
@phil_renaud
Feb 2015
=====================*/



/*=======================================================
Basic tutorial on pulling and cleaning up data from the wild
These examples will work on the US Census website at, for example, http://www.census.gov/foreign-trade/statistics/product/enduse/exports/c1220.html
All available countries can be found at http://www.census.gov/foreign-trade/statistics/product/enduse/exports/

All the following commands should be pasted into your Chrome or Firefox console.
=======================================================*/




/*=======================================================
STEP 1: IMPORT THE UNDERSCORE.JS LIBRARY
For documentation, see http://underscorejs.org/
=======================================================*/

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://api.affin.io/scripts/libs/underscore-min.js';
document.head.appendChild(script);







/*=======================================================
STEP 2: DO SOME BASIC PAGE MANIPULATION
For documentation, see http://underscorejs.org/
=======================================================*/

// We'll set the table on this page to have a class of 'mytable'.
// This way we can reference it in jQuery as $('.mytable') and not have to worry about duplicate data.
$('table').addClass('mytable');


// Get indexes; we will be using these a lot!
// Discuss: _.map, .eq(0), obj + iter, .text()
indexKeys = _.map($('.mytable tbody').children('tr').eq(0).children('th'), function(obj){
  return $(obj).text()
})

// Map a row:
// Discuss: .trim(), .parseFloat(), .replace()
var values = _.map($('.mytable tbody').children('tr').eq(1).children('td'), function(obj,iter){
  var value = iter == 0 ? $(obj).text().trim() : parseFloat($(obj).text().replace(/\,/g, ''))
  return value;
})

// Merge indexes with values:
_.object(indexKeys, values);

// Now iterate over the full table!
// discuss: _.object(), map within a map, local variable scope
var bigmap = _.map($('.mytable tbody').children('tr:not(:first):not(:last)'), function(obj,iter){
  var values = _.map($(obj).children('td'), function(obj2,iter2){
    var value = iter2 == 0 ? $(obj2).text().trim() : parseFloat($(obj2).text().replace(/\,/g, ''))
    return value;
  }); //innermap
  return _.object(indexKeys, values);
}); //outermap

// Brief interlude here to talk about console.table



/*=======================================================
INTERLUDE: BIG DATA PROCESSES IN A SMALL-DATA ENVIRONMENT
Mapping and Reducing are a core part of both "big data" manipulations and
also a big part of what we'll be doing here today.
Let's look at some of the neat applications that Underscore allows us to leverage.
=======================================================*/


//// Min, Max, Sorting
// Biggest value in 2013:
_.max(bigmap, function(obj,iter){
  return obj['Value 2013'];
})

// Biggest jump from 2012 to 2013:
_.max(bigmap, function(obj,iter){
  return obj['Value 2013'] / obj['Value 2012'];
})

// Sort by percentage of 2012 import to 2013:
_.sortBy(bigmap, function(obj,iter){
  return obj['Value 2013'] / obj['Value 2012'];
})



// Filtering and reducing
// Filter by values greater than or less than
// Discuss: _.filter, _.find, etc.
_.filter(bigmap, function(obj,iter){
  return obj['Value 2013'] < 50;
})

// Find those rows that have "Agriculture" in their title:
_.filter(bigmap, function(obj,iter){
  return obj['End-Use Code'].indexOf('Agric') > 0;
})

// Find those rows in the 40,000 category: Household Goods
// Discuss: why we're using > -1
_.filter(bigmap, function(obj,iter){
  return obj['End-Use Code'].indexOf('(4') > -1;
})

// Total price of all household exports in 2013:
// Discuss: _.reduce()
var household = _.filter(bigmap, function(obj,iter){
  return obj['End-Use Code'].indexOf('(4') > -1;
})
_.reduce(_.pluck(household, 'Value 2013'), function(memo,num){
  return memo+num;
})







/*=======================================================
STEP 3: Categorizing and Grouping our data
The US Census website has 7 standard categories of export:
Food, Chemicals, Industrial, Transportation,
Household Goods, Military, and Miscellaneous.
Each one corresponds with a common starting number in its End-Use Code.
=======================================================*/

// Let's index all of our categories:
var food = _.filter(bigmap, function(obj,iter){
  return obj['End-Use Code'].indexOf('(0') > -1;
})
var chem = _.filter(bigmap, function(obj,iter){
  return obj['End-Use Code'].indexOf('(1') > -1;
})
var industrial = _.filter(bigmap, function(obj,iter){
  return obj['End-Use Code'].indexOf('(2') > -1;
})
var transportation = _.filter(bigmap, function(obj,iter){
  return obj['End-Use Code'].indexOf('(3') > -1;
})
var household = _.filter(bigmap, function(obj,iter){
  return obj['End-Use Code'].indexOf('(4') > -1;
})
var military = _.filter(bigmap, function(obj,iter){
  return obj['End-Use Code'].indexOf('(5') > -1;
})
var misc = _.filter(bigmap, function(obj,iter){
  return obj['End-Use Code'].indexOf('(6') > -1;
})

// And include them in a large array of objects:
var hugemap = [
  {"name": "food", "values": food},
  {"name": "chem", "values": chem},
  {"name": "industrial", "values": industrial},
  {"name": "transportation", "values": transportation},
  {"name": "household", "values": household},
  {"name": "military", "values": military},
  {"name": "misc", "values": misc}
]


// Let's say we want to compare the numbers from each of these.
// Let's say the overall values from 2013.

_.map(hugemap, function(obj,iter){
  var v2013 = _.pluck(obj['values'], 'Value 2013');
  var reduced2013 = _.reduce(v2013, function(memo,num){
    return memo + num
  });
  return reduced2013;
}) //map

// or, simplified:
_.map(hugemap, function(obj,iter){
  return _.reduce(_.pluck(obj['values'], 'Value 2013'), function(memo,num){ return memo + num })
})

// Let's say we want to see these values paired with their category keys
_.map(hugemap, function(obj,iter){
  var ret = {};
  ret.name = obj.name;
  ret.value = _.reduce(_.pluck(obj['values'], 'Value 2013'), function(memo,num){ return memo + num })
  return ret;
})







/*=======================================================
STEP 4: CREATING A MASTER MAP
=======================================================*/

// Now we have a meaningful, comparable list of numbers!
// Let's do what we just did for 2013, for all the other years.

var comparable = [];

$.each(indexKeys.slice(1), function(index,key){
  var year = {};
  year['id'] = key;
  year['stats'] = _.map(hugemap, function(obj,iter){
    var ret = {};
    ret.name = obj.name;
    ret.value = _.reduce(_.pluck(obj['values'], key), function(memo,num){ return memo + num })
    return ret;
  }) //_.map
  comparable.push(year)
}) //each


/*=======================================================
INTERLUDE: SANITY CHECK
=======================================================*/

// Let's quickly compare the price-per-item for each year:
_.map(comparable, function(obj,iter){
  return _.reduce(_.pluck(obj.stats, 'value'), function(memo,num){ return memo + num })
})

// Price of food by year?
_.map(comparable, function(obj,iter){
  return obj.stats[0].value
})

// Diff in cost of food by year?
var diffs = _.map(comparable, function(obj,iter){
  return comparable[iter-1] ? +(obj.stats[0].value / comparable[iter-1].stats[0].value * 100).toFixed(2) : 100;
})
_.object(indexKeys.slice(1),diffs)

// Diff in cost of military by year?
var diffs2 = _.map(comparable, function(obj,iter){
  return comparable[iter-1] ? +(obj.stats[5].value / comparable[iter-1].stats[5].value * 100).toFixed(2) : 100;
})
_.object(indexKeys.slice(1),diffs2)









/*=======================================================
STEP 5: EXPORT THE MASTER MAP IN TEXT FORMAT
=======================================================*/

// Okay, back to our big comparable table! Let's say we want to export our data.
// this will give us the array exploded out into a string; let's copy it (everything but the surrounding quotes) so we can use it in our next excercise.
JSON.stringify(comparable);

var exportsToCanada = [{"id":"Value 2004","stats":[{"name":"food","value":10932929},{"name":"chem","value":47670039},{"name":"industrial","value":53236497},{"name":"transportation","value":50017241},{"name":"household","value":23395551},{"name":"military","value":453961},{"name":"misc","value":4173651}]},{"id":"Value 2005","stats":[{"name":"food","value":12045684},{"name":"chem","value":55398959},{"name":"industrial","value":60654420},{"name":"transportation","value":53606698},{"name":"household","value":25754653},{"name":"military","value":426801},{"name":"misc","value":4011470}]},{"id":"Value 2006","stats":[{"name":"food","value":13597489},{"name":"chem","value":61251666},{"name":"industrial","value":64778364},{"name":"transportation","value":56772879},{"name":"household","value":29330511},{"name":"military","value":408613},{"name":"misc","value":4516491}]},{"id":"Value 2007","stats":[{"name":"food","value":15828932},{"name":"chem","value":66940063},{"name":"industrial","value":66654562},{"name":"transportation","value":60112470},{"name":"household","value":33238849},{"name":"military","value":967493},{"name":"misc","value":5145773}]},{"id":"Value 2008","stats":[{"name":"food","value":18219404},{"name":"chem","value":78250553},{"name":"industrial","value":70007956},{"name":"transportation","value":53305854},{"name":"household","value":35125349},{"name":"military","value":973378},{"name":"misc","value":5267337}]},{"id":"Value 2009","stats":[{"name":"food","value":17824759},{"name":"chem","value":56023688},{"name":"industrial","value":56578386},{"name":"transportation","value":36755371},{"name":"household","value":32537736},{"name":"military","value":577091},{"name":"misc","value":4360923}]},{"id":"Value 2010","stats":[{"name":"food","value":19348514},{"name":"chem","value":71248282},{"name":"industrial","value":67126144},{"name":"transportation","value":49544427},{"name":"household","value":36118327},{"name":"military","value":875765},{"name":"misc","value":4995005}]},{"id":"Value 2011","stats":[{"name":"food","value":21855377},{"name":"chem","value":84782247},{"name":"industrial","value":76557266},{"name":"transportation","value":54471786},{"name":"household","value":37069568},{"name":"military","value":940553},{"name":"misc","value":5614733}]},{"id":"Value 2012","stats":[{"name":"food","value":23311658},{"name":"chem","value":85455718},{"name":"industrial","value":80737858},{"name":"transportation","value":59132702},{"name":"household","value":37528846},{"name":"military","value":536554},{"name":"misc","value":5947207}]},{"id":"Value 2013","stats":[{"name":"food","value":24219696},{"name":"chem","value":91480126},{"name":"industrial","value":79593366},{"name":"transportation","value":60460811},{"name":"household","value":38014667},{"name":"military","value":588784},{"name":"misc","value":7252143}]}];

// And now we're off to the races!

// Next up: open up the following files:
//    /multivariate_data.html
//    /js/multivariate.js


