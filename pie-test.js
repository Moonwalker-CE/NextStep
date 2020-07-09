(function(d3) {
        'use strict';
        
        var transitionSpeed = 2000;
  
        var hareReturn = "";
        var mixReturn = "";
        var tortoiseReturn = "";
    
        var currentData = [];
        var dataset = [
             {"label": "Mathematics", "count": 16500},
             {"label": "Computer Science", "count": 58000},
              {"label": "Physics", "count": 35000},
              {"label": "Chemistry", "count": 12700},
              {"label": "Biology", "count": 13500},
              ];
          	
	
	
	

          var tortoiseData = [
             {"label": "English / American Studies", "count": 5800},
             {"label": "History", "count": 7900},
            {"label": "German", "count": 11000},
            {"label": "", "count": 0},
          {"label": "", "count": 0}
          ];

        var mixData = [
             {"label": "Electro technology", "count": 17500},
             {"label": "Civil Engineering", "count": 13700},
            {"label": "Architecture", "count": 8850},
            {"label": "Mechanical Engineering / Process Engineering", "count": 37000},
            {"label": "", "count":0 },
            {"label": "", "count": 0},
            {"label": "", "count": 0},
          ];
                   
	
	 var socialData = [
             {"label": "Social Studies", "count": 25400},
             {"label": "Social Sciences", "count": 8200},
            {"label": "Pedagogic", "count": 10500},
            {"label": "Psychology", "count":10800 },
            {"label": "", "count":0 }
            
          ];
       var lawData = [
             {"label": "Economics", "count": 102000},
             {"label": "Business Engineering", "count": 19900},
            {"label": "Jurisprudence", "count": 32000},
            {"label": "Administration & Public Management", "count":20000 },
            {"label": "", "count":0 },
            {"label": "", "count": 0},
            {"label": "", "count": 0},
          ];         	
	 var MedData = [
             {"label": "Medicine", "count": 16500},
             {"label": "Pharmacy", "count": 15100},
            {"label": "Dentist", "count": 14800},
            {"label": "", "count":0 },
            {"label": "", "count": 0}]; 

		
	
	


	


        var width = 360;
        var height = 360;
        var radius = Math.min(width, height) / 2;
        var donutWidth = 75;
        var legendRectSize = 18;
        var legendSpacing = 4;

        var color = d3.scale.category20b();

        

       
        
        
        
        
        
        var svg = d3.select('#chart')
          .append('svg')
          .attr('width', width)
          .attr('height', height)
          .append('g')
          .attr('transform', 'translate(' + (width / 2) + 
            ',' + (height / 2) + ')');

        var arc = d3.svg.arc()
          .innerRadius(radius - donutWidth)
          .outerRadius(radius);

        var pie = d3.layout.pie()
          .value(function(d) { return d.count; })
          .sort(null);

        var tooltip = d3.select('#chart')
          .append('div')
          .attr('class', 'tooltip');
        
        tooltip.append('div')
          .attr('class', 'label');

        tooltip.append('div')
          .attr('class', 'count');

      
        
         /* dataset.forEach(function(d) {
            d.count = +d.count;
            d.enabled = true;                                         // NEW
          }); */
          //prepPieArray(dataset);
          //prepPieArray(tortoiseData);

          currentData = dataset;

          var path = svg.selectAll('path')
            .data(pie(currentData))
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', function(d, i) { 
              return color(d.data.label); 
            })                                                        // UPDATED (removed semicolon)
            .each(function(d) { this._current = d; });                // NEW

          path.on('mouseover', function(d) {
            var total = d3.sum(currentData.map(function(d) {
              return d.count;                       // UPDATED
            }));
            var percent = Math.round(transitionSpeed * d.data.count / total) / 10;
            tooltip.select('.label').html(d.data.label);
            tooltip.select('.count').html(d.data.count); 
             
            tooltip.style('display', 'block');
          });
          
          path.on('mouseout', function() {
            tooltip.style('display', 'none');
          });

        svg.append("text")
        .attr("class", "return")
        .text(hareReturn + "%")
        .attr("y", ".3em")
        .attr("text-anchor", "middle")


 var tortoise = d3.select("#tortoise")
        .on("click", function(e){
          //alert("tortoise");
           d3.select( ".return" )
            .transition()
            .duration(transitionSpeed) 
            .tween( 'text', textTween( tortoiseReturn ) );
            
          currentData = tortoiseData;  
          path = path.data(pie(currentData));   
          path.transition()                                       // NEW
              .duration(transitionSpeed)                                        // NEW
              .attrTween('d', arcTween);           
            
        });
        
        var mix = d3.select("#mix")
        .on("click", function(e){
          //alert("tortoise");
           d3.select( ".return" )
            .transition()
            .duration(transitionSpeed) 
            .tween( 'text', textTween( mixReturn ) );
            
          path = path.data(pie(mixData));   
          path.transition()                                       // NEW
              .duration(transitionSpeed)                                        // NEW
              .attrTween('d', arcTween);          
        })
        
        var hare = d3.select("#hare")
        .on("click", function(e){
          //alert("tortoise");
           d3.select( ".return" )
            .transition()
            .duration(transitionSpeed) 
            .tween( 'text', textTween( hareReturn ) );
            
          path = path.data(pie(dataset));   
          path.transition()                                       // NEW
              .duration(transitionSpeed)                                        // NEW
              .attrTween('d', arcTween);          
        })
var social = d3.select("#socialStudies")
        .on("click", function(e){
          //alert("tortoise");
           d3.select( ".return" )
            .transition()
            .duration(transitionSpeed) 
            .tween( 'text', textTween( mixReturn ) );
            
          path = path.data(pie(socialData));   
          path.transition()                                       // NEW
              .duration(transitionSpeed)                                        // NEW
              .attrTween('d', arcTween);          
        })
var ecolaw = d3.select("#law")
        .on("click", function(e){
          //alert("tortoise");
           d3.select( ".return" )
            .transition()
            .duration(transitionSpeed);
            
          path = path.data(pie(lawData));   
          path.transition()                                       // NEW
              .duration(transitionSpeed)                                        // NEW
              .attrTween('d', arcTween);          
        })
 
var Med = d3.select("#med")
        .on("click", function(e){
          //alert("tortoise");
           d3.select( ".return" )
            .transition()
            .duration(transitionSpeed);
            
          path = path.data(pie(MedData));   
          path.transition()                                       // NEW
              .duration(transitionSpeed)                                        // NEW
              .attrTween('d', arcTween);          
        })
      

  function textTween( newValue ) {
    return function() {
      // get current value as starting point for tween animation
      var currentValue = +this.textContent;
      // create interpolator and do not show nasty floating numbers
      var i = d3.interpolate( this.textContent, newValue );

      return function(t) {
        
        this.textContent = d3.round( i(t) , 2) + "%" ;
      };
    }
  }

// Store the displayed angles in _current.
// Then, interpolate from _current to the new angles.
// During the transition, _current is updated in-place by d3.interpolate.
function arcTween(d) {
 var interpolate = d3.interpolate(this._current, d); // NEW
  this._current = interpolate(0);                     // NEW
  return function(t) {                                // NEW
    return arc(interpolate(t));                       // NEW
  };     
}

d3.interpolators.push(function(a, b) {
  var re = /^(\d\d\.\d\d)%$/, ma, mb, f = d3.format('05.2f');
  
  if ((ma = re.exec(a)) && (mb = re.exec(b))) {
    
    a = parseFloat(ma[1]);
    b = parseFloat(mb[1]) - a;
    
   
    
    return function(t) {
      return f(a + b * t) + '%';
    };
  }
});



      })(window.d3);

