const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
const dataRead = d3.json(url);

var id = [];
var otu_ids = [];
var otu_labels = [];
var sample_values = [];

dataRead.then(function (data) {

   var samples = data.samples;
     // Loop through the array of films
     for (var i = 0; i < samples.length; i++) {
        // Store the film at index `i` for evaluation
        row = samples[i];
        // console.log(row)
        id[i]= row.id;
        otu_ids[i] = row.otu_ids;
        otu_labels[i] = row.otu_labels;
        sample_values[i] = row.sample_values;
      }
      
      var ind_otu_ids = otu_ids[0]
      var ind_sample_values = sample_values[0]
      var ind_otu_labels = otu_labels[0]

      var top10pltx = ind_otu_ids.slice(0, 10);
      var top10pltxrev = top10pltx.reverse();
      var top10plty = ind_sample_values.slice(0, 10);     
      var top10pltyrev = top10plty.reverse();
      var top10pltlabels = ind_otu_labels.slice(0, 10);
      var top10pltlabelsrev = top10pltlabels.reverse();

   // Display the default plot
   function initbar() {
      let dataplt = [{
         x: top10pltyrev,
         y: top10pltxrev,
         text: top10pltlabelsrev,
         type: "bar",
         orientation: 'h'
      }];
      
      let layoutplt = {
         "yaxis": {
            "type":"category"
         },
         height: 600,
         width: 800
      };
   
      Plotly.newPlot("bar", dataplt, layoutplt);
   }
  
   function initbubble() {
      var trace1 = {
         x: ind_otu_ids,
         y: ind_sample_values,
         text: ind_otu_labels,
         mode: 'markers',
         marker: {
            size: ind_sample_values,
            color: ind_otu_ids
         }
       };

      var dataplt = [trace1];
      
      var layoutplt = {
         showlegend: false,
         height: 600,
         width: 800
      };
   
      Plotly.newPlot("bubble", dataplt, layoutplt);
   }

   initbar();
   initbubble();
      
})

console.log(id)
console.log(id.length)
console.log(id[10])