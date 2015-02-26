/*=====================
phil@affin.io
Feb 2015
=====================*/

$(document).ready(function(){
    console.log('document ready');
    universalController();
}); //document.ready


/*==( ^ Call universal functions )======================================================*/

function universalController(){
  // drawNetwork('acadiau');

  $(document).on('change', 'select.datasets', function(a,b,c){
    console.log($(this).val())
    drawNetwork($(this).val());
  })

}; //universalController




function drawNetwork(audience){

// Define datasets
  var informedClusters = [
    {
      'audience': 'collide',
      'clusters': [{"id":"505742336_1","which":0,"name":"General Halifax","density":11.32,"size":192,"engagement":73.171875,"influencerAffinity":52.29,"influencerUniqueness":12,"sharedInfluencers":[{"id":"505742336_0","count":8},{"id":"505742336_2","count":59},{"id":"505742336_3","count":1},{"id":"505742336_4","count":16},{"id":"505742336_5","count":50},{"id":"505742336_6","count":8},{"id":"505742336_7","count":26},{"id":"505742336_8","count":56},{"id":"505742336_9","count":2}]},{"id":"505742336_6","which":1,"name":"Game Devs and Game Fans","density":1.42,"size":143,"engagement":57.391608391608,"influencerAffinity":4.97,"influencerUniqueness":74,"sharedInfluencers":[{"id":"505742336_0","count":6},{"id":"505742336_1","count":8},{"id":"505742336_2","count":6},{"id":"505742336_3","count":2},{"id":"505742336_4","count":6},{"id":"505742336_5","count":7},{"id":"505742336_7","count":10},{"id":"505742336_8","count":16},{"id":"505742336_9","count":12}]},{"id":"505742336_0","which":2,"name":"Startups","density":18.07,"size":141,"engagement":44.737588652482,"influencerAffinity":44.21,"influencerUniqueness":71,"sharedInfluencers":[{"id":"505742336_1","count":8},{"id":"505742336_2","count":8},{"id":"505742336_3","count":1},{"id":"505742336_4","count":1},{"id":"505742336_5","count":4},{"id":"505742336_6","count":6},{"id":"505742336_7","count":19},{"id":"505742336_8","count":18},{"id":"505742336_9","count":4}]},{"id":"505742336_4","which":3,"name":"Community 9009","density":16.47,"size":140,"engagement":61.135714285714,"influencerAffinity":43.12,"influencerUniqueness":79,"sharedInfluencers":[{"id":"505742336_0","count":1},{"id":"505742336_1","count":16},{"id":"505742336_2","count":8},{"id":"505742336_3","count":1},{"id":"505742336_5","count":11},{"id":"505742336_6","count":6},{"id":"505742336_7","count":6},{"id":"505742336_8","count":12},{"id":"505742336_9","count":3}]},{"id":"505742336_7","which":4,"name":"Haligonians","density":27.18,"size":133,"engagement":81.488721804511,"influencerAffinity":50.14,"influencerUniqueness":52,"sharedInfluencers":[{"id":"505742336_0","count":19},{"id":"505742336_1","count":26},{"id":"505742336_2","count":19},{"id":"505742336_3","count":1},{"id":"505742336_4","count":6},{"id":"505742336_5","count":13},{"id":"505742336_6","count":10},{"id":"505742336_8","count":32},{"id":"505742336_9","count":1}]},{"id":"505742336_8","which":5,"name":"Halifax Locals","density":2.54,"size":128,"engagement":22.625,"influencerAffinity":23.82,"influencerUniqueness":11,"sharedInfluencers":[{"id":"505742336_0","count":18},{"id":"505742336_1","count":56},{"id":"505742336_2","count":52},{"id":"505742336_3","count":1},{"id":"505742336_4","count":12},{"id":"505742336_5","count":34},{"id":"505742336_6","count":16},{"id":"505742336_7","count":32},{"id":"505742336_9","count":6}]},{"id":"505742336_9","which":6,"name":"Toronto / FITC conference followers","density":3.64,"size":125,"engagement":52.992,"influencerAffinity":13.62,"influencerUniqueness":80,"sharedInfluencers":[{"id":"505742336_0","count":4},{"id":"505742336_1","count":2},{"id":"505742336_2","count":1},{"id":"505742336_3","count":4},{"id":"505742336_4","count":3},{"id":"505742336_5","count":2},{"id":"505742336_6","count":12},{"id":"505742336_7","count":1},{"id":"505742336_8","count":6}]},{"id":"505742336_2","which":7,"name":"Community 8k5","density":25.87,"size":105,"engagement":26.47619047619,"influencerAffinity":64.41,"influencerUniqueness":30,"sharedInfluencers":[{"id":"505742336_0","count":8},{"id":"505742336_1","count":59},{"id":"505742336_3","count":1},{"id":"505742336_4","count":8},{"id":"505742336_5","count":40},{"id":"505742336_6","count":6},{"id":"505742336_7","count":19},{"id":"505742336_8","count":52},{"id":"505742336_9","count":1}]},{"id":"505742336_3","which":8,"name":"Musicians","density":1.64,"size":61,"engagement":0,"influencerAffinity":22.23,"influencerUniqueness":78,"sharedInfluencers":[{"id":"505742336_0","count":1},{"id":"505742336_1","count":1},{"id":"505742336_2","count":1},{"id":"505742336_4","count":1},{"id":"505742336_5","count":1},{"id":"505742336_6","count":2},{"id":"505742336_7","count":1},{"id":"505742336_8","count":1},{"id":"505742336_9","count":4}]},{"id":"505742336_5","which":9,"name":"Halifax Bar and Resto","density":14.81,"size":52,"engagement":56.115384615385,"influencerAffinity":53.93,"influencerUniqueness":44,"sharedInfluencers":[{"id":"505742336_0","count":4},{"id":"505742336_1","count":50},{"id":"505742336_2","count":40},{"id":"505742336_3","count":1},{"id":"505742336_4","count":11},{"id":"505742336_6","count":7},{"id":"505742336_7","count":13},{"id":"505742336_8","count":34},{"id":"505742336_9","count":2}]}],
    },
    {
      'audience': 'travel_alberta',
      'clusters': [{"id":"1837524203_5","which":0,"name":"General followers","density":0.02,"size":6414,"engagement":13.401309635173,"influencerAffinity":3.3,"influencerUniqueness":9,"sharedInfluencers":[{"id":"1837524203_0","count":25},{"id":"1837524203_1","count":44},{"id":"1837524203_2","count":18},{"id":"1837524203_3","count":20},{"id":"1837524203_4","count":9},{"id":"1837524203_6","count":33},{"id":"1837524203_7","count":1},{"id":"1837524203_8","count":36},{"id":"1837524203_9","count":12},{"id":"1837524203_10","count":7},{"id":"1837524203_11","count":12}]},{"id":"1837524203_6","which":1,"name":"International (venezuela, indonesia)","density":0.02,"size":5422,"engagement":26.369236444117,"influencerAffinity":18.38,"influencerUniqueness":55,"sharedInfluencers":[{"id":"1837524203_0","count":30},{"id":"1837524203_1","count":8},{"id":"1837524203_2","count":1},{"id":"1837524203_3","count":3},{"id":"1837524203_4","count":1},{"id":"1837524203_5","count":33},{"id":"1837524203_7","count":1},{"id":"1837524203_8","count":5},{"id":"1837524203_9","count":1},{"id":"1837524203_10","count":2},{"id":"1837524203_11","count":1}]},{"id":"1837524203_0","which":2,"name":"One direction, bieber fans","density":0.02,"size":5385,"engagement":34.730919220056,"influencerAffinity":29.16,"influencerUniqueness":64,"sharedInfluencers":[{"id":"1837524203_1","count":7},{"id":"1837524203_2","count":1},{"id":"1837524203_3","count":1},{"id":"1837524203_4","count":1},{"id":"1837524203_5","count":25},{"id":"1837524203_6","count":30},{"id":"1837524203_7","count":1},{"id":"1837524203_8","count":5},{"id":"1837524203_9","count":1},{"id":"1837524203_10","count":1},{"id":"1837524203_11","count":1}]},{"id":"1837524203_10","which":3,"name":"Tourism Industry","density":0.17,"size":4454,"engagement":28.980916030534,"influencerAffinity":46.77,"influencerUniqueness":92,"sharedInfluencers":[{"id":"1837524203_0","count":1},{"id":"1837524203_1","count":1},{"id":"1837524203_2","count":1},{"id":"1837524203_3","count":4},{"id":"1837524203_4","count":1},{"id":"1837524203_5","count":7},{"id":"1837524203_6","count":2},{"id":"1837524203_7","count":1},{"id":"1837524203_8","count":1},{"id":"1837524203_9","count":1},{"id":"1837524203_11","count":1}]},{"id":"1837524203_1","which":4,"name":"Moms/wives in alberta","density":0.35,"size":4138,"engagement":33.91662638956,"influencerAffinity":18.52,"influencerUniqueness":27,"sharedInfluencers":[{"id":"1837524203_0","count":7},{"id":"1837524203_2","count":31},{"id":"1837524203_3","count":10},{"id":"1837524203_4","count":10},{"id":"1837524203_5","count":44},{"id":"1837524203_6","count":8},{"id":"1837524203_7","count":1},{"id":"1837524203_8","count":40},{"id":"1837524203_9","count":14},{"id":"1837524203_10","count":1},{"id":"1837524203_11","count":13}]},{"id":"1837524203_11","which":5,"name":"Edmonton","density":0.78,"size":3544,"engagement":32.54881489842,"influencerAffinity":39.03,"influencerUniqueness":85,"sharedInfluencers":[{"id":"1837524203_0","count":1},{"id":"1837524203_1","count":13},{"id":"1837524203_2","count":1},{"id":"1837524203_3","count":2},{"id":"1837524203_4","count":4},{"id":"1837524203_5","count":12},{"id":"1837524203_6","count":1},{"id":"1837524203_7","count":1},{"id":"1837524203_8","count":7},{"id":"1837524203_9","count":6},{"id":"1837524203_10","count":1}]},{"id":"1837524203_8","which":6,"name":"Calgary moms/wives","density":0.17,"size":3030,"engagement":15.428712871287,"influencerAffinity":21.88,"influencerUniqueness":12,"sharedInfluencers":[{"id":"1837524203_0","count":5},{"id":"1837524203_1","count":40},{"id":"1837524203_2","count":14},{"id":"1837524203_3","count":14},{"id":"1837524203_4","count":53},{"id":"1837524203_5","count":36},{"id":"1837524203_6","count":5},{"id":"1837524203_7","count":1},{"id":"1837524203_9","count":9},{"id":"1837524203_10","count":1},{"id":"1837524203_11","count":7}]},{"id":"1837524203_4","which":7,"name":"Calgary business/lifestyle/design","density":1.34,"size":2548,"engagement":33.147959183673,"influencerAffinity":53.35,"influencerUniqueness":47,"sharedInfluencers":[{"id":"1837524203_0","count":1},{"id":"1837524203_1","count":10},{"id":"1837524203_2","count":1},{"id":"1837524203_3","count":4},{"id":"1837524203_5","count":9},{"id":"1837524203_6","count":1},{"id":"1837524203_7","count":1},{"id":"1837524203_8","count":53},{"id":"1837524203_9","count":4},{"id":"1837524203_10","count":1},{"id":"1837524203_11","count":4}]},{"id":"1837524203_2","which":8,"name":"Quebec/french speaking","density":0.08,"size":2329,"engagement":11.988407041649,"influencerAffinity":28.54,"influencerUniqueness":65,"sharedInfluencers":[{"id":"1837524203_0","count":1},{"id":"1837524203_1","count":31},{"id":"1837524203_3","count":8},{"id":"1837524203_4","count":1},{"id":"1837524203_5","count":18},{"id":"1837524203_6","count":1},{"id":"1837524203_7","count":1},{"id":"1837524203_8","count":14},{"id":"1837524203_9","count":4},{"id":"1837524203_10","count":1},{"id":"1837524203_11","count":1}]},{"id":"1837524203_3","which":9,"name":"BC travel","density":0.79,"size":2237,"engagement":32.350022351363,"influencerAffinity":23.94,"influencerUniqueness":76,"sharedInfluencers":[{"id":"1837524203_0","count":1},{"id":"1837524203_1","count":10},{"id":"1837524203_2","count":8},{"id":"1837524203_4","count":4},{"id":"1837524203_5","count":20},{"id":"1837524203_6","count":3},{"id":"1837524203_7","count":1},{"id":"1837524203_8","count":14},{"id":"1837524203_9","count":5},{"id":"1837524203_10","count":4},{"id":"1837524203_11","count":2}]},{"id":"1837524203_9","which":10,"name":"Hockey/Oilers fans","density":0.29,"size":1975,"engagement":33.012658227848,"influencerAffinity":34.35,"influencerUniqueness":83,"sharedInfluencers":[{"id":"1837524203_0","count":1},{"id":"1837524203_1","count":14},{"id":"1837524203_2","count":4},{"id":"1837524203_3","count":5},{"id":"1837524203_4","count":4},{"id":"1837524203_5","count":12},{"id":"1837524203_6","count":1},{"id":"1837524203_7","count":1},{"id":"1837524203_8","count":9},{"id":"1837524203_10","count":1},{"id":"1837524203_11","count":6}]},{"id":"1837524203_7","which":11,"name":"Phlippines","density":0.09,"size":1945,"engagement":21.899742930591,"influencerAffinity":51.06,"influencerUniqueness":99,"sharedInfluencers":[{"id":"1837524203_0","count":1},{"id":"1837524203_1","count":1},{"id":"1837524203_2","count":1},{"id":"1837524203_3","count":1},{"id":"1837524203_4","count":1},{"id":"1837524203_5","count":1},{"id":"1837524203_6","count":1},{"id":"1837524203_8","count":1},{"id":"1837524203_9","count":1},{"id":"1837524203_10","count":1},{"id":"1837524203_11","count":1}]}],
    },
    {
      'audience': 'le_monde',
      'clusters': [{"id":"1805190072_0","which":0,"name":"French + International News","density":0.02,"size":14692,"engagement":15.507350939287,"influencerAffinity":4.57,"influencerUniqueness":46,"sharedInfluencers":[{"id":"1805190072_1","count":49},{"id":"1805190072_2","count":27},{"id":"1805190072_3","count":22},{"id":"1805190072_4","count":30},{"id":"1805190072_5","count":7}]},{"id":"1805190072_4","which":1,"name":"Parisians","density":0.06,"size":11822,"engagement":21.307985112502,"influencerAffinity":22.35,"influencerUniqueness":45,"sharedInfluencers":[{"id":"1805190072_0","count":30},{"id":"1805190072_1","count":43},{"id":"1805190072_2","count":21},{"id":"1805190072_3","count":13},{"id":"1805190072_5","count":12}]},{"id":"1805190072_2","which":2,"name":"French Youth and Culture","density":0.05,"size":8676,"engagement":14.659635776856,"influencerAffinity":24.07,"influencerUniqueness":51,"sharedInfluencers":[{"id":"1805190072_0","count":27},{"id":"1805190072_1","count":44},{"id":"1805190072_3","count":22},{"id":"1805190072_4","count":21},{"id":"1805190072_5","count":6}]},{"id":"1805190072_3","which":3,"name":"French Africa (Morocco, Tunisia, Algeria)","density":0.05,"size":5453,"engagement":5.4371905373189,"influencerAffinity":18.22,"influencerUniqueness":63,"sharedInfluencers":[{"id":"1805190072_0","count":22},{"id":"1805190072_1","count":35},{"id":"1805190072_2","count":22},{"id":"1805190072_4","count":13},{"id":"1805190072_5","count":6}]},{"id":"1805190072_1","which":4,"name":"French Youth and Travel","density":0.03,"size":4859,"engagement":4.5412636344927,"influencerAffinity":7.94,"influencerUniqueness":12,"sharedInfluencers":[{"id":"1805190072_0","count":49},{"id":"1805190072_2","count":44},{"id":"1805190072_3","count":35},{"id":"1805190072_4","count":43},{"id":"1805190072_5","count":13}]},{"id":"1805190072_5","which":5,"name":"Montreal and Quebec","density":0.49,"size":1037,"engagement":22.452266152363,"influencerAffinity":32.57,"influencerUniqueness":83,"sharedInfluencers":[{"id":"1805190072_0","count":7},{"id":"1805190072_1","count":13},{"id":"1805190072_2","count":6},{"id":"1805190072_3","count":6},{"id":"1805190072_4","count":12}]}],
    },
    {
      'audience': 'pen_co',
      'clusters': [{"id":"414318368_4","which":0,"name":"Pen Lovers","density":1.27,"size":2098,"engagement":26.450905624404,"influencerAffinity":11.25,"influencerUniqueness":91,"sharedInfluencers":[{"id":"414318368_0","count":7},{"id":"414318368_1","count":1},{"id":"414318368_2","count":1},{"id":"414318368_3","count":0},{"id":"414318368_5","count":3}]},{"id":"414318368_5","which":1,"name":"Artists and Illustrators","density":0.63,"size":1312,"engagement":60.936737804878,"influencerAffinity":10.59,"influencerUniqueness":97,"sharedInfluencers":[{"id":"414318368_0","count":1},{"id":"414318368_1","count":1},{"id":"414318368_2","count":1},{"id":"414318368_3","count":0},{"id":"414318368_4","count":3}]},{"id":"414318368_1","which":2,"name":"Moms / Bargains","density":0.96,"size":626,"engagement":186.2731629393,"influencerAffinity":34.05,"influencerUniqueness":92,"sharedInfluencers":[{"id":"414318368_0","count":5},{"id":"414318368_2","count":5},{"id":"414318368_3","count":0},{"id":"414318368_4","count":1},{"id":"414318368_5","count":1}]},{"id":"414318368_0","which":3,"name":"Office Supplies","density":5.71,"size":470,"engagement":15.327659574468,"influencerAffinity":32.57,"influencerUniqueness":89,"sharedInfluencers":[{"id":"414318368_1","count":5},{"id":"414318368_2","count":2},{"id":"414318368_3","count":0},{"id":"414318368_4","count":7},{"id":"414318368_5","count":1}]},{"id":"414318368_2","which":4,"name":"Moms/Wife Blogger","density":1.66,"size":316,"engagement":134.35759493671,"influencerAffinity":39.95,"influencerUniqueness":95,"sharedInfluencers":[{"id":"414318368_0","count":2},{"id":"414318368_1","count":5},{"id":"414318368_3","count":0},{"id":"414318368_4","count":1},{"id":"414318368_5","count":1}]},{"id":"414318368_3","which":5,"name":"Community 6","density":67.32,"size":180,"engagement":4.9944444444444,"influencerAffinity":92.49,"influencerUniqueness":100,"sharedInfluencers":[{"id":"414318368_0","count":0},{"id":"414318368_1","count":0},{"id":"414318368_2","count":0},{"id":"414318368_4","count":0},{"id":"414318368_5","count":0}]}]
    },
    {
      'audience': 'phil_renaud',
      'clusters': [{"id":"407824700_2","which":0,"name":"JS Devs","density":1.71,"size":380,"engagement":0.097368421052632,"influencerAffinity":26.54,"influencerUniqueness":69,"sharedInfluencers":[{"id":"407824700_0","count":10},{"id":"407824700_1","count":4},{"id":"407824700_3","count":13},{"id":"407824700_4","count":20},{"id":"407824700_5","count":1}]},{"id":"407824700_3","which":1,"name":"Internet Humor - General","density":0.76,"size":311,"engagement":0.022508038585209,"influencerAffinity":3.67,"influencerUniqueness":76,"sharedInfluencers":[{"id":"407824700_0","count":7},{"id":"407824700_1","count":14},{"id":"407824700_2","count":13},{"id":"407824700_4","count":9},{"id":"407824700_5","count":1}]},{"id":"407824700_4","which":2,"name":"Designers and Typography","density":0.88,"size":220,"engagement":0.045454545454545,"influencerAffinity":25.09,"influencerUniqueness":77,"sharedInfluencers":[{"id":"407824700_0","count":3},{"id":"407824700_1","count":5},{"id":"407824700_2","count":20},{"id":"407824700_3","count":9},{"id":"407824700_5","count":1}]},{"id":"407824700_1","which":3,"name":"Phoenix tech","density":5.54,"size":165,"engagement":0.072727272727273,"influencerAffinity":16.44,"influencerUniqueness":85,"sharedInfluencers":[{"id":"407824700_0","count":5},{"id":"407824700_2","count":4},{"id":"407824700_3","count":14},{"id":"407824700_4","count":5},{"id":"407824700_5","count":1}]},{"id":"407824700_5","which":4,"name":"Haligonians","density":10.81,"size":141,"engagement":0.056737588652482,"influencerAffinity":30.83,"influencerUniqueness":99,"sharedInfluencers":[{"id":"407824700_0","count":1},{"id":"407824700_1","count":1},{"id":"407824700_2","count":1},{"id":"407824700_3","count":1},{"id":"407824700_4","count":1}]},{"id":"407824700_0","which":5,"name":"Data Visualization","density":2.05,"size":123,"engagement":0.040650406504065,"influencerAffinity":17.55,"influencerUniqueness":87,"sharedInfluencers":[{"id":"407824700_1","count":5},{"id":"407824700_2","count":10},{"id":"407824700_3","count":7},{"id":"407824700_4","count":3},{"id":"407824700_5","count":1}]}]
    },
    {
      'audience': 'sf_twitter',
      'clusters': [{"id":"183963644_9","which":0,"name":"SF News, Culture & Food","density":0.24,"size":4637,"engagement":22.998059089929,"influencerAffinity":28.38,"influencerUniqueness":72,"sharedInfluencers":[{"id":"183963644_0","count":8},{"id":"183963644_1","count":0},{"id":"183963644_2","count":13},{"id":"183963644_3","count":10},{"id":"183963644_4","count":2},{"id":"183963644_5","count":9},{"id":"183963644_6","count":0},{"id":"183963644_7","count":6},{"id":"183963644_8","count":0},{"id":"183963644_10","count":2},{"id":"183963644_11","count":10},{"id":"183963644_12","count":0},{"id":"183963644_13","count":7},{"id":"183963644_14","count":5}]},{"id":"183963644_10","which":1,"name":"Pop Culture","density":0.04,"size":4395,"engagement":24.006598407281,"influencerAffinity":44.75,"influencerUniqueness":78,"sharedInfluencers":[{"id":"183963644_0","count":1},{"id":"183963644_1","count":4},{"id":"183963644_2","count":12},{"id":"183963644_3","count":9},{"id":"183963644_4","count":0},{"id":"183963644_5","count":7},{"id":"183963644_6","count":0},{"id":"183963644_7","count":2},{"id":"183963644_8","count":0},{"id":"183963644_9","count":2},{"id":"183963644_11","count":0},{"id":"183963644_12","count":0},{"id":"183963644_13","count":1},{"id":"183963644_14","count":10}]},{"id":"183963644_2","which":2,"name":"Humor","density":0.05,"size":4229,"engagement":15.946559470324,"influencerAffinity":35.22,"influencerUniqueness":57,"sharedInfluencers":[{"id":"183963644_0","count":6},{"id":"183963644_1","count":0},{"id":"183963644_3","count":25},{"id":"183963644_4","count":3},{"id":"183963644_5","count":10},{"id":"183963644_6","count":0},{"id":"183963644_7","count":8},{"id":"183963644_8","count":0},{"id":"183963644_9","count":13},{"id":"183963644_10","count":12},{"id":"183963644_11","count":6},{"id":"183963644_12","count":0},{"id":"183963644_13","count":11},{"id":"183963644_14","count":12}]},{"id":"183963644_3","which":3,"name":"News","density":0.06,"size":3825,"engagement":9.8135947712418,"influencerAffinity":31.07,"influencerUniqueness":43,"sharedInfluencers":[{"id":"183963644_0","count":28},{"id":"183963644_1","count":1},{"id":"183963644_2","count":25},{"id":"183963644_4","count":19},{"id":"183963644_5","count":7},{"id":"183963644_6","count":0},{"id":"183963644_7","count":17},{"id":"183963644_8","count":0},{"id":"183963644_9","count":10},{"id":"183963644_10","count":9},{"id":"183963644_11","count":7},{"id":"183963644_12","count":0},{"id":"183963644_13","count":13},{"id":"183963644_14","count":18}]},{"id":"183963644_4","which":4,"name":"Start Up","density":0.23,"size":3191,"engagement":19.980256972736,"influencerAffinity":53.17,"influencerUniqueness":64,"sharedInfluencers":[{"id":"183963644_0","count":24},{"id":"183963644_1","count":0},{"id":"183963644_2","count":3},{"id":"183963644_3","count":19},{"id":"183963644_5","count":1},{"id":"183963644_6","count":0},{"id":"183963644_7","count":8},{"id":"183963644_8","count":0},{"id":"183963644_9","count":2},{"id":"183963644_10","count":0},{"id":"183963644_11","count":4},{"id":"183963644_12","count":0},{"id":"183963644_13","count":17},{"id":"183963644_14","count":12}]},{"id":"183963644_5","which":5,"name":"Bay Area Sports","density":0.11,"size":2861,"engagement":33.080391471513,"influencerAffinity":20.31,"influencerUniqueness":83,"sharedInfluencers":[{"id":"183963644_0","count":3},{"id":"183963644_1","count":0},{"id":"183963644_2","count":10},{"id":"183963644_3","count":7},{"id":"183963644_4","count":1},{"id":"183963644_6","count":0},{"id":"183963644_7","count":2},{"id":"183963644_8","count":0},{"id":"183963644_9","count":9},{"id":"183963644_10","count":7},{"id":"183963644_11","count":1},{"id":"183963644_12","count":0},{"id":"183963644_13","count":2},{"id":"183963644_14","count":4}]},{"id":"183963644_13","which":6,"name":"Tech Workers","density":0.21,"size":2841,"engagement":31.883491728265,"influencerAffinity":36.32,"influencerUniqueness":68,"sharedInfluencers":[{"id":"183963644_0","count":12},{"id":"183963644_1","count":0},{"id":"183963644_2","count":11},{"id":"183963644_3","count":13},{"id":"183963644_4","count":17},{"id":"183963644_5","count":2},{"id":"183963644_6","count":0},{"id":"183963644_7","count":2},{"id":"183963644_8","count":0},{"id":"183963644_9","count":7},{"id":"183963644_10","count":1},{"id":"183963644_11","count":2},{"id":"183963644_12","count":0},{"id":"183963644_14","count":7}]},{"id":"183963644_1","which":7,"name":"Latinos","density":0.11,"size":2720,"engagement":22.652573529412,"influencerAffinity":57.53,"influencerUniqueness":96,"sharedInfluencers":[{"id":"183963644_0","count":0},{"id":"183963644_2","count":0},{"id":"183963644_3","count":1},{"id":"183963644_4","count":0},{"id":"183963644_5","count":0},{"id":"183963644_6","count":0},{"id":"183963644_7","count":0},{"id":"183963644_8","count":0},{"id":"183963644_9","count":0},{"id":"183963644_10","count":4},{"id":"183963644_11","count":0},{"id":"183963644_12","count":0},{"id":"183963644_13","count":0},{"id":"183963644_14","count":0}]},{"id":"183963644_7","which":8,"name":"Health Care","density":0.13,"size":2432,"engagement":12.530016447368,"influencerAffinity":51.79,"influencerUniqueness":77,"sharedInfluencers":[{"id":"183963644_0","count":12},{"id":"183963644_1","count":0},{"id":"183963644_2","count":8},{"id":"183963644_3","count":17},{"id":"183963644_4","count":8},{"id":"183963644_5","count":2},{"id":"183963644_6","count":1},{"id":"183963644_8","count":0},{"id":"183963644_9","count":6},{"id":"183963644_10","count":2},{"id":"183963644_11","count":4},{"id":"183963644_12","count":0},{"id":"183963644_13","count":2},{"id":"183963644_14","count":10}]},{"id":"183963644_11","which":9,"name":"Fashion & Design","density":0.23,"size":2335,"engagement":13.299785867238,"influencerAffinity":29.7,"influencerUniqueness":81,"sharedInfluencers":[{"id":"183963644_0","count":10},{"id":"183963644_1","count":0},{"id":"183963644_2","count":6},{"id":"183963644_3","count":7},{"id":"183963644_4","count":4},{"id":"183963644_5","count":1},{"id":"183963644_6","count":0},{"id":"183963644_7","count":4},{"id":"183963644_8","count":0},{"id":"183963644_9","count":10},{"id":"183963644_10","count":0},{"id":"183963644_12","count":0},{"id":"183963644_13","count":2},{"id":"183963644_14","count":5}]},{"id":"183963644_14","which":10,"name":"Young Professionals","density":0.07,"size":2090,"engagement":6.766028708134,"influencerAffinity":40.1,"influencerUniqueness":61,"sharedInfluencers":[{"id":"183963644_0","count":12},{"id":"183963644_1","count":0},{"id":"183963644_2","count":12},{"id":"183963644_3","count":18},{"id":"183963644_4","count":12},{"id":"183963644_5","count":4},{"id":"183963644_6","count":0},{"id":"183963644_7","count":10},{"id":"183963644_8","count":0},{"id":"183963644_9","count":5},{"id":"183963644_10","count":10},{"id":"183963644_11","count":5},{"id":"183963644_12","count":0},{"id":"183963644_13","count":7}]},{"id":"183963644_0","which":11,"name":"Agency","density":0.17,"size":1831,"engagement":20.836701256144,"influencerAffinity":41.07,"influencerUniqueness":57,"sharedInfluencers":[{"id":"183963644_1","count":0},{"id":"183963644_2","count":6},{"id":"183963644_3","count":28},{"id":"183963644_4","count":24},{"id":"183963644_5","count":3},{"id":"183963644_6","count":0},{"id":"183963644_7","count":12},{"id":"183963644_8","count":0},{"id":"183963644_9","count":8},{"id":"183963644_10","count":1},{"id":"183963644_11","count":10},{"id":"183963644_12","count":0},{"id":"183963644_13","count":12},{"id":"183963644_14","count":12}]},{"id":"183963644_6","which":12,"name":"Bots","density":0.14,"size":1458,"engagement":7.8079561042524,"influencerAffinity":41.34,"influencerUniqueness":97,"sharedInfluencers":[{"id":"183963644_0","count":0},{"id":"183963644_1","count":0},{"id":"183963644_2","count":0},{"id":"183963644_3","count":0},{"id":"183963644_4","count":0},{"id":"183963644_5","count":0},{"id":"183963644_7","count":1},{"id":"183963644_8","count":2},{"id":"183963644_9","count":0},{"id":"183963644_10","count":0},{"id":"183963644_11","count":0},{"id":"183963644_12","count":0},{"id":"183963644_13","count":0},{"id":"183963644_14","count":0}]},{"id":"183963644_8","which":13,"name":"Random","density":0.11,"size":948,"engagement":4.8206751054852,"influencerAffinity":9.75,"influencerUniqueness":98,"sharedInfluencers":[{"id":"183963644_0","count":0},{"id":"183963644_1","count":0},{"id":"183963644_2","count":0},{"id":"183963644_3","count":0},{"id":"183963644_4","count":0},{"id":"183963644_5","count":0},{"id":"183963644_6","count":2},{"id":"183963644_7","count":0},{"id":"183963644_9","count":0},{"id":"183963644_10","count":0},{"id":"183963644_11","count":0},{"id":"183963644_12","count":0},{"id":"183963644_13","count":0},{"id":"183963644_14","count":0}]},{"id":"183963644_12","which":14,"name":"Pornographic accounts (bots)","density":0.46,"size":436,"engagement":0.10550458715596,"influencerAffinity":66.09,"influencerUniqueness":100,"sharedInfluencers":[{"id":"183963644_0","count":0},{"id":"183963644_1","count":0},{"id":"183963644_2","count":0},{"id":"183963644_3","count":0},{"id":"183963644_4","count":0},{"id":"183963644_5","count":0},{"id":"183963644_6","count":0},{"id":"183963644_7","count":0},{"id":"183963644_8","count":0},{"id":"183963644_9","count":0},{"id":"183963644_10","count":0},{"id":"183963644_11","count":0},{"id":"183963644_13","count":0},{"id":"183963644_14","count":0}]}]
    },
    {
      'audience': 'gamergate',
      'clusters': [{"id":"1288958109_0","which":0,"name":"Pro-GG General","density":1.02,"size":5871,"engagement":626.65133708057,"influencerAffinity":34.17,"influencerUniqueness":89,"sharedInfluencers":[{"id":"1288958109_1","count":0},{"id":"1288958109_2","count":9},{"id":"1288958109_3","count":0},{"id":"1288958109_4","count":0},{"id":"1288958109_5","count":5},{"id":"1288958109_6","count":0},{"id":"1288958109_7","count":0},{"id":"1288958109_8","count":0},{"id":"1288958109_9","count":1}]},{"id":"1288958109_8","which":1,"name":"Self-described Geeks","density":0.15,"size":5232,"engagement":334.21961009174,"influencerAffinity":37.66,"influencerUniqueness":44,"sharedInfluencers":[{"id":"1288958109_0","count":0},{"id":"1288958109_1","count":25},{"id":"1288958109_2","count":8},{"id":"1288958109_3","count":2},{"id":"1288958109_4","count":25},{"id":"1288958109_5","count":0},{"id":"1288958109_6","count":37},{"id":"1288958109_7","count":16},{"id":"1288958109_9","count":8}]},{"id":"1288958109_1","which":2,"name":"Anti-GG General","density":0.42,"size":4084,"engagement":656.69613124388,"influencerAffinity":20.07,"influencerUniqueness":54,"sharedInfluencers":[{"id":"1288958109_0","count":0},{"id":"1288958109_2","count":7},{"id":"1288958109_3","count":8},{"id":"1288958109_4","count":19},{"id":"1288958109_5","count":0},{"id":"1288958109_6","count":16},{"id":"1288958109_7","count":13},{"id":"1288958109_8","count":25},{"id":"1288958109_9","count":14}]},{"id":"1288958109_7","which":3,"name":"Journalism / D.C.","density":0.34,"size":4028,"engagement":815.34731876862,"influencerAffinity":58.83,"influencerUniqueness":73,"sharedInfluencers":[{"id":"1288958109_0","count":0},{"id":"1288958109_1","count":13},{"id":"1288958109_2","count":5},{"id":"1288958109_3","count":1},{"id":"1288958109_4","count":13},{"id":"1288958109_5","count":0},{"id":"1288958109_6","count":18},{"id":"1288958109_8","count":16},{"id":"1288958109_9","count":2}]},{"id":"1288958109_6","which":4,"name":"Humor and Sports","density":0.29,"size":3927,"engagement":430.74968169086,"influencerAffinity":47.95,"influencerUniqueness":52,"sharedInfluencers":[{"id":"1288958109_0","count":0},{"id":"1288958109_1","count":16},{"id":"1288958109_2","count":7},{"id":"1288958109_3","count":7},{"id":"1288958109_4","count":17},{"id":"1288958109_5","count":0},{"id":"1288958109_7","count":18},{"id":"1288958109_8","count":37},{"id":"1288958109_9","count":4}]},{"id":"1288958109_2","which":5,"name":"Nintendo and Anime","density":0.22,"size":3602,"engagement":557.40560799556,"influencerAffinity":35.38,"influencerUniqueness":65,"sharedInfluencers":[{"id":"1288958109_0","count":9},{"id":"1288958109_1","count":7},{"id":"1288958109_3","count":4},{"id":"1288958109_4","count":6},{"id":"1288958109_5","count":3},{"id":"1288958109_6","count":7},{"id":"1288958109_7","count":5},{"id":"1288958109_8","count":8},{"id":"1288958109_9","count":16}]},{"id":"1288958109_9","which":6,"name":"Indie Gamers / Game Devs","density":0.67,"size":3550,"engagement":436.33971830986,"influencerAffinity":43.74,"influencerUniqueness":70,"sharedInfluencers":[{"id":"1288958109_0","count":1},{"id":"1288958109_1","count":14},{"id":"1288958109_2","count":16},{"id":"1288958109_3","count":2},{"id":"1288958109_4","count":8},{"id":"1288958109_5","count":0},{"id":"1288958109_6","count":4},{"id":"1288958109_7","count":2},{"id":"1288958109_8","count":8}]},{"id":"1288958109_4","which":7,"name":"GamerGate in the UK / Int'l","density":0.26,"size":3508,"engagement":441.91704675029,"influencerAffinity":44.72,"influencerUniqueness":65,"sharedInfluencers":[{"id":"1288958109_0","count":0},{"id":"1288958109_1","count":19},{"id":"1288958109_2","count":6},{"id":"1288958109_3","count":3},{"id":"1288958109_5","count":0},{"id":"1288958109_6","count":17},{"id":"1288958109_7","count":13},{"id":"1288958109_8","count":25},{"id":"1288958109_9","count":8}]},{"id":"1288958109_3","which":8,"name":"Generally Anti-GG Gamers (unsure, check link media)","density":1.4,"size":1780,"engagement":752.83033707865,"influencerAffinity":37.96,"influencerUniqueness":83,"sharedInfluencers":[{"id":"1288958109_0","count":0},{"id":"1288958109_1","count":8},{"id":"1288958109_2","count":4},{"id":"1288958109_4","count":3},{"id":"1288958109_5","count":0},{"id":"1288958109_6","count":7},{"id":"1288958109_7","count":1},{"id":"1288958109_8","count":2},{"id":"1288958109_9","count":2}]},{"id":"1288958109_5","which":9,"name":"American Conservatives","density":1.52,"size":1265,"engagement":733.52490118577,"influencerAffinity":50.69,"influencerUniqueness":95,"sharedInfluencers":[{"id":"1288958109_0","count":5},{"id":"1288958109_1","count":0},{"id":"1288958109_2","count":3},{"id":"1288958109_3","count":0},{"id":"1288958109_4","count":0},{"id":"1288958109_6","count":0},{"id":"1288958109_7","count":0},{"id":"1288958109_8","count":0},{"id":"1288958109_9","count":0}]}]
    },
    {
      'audience': 'acadiau',
      'clusters': [{"id":"871980320_1","which":0,"name":"General","density":0.12,"size":100,"engagement":25.955569054779875,"influencerAffinity":3.3,"influencerUniqueness":"40","sharedInfluencers":[{"id":"871980320_0","count":29},{"id":"871980320_2","count":3},{"id":"871980320_3","count":83},{"id":"871980320_4","count":24},{"id":"871980320_5","count":24},{"id":"871980320_6","count":15},{"id":"871980320_7","count":52}]},{"id":"871980320_7","which":1,"name":"Acadia Students","density":1.54,"size":89.41684665226782,"engagement":24.821071263660286,"influencerAffinity":12.72,"influencerUniqueness":"69","sharedInfluencers":[{"id":"871980320_0","count":25},{"id":"871980320_1","count":52},{"id":"871980320_2","count":1},{"id":"871980320_3","count":31},{"id":"871980320_4","count":9},{"id":"871980320_5","count":13},{"id":"871980320_6","count":3}]},{"id":"871980320_5","which":2,"name":"Halifax","density":4.03,"size":64.47084233261339,"engagement":81.28082481200869,"influencerAffinity":45.52,"influencerUniqueness":"54","sharedInfluencers":[{"id":"871980320_0","count":81},{"id":"871980320_1","count":24},{"id":"871980320_2","count":2},{"id":"871980320_3","count":19},{"id":"871980320_4","count":29},{"id":"871980320_6","count":11},{"id":"871980320_7","count":13}]},{"id":"871980320_3","which":3,"name":"Hockey","density":0.83,"size":59.07127429805615,"engagement":45.29445888447071,"influencerAffinity":14.06,"influencerUniqueness":"51","sharedInfluencers":[{"id":"871980320_0","count":21},{"id":"871980320_1","count":83},{"id":"871980320_2","count":1},{"id":"871980320_4","count":26},{"id":"871980320_5","count":19},{"id":"871980320_6","count":17},{"id":"871980320_7","count":31}]},{"id":"871980320_6","which":4,"name":"Canadian University students","density":2.88,"size":42.3866090712743,"engagement":55.97350257986077,"influencerAffinity":37.76,"influencerUniqueness":"75","sharedInfluencers":[{"id":"871980320_0","count":5},{"id":"871980320_1","count":15},{"id":"871980320_2","count":23},{"id":"871980320_3","count":17},{"id":"871980320_4","count":24},{"id":"871980320_5","count":11},{"id":"871980320_7","count":3}]},{"id":"871980320_0","which":5,"name":"Rural Nova Scotia","density":5.99,"size":35.85313174946004,"engagement":53.27274727174808,"influencerAffinity":41.62,"influencerUniqueness":"53","sharedInfluencers":[{"id":"871980320_1","count":29},{"id":"871980320_2","count":1},{"id":"871980320_3","count":21},{"id":"871980320_4","count":21},{"id":"871980320_5","count":81},{"id":"871980320_6","count":5},{"id":"871980320_7","count":25}]},{"id":"871980320_2","which":6,"name":"Int'l Students","density":1.18,"size":20.19438444924406,"engagement":48.23068056489759,"influencerAffinity":69.8,"influencerUniqueness":"89","sharedInfluencers":[{"id":"871980320_0","count":1},{"id":"871980320_1","count":3},{"id":"871980320_3","count":1},{"id":"871980320_4","count":4},{"id":"871980320_5","count":2},{"id":"871980320_6","count":23},{"id":"871980320_7","count":1}]},{"id":"871980320_4","which":7,"name":"New Brunswick","density":4.4,"size":12.203023758099352,"engagement":100,"influencerAffinity":28.08,"influencerUniqueness":"76","sharedInfluencers":[{"id":"871980320_0","count":21},{"id":"871980320_1","count":24},{"id":"871980320_2","count":4},{"id":"871980320_3","count":26},{"id":"871980320_5","count":29},{"id":"871980320_6","count":24},{"id":"871980320_7","count":9}]}],
    },
    {
      'audience': 'stormchips',
      'clusters': [{"id":"187284095_5","which":0,"name":"HFX General","density":5.94,"size":100,"engagement":100,"influencerAffinity":61.03,"influencerUniqueness":"56","sharedInfluencers":[{"id":"187284095_0","count":11},{"id":"187284095_1","count":64},{"id":"187284095_2","count":1},{"id":"187284095_3","count":25},{"id":"187284095_4","count":5}]},{"id":"187284095_1","which":1,"name":"HFX Weather","density":1.81,"size":93.38842975206612,"engagement":48.93698909796914,"influencerAffinity":28.89,"influencerUniqueness":"25","sharedInfluencers":[{"id":"187284095_0","count":28},{"id":"187284095_2","count":1},{"id":"187284095_3","count":42},{"id":"187284095_4","count":17},{"id":"187284095_5","count":62}]},{"id":"187284095_0","which":2,"name":"New Brunswick","density":3.17,"size":32.231404958677686,"engagement":98.03175846148186,"influencerAffinity":42.18,"influencerUniqueness":"66","sharedInfluencers":[{"id":"187284095_1","count":29},{"id":"187284095_2","count":1},{"id":"187284095_3","count":11},{"id":"187284095_4","count":11},{"id":"187284095_5","count":8}]},{"id":"187284095_2","which":3,"name":"PEI","density":11.5,"size":21.90082644628099,"engagement":40.133474403842044,"influencerAffinity":62.41,"influencerUniqueness":"70","sharedInfluencers":[{"id":"187284095_0","count":2},{"id":"187284095_1","count":2},{"id":"187284095_3","count":1},{"id":"187284095_4","count":41},{"id":"187284095_5","count":1}]},{"id":"187284095_3","which":4,"name":"Girls in Halifax","density":3.41,"size":19.00826446280992,"engagement":37.956968562485784,"influencerAffinity":36.77,"influencerUniqueness":"60","sharedInfluencers":[{"id":"187284095_0","count":13},{"id":"187284095_1","count":37},{"id":"187284095_2","count":0},{"id":"187284095_4","count":21},{"id":"187284095_5","count":21}]},{"id":"187284095_4","which":5,"name":"PEI Students","density":10.07,"size":15.702479338842975,"engagement":38.42588824683819,"influencerAffinity":37.67,"influencerUniqueness":"44","sharedInfluencers":[{"id":"187284095_0","count":10},{"id":"187284095_1","count":12},{"id":"187284095_2","count":40},{"id":"187284095_3","count":17},{"id":"187284095_5","count":5}]}]
    },
    {
      'audience': '538',
      'clusters': [{"id":"471677248_6","which":0,"name":"Tech General","density":0.21,"size":100,"engagement":51.27808535049938,"influencerAffinity":42.69,"influencerUniqueness":"30","sharedInfluencers":[{"id":"471677248_0","count":37},{"id":"471677248_1","count":35},{"id":"471677248_2","count":7},{"id":"471677248_3","count":23},{"id":"471677248_4","count":17},{"id":"471677248_5","count":77},{"id":"471677248_7","count":12},{"id":"471677248_8","count":14},{"id":"471677248_9","count":45}]},{"id":"471677248_1","which":1,"name":"Economics","density":0.56,"size":83.68707482993197,"engagement":43.82314688437935,"influencerAffinity":19.72,"influencerUniqueness":"66","sharedInfluencers":[{"id":"471677248_0","count":23},{"id":"471677248_2","count":5},{"id":"471677248_3","count":6},{"id":"471677248_4","count":8},{"id":"471677248_5","count":22},{"id":"471677248_6","count":22},{"id":"471677248_7","count":5},{"id":"471677248_8","count":7},{"id":"471677248_9","count":15}]},{"id":"471677248_0","which":2,"name":"Politics","density":1.21,"size":79.64625850340136,"engagement":100,"influencerAffinity":56.93,"influencerUniqueness":"53","sharedInfluencers":[{"id":"471677248_1","count":28},{"id":"471677248_2","count":25},{"id":"471677248_3","count":13},{"id":"471677248_4","count":9},{"id":"471677248_5","count":38},{"id":"471677248_6","count":34},{"id":"471677248_7","count":6},{"id":"471677248_8","count":7},{"id":"471677248_9","count":18}]},{"id":"471677248_3","which":3,"name":"Baseball / Sports","density":0.63,"size":71.0204081632653,"engagement":74.85800756521334,"influencerAffinity":47.04,"influencerUniqueness":"52","sharedInfluencers":[{"id":"471677248_0","count":8},{"id":"471677248_1","count":6},{"id":"471677248_2","count":3},{"id":"471677248_4","count":6},{"id":"471677248_5","count":23},{"id":"471677248_6","count":18},{"id":"471677248_7","count":2},{"id":"471677248_8","count":45},{"id":"471677248_9","count":7}]},{"id":"471677248_8","which":4,"name":"Basketball","density":1.25,"size":51.53741496598639,"engagement":68.51504356331564,"influencerAffinity":19.23,"influencerUniqueness":"60","sharedInfluencers":[{"id":"471677248_0","count":4},{"id":"471677248_1","count":5},{"id":"471677248_2","count":2},{"id":"471677248_3","count":44},{"id":"471677248_4","count":3},{"id":"471677248_5","count":14},{"id":"471677248_6","count":9},{"id":"471677248_7","count":2},{"id":"471677248_9","count":5}]},{"id":"471677248_9","which":5,"name":"Data Vis","density":0.38,"size":45.292517006802726,"engagement":31.682980633691095,"influencerAffinity":6.6,"influencerUniqueness":"68","sharedInfluencers":[{"id":"471677248_0","count":15},{"id":"471677248_1","count":20},{"id":"471677248_2","count":3},{"id":"471677248_3","count":10},{"id":"471677248_4","count":15},{"id":"471677248_5","count":29},{"id":"471677248_6","count":31},{"id":"471677248_7","count":8},{"id":"471677248_8","count":11}]},{"id":"471677248_7","which":6,"name":"Science","density":2.52,"size":37.02040816326531,"engagement":63.86747018302897,"influencerAffinity":28.03,"influencerUniqueness":"90","sharedInfluencers":[{"id":"471677248_0","count":1},{"id":"471677248_1","count":2},{"id":"471677248_2","count":0},{"id":"471677248_3","count":1},{"id":"471677248_4","count":0},{"id":"471677248_5","count":1},{"id":"471677248_6","count":3},{"id":"471677248_8","count":1},{"id":"471677248_9","count":1}]},{"id":"471677248_5","which":7,"name":"Youth General","density":0.26,"size":36.12244897959184,"engagement":30.688243385333262,"influencerAffinity":6.64,"influencerUniqueness":"30","sharedInfluencers":[{"id":"471677248_0","count":35},{"id":"471677248_1","count":34},{"id":"471677248_2","count":8},{"id":"471677248_3","count":31},{"id":"471677248_4","count":15},{"id":"471677248_6","count":80},{"id":"471677248_7","count":9},{"id":"471677248_8","count":21},{"id":"471677248_9","count":45}]},{"id":"471677248_2","which":8,"name":"Conservatives","density":1.26,"size":35.863945578231295,"engagement":76.99299475218409,"influencerAffinity":22.68,"influencerUniqueness":"80","sharedInfluencers":[{"id":"471677248_0","count":22},{"id":"471677248_1","count":3},{"id":"471677248_3","count":3},{"id":"471677248_4","count":3},{"id":"471677248_5","count":6},{"id":"471677248_6","count":6},{"id":"471677248_7","count":1},{"id":"471677248_8","count":2},{"id":"471677248_9","count":2}]},{"id":"471677248_4","which":9,"name":"London, UK","density":1.28,"size":34.44897959183674,"engagement":92.83840530419855,"influencerAffinity":38.27,"influencerUniqueness":"87","sharedInfluencers":[{"id":"471677248_0","count":7},{"id":"471677248_1","count":8},{"id":"471677248_2","count":3},{"id":"471677248_3","count":5},{"id":"471677248_5","count":12},{"id":"471677248_6","count":12},{"id":"471677248_7","count":3},{"id":"471677248_8","count":6},{"id":"471677248_9","count":12}]}]
    },
    {
      'audience': '50_shades_of_grey',
      'clusters': [{"id":"1076218846_11","which":0,"name":"Mom/Wife/General","density":0.02,"size":100,"engagement":31.994154283959876,"influencerAffinity":3.56,"influencerUniqueness":"18","sharedInfluencers":[{"id":"1076218846_0","count":46},{"id":"1076218846_1","count":51},{"id":"1076218846_2","count":39},{"id":"1076218846_3","count":54},{"id":"1076218846_4","count":25},{"id":"1076218846_5","count":20},{"id":"1076218846_6","count":73},{"id":"1076218846_7","count":38},{"id":"1076218846_8","count":26},{"id":"1076218846_9","count":47},{"id":"1076218846_10","count":50}]},{"id":"1076218846_6","which":1,"name":"Young Women/General","density":0.04,"size":69.80254165818478,"engagement":22.508783370584005,"influencerAffinity":6.64,"influencerUniqueness":"4","sharedInfluencers":[{"id":"1076218846_0","count":64},{"id":"1076218846_1","count":73},{"id":"1076218846_2","count":51},{"id":"1076218846_3","count":42},{"id":"1076218846_4","count":36},{"id":"1076218846_5","count":25},{"id":"1076218846_7","count":59},{"id":"1076218846_8","count":38},{"id":"1076218846_9","count":31},{"id":"1076218846_10","count":62},{"id":"1076218846_11","count":74}]},{"id":"1076218846_9","which":2,"name":"HS / University Girls","density":0.03,"size":63.93986099398028,"engagement":65.65055816985665,"influencerAffinity":17.95,"influencerUniqueness":"68","sharedInfluencers":[{"id":"1076218846_0","count":15},{"id":"1076218846_1","count":14},{"id":"1076218846_2","count":14},{"id":"1076218846_3","count":16},{"id":"1076218846_4","count":6},{"id":"1076218846_5","count":9},{"id":"1076218846_6","count":17},{"id":"1076218846_7","count":9},{"id":"1076218846_8","count":6},{"id":"1076218846_10","count":14},{"id":"1076218846_11","count":26}]},{"id":"1076218846_2","which":3,"name":"Teen Girl/'Directioner'","density":0.04,"size":57.37342600401314,"engagement":100,"influencerAffinity":27.62,"influencerUniqueness":"46","sharedInfluencers":[{"id":"1076218846_0","count":60},{"id":"1076218846_1","count":33},{"id":"1076218846_3","count":18},{"id":"1076218846_4","count":14},{"id":"1076218846_5","count":15},{"id":"1076218846_6","count":35},{"id":"1076218846_7","count":19},{"id":"1076218846_8","count":13},{"id":"1076218846_9","count":21},{"id":"1076218846_10","count":21},{"id":"1076218846_11","count":29}]},{"id":"1076218846_0","which":4,"name":"Teen Girl/ 'Beliebers'","density":0.04,"size":56.65513129961904,"engagement":54.72222460240107,"influencerAffinity":34.06,"influencerUniqueness":"30","sharedInfluencers":[{"id":"1076218846_1","count":56},{"id":"1076218846_2","count":70},{"id":"1076218846_3","count":33},{"id":"1076218846_4","count":27},{"id":"1076218846_5","count":23},{"id":"1076218846_6","count":53},{"id":"1076218846_7","count":31},{"id":"1076218846_8","count":25},{"id":"1076218846_9","count":23},{"id":"1076218846_10","count":48},{"id":"1076218846_11","count":43}]},{"id":"1076218846_10","which":5,"name":"Female TV/Movie/Ent Lovers","density":0.11,"size":51.80300695030099,"engagement":28.89460278739513,"influencerAffinity":24.63,"influencerUniqueness":"27","sharedInfluencers":[{"id":"1076218846_0","count":46},{"id":"1076218846_1","count":60},{"id":"1076218846_2","count":32},{"id":"1076218846_3","count":55},{"id":"1076218846_4","count":25},{"id":"1076218846_5","count":20},{"id":"1076218846_6","count":68},{"id":"1076218846_7","count":36},{"id":"1076218846_8","count":29},{"id":"1076218846_9","count":17},{"id":"1076218846_11","count":49}]},{"id":"1076218846_3","which":6,"name":"Southern US female - TV","density":0.06,"size":50.029080757262925,"engagement":20.164201454041933,"influencerAffinity":18.58,"influencerUniqueness":"41","sharedInfluencers":[{"id":"1076218846_0","count":39},{"id":"1076218846_1","count":38},{"id":"1076218846_2","count":25},{"id":"1076218846_4","count":19},{"id":"1076218846_5","count":21},{"id":"1076218846_6","count":47},{"id":"1076218846_7","count":23},{"id":"1076218846_8","count":19},{"id":"1076218846_9","count":25},{"id":"1076218846_10","count":50},{"id":"1076218846_11","count":54}]},{"id":"1076218846_7","which":7,"name":"50 Shades Mega Fans","density":0.43,"size":42.963910780236716,"engagement":38.81291400492922,"influencerAffinity":26.46,"influencerUniqueness":"60","sharedInfluencers":[{"id":"1076218846_0","count":11},{"id":"1076218846_1","count":14},{"id":"1076218846_2","count":11},{"id":"1076218846_3","count":9},{"id":"1076218846_4","count":16},{"id":"1076218846_5","count":7},{"id":"1076218846_6","count":41},{"id":"1076218846_8","count":17},{"id":"1076218846_9","count":7},{"id":"1076218846_10","count":12},{"id":"1076218846_11","count":21}]},{"id":"1076218846_1","which":8,"name":"Vampire Diaries Fans","density":0.07,"size":36.99799342774886,"engagement":31.879200906204513,"influencerAffinity":22.16,"influencerUniqueness":"33","sharedInfluencers":[{"id":"1076218846_0","count":41},{"id":"1076218846_2","count":42},{"id":"1076218846_3","count":25},{"id":"1076218846_4","count":17},{"id":"1076218846_5","count":13},{"id":"1076218846_6","count":56},{"id":"1076218846_7","count":26},{"id":"1076218846_8","count":20},{"id":"1076218846_9","count":21},{"id":"1076218846_10","count":49},{"id":"1076218846_11","count":36}]},{"id":"1076218846_4","which":9,"name":"Latin America ","density":0.05,"size":36.11830052054555,"engagement":18.145965505785252,"influencerAffinity":24.25,"influencerUniqueness":"68","sharedInfluencers":[{"id":"1076218846_0","count":15},{"id":"1076218846_1","count":12},{"id":"1076218846_2","count":9},{"id":"1076218846_3","count":9},{"id":"1076218846_5","count":7},{"id":"1076218846_6","count":24},{"id":"1076218846_7","count":19},{"id":"1076218846_8","count":33},{"id":"1076218846_9","count":7},{"id":"1076218846_10","count":13},{"id":"1076218846_11","count":17}]},{"id":"1076218846_5","which":10,"name":"UK Mummy","density":0.16,"size":25.28571844010818,"engagement":13.83620684854072,"influencerAffinity":33.45,"influencerUniqueness":"81","sharedInfluencers":[{"id":"1076218846_0","count":16},{"id":"1076218846_1","count":11},{"id":"1076218846_2","count":14},{"id":"1076218846_3","count":9},{"id":"1076218846_4","count":6},{"id":"1076218846_6","count":13},{"id":"1076218846_7","count":11},{"id":"1076218846_8","count":7},{"id":"1076218846_9","count":6},{"id":"1076218846_10","count":13},{"id":"1076218846_11","count":9}]},{"id":"1076218846_8","which":11,"name":"Spanish Speaking","density":0.07,"size":22.29476255561695,"engagement":20.810346690429142,"influencerAffinity":19.36,"influencerUniqueness":"68","sharedInfluencers":[{"id":"1076218846_0","count":14},{"id":"1076218846_1","count":13},{"id":"1076218846_2","count":10},{"id":"1076218846_3","count":9},{"id":"1076218846_4","count":35},{"id":"1076218846_5","count":7},{"id":"1076218846_6","count":25},{"id":"1076218846_7","count":20},{"id":"1076218846_9","count":7},{"id":"1076218846_10","count":14},{"id":"1076218846_11","count":17}]}]
    },
  ] //informedClusters



// Remove any existing SVG display
  $('#vis').html('');



// Find our audience with _.findWhere
  var theClusters = _.findWhere(informedClusters, {'audience': audience}).clusters;


// Define basic size parameters
  var width = $(window).width() - 250,
      height = $(window).height(),
      padding = 0, // separation between same-color nodes
      clusterPadding = 10, // separation between different-color nodes
      maxRadius = 5;

  var n = 1250, // total number of nodes
      m = theClusters.length; // number of distinct clusters

// Set D3 colors to 20 categoricals
  var color = d3.scale.category10()
      .domain(d3.range(m));

// Set controls and populate with clusters
  $('#controls nav').html(''); //empty the #controls
  $.each(theClusters, function(iter, cluster){
    $('#controls nav').append(
      '<div class="cluster" id="'+cluster.id+'" style="border-color:'+color(iter)+'; background-color:'+d3.rgb(color(iter)).darker(3)+'" >'+
      '<h4>'+cluster.name+'</h4>'+
      '<span>Size: '+cluster.size+'</span>'+
      '<span>Density: '+cluster.density+'</span>'+
      '<span>Engagement: '+cluster.engagement+'</span>'+
      '</div>'
      )
  })
  $(document).on({
    mouseenter: function () {
      var which = $(this).attr('id');
      svg.selectAll(".link").attr('stroke-width', function(d){ return (d.source.cluster_id == which) ? 1 : 0; })
      // svg.selectAll(".link").attr('opacity', function(d){ return (d.source.cluster_id == which || d.target.cluster_id == which) ? 1 : 0; })
      svg.selectAll("circle").attr('opacity', function(d){ return d.cluster_id == which ? 1 : 0.3; })
    },
    mouseleave: function () {
      var which = $(this).attr('id');
      svg.selectAll(".link").attr('stroke-width', 1)
      // svg.selectAll(".link").attr('opacity', 1)
      svg.selectAll("circle").attr('opacity', 1)
    }
}, '.cluster')


var clusters = new Array(m);
//Create weighted dice
  var sizeChances = [];
  _.pluck(theClusters, 'size').forEach(function(item, iter){
    sizeChances = sizeChances.concat( d3.range(item).map(function(){ return iter }))
  }); //theClusters.mapBy('size').forEach

// Each of the n nodes are assigned to a cluster based on sizeChances[]
  var nodes = d3.range(n).map(function(iter) {
    var i = sizeChances[Math.floor(Math.random() * sizeChances.length)],
        r = Math.random() * maxRadius + 1,
        d = {cluster: i, radius: r, id: iter, cluster_name: theClusters[i].name, cluster_id: theClusters[i].id, relativeDensity: (theClusters[i].density / maxDensity * 100),
        x: Math.cos(i / m * 2 * Math.PI) * 200 + width / 2 + Math.random(),
        y: Math.sin(i / m * 2 * Math.PI) * 200 + height / 2 + Math.random()
      };
    // console.log(i);
    if (!clusters[i] || (r > clusters[i].radius)) clusters[i] = d;
    return d;
  });

  links = [];

// Simulate in-cluster links based on density
  var maxDensity = _.max(_.pluck(theClusters, 'density'));
  theClusters.forEach(function(cluster, iter) {

    // Calculate the number of connections by the number of nodes being shown and cluster's density
    var numConnections = _.where(nodes, {'cluster': iter}).length * cluster.density;
    for (n=0; n<numConnections/2; n++) {
      var newLink = {source: _.where(nodes, {'cluster': iter})[Math.floor(Math.random() * _.where(nodes, {'cluster': iter}).length)], target: _.where(nodes, {'cluster': iter})[Math.floor(Math.random() * _.where(nodes, {'cluster': iter}).length)], opacityRelevance: 1}
      links.push(newLink);
    } //for

    // Calculate the number of connections by the number of nodes being shown and cluster's density
    cluster.sharedInfluencers.forEach(function(shared, iter2){
      var sharedConnections = shared.count;
      var linkedCluster = shared.id;
      for (n=0; n<sharedConnections; n++) {
        if (Math.floor(Math.random() * 3) == 2) {
          var newLink = {source: _.where(nodes, {'cluster': iter})[Math.floor(Math.random() * _.where(nodes, {'cluster': iter}).length)], target: _.where(nodes, {'cluster_id': linkedCluster})[Math.floor(Math.random() * _.where(nodes, {'cluster_id': linkedCluster}).length)], opacityRelevance: 1, sharedConnections: sharedConnections}
          links.push(newLink);
        }; //if 1/10 lines
      } //for
    }); //cluster.sharedInfluencers.forEach
  }); //theClusters.forEach


// // Use the pack layout to initialize node positions.
// d3.layout.pack()
//     .sort(null)
//     .size([width, height])
//     .children(function(d) { return d.values; })
//     .value(function(d) { return d.radius * d.radius; })
//     .nodes({values: d3.nest()
//       .key(function(d) { return d.cluster; })
//       .entries(nodes)});

force = d3.layout.force()
    .links(links)
    .nodes(nodes)
    .gravity(0.3)
    .linkStrength(0.8)
    .size([width, height])
    .charge(-100)
    .on("tick", tick)
    .start();

svg = d3.select("#vis").append("svg")
    .attr("width", width)
    .attr("height", height);

    var link = svg.selectAll(".link")
        .data(links)
        .enter().append("path")
        .attr("class", "link")
      .attr("stroke", function(d){ return d3.rgb(color(d.target.cluster)).brighter(.5) })
      // .attr("sharedConnections", function(d){ return d.sharedConnections })
      .attr("data-source-cluster", function(d){ return d.source.cluster_id; })
      .attr("data-target-cluster", function(d){ return d.target.cluster_id; })
      .attr("stroke-opacity", 0)
      .attr('fill', 'transparent')

  var node = svg.selectAll("circle")
      .data(nodes)
    .enter().append("circle")
      .style("fill", function(d) { /*console.log(d);*/ return d3.rgb(color(d.cluster)).brighter(0); })
      .style("stroke", function(d) { return d3.rgb(color(d.cluster)).darker(2); })
      .style("stroke-width", '0px')
      // .style("fill-opacity", '0.3')
      .attr("class", "node")
      .attr("data-cluster", function(d){ return d.cluster_id; })
      // .call(force.drag);


  node.transition()
      .duration(750)
      .delay(function(d, i) { return i * 5; })
      .attrTween("r", function(d) {
        var i = d3.interpolate(0, d.radius);
        return function(t) { return d.radius = i(t); };
      })

  link.transition()
      .duration(2500)
      .delay(function(d, i) { return i; })
      .attrTween("stroke-opacity", function(d) {
        // console.log(d);
        var i = d.sharedConnections ? d3.interpolate(0, 0.005*d.sharedConnections) : d3.interpolate(0, 0.5*d.opacityRelevance);
        return function(t) { return i(t); };
      });

function tick(e) {

  node
      .each(cluster(10 * e.alpha * e.alpha))
      .each(collide(.5))
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
  link
      .attr("d", function(d) {
        var dx = d.target.x - d.source.x,
            dy = d.target.y - d.source.y,
            dr = Math.sqrt(dx * dx + dy * dy);
        return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
      });
} //tick


// Move d to be adjacent to the cluster node.
function cluster(alpha) {
  return function(d) {
    var cluster = clusters[d.cluster];
    if (cluster === d) return;
    var x = d.x - cluster.x,
        y = d.y - cluster.y,
        l = Math.sqrt(x * x + y * y),
        r = d.radius + cluster.radius;
    if (l != r) {
      l = (l - r) / l * alpha;
      d.x -= x *= l;
      d.y -= y *= l;
      cluster.x += x;
      cluster.y += y;
    }
  };
} //cluster

// Resolves collisions between d and all other circles.
function collide(alpha) {
  var quadtree = d3.geom.quadtree(nodes);
  return function(d) {
    var r = d.radius + maxRadius + Math.max(padding, clusterPadding),
        nx1 = d.x - r,
        nx2 = d.x + r,
        ny1 = d.y - r,
        ny2 = d.y + r;
    quadtree.visit(function(quad, x1, y1, x2, y2) {
      if (quad.point && (quad.point !== d)) {
        var x = d.x - quad.point.x,
            y = d.y - quad.point.y,
            l = Math.sqrt(x * x + y * y),
            r = d.radius + quad.point.radius + (d.cluster === quad.point.cluster ? padding : clusterPadding);
        if (l < r) {
          l = (l - r) / l * alpha;
          d.x -= x *= l;
          d.y -= y *= l;
          quad.point.x += x;
          quad.point.y += y;
        }
      }
      return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
    });
  };
} //collide


}; //drawNetwork





