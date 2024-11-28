//louded
(function(window, document, $, undefined) {

  $(function() {
      var apexChart = jQuery(".apexchart-wrapper");
  if (apexChart.length > 0) {
      var colorPalette = ['#00D8B6','#008FFB',  '#FEB019', '#FF4560', '#775DD0']

          // analytics1
          var apexdemo1 = jQuery('#apexdemo1')
              if (apexdemo1.length > 0) {
                var options = {
                  chart: {
                      height: 350,
                      type: 'line',
                      shadow: {
                          enabled: true,
                          color: '#000',
                          top: 18,
                          left: 7,
                          blur: 10,
                          opacity: 1
                      },
                      toolbar: {
                          show: false
                      }
                  },
                  colors: ['#8E54E9', '#2bcbba'],
                  dataLabels: {
                      enabled: true,
                  },
                  stroke: {
                      curve: 'smooth'
                  },
                  series: [{
                          name: "High - 2013",
                          data: [28, 29, 33, 36, 32, 32, 33]
                      },
                      {
                          name: "Low - 2013",
                          data: [12, 11, 14, 18, 17, 13, 13]
                      }
                  ],
                  grid: {
                      borderColor: '#e7e7e7',
                      row: {
                          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                          opacity: 0.5
                      },
                  },
                  markers: {
                      
                      size: 6
                  },
                  xaxis: {
                      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                      title: {
                          text: 'Month'
                      }
                  },
                  yaxis: {
                      title: {
                          text: 'Temperature'
                      },
                      min: 5,
                      max: 40
                  },
                  legend: {
                      position: 'top',
                      horizontalAlign: 'right',
                      floating: true,
                      offsetY: -25,
                      offsetX: -5
                  }
              }
      
              var chart = new ApexCharts(
                  document.querySelector("#apexdemo1"),
                  options
              );
      
              chart.render();
              }

              var apexdemo2 = jQuery('#apexdemo2')
              if (apexdemo2.length > 0) {
                var options = {
                  chart: {
                      height: 350,
                      type: 'line',
                      shadow: {
                          enabled: false,
                          color: '#bbb',
                          top: 3,
                          left: 2,
                          blur: 3,
                          opacity: 1
                      },
                  },
                  stroke: {
                      width: 7,   
                      curve: 'smooth'
                  },
                  series: [{
                      name: 'Likes',
                      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
                  }],
                  xaxis: {
                      type: 'datetime',
                      categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
                  },
                  title: {
                      text: 'Social Media',
                      align: 'left',
                      style: {
                          fontSize: "16px",
                          color: '#666'
                      }
                  },
                  fill: {
                      type: 'gradient',
                      gradient: {
                          shade: 'dark',
                          gradientToColors: [ '#8E54E9'],
                          shadeIntensity: 1,
                          type: 'horizontal',
                          opacityFrom: 1,
                          opacityTo: 1,
                          stops: [0, 100, 100, 100]
                      },
                  },
                  markers: {
                      size: 4,
                      opacity: 0.9,
                      colors: ["#2bcbba"],
                      strokeColor: "#fff",
                      strokeWidth: 2,
                       
                      hover: {
                          size: 7,
                      }
                  },
                  yaxis: {
                      min: -10,
                      max: 40,
                      title: {
                          text: 'Engagement',
                      },                
                  }
              }
      
             var chart = new ApexCharts(
                  document.querySelector("#apexdemo2"),
                  options
              );
              
              chart.render();
              }

              var apexdemo3 = jQuery('#apexdemo3')
              if (apexdemo3.length > 0) {
                var options = {
                  chart: {
                      height: 350,
                      type: 'area',
                  },
                  dataLabels: {
                      enabled: false
                  },
                  stroke: {
                      curve: 'smooth'
                  },
                  series: [{
                      name: 'series1',
                      data: [31, 40, 28, 51, 42, 109, 100]
                  }, {
                      name: 'series2',
                      data: [11, 32, 45, 32, 34, 52, 41]
                  }],
                  colors: ['#8E54E9', '#2bcbba'],
                  xaxis: {
                      type: 'datetime',
                      categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],                
                  },
                  tooltip: {
                      x: {
                          format: 'dd/MM/yy HH:mm'
                      },
                  }
              }
      
              var chart = new ApexCharts(
                  document.querySelector("#apexdemo3"),
                  options
              );
      
              chart.render();
              }

              var apexdemo4 = jQuery('#apexdemo4')
              if (apexdemo4.length > 0) {
                var options = {
                  chart: {
                    height: 350,
                    type: 'area',
                    stacked: true,
                    events: {
                      selection: function(chart, e) {
                        console.log(new Date(e.xaxis.min) )
                      }
                    },
            
                  },
                  colors: ['#8E54E9', '#2bcbba', '#eceef3'],
                  dataLabels: {
                      enabled: false
                  },
                  stroke: {
                    curve: 'smooth'
                  },
            
                  series: [{
                      name: 'South',
                      data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                        min: 10,
                        max: 60
                      })
                    },
                    {
                      name: 'North',
                      data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                        min: 10,
                        max: 20
                      })
                    },
                    
                    {
                      name: 'Central',
                      data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                        min: 10,
                        max: 15
                      })
                    }
                  ],
                  fill: {
                    type: 'gradient',
                    gradient: {
                      opacityFrom: 0.6,
                      opacityTo: 0.8,
                    }
                  },
                  legend: {
                    position: 'top',
                    horizontalAlign: 'left'
                  },
                  xaxis: {
                    type: 'datetime'
                  },
                }
            
                var chart = new ApexCharts(
                  document.querySelector("#apexdemo4"),
                  options
                );
            
                chart.render();
            
                function generateDayWiseTimeSeries(baseval, count, yrange) {
                  var i = 0;
                  var series = [];
                  while (i < count) {
                    var x = baseval;
                    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            
                    series.push([x, y]);
                    baseval += 86400000;
                    i++;
                  }
                  return series;
                }
                        
              }

              var apexdemo5 = jQuery('#apexdemo5')
              if (apexdemo5.length > 0) {
                var options = {
                  chart: {
                      height:420,
                      type: 'bar',
                  },
                  plotOptions: {
                      bar: {
                          horizontal: true,
                      }
                  },
                  colors: ['#8E54E9'],
                  dataLabels: {
                      enabled: false
                  },
                  series: [{
                      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
                  }],
                  xaxis: {
                      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
                  }
              }
      
             var chart = new ApexCharts(
                  document.querySelector("#apexdemo5"),
                  options
              );
              
              chart.render();

              }

              var apexdemo6 = jQuery('#apexdemo6')
              if (apexdemo6.length > 0) {
                var options = {
                  chart: {
                      height: 420,
                      type: 'bar',
                      stacked: true
                  },
                  colors: ['#8E54E9','#2bcbba'],
                  plotOptions: {
                      bar: {
                          horizontal: true,
                          barHeight: '80%',
                          
                      },
                  },
                  dataLabels: {
                      enabled: false
                  },
                  stroke: {
                      width: 1,
                      colors: ["#fff"]
                  },
                  series: [{
                      name: 'Males',
                      data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5, 3.9, 3.5, 3]
                  },
                  {
                      name: 'Females',
                      data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8]
                  }],
                  grid: {
                      xaxis: {
                          showLines: false
                      }
                  },
                  yaxis: {
                      min: -5,
                      max: 5,
                      title: {
                         // text: 'Age',
                      },
                  },
                  tooltip: {
                      shared: false,
                      x: {
                          formatter: function(val) {
                              return val
                          }
                      },
                      y: {
                          formatter: function(val) {
                              return Math.abs(val) + "%"
                          }
                      }
                  },

                  xaxis: {
                    categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54', '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9', '0-4'],
                    title: {
                        text: 'Percent'
                    },
                    labels: {
                      formatter: function(val) {
                        return Math.abs(Math.round(val)) + "%"
                      }
                    }
                  },
              }
      
             var chart = new ApexCharts(
                  document.querySelector("#apexdemo6"),
                  options
              );
              
              chart.render();
          
              }

              var apexdemo7 = jQuery('#apexdemo7')
              if (apexdemo7.length > 0) {
                var optionDonut = {
                  chart: {

                      type: 'donut',
                      height: '350'
                  },
                  dataLabels: {
                    enabled: false,
                  },
                  plotOptions: {
                    pie: {
                      donut: {
                        size: '75%',
                      },
                      offsetY: 0,
                    },
                    stroke: {
                      colors: undefined
                    }
                  },
                  colors: ['#8E54E9','#2bcbba','#f7b731','#45aaf2','#e3324c'],

                  series: [21, 23, 19, 14, 6],
                  labels: ['Clothing', 'Food Products', 'Electronics', 'Kitchen Utility', 'Gardening'],
                }
                
                var donut = new ApexCharts(
                  document.querySelector("#apexdemo7"),
                  optionDonut
                )
                donut.render();

              }

              var apexdemo8 = jQuery('#apexdemo8')
              if (apexdemo8.length > 0) {
                var optionDonut = {
                  chart: {

                      type: 'pie',
                      height: '350'
                  },
                  dataLabels: {
                    enabled: false,
                  },
                  plotOptions: {
                    pie: {
                      donut: {
                        size: '75%',
                      },
                      offsetY: 0,
                    },
                    stroke: {
                      colors: undefined
                    }
                  },
                  colors: ['#8E54E9','#2bcbba','#f7b731','#45aaf2','#e3324c'],

                  series: [21, 23, 19, 14, 6],
                  labels: ['Clothing', 'Food Products', 'Electronics', 'Kitchen Utility', 'Gardening'],
                }
                
                var donut = new ApexCharts(
                  document.querySelector("#apexdemo8"),
                  optionDonut
                )
                donut.render();

              }
              
         
         

      

              // analytics5
              var analytics5 = jQuery('#analytics5')
              if (analytics5.length > 0) {

                  var randomizeArray = function (arg) {
                      var array = arg.slice();
                      var currentIndex = array.length,
                        temporaryValue, randomIndex;

                      while (0 !== currentIndex) {

                        randomIndex = Math.floor(Math.random() * currentIndex);
                        currentIndex -= 1;

                        temporaryValue = array[currentIndex];
                        array[currentIndex] = array[randomIndex];
                        array[randomIndex] = temporaryValue;
                      }

                      return array;
                    }

                    // data for the sparklines that appear below header area
                    var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

              var options = {
                  chart: {
                      type: 'area',
                      height: 160,
                      sparkline: {
                        enabled: true,
                        offsetY:25,
                        offsetX:25,
                      },
                    },
                    stroke: {
                      curve: 'smooth',
                      width: 3
                    },
                   fill: {
                      opacity: 0.3,
                      gradient: {
                        enabled: true,
                        shadeIntensity: 0.1,
                        inverseColors: false,
                        opacityFrom: 0.6,
                        opacityTo: 0.2,
                        stops: [20, 100, 100, 100]
                      },
                    },
                    series: [{
                      data: randomizeArray(sparklineData)
                    }],
                    yaxis: {
                      min: 0
                    },
                    colors: ['#fb0792'],
              }

              var chart = new ApexCharts(
                  document.querySelector("#analytics5"),
                  options
              );

              chart.render();
              }

              // analytics6
                var analytics6 = jQuery('#analytics6')
              if (analytics6.length > 0) {

                  var randomizeArray = function (arg) {
                      var array = arg.slice();
                      var currentIndex = array.length,
                        temporaryValue, randomIndex;

                      while (0 !== currentIndex) {

                        randomIndex = Math.floor(Math.random() * currentIndex);
                        currentIndex -= 1;

                        temporaryValue = array[currentIndex];
                        array[currentIndex] = array[randomIndex];
                        array[randomIndex] = temporaryValue;
                      }

                      return array;
                    }

                    // data for the sparklines that appear below header area
                    var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

              var options = {
                  chart: {
                      type: 'area',
                      height: 160,
                      sparkline: {
                        enabled: true,
                        offsetY:25,
                        offsetX:25,
                      },
                    },
                    stroke: {
                      curve: 'smooth',
                      width: 3
                    },
                   fill: {
                      opacity: 0.3,
                      gradient: {
                        enabled: true,
                        shadeIntensity: 0.1,
                        inverseColors: false,
                        opacityFrom: 0.6,
                        opacityTo: 0.2,
                        stops: [20, 100, 100, 100]
                      },
                    },
                    series: [{
                      data: randomizeArray(sparklineData)
                    }],
                    yaxis: {
                      min: 0
                    },
                    colors: ['#32b432'],
              }

              var chart = new ApexCharts(
                  document.querySelector("#analytics6"),
                  options
              );

              chart.render();
              }

      
      

             
             

          

              // ecommerce
              var ecommerce5 = jQuery('#ecommerce5')
              if (ecommerce5.length > 0) {
              var options = {
                  chart: {
                      height: 340,
                      type: 'bar',
                      toolbar: {
                        show: false,
                      },
                  },
                  colors:['#8E54E9', '#eceef3'],
                  plotOptions: {
                      bar: {
                          horizontal: false,
                          endingShape: 'rounded',
                          columnWidth: '40%',
                      },
                  },
                  dataLabels: {
                      enabled: false
                  },
                  stroke: {
                      show: true,
                      width: 2,
                      colors: ['transparent']
                  },
                  series: [{
                      name: 'Annual Sales',
                      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
                  }, {
                      name: 'Annual Revenue',
                      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
                  }],
                  xaxis: {
                      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                      axisBorder: {
                           show: false,
                      },
                      labels: {
                          style: {
                              colors: ['#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494', '#949494','#949494'],
                              fontSize: '12px',
                              fontFamily: 'Roboto',
                              cssClass: 'apexcharts-xaxis-label',
                          },
                          offsetX: 0,
                      }
                  },
                     yaxis: {
                          labels: {
                              show: false,
                              style: {
                                  colors: ['#949494'],
                                  fontSize: '12px',
                                  fontFamily: 'Roboto',
                                  cssClass: 'apexcharts-yaxis-label',
                              }
                          }
                  },
                  fill: {
                  type: 'gradient',
                  gradient: {
                      shade: 'light',
                      type: "vertical",
                      shadeIntensity: 0.6,
                      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                      inverseColors: true,
                      opacityFrom: 1,
                      opacityTo: 1,
                      stops: [0, 50, 100]
                  }
                  },
                  legend: {
                      fontFamily: 'Roboto',
                      labels: {
                          colors: ['#949494', '#949494','#949494'],
                          useSeriesColors: false
                      },
                      itemMargin: {
                          horizontal: 20
                      },
                  },
                  tooltip: {
                      y: {
                          formatter: function (val) {
                              return "$ " + val + " thousands"
                          }
                      }
                  },
                  grid: {
                      show: true,
                      borderColor: '#fff',
                  },
                  responsive: [{
                      breakpoint: 400,
                      options: {
                        plotOptions: {
                          bar: {
                              horizontal: false,
                              endingShape: 'rounded',
                              columnWidth: '70%',
                          },
                      },
                      },
                  }]

              }

              var chart = new ApexCharts(
                  document.querySelector("#ecommerce5"),
                  options
              );

              chart.render();
              }



              var ecommercedemo1 = jQuery('#ecommercedemo1')
              if (ecommercedemo1.length > 0) {

                  var randomizeArray = function (arg) {
                      var array = arg.slice();
                      var currentIndex = array.length,
                        temporaryValue, randomIndex;

                      while (0 !== currentIndex) {

                        randomIndex = Math.floor(Math.random() * currentIndex);
                        currentIndex -= 1;

                        temporaryValue = array[currentIndex];
                        array[currentIndex] = array[randomIndex];
                        array[randomIndex] = temporaryValue;
                      }

                      return array;
                    }

                  

                   

                    

                    

                    

                    // data for the sparklines that appear below header area
                    var sparklineData = [0, 2, 7, 5, 10, 9, 13, 15];

              var options = {
                  chart: {
                      type: 'area',
                      height: 355,
                      width: 600,
                      sparkline: {
                        enabled: true
                      }
                    },
                    stroke: {
                      curve: 'smooth',
                      width: 3
                    },
                   fill: {
                      opacity: 0.3,
                      gradient: {
                        enabled: true,
                        shadeIntensity: 0.1,
                        inverseColors: false,
                        opacityFrom: 0.6,
                        opacityTo: 0.2,
                        stops: [20, 100, 100, 100]
                      },
                    },
                    markers: {
                      strokeColor: '#8E54E9',
                      size: 3
                    },
                    series: [{
                      data: sparklineData
                    }],
                    yaxis: {
                      min: 0
                    },
                    colors: ['#8E54E9'],
              }

              var chart = new ApexCharts(
                  document.querySelector("#pageview"),
                  options
              );

              chart.render();
              }

               
              



              


              // cardealerdemo4
              var cardealerdemo4 = jQuery('#cardealerdemo4')
              if (cardealerdemo4.length > 0) {
                  var options = {
                      chart: {
                          width: 260,
                          type: 'donut',
                      },
                      dataLabels: {
                          enabled: false
                      },
                      series:[60, 40, 25, 15],
                      labels: ['Direct', 'Referral', 'Organic', 'Social'],
                      colors:['#d270f9','#d69bee', '#deb0f1','#ebcff6'],
                      fill: {
                          type: 'gradient',
                          gradient: {
                              shade: 'dark',
                              type: "vertical",
                              shadeIntensity: 1,
                              opacityFrom: 1,
                              opacityTo: 1,
                              gradientToColors: ['#d270f9','#d69bee', '#deb0f1','#ebcff6'],
                              stops: [0, 90, 100]
                            }
                      },
                      legend: {
                          show: false,
                          position: 'left',
                          horizontalAlign: 'center',
                           fontSize: '14px',
                           itemMargin: {
                              horizontal: 20,
                              vertical: 5
                          },
                      },
                      responsive: [{
                          breakpoint: 480,
                          options: {
                              chart: {
                                  width: 200
                              },
                              legend: {
                                  position: 'bottom'
                              }
                          }
                      }]

                  }

                  var chart = new ApexCharts(
                      document.querySelector("#cardealerdemo4"),
                      options
                  );

                  chart.render();

                  var paper = chart.paper()

          }


           var cardealerdemo5 = jQuery('#cardealerdemo5')
              if (cardealerdemo5.length > 0) {

                  var randomizeArray = function (arg) {
                      var array = arg.slice();
                      var currentIndex = array.length,
                        temporaryValue, randomIndex;

                      while (0 !== currentIndex) {

                        randomIndex = Math.floor(Math.random() * currentIndex);
                        currentIndex -= 1;

                        temporaryValue = array[currentIndex];
                        array[currentIndex] = array[randomIndex];
                        array[randomIndex] = temporaryValue;
                      }

                      return array;
                    }

                    // data for the sparklines that appear below header area
                    var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

              var options = {
                  chart: {
                      type: 'area',
                      height: 160,
                      sparkline: {
                        enabled: true,
                        offsetY:25,
                        offsetX:25,
                      },
                    },
                    stroke: {
                      curve: 'smooth',
                      width: 3
                    },
                   fill: {
                      opacity: 0.3,
                      gradient: {
                        enabled: true,
                        shadeIntensity: 0.1,
                        inverseColors: false,
                        opacityFrom: 0.9,
                        opacityTo: 0.1,
                        stops: [20, 100, 100, 100]
                      },
                    },
                    series: [{
                      data: randomizeArray(sparklineData)
                    }],
                    yaxis: {
                      min: 0
                    },
                    colors: ['#d270f9'],
              }
              var chart = new ApexCharts(
                  document.querySelector("#cardealerdemo5"),
                  options
              );

              chart.render();
              }

              

              


         

          

          

           


            

            
             

             

          

        


        



                    

                    
             
          
             
              
              
              //analytical dashboard chart
              var analytical6 = jQuery("#analytical6");
              if (analytical6.length > 0) {
                  var data = {
                      series: [
                          [7, -4, 6, -3, 8, -2]
                      ]
                  };

                  var options = {
                      high: 10,
                      low: -10,
                      seriesBarDistance: 10,
                      fullWidth: true,
                      showLabel: false,
                      chartPadding: 0,
                      axisX: {
                          showGrid: false,
                          showLabel: false,
                          offset: 0
                      },
                      axisY: {
                          showGrid: false,
                          showLabel: false,
                          offset: 0
                      }
                  };

                  new Chartist.Bar('#analytical6', data, options);
              }
      }
  });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

  $(function(){
      var chartJS = jQuery(".chartjs-wrapper");
      if (chartJS.length > 0) {
                  /* Utils */
                  window.chartColors = {
                      red: 'rgb(233, 84, 84)',
                      orange: 'rgb(253, 153, 68)',
                      yellow: 'rgb(255, 188, 29)',
                      green: 'rgb(37, 208, 154)',
                      blue: 'rgb(71, 118, 230)',
                      purple: 'rgb(142, 84, 233)',
                      grey: 'rgb(148, 148, 148)'
                  };

                  (function(global) {
                      var Months = [
                          'January',
                          'February',
                          'March',
                          'April',
                          'May',
                          'June',
                          'July',
                          'August',
                          'September',
                          'October',
                          'November',
                          'December'
                      ];

                      var COLORS = [
                          '#4dc9f6',
                          '#f67019',
                          '#f53794',
                          '#537bc4',
                          '#acc236',
                          '#166a8f',
                          '#00a950',
                          '#58595b',
                          '#8549ba'
                      ];

                      var Samples = global.Samples || (global.Samples = {});
                      var Color = global.Color;

                      Samples.utils = {
                          // Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
                          srand: function(seed) {
                              this._seed = seed;
                          },

                          rand: function(min, max) {
                              var seed = this._seed;
                              min = min === undefined ? 0 : min;
                              max = max === undefined ? 1 : max;
                              this._seed = (seed * 9301 + 49297) % 233280;
                              return min + (this._seed / 233280) * (max - min);
                          },

                          numbers: function(config) {
                              var cfg = config || {};
                              var min = cfg.min || 0;
                              var max = cfg.max || 1;
                              var from = cfg.from || [];
                              var count = cfg.count || 8;
                              var decimals = cfg.decimals || 8;
                              var continuity = cfg.continuity || 1;
                              var dfactor = Math.pow(10, decimals) || 0;
                              var data = [];
                              var i, value;

                              for (i = 0; i < count; ++i) {
                                  value = (from[i] || 0) + this.rand(min, max);
                                  if (this.rand() <= continuity) {
                                      data.push(Math.round(dfactor * value) / dfactor);
                                  } else {
                                      data.push(null);
                                  }
                              }

                              return data;
                          },

                          labels: function(config) {
                              var cfg = config || {};
                              var min = cfg.min || 0;
                              var max = cfg.max || 100;
                              var count = cfg.count || 8;
                              var step = (max - min) / count;
                              var decimals = cfg.decimals || 8;
                              var dfactor = Math.pow(10, decimals) || 0;
                              var prefix = cfg.prefix || '';
                              var values = [];
                              var i;

                              for (i = min; i < max; i += step) {
                                  values.push(prefix + Math.round(dfactor * i) / dfactor);
                              }

                              return values;
                          },

                          months: function(config) {
                              var cfg = config || {};
                              var count = cfg.count || 12;
                              var section = cfg.section;
                              var values = [];
                              var i, value;

                              for (i = 0; i < count; ++i) {
                                  value = Months[Math.ceil(i) % 12];
                                  values.push(value.substring(0, section));
                              }

                              return values;
                          },

                          color: function(index) {
                              return COLORS[index % COLORS.length];
                          },

                          transparentize: function(color, opacity) {
                              var alpha = opacity === undefined ? 0.5 : 1 - opacity;
                              return Color(color).alpha(alpha).rgbString();
                          }
                      };

                      

                      // INITIALIZATION

                      Samples.utils.srand(Date.now());

                  }(this));
                  /*Custom Points*/
                  var customTooltips = function(tooltip) {
                      $(this._chart.canvas).css("cursor", "pointer");
                      var positionY = this._chart.canvas.offsetTop;
                      var positionX = this._chart.canvas.offsetLeft;
                      $(".chartjs-tooltip").css({
                          opacity: 0,
                      });
                      if (!tooltip || !tooltip.opacity) {
                          return;
                      }
                      if (tooltip.dataPoints.length > 0) {
                          tooltip.dataPoints.forEach(function(dataPoint) {
                              var content = [dataPoint.xLabel, dataPoint.yLabel].join(": ");
                              var $tooltip = $("#tooltip-" + dataPoint.datasetIndex);

                              $tooltip.html(content);
                              $tooltip.css({
                                  opacity: 1,
                                  top: positionY + dataPoint.y + "px",
                                  left: positionX + dataPoint.x + "px",
                              });
                          });
                      }
                  };
                  var color = Chart.helpers.color;
                  var lineChartData = {
                      labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"],
                      datasets: [{
                          label: "My First dataset",
                          backgroundColor: color(window.chartColors.purple).alpha(0.2).rgbString(),
                          borderColor: window.chartColors.purple,
                          pointBackgroundColor: window.chartColors.purple,
                          data: [
                              randomScalingFactor(),
                              randomScalingFactor(),
                              randomScalingFactor(),
                              randomScalingFactor(),
                              randomScalingFactor(),
                              randomScalingFactor(),
                              randomScalingFactor()
                          ]
                      }, {
                          label: "My Second dataset",
                          backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
                          borderColor: window.chartColors.blue,
                          pointBackgroundColor: window.chartColors.blue,
                          data: [
                              randomScalingFactor(),
                              randomScalingFactor(),
                              randomScalingFactor(),
                              randomScalingFactor(),
                              randomScalingFactor(),
                              randomScalingFactor(),
                              randomScalingFactor()
                          ]
                      }]
                  };
                  //simple line chart
                  var chartjsdemo1 = jQuery("#chartjsdemo1");
                  if (chartjsdemo1.length > 0) {
                      var MONTHS = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
                      var config = {
                          type: 'line',
                          data: {
                              labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"],
                              datasets: [{
                                  label: "Facebook",
                                  borderColor: window.chartColors.blue,
                                  backgroundColor: window.chartColors.blue,
                                  data: [
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor()
                                  ],
                              }, {
                                  label: "Twitter",
                                  borderColor: window.chartColors.green,
                                  backgroundColor: window.chartColors.green,
                                  data: [
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor()
                                  ],
                              }, {
                                  label: "LinkedIn",
                                  borderColor: window.chartColors.purple,
                                  backgroundColor: window.chartColors.purple,
                                  data: [
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor()
                                  ],
                              }, {
                                  label: "Google+",
                                  borderColor: window.chartColors.yellow,
                                  backgroundColor: window.chartColors.yellow,
                                  data: [
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor()
                                  ],
                              }]
                          },
                          options: {
                              responsive: true,
                              maintainAspectRatio: false,
                              title: {
                                  display: false,
                                  text: "Line Chart - Stacked Area"
                              },
                              tooltips: {
                                  mode: 'index',
                              },
                              hover: {
                                  mode: 'index'
                              },
                              legend: {
                                  labels: {
                                      fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                      fontFamily: 'Roboto',
                                      fontSize: 12,
                                  }
                              },
                              scales: {
                                  xAxes: [{
                                      scaleLabel: {
                                          display: false,
                                          labelString: 'Month',
                                          fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                          fontFamily: 'Roboto',
                                          fontSize: 14
                                      },
                                      ticks: {
                                          fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                          fontFamily: 'Roboto',
                                          fontSize: 12,
                                          stepSize: 1,
                                          beginAtZero: true
                                      }
                                  }],
                                  yAxes: [{
                                      stacked: true,
                                      scaleLabel: {
                                          display: false,
                                          labelString: 'Price',
                                          fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                          fontFamily: 'Roboto',
                                          fontSize: 14
                                      },
                                      ticks: {
                                          fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                          fontFamily: 'Roboto',
                                          fontSize: 12
                                      }
                                  }]
                              }
                          }
                      };
                      var ctx1 = document.getElementById("chartjsdemo1").getContext("2d");
                      window.myLine1 = new Chart(ctx1, config);
                  }
                  var chartjsdemo2 = jQuery("#chartjsdemo2");
                  if (chartjsdemo2.length > 0) {
                      // Line chart
                      var config2 = {
                          type: 'line',
                          data: {
                              labels: ["January", "February", "March", "April", "May", "June", "July"],
                              datasets: [{
                                  label: "Unfilled",
                                  fill: false,
                                  backgroundColor: window.chartColors.yellow,
                                  borderColor: window.chartColors.yellow,
                                  data: [
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor()
                                  ],
                              }, {
                                  label: "Dashed",
                                  fill: false,
                                  backgroundColor: window.chartColors.blue,
                                  borderColor: window.chartColors.blue,
                                  borderDash: [5, 5],
                                  data: [
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor()
                                  ],
                              }, {
                                  label: "Filled",
                                  backgroundColor: window.chartColors.purple,
                                  borderColor: window.chartColors.purple,
                                  data: [
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor()
                                  ],
                                  fill: true,
                              }]
                          },
                          options: {
                              responsive: true,
                              maintainAspectRatio: false,
                              title: {
                                  display: false,
                                  text: 'Line Chart - Line styles'
                              },
                              tooltips: {
                                  mode: 'index',
                                  intersect: false,
                              },
                              hover: {
                                  mode: 'nearest',
                                  intersect: true
                              },
                              legend: {
                                  labels: {
                                      fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                      fontFamily: 'Roboto',
                                      fontSize: 12
                                  }
                              },
                              scales: {
                                  xAxes: [{
                                      display: true,
                                      scaleLabel: {
                                          display: false,
                                          labelString: 'Month',
                                          fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                          fontFamily: 'Roboto',
                                          fontSize: 14
                                      },
                                      ticks: {
                                          fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                          fontFamily: 'Roboto',
                                          fontSize: 12,
                                          stepSize: 1,
                                          beginAtZero: true
                                      }
                                  }],
                                  yAxes: [{
                                      display: true,
                                      scaleLabel: {
                                          display: false,
                                          labelString: 'Value',
                                          fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                          fontFamily: 'Roboto',
                                          fontSize: 14
                                      },
                                      ticks: {
                                          fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                          fontFamily: 'Roboto',
                                          fontSize: 12
                                      }
                                  }]
                              }
                          }
                      };
                      var ctx2 = document.getElementById("chartjsdemo2").getContext("2d");
                      window.myLine2 = new Chart(ctx2, config2);
                  }
                  var chartjsdemo3 = jQuery("#chartjsdemo3");
                  if (chartjsdemo3.length > 0) {
                      
                      // chart basic
                      var config6 = {
                          type: 'line',
                          data: {
                              labels: ["January", "February", "March", "April", "May", "June", "July"],
                              datasets: [{
                                  label: "My First dataset",
                                  backgroundColor: window.chartColors.purple,
                                  borderColor: window.chartColors.purple,
                                  data: [
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor()
                                  ],
                                  fill: false,
                              }, {
                                  label: "My Second dataset",
                                  fill: false,
                                  backgroundColor: window.chartColors.blue,
                                  borderColor: window.chartColors.blue,
                                  data: [
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor()
                                  ],
                              }]
                          },
                          options: {
                              maintainAspectRatio: false,
                              responsive: true,
                              title: {
                                  display: false,
                                  text: 'Line Chart - Basic'
                              },
                              tooltips: {
                                  mode: 'index',
                                  intersect: false,
                              },
                              hover: {
                                  mode: 'nearest',
                                  intersect: true
                              },
                              legend: {
                                  labels: {
                                      fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                      fontFamily: 'Roboto',
                                      fontSize: 12
                                  }
                              },
                              scales: {
                                  xAxes: [{
                                      display: true,
                                      scaleLabel: {
                                          display: false,
                                          labelString: 'Month',
                                          fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                          fontFamily: 'Roboto',
                                          fontSize: 14
                                      },
                                      ticks: {
                                          fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                          fontFamily: 'Roboto',
                                          fontSize: 12
                                      }
                                  }],
                                  yAxes: [{
                                      display: true,
                                      scaleLabel: {
                                          display: false,
                                          labelString: 'Value',
                                          fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                          fontFamily: 'Roboto',
                                          fontSize: 14
                                      },
                                      ticks: {
                                          fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                          fontFamily: 'Roboto',
                                          fontSize: 12
                                      }
                                  }]
                              }
                          }
                      };
                      var ctx6 = document.getElementById("chartjsdemo6").getContext("2d");
                      window.myLine6 = new Chart(ctx6, config6);
                  }
                  var chartjsdemo7 = jQuery("#chartjsdemo7");
                  if (chartjsdemo7.length > 0) {
                      var config7 = {
                          type: 'line',
                          data: {
                              labels: ["January", "February", "March", "April", "May", "June", "July"],
                              datasets: [{
                                  label: "dataset - big points",
                                  data: [
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor()
                                  ],
                                  backgroundColor: window.chartColors.purple,
                                  borderColor: window.chartColors.purple,
                                  fill: false,
                                  borderDash: [5, 5],
                                  pointRadius: 15,
                                  pointHoverRadius: 10,
                              }, {
                                  label: "dataset - individual point sizes",
                                  data: [
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor()
                                  ],
                                  backgroundColor: window.chartColors.blue,
                                  borderColor: window.chartColors.blue,
                                  fill: false,
                                  borderDash: [5, 5],
                                  pointRadius: [2, 4, 6, 18, 0, 12, 20],
                              }, {
                                  label: "dataset - large pointHoverRadius",
                                  data: [
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor()
                                  ],
                                  backgroundColor: window.chartColors.green,
                                  borderColor: window.chartColors.green,
                                  fill: false,
                                  pointHoverRadius: 30,
                              }, {
                                  label: "dataset - large pointHitRadius",
                                  data: [
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor(),
                                      randomScalingFactor()
                                  ],
                                  backgroundColor: window.chartColors.yellow,
                                  borderColor: window.chartColors.yellow,
                                  fill: false,
                                  pointHitRadius: 20,
                              }]
                          },
                          options: {
                              maintainAspectRatio: false,
                              responsive: true,
                    
                              hover: {
                                  mode: 'index'
                              },
                              legend: {
                                  position: 'bottom',
                                  labels: {
                                      fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                      fontFamily: 'Roboto',
                                      fontSize: 12
                                  }
                              },
                              scales: {
                                  xAxes: [{
                                      display: true,
                                      scaleLabel: {
                                          display: false,
                                          labelString: 'Month',
                                          fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                          fontFamily: 'Roboto',
                                          fontSize: 14
                                      },
                                      ticks: {
                                          fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                          fontFamily: 'Roboto',
                                          fontSize: 12
                                      }
                                  }],
                                  yAxes: [{
                                      display: true,
                                      scaleLabel: {
                                          display: false,
                                          labelString: 'Value',
                                          fontColor: color(window.chartColors.grey).alpha(1).rgbString(),
                                          fontFamily: 'Roboto',
                                          fontSize: 14
                                      },
                                      ticks: {
                                          fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                          fontFamily: 'Roboto',
                                          fontSize: 12
                                      }
                                  }]
                              },
                              title: {
                                  display: false,
                                  text: 'Line Chart - Different point sizes'
                              }
                          }
                      };
                      var ctx7 = document.getElementById("chartjsdemo7").getContext("2d");
                      window.myLine7 = new Chart(ctx7, config7);
                  }
                  var chartjsdemo8 = jQuery("#chartjsdemo8");
                  if (chartjsdemo8.length > 0) {
                      // Stacked bar chart
                      var barChartData = {
                          labels: ["January", "February", "March", "April", "May", "June", "July"],
                          datasets: [{
                              label: 'Dataset 1',
                              backgroundColor: window.chartColors.purple,
                              data: [
                                  randomScalingFactor(),
                                  randomScalingFactor(),
                                  randomScalingFactor(),
                                  randomScalingFactor(),
                                  randomScalingFactor(),
                                  randomScalingFactor(),
                                  randomScalingFactor()
                              ]
                          }, {
                              label: 'Dataset 2',
                              backgroundColor: window.chartColors.blue,
                              data: [
                                  randomScalingFactor(),
                                  randomScalingFactor(),
                                  randomScalingFactor(),
                                  randomScalingFactor(),
                                  randomScalingFactor(),
                                  randomScalingFactor(),
                                  randomScalingFactor()
                              ]
                          }, {
                              label: 'Dataset 3',
                              backgroundColor: window.chartColors.yellow,
                              data: [
                                  randomScalingFactor(),
                                  randomScalingFactor(),
                                  randomScalingFactor(),
                                  randomScalingFactor(),
                                  randomScalingFactor(),
                                  randomScalingFactor(),
                                  randomScalingFactor()
                              ]
                          }]
                      };
                      var ctx8 = document.getElementById("chartjsdemo8").getContext("2d");
                      window.myBar = new Chart(ctx8, {
                          type: 'bar',
                          data: barChartData,
                          options: {
                              maintainAspectRatio: false,
                              responsive: true,
                              title: {
                                  display: false,
                                  text: "Bar Chart - Stacked"
                              },
                              tooltips: {
                                  mode: 'index',
                                  intersect: false
                              },
                              
                              legend: {
                                  labels: {
                                      fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                      fontFamily: 'Roboto',
                                      fontSize: 12
                                  }
                              },
                              scales: {
                                  xAxes: [{
                                      stacked: true,
                                      ticks: {
                                          fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                          fontFamily: 'Roboto',
                                          fontSize: 12
                                      }
                                  }],
                                  yAxes: [{
                                      stacked: true,
                                      ticks: {
                                          fontColor: color(window.chartColors.grey).alpha(0.8).rgbString(),
                                          fontFamily: 'Roboto',
                                          fontSize: 12
                                      }
                                  }]
                              }
                          }
                      });
                  }
                  
      }
  });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

$(function(){
  var comingsoon = $('.comingsoon')
  if (comingsoon.length > 0) {
      var second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
      let countDown = new Date('dec 30, 2019 00:00:00').getTime(),
      x = setInterval(function() {
      let now = new Date().getTime(),
      distance = countDown - now;
      document.getElementById('days').innerText = Math.floor(distance / (day)),
      document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

  }, second)
}
});

})(window, document, window.jQuery);

(function(window, document, $, undefined){

  $(function(){
      var dataTable = jQuery(".datatable-wrapper");
      if (dataTable.length > 0) {
          $('#datatable').DataTable({
              "bLengthChange": false,
              "searching": false,
              "bPaginate":true,
              "bSortable": true
              });
      }
  });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

  $(function(){
$('.date-picker-default').datepicker({
      format: 'mm-dd-yyyy',
      autoclose: true,
      orientation: "bottom",
      templates: {
          leftArrow: '<i class="fa fa-angle-left"></i>',
          rightArrow: '<i class="fa fa-angle-right"></i>'
      }
  });


  $('.display-years').datepicker({
      autoclose: true,
      orientation: "bottom",
      templates: {
          leftArrow: '<i class="fa fa-angle-left"></i>',
          rightArrow: '<i class="fa fa-angle-right"></i>'
      }
  });

  $('.display-months').datepicker({
      format: 'mm-dd',
      autoclose: true,
      orientation: "bottom",
      templates: {
          leftArrow: '<i class="fa fa-angle-left"></i>',
          rightArrow: '<i class="fa fa-angle-right"></i>'
      }
  });
  

  $('#datepicker-inline').datepicker({
      todayHighlight: true,
      autoclose: true,
      orientation: "bottom",
      templates: {
          leftArrow: '<i class="fa fa-angle-left"></i>',
          rightArrow: '<i class="fa fa-angle-right"></i>'
      }
  });


  $('#datepicker-action').datepicker({
      todayBtn: "linked",
      clearBtn: true,
      autoclose: true,
      todayHighlight: true,
      orientation: "bottom",
      templates: {
          leftArrow: '<i class="fa fa-angle-left"></i>',
          rightArrow: '<i class="fa fa-angle-right"></i>'
      }
  });


  $('#datepicker-top-left').datepicker({
      orientation: "top left",
      todayHighlight: true,
      autoclose: true,
      templates: {
          leftArrow: '<i class="fa fa-angle-left"></i>',
          rightArrow: '<i class="fa fa-angle-right"></i>'
      }
  });

  $('#datepicker-top-right').datepicker({
      orientation: "top right",
      todayHighlight: true,
      autoclose: true,
      templates: {
          leftArrow: '<i class="fa fa-angle-left"></i>',
          rightArrow: '<i class="fa fa-angle-right"></i>'
      }
  });

  $('#datepicker-bottom-left').datepicker({
      orientation: "bottom left",
      todayHighlight: true,
      autoclose: true,
      templates: {
          leftArrow: '<i class="fa fa-angle-left"></i>',
          rightArrow: '<i class="fa fa-angle-right"></i>'
      }
  });

  $('#datepicker-bottom-right').datepicker({
      orientation: "bottom right",
      todayHighlight: true,
      autoclose: true,
      templates: {
          leftArrow: '<i class="fa fa-angle-left"></i>',
          rightArrow: '<i class="fa fa-angle-right"></i>'
      }
  });

var checkin = $('.range-from').datepicker({
      onRender: function(date) {
          return date.valueOf() < now.valueOf() ? 'disabled' : '';
      }
  }).on('changeDate', function(ev) {
      if (ev.date.valueOf() > checkout.date.valueOf()) {
          var newDate = new Date(ev.date)
          newDate.setDate(newDate.getDate() + 1);
          checkout.setValue(newDate);
      }
      checkin.hide();

      $('.range-to')[0].focus();
  }).data('datepicker');
  var checkout = $('.range-to').datepicker({
      onRender: function(date) {
          return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
      }
  }).on('changeDate', function(ev) {
      checkout.hide();
  }).data('datepicker');

});

})(window, document, window.jQuery);
(function(window, document, $, undefined){

  $(function(){
      var dualListBox = jQuery(".duallistbox");
      if (dualListBox.length > 0) {
          $('#duallistbox').bootstrapDualListbox({
              nonSelectedListLabel: 'Non-selected',
              selectedListLabel: 'Selected',
              preserveSelectionOnMove: 'moved',
              moveOnSelect: false
          });
      }
  });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

  $(function(){
      var dualListBox = jQuery("#tableedit");
      if (dualListBox.length > 0) {
      $('#tableedit').Tabledit({
          deleteButton: false,
          saveButton: false,
          autoFocus: false,
          buttons: {
              edit: {
                  class: 'btn btn-sm btn-primary',
                  html: '<span class="fa fa-pencil"></span> &nbsp EDIT',
                  action: 'edit'
              }
          },
          columns: {
              identifier: [0, 'id'],
              editable: [[1, 'car'], [2, 'color']]
          }
      });
  }
});

})(window, document, window.jQuery);



// CALENDARIO
(function(window, document, $, undefined){

  $(function(){
      var eventCalendar = jQuery(".event-calendar");
      if (eventCalendar.length > 0) {
          $('#external-events .fc-event').each(function() {

              // store data so the calendar knows to render an event upon drop
              $(this).data('event', {
                  title: $.trim($(this).text()), // use the element's text as the event title
                  stick: true, // maintain when user navigates (see docs on the renderEvent method)
                  className: $(this).data('colore')
              });

              // make the event draggable using jQuery UI
              $(this).draggable({
                  zIndex: 999,
                  revert: true,      // will cause the event to go back to its
                  revertDuration: 0  //  original position after the drag
              });

          });

          $('#event-calendar').fullCalendar({
              header: {
                  left: 'prev,next today',
                  center: 'title',
                  right: 'month,agendaWeek,agendaDay'
              },
              editable: false,
              droppable: true,
              drop: function() {
                  // is the "remove after drop" checkbox checked?
                  if ($('#drop-remove').is(':checked')) {
                    // if so, remove the element from the "Draggable Events" list
                    $(this).remove();
                  }
                },
              events: [{
                      title: 'Simple Event',
                      start: '2024-11-28T15:00:00',
                      end: '2024-11-28T16:00:00',
                      className: 'fc-event-danger'
                  },
                  {
                      title: 'Google',
                      url: 'https://www.google.com/',
                      start: '2019-02-18',
                      className: 'fc-event-success'
                  },
                  {
                      title: 'Family Vacation',
                      start: '2019-02-14',
                      end: '2019-02-18',
                      className: 'fc-event-primary'
                  }
              ]
          });
      }
  });

})(window, document, window.jQuery);

(function(window, document, $, undefined){

  $(function(){
      var exportTable = jQuery(".export-table-wrapper");
      if (exportTable.length > 0) {
          $("#export-table").tableExport({
              headers: true,
              footers: true,
              formats: ["xlsx", "csv", "txt"],
              bootstrap: true,
              exportButtons: true,
              position: "top"                
          });
      }
  });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

  $(function(){
      var flotChart = jQuery(".flot-chart-wrapper");
      if (flotChart.length > 0) {
                      var d1 = [];
                      for (var i = 0; i <= 10; i += 1) {
                          d1.push([i, parseInt(Math.random() * 30)]);
                      }

                      var d2 = [];
                      for (var i = 0; i <= 10; i += 1) {
                          d2.push([i, parseInt(Math.random() * 30)]);
                      }

                      var d3 = [];
                      for (var i = 0; i <= 10; i += 1) {
                          d3.push([i, parseInt(Math.random() * 30)]);
                      }

                      var stack = 0,
                          bars = true,
                          lines = false,
                          steps = false;

                      function plotWithOptions() {
                          $.plot("#flot-stacked", [d1, d2, d3], {
                              grid: { borderWidth: 0, labelMargin: 5, axisMargin: 0, minBorderMargin: 0 },
                              series: {
                                  stack: stack,
                                  lines: {
                                      show: lines,
                                      fill: true,
                                      steps: steps
                                  },
                                  bars: {
                                      show: bars,
                                      barWidth: 0.6,
                                      align: "center"
                                  }
                              },
                              colors: ["#4776E6", "#8E54E9", "#fbaf54"]
                          });
                      }

                      plotWithOptions();


                      // flot-real-time

                      var data = [],
                          totalPoints = 300;

                      function getRandomData() {

                          if (data.length > 0)
                              data = data.slice(1);

                          

                          // Zip the generated y values with the x values

                          var res = [];
                          for (var i = 0; i < data.length; ++i) {
                              res.push([i, data[i]])
                          }

                          return res;
                      }

                      


                      //flot-series-toggle

                      

                      // hard-code color indices to prevent them from shifting as
                      // countries are turned on/off

                      var i = 0;
                      $.each(datasets, function(key, val) {
                          val.color = i;
                          ++i;
                      });

                      // insert checkboxes
                      var choiceContainer = $("#flot-series-toggle");
                      $.each(datasets, function(key, val) {
                          choiceContainer.append("<br/><input type='checkbox' name='" + key +
                              "' checked='checked' id='id" + key + "'></input>" +
                              "<label for='id" + key + "'>" +
                              val.label + "</label>");
                      });

                      choiceContainer.find("input").click(plotAccordingToChoices);

                      function plotAccordingToChoices() {

                          var data = [];

                          choiceContainer.find("input:checked").each(function() {
                              var key = $(this).attr("name");
                              if (key && datasets[key]) {
                                  data.push(datasets[key]);
                              }
                          });

                          if (data.length > 0) {
                              $.plot("#flot-series-toggle", data, {
                                  grid: { borderWidth: 0, labelMargin: 10, axisMargin: 0, minBorderMargin: 0 },
                                  colors: ["#f7b731", "#fd9644", "#32b432", "#8E54E9", "#4776E6", "#e3324c", "#fb0792"],
                                  yaxis: {
                                      min: 0
                                  },
                                  xaxis: {
                                      tickDecimals: 0
                                  }
                              });
                          }
                      }

                      plotAccordingToChoices();

                      // Add the Flot version string to the footer

                      $("#footer").prepend("Flot " + $.plot.version + " &ndash; ");

                      var oilprices = [
                          [1167692400000, 61.05],
                          [1167778800000, 58.32],
                          [1167865200000, 57.35],
                          [1167951600000, 56.31],
                          [1168210800000, 55.55],
                          [1168297200000, 55.64],
                          [1168383600000, 54.02],
                          [1168470000000, 51.88],
                          [1168556400000, 52.99],
                          [1168815600000, 52.99],
                          [1168902000000, 51.21],
                          [1168988400000, 52.24],
                          [1169074800000, 50.48],
                          [1169161200000, 51.99],
                          [1169420400000, 51.13],
                          [1169506800000, 55.04],
                          [1169593200000, 55.37],
                          [1169679600000, 54.23],
                          [1169766000000, 55.42],
                          [1170025200000, 54.01],
                          [1170111600000, 56.97],
                          [1170198000000, 58.14],
                          [1170284400000, 58.14],
                          [1170370800000, 59.02],
                          [1170630000000, 58.74],
                          [1170716400000, 58.88],
                          [1170802800000, 57.71],
                          [1170889200000, 59.71],
                          [1170975600000, 59.89],
                          [1171234800000, 57.81],
                          [1171321200000, 59.06],
                          [1171407600000, 58.00],
                          [1171494000000, 57.99],
                          [1171580400000, 59.39],
                          [1171839600000, 59.39],
                          [1171926000000, 58.07],
                          [1172012400000, 60.07],
                          [1172098800000, 61.14],
                          [1172444400000, 61.39],
                          [1172530800000, 61.46],
                          [1172617200000, 61.79],
                          [1172703600000, 62.00],
                          [1172790000000, 60.07],
                          [1173135600000, 60.69],
                          [1173222000000, 61.82],
                          [1173308400000, 60.05],
                          [1173654000000, 58.91],
                          [1173740400000, 57.93],
                          [1173826800000, 58.16],
                          [1173913200000, 57.55],
                          [1173999600000, 57.11],
                          [1174258800000, 56.59],
                          [1174345200000, 59.61],
                          [1174518000000, 61.69],
                          [1174604400000, 62.28],
                          [1174860000000, 62.91],
                          [1174946400000, 62.93],
                          [1175032800000, 64.03],
                          [1175119200000, 66.03],
                          [1175205600000, 65.87],
                          [1175464800000, 64.64],
                          [1175637600000, 64.38],
                          [1175724000000, 64.28],
                          [1175810400000, 64.28],
                          [1176069600000, 61.51],
                          [1176156000000, 61.89],
                          [1176242400000, 62.01],
                          [1176328800000, 63.85],
                          [1176415200000, 63.63],
                          [1176674400000, 63.61],
                          [1176760800000, 63.10],
                          [1176847200000, 63.13],
                          [1176933600000, 61.83],
                          [1177020000000, 63.38],
                          [1177279200000, 64.58],
                          [1177452000000, 65.84],
                          [1177538400000, 65.06],
                          [1177624800000, 66.46],
                          [1177884000000, 64.40],
                          [1178056800000, 63.68],
                          [1178143200000, 63.19],
                          [1178229600000, 61.93],
                          [1178488800000, 61.47],
                          [1178575200000, 61.55],
                          [1178748000000, 61.81],
                          [1178834400000, 62.37],
                          [1179093600000, 62.46],
                          [1179180000000, 63.17],
                          [1179266400000, 62.55],
                          [1179352800000, 64.94],
                          [1179698400000, 66.27],
                          [1179784800000, 65.50],
                          [1179871200000, 65.77],
                          [1179957600000, 64.18],
                          [1180044000000, 65.20],
                          [1180389600000, 63.15],
                          [1180476000000, 63.49],
                          [1180562400000, 65.08],
                          [1180908000000, 66.30],
                          [1180994400000, 65.96],
                          [1181167200000, 66.93],
                          [1181253600000, 65.98],
                          [1181599200000, 65.35],
                          [1181685600000, 66.26],
                          [1181858400000, 68.00],
                          [1182117600000, 69.09],
                          [1182204000000, 69.10],
                          [1182290400000, 68.19],
                          [1182376800000, 68.19],
                          [1182463200000, 69.14],
                          [1182722400000, 68.19],
                          [1182808800000, 67.77],
                          [1182895200000, 68.97],
                          [1182981600000, 69.57],
                          [1183068000000, 70.68],
                          [1183327200000, 71.09],
                          [1183413600000, 70.92],
                          [1183586400000, 71.81],
                          [1183672800000, 72.81],
                          [1183932000000, 72.19],
                          [1184018400000, 72.56],
                          [1184191200000, 72.50],
                          [1184277600000, 74.15],
                          [1184623200000, 75.05],
                          [1184796000000, 75.92],
                          [1184882400000, 75.57],
                          [1185141600000, 74.89],
                          [1185228000000, 73.56],
                          [1185314400000, 75.57],
                          [1185400800000, 74.95],
                          [1185487200000, 76.83],
                          [1185832800000, 78.21],
                          [1185919200000, 76.53],
                          [1186005600000, 76.86],
                          [1186092000000, 76.00],
                          [1186437600000, 71.59],
                          [1186696800000, 71.47],
                          [1186956000000, 71.62],
                          [1187042400000, 71.00],
                          [1187301600000, 71.98],
                          [1187560800000, 71.12],
                          [1187647200000, 69.47],
                          [1187733600000, 69.26],
                          [1187820000000, 69.83],
                          [1187906400000, 71.09],
                          [1188165600000, 71.73],
                          [1188338400000, 73.36],
                          [1188511200000, 74.04],
                          [1188856800000, 76.30],
                          [1189116000000, 77.49],
                          [1189461600000, 78.23],
                          [1189548000000, 79.91],
                          [1189634400000, 80.09],
                          [1189720800000, 79.10],
                          [1189980000000, 80.57],
                          [1190066400000, 81.93],
                          [1190239200000, 83.32],
                          [1190325600000, 81.62],
                          [1190584800000, 80.95],
                          [1190671200000, 79.53],
                          [1190757600000, 80.30],
                          [1190844000000, 82.88],
                          [1190930400000, 81.66],
                          [1191189600000, 80.24],
                          [1191276000000, 80.05],
                          [1191362400000, 79.94],
                          [1191448800000, 81.44],
                          [1191535200000, 81.22],
                          [1191794400000, 79.02],
                          [1191880800000, 80.26],
                          [1191967200000, 80.30],
                          [1192053600000, 83.08],
                          [1192140000000, 83.69],
                          [1192399200000, 86.13],
                          [1192485600000, 87.61],
                          [1192572000000, 87.40],
                          [1192658400000, 89.47],
                          [1192744800000, 88.60],
                          [1193004000000, 87.56],
                          [1193090400000, 87.56],
                          [1193176800000, 87.10],
                          [1193263200000, 91.86],
                          [1193612400000, 93.53],
                          [1193698800000, 94.53],
                          [1193871600000, 95.93],
                          [1194217200000, 93.98],
                          [1194303600000, 96.37],
                          [1194476400000, 95.46],
                          [1194562800000, 96.32],
                          [1195081200000, 93.43],
                          [1195167600000, 95.10],
                          [1195426800000, 94.64],
                          [1195513200000, 95.10],
                          [1196031600000, 97.70],
                          [1196118000000, 94.42],
                          [1196204400000, 90.62],
                          [1196290800000, 91.01],
                          [1196377200000, 88.71],
                          [1196636400000, 88.32],
                          [1196809200000, 90.23],
                          [1196982000000, 88.28],
                          [1197241200000, 87.86],
                          [1197327600000, 90.02],
                          [1197414000000, 92.25],
                          [1197586800000, 90.63],
                          [1197846000000, 90.63],
                          [1197932400000, 90.49],
                          [1198018800000, 91.24],
                          [1198105200000, 91.06],
                          [1198191600000, 90.49],
                          [1198710000000, 96.62],
                          [1198796400000, 96.00],
                          [1199142000000, 99.62],
                          [1199314800000, 99.18],
                          [1199401200000, 95.09],
                          [1199660400000, 96.33],
                          [1199833200000, 95.67],
                          [1200351600000, 91.90],
                          [1200438000000, 90.84],
                          [1200524400000, 90.13],
                          [1200610800000, 90.57],
                          [1200956400000, 89.21],
                          [1201042800000, 86.99],
                          [1201129200000, 89.85],
                          [1201474800000, 90.99],
                          [1201561200000, 91.64],
                          [1201647600000, 92.33],
                          [1201734000000, 91.75],
                          [1202079600000, 90.02],
                          [1202166000000, 88.41],
                          [1202252400000, 87.14],
                          [1202338800000, 88.11],
                          [1202425200000, 91.77],
                          [1202770800000, 92.78],
                          [1202857200000, 93.27],
                          [1202943600000, 95.46],
                          [1203030000000, 95.46],
                          [1203289200000, 101.74],
                          [1203462000000, 98.81],
                          [1203894000000, 100.88],
                          [1204066800000, 99.64],
                          [1204153200000, 102.59],
                          [1204239600000, 101.84],
                          [1204498800000, 99.52],
                          [1204585200000, 99.52],
                          [1204671600000, 104.52],
                          [1204758000000, 105.47],
                          [1204844400000, 105.15],
                          [1205103600000, 108.75],
                          [1205276400000, 109.92],
                          [1205362800000, 110.33],
                          [1205449200000, 110.21],
                          [1205708400000, 105.68],
                          [1205967600000, 101.84],
                          [1206313200000, 100.86],
                          [1206399600000, 101.22],
                          [1206486000000, 105.90],
                          [1206572400000, 107.58],
                          [1206658800000, 105.62],
                          [1206914400000, 101.58],
                          [1207000800000, 100.98],
                          [1207173600000, 103.83],
                          [1207260000000, 106.23],
                          [1207605600000, 108.50],
                          [1207778400000, 110.11],
                          [1207864800000, 110.14],
                          [1208210400000, 113.79],
                          [1208296800000, 114.93],
                          [1208383200000, 114.86],
                          [1208728800000, 117.48],
                          [1208815200000, 118.30],
                          [1208988000000, 116.06],
                          [1209074400000, 118.52],
                          [1209333600000, 118.75],
                          [1209420000000, 113.46],
                          [1209592800000, 112.52],
                          [1210024800000, 121.84],
                          [1210111200000, 123.53],
                          [1210197600000, 123.69],
                          [1210543200000, 124.23],
                          [1210629600000, 125.80],
                          [1210716000000, 126.29],
                          [1211148000000, 127.05],
                          [1211320800000, 129.07],
                          [1211493600000, 132.19],
                          [1211839200000, 128.85],
                          [1212357600000, 127.76],
                          [1212703200000, 138.54],
                          [1212962400000, 136.80],
                          [1213135200000, 136.38],
                          [1213308000000, 134.86],
                          [1213653600000, 134.01],
                          [1213740000000, 136.68],
                          [1213912800000, 135.65],
                          [1214172000000, 134.62],
                          [1214258400000, 134.62],
                          [1214344800000, 134.62],
                          [1214431200000, 139.64],
                          [1214517600000, 140.21],
                          [1214776800000, 140.00],
                          [1214863200000, 140.97],
                          [1214949600000, 143.57],
                          [1215036000000, 145.29],
                          [1215381600000, 141.37],
                          [1215468000000, 136.04],
                          [1215727200000, 146.40],
                          [1215986400000, 145.18],
                          [1216072800000, 138.74],
                          [1216159200000, 134.60],
                          [1216245600000, 129.29],
                          [1216332000000, 130.65],
                          [1216677600000, 127.95],
                          [1216850400000, 127.95],
                          [1217282400000, 122.19],
                          [1217455200000, 124.08],
                          [1217541600000, 125.10],
                          [1217800800000, 121.41],
                          [1217887200000, 119.17],
                          [1217973600000, 118.58],
                          [1218060000000, 120.02],
                          [1218405600000, 114.45],
                          [1218492000000, 113.01],
                          [1218578400000, 116.00],
                          [1218751200000, 113.77],
                          [1219010400000, 112.87],
                          [1219096800000, 114.53],
                          [1219269600000, 114.98],
                          [1219356000000, 114.98],
                          [1219701600000, 116.27],
                          [1219788000000, 118.15],
                          [1219874400000, 115.59],
                          [1219960800000, 115.46],
                          [1220306400000, 109.71],
                          [1220392800000, 109.35],
                          [1220565600000, 106.23],
                          [1220824800000, 106.34]
                      ];

                      var exchangerates = [
                          [1167606000000, 0.7580],
                          [1167692400000, 0.7580],
                          [1167778800000, 0.75470],
                          [1167865200000, 0.75490],
                          [1167951600000, 0.76130],
                          [1168038000000, 0.76550],
                          [1168124400000, 0.76930],
                          [1168210800000, 0.76940],
                          [1168297200000, 0.76880],
                          [1168383600000, 0.76780],
                          [1168470000000, 0.77080],
                          [1168556400000, 0.77270],
                          [1168642800000, 0.77490],
                          [1168729200000, 0.77410],
                          [1168815600000, 0.77410],
                          [1168902000000, 0.77320],
                          [1168988400000, 0.77270],
                          [1169074800000, 0.77370],
                          [1169161200000, 0.77240],
                          [1169247600000, 0.77120],
                          [1169334000000, 0.7720],
                          [1169420400000, 0.77210],
                          [1169506800000, 0.77170],
                          [1169593200000, 0.77040],
                          [1169679600000, 0.7690],
                          [1169766000000, 0.77110],
                          [1169852400000, 0.7740],
                          [1169938800000, 0.77450],
                          [1170025200000, 0.77450],
                          [1170111600000, 0.7740],
                          [1170198000000, 0.77160],
                          [1170284400000, 0.77130],
                          [1170370800000, 0.76780],
                          [1170457200000, 0.76880],
                          [1170543600000, 0.77180],
                          [1170630000000, 0.77180],
                          [1170716400000, 0.77280],
                          [1170802800000, 0.77290],
                          [1170889200000, 0.76980],
                          [1170975600000, 0.76850],
                          [1171062000000, 0.76810],
                          [1171148400000, 0.7690],
                          [1171234800000, 0.7690],
                          [1171321200000, 0.76980],
                          [1171407600000, 0.76990],
                          [1171494000000, 0.76510],
                          [1171580400000, 0.76130],
                          [1171666800000, 0.76160],
                          [1171753200000, 0.76140],
                          [1171839600000, 0.76140],
                          [1171926000000, 0.76070],
                          [1172012400000, 0.76020],
                          [1172098800000, 0.76110],
                          [1172185200000, 0.76220],
                          [1172271600000, 0.76150],
                          [1172358000000, 0.75980],
                          [1172444400000, 0.75980],
                          [1172530800000, 0.75920],
                          [1172617200000, 0.75730],
                          [1172703600000, 0.75660],
                          [1172790000000, 0.75670],
                          [1172876400000, 0.75910],
                          [1172962800000, 0.75820],
                          [1173049200000, 0.75850],
                          [1173135600000, 0.76130],
                          [1173222000000, 0.76310],
                          [1173308400000, 0.76150],
                          [1173394800000, 0.760],
                          [1173481200000, 0.76130],
                          [1173567600000, 0.76270],
                          [1173654000000, 0.76270],
                          [1173740400000, 0.76080],
                          [1173826800000, 0.75830],
                          [1173913200000, 0.75750],
                          [1173999600000, 0.75620],
                          [1174086000000, 0.7520],
                          [1174172400000, 0.75120],
                          [1174258800000, 0.75120],
                          [1174345200000, 0.75170],
                          [1174431600000, 0.7520],
                          [1174518000000, 0.75110],
                          [1174604400000, 0.7480],
                          [1174690800000, 0.75090],
                          [1174777200000, 0.75310],
                          [1174860000000, 0.75310],
                          [1174946400000, 0.75270],
                          [1175032800000, 0.74980],
                          [1175119200000, 0.74930],
                          [1175205600000, 0.75040],
                          [1175292000000, 0.750],
                          [1175378400000, 0.74910],
                          [1175464800000, 0.74910],
                          [1175551200000, 0.74850],
                          [1175637600000, 0.74840],
                          [1175724000000, 0.74920],
                          [1175810400000, 0.74710],
                          [1175896800000, 0.74590],
                          [1175983200000, 0.74770],
                          [1176069600000, 0.74770],
                          [1176156000000, 0.74830],
                          [1176242400000, 0.74580],
                          [1176328800000, 0.74480],
                          [1176415200000, 0.7430],
                          [1176501600000, 0.73990],
                          [1176588000000, 0.73950],
                          [1176674400000, 0.73950],
                          [1176760800000, 0.73780],
                          [1176847200000, 0.73820],
                          [1176933600000, 0.73620],
                          [1177020000000, 0.73550],
                          [1177106400000, 0.73480],
                          [1177192800000, 0.73610],
                          [1177279200000, 0.73610],
                          [1177365600000, 0.73650],
                          [1177452000000, 0.73620],
                          [1177538400000, 0.73310],
                          [1177624800000, 0.73390],
                          [1177711200000, 0.73440],
                          [1177797600000, 0.73270],
                          [1177884000000, 0.73270],
                          [1177970400000, 0.73360],
                          [1178056800000, 0.73330],
                          [1178143200000, 0.73590],
                          [1178229600000, 0.73590],
                          [1178316000000, 0.73720],
                          [1178402400000, 0.7360],
                          [1178488800000, 0.7360],
                          [1178575200000, 0.7350],
                          [1178661600000, 0.73650],
                          [1178748000000, 0.73840],
                          [1178834400000, 0.73950],
                          [1178920800000, 0.74130],
                          [1179007200000, 0.73970],
                          [1179093600000, 0.73960],
                          [1179180000000, 0.73850],
                          [1179266400000, 0.73780],
                          [1179352800000, 0.73660],
                          [1179439200000, 0.740],
                          [1179525600000, 0.74110],
                          [1179612000000, 0.74060],
                          [1179698400000, 0.74050],
                          [1179784800000, 0.74140],
                          [1179871200000, 0.74310],
                          [1179957600000, 0.74310],
                          [1180044000000, 0.74380],
                          [1180130400000, 0.74430],
                          [1180216800000, 0.74430],
                          [1180303200000, 0.74430],
                          [1180389600000, 0.74340],
                          [1180476000000, 0.74290],
                          [1180562400000, 0.74420],
                          [1180648800000, 0.7440],
                          [1180735200000, 0.74390],
                          [1180821600000, 0.74370],
                          [1180908000000, 0.74370],
                          [1180994400000, 0.74290],
                          [1181080800000, 0.74030],
                          [1181167200000, 0.73990],
                          [1181253600000, 0.74180],
                          [1181340000000, 0.74680],
                          [1181426400000, 0.7480],
                          [1181512800000, 0.7480],
                          [1181599200000, 0.7490],
                          [1181685600000, 0.74940],
                          [1181772000000, 0.75220],
                          [1181858400000, 0.75150],
                          [1181944800000, 0.75020],
                          [1182031200000, 0.74720],
                          [1182117600000, 0.74720],
                          [1182204000000, 0.74620],
                          [1182290400000, 0.74550],
                          [1182376800000, 0.74490],
                          [1182463200000, 0.74670],
                          [1182549600000, 0.74580],
                          [1182636000000, 0.74270],
                          [1182722400000, 0.74270],
                          [1182808800000, 0.7430],
                          [1182895200000, 0.74290],
                          [1182981600000, 0.7440],
                          [1183068000000, 0.7430],
                          [1183154400000, 0.74220],
                          [1183240800000, 0.73880],
                          [1183327200000, 0.73880],
                          [1183413600000, 0.73690],
                          [1183500000000, 0.73450],
                          [1183586400000, 0.73450],
                          [1183672800000, 0.73450],
                          [1183759200000, 0.73520],
                          [1183845600000, 0.73410],
                          [1183932000000, 0.73410],
                          [1184018400000, 0.7340],
                          [1184104800000, 0.73240],
                          [1184191200000, 0.72720],
                          [1184277600000, 0.72640],
                          [1184364000000, 0.72550],
                          [1184450400000, 0.72580],
                          [1184536800000, 0.72580],
                          [1184623200000, 0.72560],
                          [1184709600000, 0.72570],
                          [1184796000000, 0.72470],
                          [1184882400000, 0.72430],
                          [1184968800000, 0.72440],
                          [1185055200000, 0.72350],
                          [1185141600000, 0.72350],
                          [1185228000000, 0.72350],
                          [1185314400000, 0.72350],
                          [1185400800000, 0.72620],
                          [1185487200000, 0.72880],
                          [1185573600000, 0.73010],
                          [1185660000000, 0.73370],
                          [1185746400000, 0.73370],
                          [1185832800000, 0.73240],
                          [1185919200000, 0.72970],
                          [1186005600000, 0.73170],
                          [1186092000000, 0.73150],
                          [1186178400000, 0.72880],
                          [1186264800000, 0.72630],
                          [1186351200000, 0.72630],
                          [1186437600000, 0.72420],
                          [1186524000000, 0.72530],
                          [1186610400000, 0.72640],
                          [1186696800000, 0.7270],
                          [1186783200000, 0.73120],
                          [1186869600000, 0.73050],
                          [1186956000000, 0.73050],
                          [1187042400000, 0.73180],
                          [1187128800000, 0.73580],
                          [1187215200000, 0.74090],
                          [1187301600000, 0.74540],
                          [1187388000000, 0.74370],
                          [1187474400000, 0.74240],
                          [1187560800000, 0.74240],
                          [1187647200000, 0.74150],
                          [1187733600000, 0.74190],
                          [1187820000000, 0.74140],
                          [1187906400000, 0.73770],
                          [1187992800000, 0.73550],
                          [1188079200000, 0.73150],
                          [1188165600000, 0.73150],
                          [1188252000000, 0.7320],
                          [1188338400000, 0.73320],
                          [1188424800000, 0.73460],
                          [1188511200000, 0.73280],
                          [1188597600000, 0.73230],
                          [1188684000000, 0.7340],
                          [1188770400000, 0.7340],
                          [1188856800000, 0.73360],
                          [1188943200000, 0.73510],
                          [1189029600000, 0.73460],
                          [1189116000000, 0.73210],
                          [1189202400000, 0.72940],
                          [1189288800000, 0.72660],
                          [1189375200000, 0.72660],
                          [1189461600000, 0.72540],
                          [1189548000000, 0.72420],
                          [1189634400000, 0.72130],
                          [1189720800000, 0.71970],
                          [1189807200000, 0.72090],
                          [1189893600000, 0.7210],
                          [1189980000000, 0.7210],
                          [1190066400000, 0.7210],
                          [1190152800000, 0.72090],
                          [1190239200000, 0.71590],
                          [1190325600000, 0.71330],
                          [1190412000000, 0.71050],
                          [1190498400000, 0.70990],
                          [1190584800000, 0.70990],
                          [1190671200000, 0.70930],
                          [1190757600000, 0.70930],
                          [1190844000000, 0.70760],
                          [1190930400000, 0.7070],
                          [1191016800000, 0.70490],
                          [1191103200000, 0.70120],
                          [1191189600000, 0.70110],
                          [1191276000000, 0.70190],
                          [1191362400000, 0.70460],
                          [1191448800000, 0.70630],
                          [1191535200000, 0.70890],
                          [1191621600000, 0.70770],
                          [1191708000000, 0.70770],
                          [1191794400000, 0.70770],
                          [1191880800000, 0.70910],
                          [1191967200000, 0.71180],
                          [1192053600000, 0.70790],
                          [1192140000000, 0.70530],
                          [1192226400000, 0.7050],
                          [1192312800000, 0.70550],
                          [1192399200000, 0.70550],
                          [1192485600000, 0.70450],
                          [1192572000000, 0.70510],
                          [1192658400000, 0.70510],
                          [1192744800000, 0.70170],
                          [1192831200000, 0.70],
                          [1192917600000, 0.69950],
                          [1193004000000, 0.69940],
                          [1193090400000, 0.70140],
                          [1193176800000, 0.70360],
                          [1193263200000, 0.70210],
                          [1193349600000, 0.70020],
                          [1193436000000, 0.69670],
                          [1193522400000, 0.6950],
                          [1193612400000, 0.6950],
                          [1193698800000, 0.69390],
                          [1193785200000, 0.6940],
                          [1193871600000, 0.69220],
                          [1193958000000, 0.69190],
                          [1194044400000, 0.69140],
                          [1194130800000, 0.68940],
                          [1194217200000, 0.68910],
                          [1194303600000, 0.69040],
                          [1194390000000, 0.6890],
                          [1194476400000, 0.68340],
                          [1194562800000, 0.68230],
                          [1194649200000, 0.68070],
                          [1194735600000, 0.68150],
                          [1194822000000, 0.68150],
                          [1194908400000, 0.68470],
                          [1194994800000, 0.68590],
                          [1195081200000, 0.68220],
                          [1195167600000, 0.68270],
                          [1195254000000, 0.68370],
                          [1195340400000, 0.68230],
                          [1195426800000, 0.68220],
                          [1195513200000, 0.68220],
                          [1195599600000, 0.67920],
                          [1195686000000, 0.67460],
                          [1195772400000, 0.67350],
                          [1195858800000, 0.67310],
                          [1195945200000, 0.67420],
                          [1196031600000, 0.67440],
                          [1196118000000, 0.67390],
                          [1196204400000, 0.67310],
                          [1196290800000, 0.67610],
                          [1196377200000, 0.67610],
                          [1196463600000, 0.67850],
                          [1196550000000, 0.68180],
                          [1196636400000, 0.68360],
                          [1196722800000, 0.68230],
                          [1196809200000, 0.68050],
                          [1196895600000, 0.67930],
                          [1196982000000, 0.68490],
                          [1197068400000, 0.68330],
                          [1197154800000, 0.68250],
                          [1197241200000, 0.68250],
                          [1197327600000, 0.68160],
                          [1197414000000, 0.67990],
                          [1197500400000, 0.68130],
                          [1197586800000, 0.68090],
                          [1197673200000, 0.68680],
                          [1197759600000, 0.69330],
                          [1197846000000, 0.69330],
                          [1197932400000, 0.69450],
                          [1198018800000, 0.69440],
                          [1198105200000, 0.69460],
                          [1198191600000, 0.69640],
                          [1198278000000, 0.69650],
                          [1198364400000, 0.69560],
                          [1198450800000, 0.69560],
                          [1198537200000, 0.6950],
                          [1198623600000, 0.69480],
                          [1198710000000, 0.69280],
                          [1198796400000, 0.68870],
                          [1198882800000, 0.68240],
                          [1198969200000, 0.67940],
                          [1199055600000, 0.67940],
                          [1199142000000, 0.68030],
                          [1199228400000, 0.68550],
                          [1199314800000, 0.68240],
                          [1199401200000, 0.67910],
                          [1199487600000, 0.67830],
                          [1199574000000, 0.67850],
                          [1199660400000, 0.67850],
                          [1199746800000, 0.67970],
                          [1199833200000, 0.680],
                          [1199919600000, 0.68030],
                          [1200006000000, 0.68050],
                          [1200092400000, 0.6760],
                          [1200178800000, 0.6770],
                          [1200265200000, 0.6770],
                          [1200351600000, 0.67360],
                          [1200438000000, 0.67260],
                          [1200524400000, 0.67640],
                          [1200610800000, 0.68210],
                          [1200697200000, 0.68310],
                          [1200783600000, 0.68420],
                          [1200870000000, 0.68420],
                          [1200956400000, 0.68870],
                          [1201042800000, 0.69030],
                          [1201129200000, 0.68480],
                          [1201215600000, 0.68240],
                          [1201302000000, 0.67880],
                          [1201388400000, 0.68140],
                          [1201474800000, 0.68140],
                          [1201561200000, 0.67970],
                          [1201647600000, 0.67690],
                          [1201734000000, 0.67650],
                          [1201820400000, 0.67330],
                          [1201906800000, 0.67290],
                          [1201993200000, 0.67580],
                          [1202079600000, 0.67580],
                          [1202166000000, 0.6750],
                          [1202252400000, 0.6780],
                          [1202338800000, 0.68330],
                          [1202425200000, 0.68560],
                          [1202511600000, 0.69030],
                          [1202598000000, 0.68960],
                          [1202684400000, 0.68960],
                          [1202770800000, 0.68820],
                          [1202857200000, 0.68790],
                          [1202943600000, 0.68620],
                          [1203030000000, 0.68520],
                          [1203116400000, 0.68230],
                          [1203202800000, 0.68130],
                          [1203289200000, 0.68130],
                          [1203375600000, 0.68220],
                          [1203462000000, 0.68020],
                          [1203548400000, 0.68020],
                          [1203634800000, 0.67840],
                          [1203721200000, 0.67480],
                          [1203807600000, 0.67470],
                          [1203894000000, 0.67470],
                          [1203980400000, 0.67480],
                          [1204066800000, 0.67330],
                          [1204153200000, 0.6650],
                          [1204239600000, 0.66110],
                          [1204326000000, 0.65830],
                          [1204412400000, 0.6590],
                          [1204498800000, 0.6590],
                          [1204585200000, 0.65810],
                          [1204671600000, 0.65780],
                          [1204758000000, 0.65740],
                          [1204844400000, 0.65320],
                          [1204930800000, 0.65020],
                          [1205017200000, 0.65140],
                          [1205103600000, 0.65140],
                          [1205190000000, 0.65070],
                          [1205276400000, 0.6510],
                          [1205362800000, 0.64890],
                          [1205449200000, 0.64240],
                          [1205535600000, 0.64060],
                          [1205622000000, 0.63820],
                          [1205708400000, 0.63820],
                          [1205794800000, 0.63410],
                          [1205881200000, 0.63440],
                          [1205967600000, 0.63780],
                          [1206054000000, 0.64390],
                          [1206140400000, 0.64780],
                          [1206226800000, 0.64810],
                          [1206313200000, 0.64810],
                          [1206399600000, 0.64940],
                          [1206486000000, 0.64380],
                          [1206572400000, 0.63770],
                          [1206658800000, 0.63290],
                          [1206745200000, 0.63360],
                          [1206831600000, 0.63330],
                          [1206914400000, 0.63330],
                          [1207000800000, 0.6330],
                          [1207087200000, 0.63710],
                          [1207173600000, 0.64030],
                          [1207260000000, 0.63960],
                          [1207346400000, 0.63640],
                          [1207432800000, 0.63560],
                          [1207519200000, 0.63560],
                          [1207605600000, 0.63680],
                          [1207692000000, 0.63570],
                          [1207778400000, 0.63540],
                          [1207864800000, 0.6320],
                          [1207951200000, 0.63320],
                          [1208037600000, 0.63280],
                          [1208124000000, 0.63310],
                          [1208210400000, 0.63420],
                          [1208296800000, 0.63210],
                          [1208383200000, 0.63020],
                          [1208469600000, 0.62780],
                          [1208556000000, 0.63080],
                          [1208642400000, 0.63240],
                          [1208728800000, 0.63240],
                          [1208815200000, 0.63070],
                          [1208901600000, 0.62770],
                          [1208988000000, 0.62690],
                          [1209074400000, 0.63350],
                          [1209160800000, 0.63920],
                          [1209247200000, 0.640],
                          [1209333600000, 0.64010],
                          [1209420000000, 0.63960],
                          [1209506400000, 0.64070],
                          [1209592800000, 0.64230],
                          [1209679200000, 0.64290],
                          [1209765600000, 0.64720],
                          [1209852000000, 0.64850],
                          [1209938400000, 0.64860],
                          [1210024800000, 0.64670],
                          [1210111200000, 0.64440],
                          [1210197600000, 0.64670],
                          [1210284000000, 0.65090],
                          [1210370400000, 0.64780],
                          [1210456800000, 0.64610],
                          [1210543200000, 0.64610],
                          [1210629600000, 0.64680],
                          [1210716000000, 0.64490],
                          [1210802400000, 0.6470],
                          [1210888800000, 0.64610],
                          [1210975200000, 0.64520],
                          [1211061600000, 0.64220],
                          [1211148000000, 0.64220],
                          [1211234400000, 0.64250],
                          [1211320800000, 0.64140],
                          [1211407200000, 0.63660],
                          [1211493600000, 0.63460],
                          [1211580000000, 0.6350],
                          [1211666400000, 0.63460],
                          [1211752800000, 0.63460],
                          [1211839200000, 0.63430],
                          [1211925600000, 0.63460],
                          [1212012000000, 0.63790],
                          [1212098400000, 0.64160],
                          [1212184800000, 0.64420],
                          [1212271200000, 0.64310],
                          [1212357600000, 0.64310],
                          [1212444000000, 0.64350],
                          [1212530400000, 0.6440],
                          [1212616800000, 0.64730],
                          [1212703200000, 0.64690],
                          [1212789600000, 0.63860],
                          [1212876000000, 0.63560],
                          [1212962400000, 0.6340],
                          [1213048800000, 0.63460],
                          [1213135200000, 0.6430],
                          [1213221600000, 0.64520],
                          [1213308000000, 0.64670],
                          [1213394400000, 0.65060],
                          [1213480800000, 0.65040],
                          [1213567200000, 0.65030],
                          [1213653600000, 0.64810],
                          [1213740000000, 0.64510],
                          [1213826400000, 0.6450],
                          [1213912800000, 0.64410],
                          [1213999200000, 0.64140],
                          [1214085600000, 0.64090],
                          [1214172000000, 0.64090],
                          [1214258400000, 0.64280],
                          [1214344800000, 0.64310],
                          [1214431200000, 0.64180],
                          [1214517600000, 0.63710],
                          [1214604000000, 0.63490],
                          [1214690400000, 0.63330],
                          [1214776800000, 0.63340],
                          [1214863200000, 0.63380],
                          [1214949600000, 0.63420],
                          [1215036000000, 0.6320],
                          [1215122400000, 0.63180],
                          [1215208800000, 0.6370],
                          [1215295200000, 0.63680],
                          [1215381600000, 0.63680],
                          [1215468000000, 0.63830],
                          [1215554400000, 0.63710],
                          [1215640800000, 0.63710],
                          [1215727200000, 0.63550],
                          [1215813600000, 0.6320],
                          [1215900000000, 0.62770],
                          [1215986400000, 0.62760],
                          [1216072800000, 0.62910],
                          [1216159200000, 0.62740],
                          [1216245600000, 0.62930],
                          [1216332000000, 0.63110],
                          [1216418400000, 0.6310],
                          [1216504800000, 0.63120],
                          [1216591200000, 0.63120],
                          [1216677600000, 0.63040],
                          [1216764000000, 0.62940],
                          [1216850400000, 0.63480],
                          [1216936800000, 0.63780],
                          [1217023200000, 0.63680],
                          [1217109600000, 0.63680],
                          [1217196000000, 0.63680],
                          [1217282400000, 0.6360],
                          [1217368800000, 0.6370],
                          [1217455200000, 0.64180],
                          [1217541600000, 0.64110],
                          [1217628000000, 0.64350],
                          [1217714400000, 0.64270],
                          [1217800800000, 0.64270],
                          [1217887200000, 0.64190],
                          [1217973600000, 0.64460],
                          [1218060000000, 0.64680],
                          [1218146400000, 0.64870],
                          [1218232800000, 0.65940],
                          [1218319200000, 0.66660],
                          [1218405600000, 0.66660],
                          [1218492000000, 0.66780],
                          [1218578400000, 0.67120],
                          [1218664800000, 0.67050],
                          [1218751200000, 0.67180],
                          [1218837600000, 0.67840],
                          [1218924000000, 0.68110],
                          [1219010400000, 0.68110],
                          [1219096800000, 0.67940],
                          [1219183200000, 0.68040],
                          [1219269600000, 0.67810],
                          [1219356000000, 0.67560],
                          [1219442400000, 0.67350],
                          [1219528800000, 0.67630],
                          [1219615200000, 0.67620],
                          [1219701600000, 0.67770],
                          [1219788000000, 0.68150],
                          [1219874400000, 0.68020],
                          [1219960800000, 0.6780],
                          [1220047200000, 0.67960],
                          [1220133600000, 0.68170],
                          [1220220000000, 0.68170],
                          [1220306400000, 0.68320],
                          [1220392800000, 0.68770],
                          [1220479200000, 0.69120],
                          [1220565600000, 0.69140],
                          [1220652000000, 0.70090],
                          [1220738400000, 0.70120],
                          [1220824800000, 0.7010],
                          [1220911200000, 0.70050]
                      ];

                      function euroFormatter(v, axis) {
                          return v.toFixed(axis.tickDecimals) + "€";
                      }

                      function doPlot(position) {
                          $.plot("#flot-axes", [
                              { data: oilprices, label: "Oil price ($)" },
                              { data: exchangerates, label: "USD/EUR exchange rate", yaxis: 2 }
                          ], {
                              grid: { borderWidth: 0, labelMargin: 10, axisMargin: 0, minBorderMargin: 0 },
                              colors: ["#8E54E9", "#32b432"],
                              xaxes: [{ mode: "time" }],
                              yaxes: [{ min: 0 }, {
                                  // align if we are to the right
                                  alignTicksWithAxis: position == "right" ? 1 : null,
                                  position: position,
                                  tickFormatter: euroFormatter
                              }],
                              legend: { position: "sw" }
                          });
                      }

                      doPlot("right");

                      $("button").click(function() {
                          doPlot($(this).text());
                      });

                      // Add the Flot version string to the footer

                      $("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
      }
  });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

  $(function(){
      var gmap = jQuery(".gmap");
      if (gmap.length > 0) {
           // Address Marker
              var addressLocation = $('#address');
              if (addressLocation.length > 0) {
              $(addressLocation)
                new GMaps({
                  div: '#address',
                  lat: -12.043333,
                  lng: -77.028333
                });
              }
              // Satellite view
              var satelliteView = $('#events');
              if (satelliteView.length > 0) {
              $(satelliteView)
                var map = new GMaps({
                  div: '#events',
                  zoom: 16,
                  lat: -12.043333,
                  lng: -77.028333,
                  click: function(e) {
                    alert('click');
                  },
                  dragend: function(e) {
                    alert('dragend');
                  }
                });
              }
              // Satellite view
              var marker = $('#marker');
              if (marker.length > 0) {
              $(marker)
                var markerevents = new GMaps({
                  div: '#marker',
                  zoom: 16,
                  lat: -12.043333,
                  lng: -77.028333
                
                });

                markerevents.addMarker({
                  lat: -12.043333,
                  lng: -77.03,
                  title: 'Lima',
                  details: {
                    database_id: 42,
                    author: 'HPNeo'
                  },
                  click: function(e){
                    if(console.log)
                      console.log(e);
                    alert('You clicked in this marker');
                  }
                });
                markerevents.addMarker({
                  lat: -12.042,
                  lng: -77.028333,
                  title: 'Marker with InfoWindow',
                  infoWindow: {
                    content: '<p>HTML Content</p>'
                  }
              })
            }
            var marker = $('#polygon');
              if (marker.length > 0) {
              $(marker)
                var polygon = new GMaps({
                  div: '#polygon',
                  zoom: 16,
                  lat: -12.043333,
                  lng: -77.028333

                });

                var path = [[-12.040397656836609,-77.03373871559225], [-12.040248585302038,-77.03993927003302], [-12.050047116528843,-77.02448169303511],	[-12.044804866577001,-77.02154422636042]];

                polygon1 = polygon.drawPolygon({
                  paths: path, // pre-defined polygon shape
                  strokeColor: '#BBD8E9',
                  strokeOpacity: 1,
                  strokeWeight: 3,
                  fillColor: '#BBD8E9',
                  fillOpacity: 0.6
                });
            }
      }
  });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

  $(function(){
      var jqueryKnob = jQuery(".jqueryknob-wrapper");
      if (jqueryKnob.length > 0) {
              $(".knob").knob({
                  change: function(value) {
                      //console.log("change : " + value);
                  },
                  release: function(value) {
                      //console.log(this.$.attr('value'));
                      console.log("release : " + value);
                  },
                  cancel: function() {
                      console.log("cancel : ", this);
                  },
                  /*format : function (value) {
                   return value + '%';
                   },*/
                  draw: function() {

                      // "tron" case
                      if (this.$.data('skin') == 'tron') {

                          this.cursorExt = 0.3;

                          var a = this.arc(this.cv) // Arc
                              ,
                              pa // Previous arc
                              , r = 1;

                          this.g.lineWidth = this.lineWidth;

                          if (this.o.displayPrevious) {
                              pa = this.arc(this.v);
                              this.g.beginPath();
                              this.g.strokeStyle = this.pColor;
                              this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                              this.g.stroke();
                          }

                          this.g.beginPath();
                          this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                          this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                          this.g.stroke();

                          this.g.lineWidth = 2;
                          this.g.beginPath();
                          this.g.strokeStyle = this.o.fgColor;
                          this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                          this.g.stroke();

                          return false;
                      }
                  }
              });
      }
  });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

  $(function(){
      var jQVMap = jQuery(".vectormap-wrapper");
      if (jQVMap.length > 0) {

              //Analytics map
              var world = jQuery('#world')
              if (world.length > 0) {

                      function escapeXml(string) {
                          return string.replace(/[<>]/g, function (c) {
                            switch (c) {
                              case '<': return '\u003c';
                              case '>': return '\u003e';
                            }
                          });
                        }

                      var pins = {
                          mo: escapeXml('<div class="map-pin red"><span>MO</span></div>'),
                          fl: escapeXml('<div class="map-pin blue"><span>FL</span></div>'),
                          or: escapeXml('<div class="map-pin purple"><span>OR</span></div>')
                        };

                      jQuery(world).vectorMap({
                          map: 'world_en',
                          backgroundColor: '#ffff',
                          pins: pins,
                          pinMode: 'content',
                          showTooltip: true,
                          hoverColor: '#8E54E9',
                          borderColor: '#fff',
                          selectedColor: ['#8E54E9'],
                          color: '#eceef3',
                          selectedRegions: ['US', 'AU', 'IN', 'GR'],
                          onRegionClick: function(event){
                              event.preventDefault();
                          }
                      });
              }
              // Australia
              var australia = jQuery('#australia')
              if (australia.length > 0) {
                      jQuery(australia).vectorMap({
                          map: 'australia_en',
                          backgroundColor: '#fff',
                          selectedColor: '#fbaf54',
                          borderColor: '#fff',
                          hoverColor: '#fbaf54',
                          color: '#e8edf1'
                      });
              }
              // Africa
              var africa = jQuery('#africa')
              if (africa.length > 0) {
                      jQuery(africa).vectorMap({
                          map: 'africa_en',
                          backgroundColor: '#fff',
                          selectedColor: '#32b432',
                          borderColor: '#fff',
                          hoverColor: '#32b432',
                          color: '#e8edf1'
                      });
              }
              // USA
              var usa = jQuery('#usa')
              if (usa.length > 0) {
                      jQuery(usa).vectorMap({
                          map: 'usa_en',
                          backgroundColor: '#fff',
                          selectedColor: '#8E54E9',
                          hoverColor: '#8E54E9',
                          borderColor: '#fff',
                          color: '#e8edf1'
                      });
              }
              // Canada
              var canada = jQuery('#canada')
              if (canada.length > 0) {
                      jQuery(canada).vectorMap({
                          map: 'canada_en',
                          backgroundColor: '#fff',
                          selectedColor: '#fd9644',
                          hoverColor: '#fd9644',
                          borderColor: '#fff',
                          color: '#e8edf1'
                      });
              }
              // Europe
              var russia = jQuery('#russia')
              if (russia.length > 0) {
                      jQuery(russia).vectorMap({
                          map: 'russia_en',
                          backgroundColor: '#fff',
                          selectedColor: '#e3324c',
                          hoverColor: '#e3324c',
                          borderColor: '#fff',
                          color: '#e8edf1',
                          zoom: 5
                      });
              }
              // Brazil
              var brazil = jQuery('#brazil')
              if (brazil.length > 0) {
                      jQuery(brazil).vectorMap({
                          map: 'brazil_br',
                          backgroundColor: '#fff',
                          selectedColor: '#20bf6b',
                          hoverColor: '#20bf6b',
                          borderColor: '#fff',
                          color: '#e8edf1'
                      });
              }
      }
  });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

  $(function(){
      var magnific = jQuery(".magnific-wrapper");
      if (magnific.length > 0) {
              $('.view').magnificPopup({
                  type: 'image'
                  // other options
              });
              $(document).ready(function() {
                  $('.view2').magnificPopup({
                      disableOn: 700,
                      type: 'iframe',
                      mainClass: 'mfp-fade',
                      removalDelay: 160,
                      preloader: false,
                      fixedContentPos: false
                  });
              });
              $('.view1').magnificPopup({
                  type: 'image',
                  gallery: {
                      enabled: true
                  },
              });
      }
  });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

  $(function(){
      var mapaelMap = jQuery(".mapaelmap-wrapper");
      if (mapaelMap.length > 0) {
                      // World Map
                      $(mapaelMap).mapael({
                          map: {
                              name: "world_countries"
                          }
                      });
      }
  });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

  $(function(){
      var morrisJS = jQuery(".morris-wrapper");
      if (morrisJS.length > 0) {
                  // morris line chart
                  var morrisdemo1 = jQuery("#morrisdemo1");
                  if (morrisdemo1.length > 0) {
                      Morris.Line({
                          element: morrisdemo1,
                          data: [
                              { y: '2006', a: 40, b: 30 },
                              { y: '2007', a: 75, b: 65 },
                              { y: '2008', a: 50, b: 40 },
                              { y: '2009', a: 75, b: 65 },
                              { y: '2010', a: 50, b: 40 },
                              { y: '2011', a: 75, b: 65 },
                              { y: '2012', a: 60, b: 50 }
                          ],
                          xkey: 'y',
                          ykeys: ['a', 'b'],
                          labels: ['Series A', 'Series B'],
                          lineColors: ['#4776E6', '#8E54E9'],
                          resize: true,
                          padding: 20,
                          grid: false,
                          gridTextFamily: 'Roboto',
                          gridTextSize: 10
                      });
                  }
                  // morris line chart
                  var morrisdemo2 = jQuery("#morrisdemo2");
                  if (morrisdemo2.length > 0) {
                      Morris.Area({
                          element: morrisdemo2,
                          data: [
                              { y: '2006', a: 40, b: 30 },
                              { y: '2007', a: 75, b: 65 },
                              { y: '2008', a: 50, b: 40 },
                              { y: '2009', a: 75, b: 65 },
                              { y: '2010', a: 50, b: 40 },
                              { y: '2011', a: 75, b: 65 },
                              { y: '2012', a: 60, b: 50 }
                          ],
                          xkey: 'y',
                          ykeys: ['a', 'b'],
                          labels: ['Series A', 'Series B'],
                          lineColors: ['#4776E6', '#8E54E9'],
                          resize: true,
                          fillOpacity: 0.4,
                          padding: 20,
                          grid: false,
                          gridTextFamily: 'Roboto',
                          gridTextSize: 10
                      });
                  }
                  // morris bar chart
                  var morrisdemo3 = jQuery("#morrisdemo3");
                  if (morrisdemo3.length > 0) {
                      Morris.Bar({
                          element: morrisdemo3,
                          data: [
                              { y: '2006', a: 100, b: 90 },
                              { y: '2007', a: 75, b: 65 },
                              { y: '2008', a: 50, b: 40 },
                              { y: '2009', a: 75, b: 65 },
                              { y: '2010', a: 50, b: 40 },
                              { y: '2011', a: 75, b: 65 },
                              { y: '2012', a: 100, b: 90 }
                          ],
                          xkey: 'y',
                          ykeys: ['a', 'b'],
                          labels: ['Series A', 'Series B'],
                          barColors: ['#4776E6', '#8E54E9'],
                          resize: true,
                          fillOpacity: 0.4,
                          padding: 15,
                          grid: false,
                          gridTextFamily: 'Roboto',
                          gridTextSize: 10
                      });
                  }
                  // morris donut chart
                  var morrisdemo4 = jQuery("#morrisdemo4");
                  if (morrisdemo4.length > 0) {
                      Morris.Donut({
                          element: morrisdemo4,
                          data: [
                              { label: "Direct Visits", value: 12 },
                              { label: "Redirect Visits", value: 30 },
                              { label: "Referral Visits", value: 20 }
                          ],
                          colors: ['#45aaf2', '#e3324c', '#fbaf54']
                      });
                  }
                  // morris stacked bar chart
                  var morrisdemo5 = jQuery("#morrisdemo5");
                  if (morrisdemo5.length > 0) {
                      Morris.Bar({
                          element: morrisdemo5,
                          data: [
                              { y: '2006', a: 100, b: 90 },
                              { y: '2007', a: 75, b: 65 },
                              { y: '2008', a: 50, b: 40 },
                              { y: '2009', a: 75, b: 65 },
                              { y: '2010', a: 50, b: 40 },
                              { y: '2011', a: 75, b: 65 },
                              { y: '2012', a: 100, b: 90 }
                          ],
                          xkey: 'y',
                          ykeys: ['a', 'b'],
                          labels: ['Series A', 'Series B'],
                          barColors: ['#4776E6', '#8E54E9'],
                          resize: true,
                          fillOpacity: 0.4,
                          padding: 15,
                          grid: false,
                          gridTextFamily: 'Roboto',
                          gridTextSize: 10,
                          stacked: true
                      });
                  }
                  // morris donut chart
                  var morrisecommerce1 = jQuery("#morrisecommerce1");
                  if (morrisecommerce1.length > 0) {
                      Morris.Donut({
                          element: morrisecommerce1,
                          data: [
                              { label: "Total sales", value: 680 },
                              { label: "Open campaign", value: 800 },
                              { label: "Daily sales", value: 500 }
                          ],
                          colors: ['#45aaf2', '#8E54E9', '#eceef3']
                      });
                  }
                  
                  // morris cardealer1
                  var cardealer1 = jQuery("#cardealer1");
                  if (cardealer1.length > 0) {
                      Morris.Donut({
                          element: cardealer1,
                          data: [
                              { label: "New cars", value: 680 },
                              { label: "Used cars", value: 800 }
                          ],
                          colors: ['#f7b731', '#2bcbba']
                      });
                  }
                  
      }
  });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

  $(function(){
      var nestable = jQuery(".nestable-wrapper");
      if (nestable.length > 0) {
              var updateOutput = function(e) {
                  var list = e.length ? e : $(e.target),
                      output = list.data('output');
                  if (window.JSON) {
                      output.val(window.JSON.stringify(list.nestable('serialize'))); //, null, 2));
                  } else {
                      output.val('JSON browser support required for this demo.');
                  }
              };

              // activate Nestable for list 1
              $('#nestable').nestable({
                      group: 1
                  })
                  .on('change', updateOutput);

              // activate Nestable for list 2
              $('#nestable2').nestable({
                      group: 1
                  })
                  .on('change', updateOutput);

              // output initial serialised data
              updateOutput($('#nestable').data('output', $('#nestable-output')));
              updateOutput($('#nestable2').data('output', $('#nestable2-output')));

              $('#nestable-menu').on('click', function(e) {
                  var target = $(e.target),
                      action = target.data('action');
                  if (action === 'expand-all') {
                      $('.dd').nestable('expandAll');
                  }
                  if (action === 'collapse-all') {
                      $('.dd').nestable('collapseAll');
                  }
              });
      }
  });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

  $(function(){
      var owlCarousel = jQuery(".owl-wrapper");
      if (owlCarousel.length > 0) {
              var owlslider = $('.owl-carousel');
              owlslider.each(function () {
                  var $this = $(this),
                      $items = ($this.data('items')) ? $this.data('items') : 1,
                      $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
                      $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
                      $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
                      $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
                      $autospeed = ($this.attr('data-autospeed')) ? $this.data('autospeed') : 5000,
                      $smartspeed = ($this.attr('data-smartspeed')) ? $this.data('smartspeed') : 1000,
                      $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
                      $space = ($this.attr('data-space')) ? $this.data('space') : 30;
      
                      $(this).owlCarousel({
                          loop: $loop,
                          items: $items,
                          responsive: {
                            0:{items: $this.data('xx-items') ? $this.data('xx-items') : 1},
                            480:{items: $this.data('xs-items') ? $this.data('xs-items') : 1},
                            768:{items: $this.data('sm-items') ? $this.data('sm-items') : 2},
                            980:{items: $this.data('md-items') ? $this.data('md-items') : 3},
                            1200:{items: $this.data('lg-items') ? $this.data('lg-items') : 4},
                            1400:{items: $this.data('xl-items') ? $this.data('lg-items') : 5},
                          },
                          dots: $navdots,
                          autoplayTimeout:$autospeed,
                          smartSpeed: $smartspeed,
                          autoHeight:$autohgt,
                          margin:$space,
                          nav: $navarrow,
                          navText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"],
                          autoplay: $autoplay,
                          autoplayHoverPause: true
                      });
                 });
      }
  });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

  $(function(){
      var popOvers = jQuery(".popover-wrapper");
      if (popOvers.length > 0) {
          $('[data-toggle="popover"]').popover()
      }
  });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

  $(function(){
      jQuery(".loader").fadeOut('slow');
  });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

  $(function(){
      var quillEditor = jQuery(".quill-editor");
      if (quillEditor.length > 0) {
              var toolbarOptions = [
                  ['bold', 'italic', 'underline', 'strike'],
                  ['blockquote', 'code-block'],

                  [{ 'header': 1 }, { 'header': 2 }],
                  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                  [{ 'script': 'sub' }, { 'script': 'super' }],
                  [{ 'indent': '-1' }, { 'indent': '+1' }],
                  [{ 'direction': 'rtl' }],
              ];
              var editor = new Quill('#editor', {
                  modules: {
                      toolbar: toolbarOptions
                  },
                  theme: 'snow'
              });
      }
  });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

  $(function(){
      var rangeslider = jQuery(".rangeslider-wrapper");
      if (rangeslider.length > 0) {
              //slider-1
              $("#slider-1").ionRangeSlider();
              //slider-2
              $("#slider-2").ionRangeSlider({
                  min: 100,
                  max: 1000,
                  from: 550
              });
              //slider-3
              $("#slider-3").ionRangeSlider({
                  type: "double",
                  grid: true,
                  min: 0,
                  max: 1000,
                  from: 200,
                  to: 800,
                  prefix: "$"
              });
              //slider-4
              $("#slider-4").ionRangeSlider({
                  type: "double",
                  grid: true,
                  min: -1000,
                  max: 1000,
                  from: -500,
                  to: 500
              });
              //slider-5
              $("#slider-5").ionRangeSlider({
                  type: "double",
                  grid: true,
                  min: -1000,
                  max: 1000,
                  from: -500,
                  to: 500,
                  step: 250
              });
              //slider-6
              $("#slider-6").ionRangeSlider({
                  type: "double",
                  grid: true,
                  min: -12.8,
                  max: 12.8,
                  from: -3.2,
                  to: 3.2,
                  step: 0.1
              });
              //slider-7
              $("#slider-7").ionRangeSlider({
                  type: "double",
                  grid: true,
                  from: 1,
                  to: 5,
                  values: [0, 10, 100, 1000, 10000, 100000, 1000000]
              });
              //slider-8
              $("#slider-8").ionRangeSlider({
                  grid: true,
                  from: 5,
                  values: [
                      "zero", "one",
                      "two", "three",
                      "four", "five",
                      "six", "seven",
                      "eight", "nine",
                      "ten"
                  ]
              });
              //slider-9
              $("#slider-9").ionRangeSlider({
                  grid: true,
                  from: 3,
                  values: [
                      "Janeiro", "Fevereiro", "Março",
                      "Abril", "Maio", "Junho",
                      "Julho", "Agosto", "Setembro",
                      "Outubro", "Novembro", "Dezembro"
                  ]
              });
              //slider-10
              $("#slider-10").ionRangeSlider({
                  grid: true,
                  min: 1000,
                  max: 1000000,
                  from: 100000,
                  step: 1000,
                  prettify_enabled: false
              });
              //slider-11
              $("#slider-11").ionRangeSlider({
                  grid: true,
                  min: 1000,
                  max: 1000000,
                  from: 200000,
                  step: 1000,
                  prettify_enabled: true
              });
              //slider-12
              $("#slider-12").ionRangeSlider({
                  grid: true,
                  min: 1000,
                  max: 1000000,
                  from: 300000,
                  step: 1000,
                  prettify_enabled: true,
                  prettify_separator: "."
              });
              //slider-13
              $("#slider-13").ionRangeSlider({
                  grid: true,
                  min: 1000,
                  max: 1000000,
                  from: 400000,
                  step: 1000,
                  prettify_enabled: true,
                  prettify: function(num) {
                      return (Math.random() * num).toFixed(0);
                  }
              });
              //slider-14
              $("#slider-14").ionRangeSlider({
                  type: "double",
                  grid: true,
                  min: 0,
                  max: 10000,
                  from: 1000,
                  step: 9000,
                  prefix: "$"
              });
              //slider-15
              $("#slider-15").ionRangeSlider({
                  type: "single",
                  grid: true,
                  min: -90,
                  max: 90,
                  from: 0,
                  postfix: "°"
              });
              //slider-16
              $("#slider-16").ionRangeSlider({
                  grid: true,
                  min: 18,
                  max: 70,
                  from: 30,
                  prefix: "Age ",
                  max_postfix: "+"
              });
              //slider-17
              $("#slider-17").ionRangeSlider({
                  type: "double",
                  min: 100,
                  max: 200,
                  from: 145,
                  to: 155,
                  prefix: "Weight: ",
                  postfix: " million pounds",
                  decorate_both: true
              });
              //Slider-inter-1
              var $update = $(".js-update-43");
              $("#slider-inter_1").ionRangeSlider({
                  type: "single",
                  min: 0,
                  max: 100,
                  from: 50,
                  keyboard: true,
                  onStart: function(data) {
                      console.log("onStart");
                  },
                  onChange: function(data) {
                      console.log("onChange");
                  },
                  onFinish: function(data) {
                      console.log("onFinish");
                  },
                  onUpdate: function(data) {
                      console.log("onUpdate");
                  }
              });
              var slider = $("#slider-inter_1").data("ionRangeSlider");
              $update.on("click", function() {
                  slider.update({
                      from: 10
                  });
              });
      }
  });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

  $(function(){
      var scrollbar = jQuery(".scrollbar");
      if (scrollbar.length > 0) {
              $('.scroll_dark').mCustomScrollbar({
                theme:"minimal-dark",
                setHeight: false,
                mouseWheel: {
                  normalizeDelta: true,
                  scrollAmount: '200px',
                  contentTouchScroll: true,
                  deltaFactor: '200px'
                },
                advanced: {
                  autoScrollOnFocus: 'a[tabindex]'
                }
              });
              $('.scroll_light').mCustomScrollbar({
                theme:"minimal",
                setHeight: false,
                mouseWheel: {
                  normalizeDelta: true,
                  scrollAmount: '200px',
                  contentTouchScroll: true,
                  eltaFactor: '200px'
                },
                advanced: {
                  autoScrollOnFocus: 'a[tabindex]'
                }
              });
      }
  });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

  $(function(){
      var select = jQuery(".select-wrapper");
      if (select.length > 0) {
                  $('.js-basic-single').select2();
                  $('.js-basic-multiple').select2();
                  $(".bs-select-1").val()
                  $(".bs-input").tagsinput('items')
      }
  });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

  $(function(){
      var sidebarNav = jQuery(".sidebar-nav");
      if (sidebarNav.length > 0) {
              $('#sidebarNav').metisMenu();
      }
  });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

  $(function(){
      var sparkline = jQuery(".sparkline-wrapper");
      if (sparkline.length > 0) {
              function Sparkline() {
                  var sparklinedemo1 = jQuery("#sparklinedemo1");
                  if (sparklinedemo1.length > 0) {
                      $(sparklinedemo1).sparkline([20, 30, 25, 40, 40, 50, 56, 37, 50], {
                          type: 'line',
                          width: '100%',
                          height: '200',
                          lineWidth: 2,
                          spotRadius: 0,
                          chartRangeMax: 50,
                          lineColor: 'rgba(71, 118, 230, 0.5)',
                          fillColor: 'rgba(71, 118, 230, 0.3)',
                          highlightLineColor: 'rgba(0,0,0,.1)',
                          highlightSpotColor: 'rgba(0,0,0,.2)',
                      });
                      $(sparklinedemo1).sparkline([10, 35, 30, 60, 50, 45, 30, 24, 30], {
                          type: 'line',
                          width: '100%',
                          height: '200',
                          lineWidth: 2,
                          spotRadius: 0,
                          chartRangeMax: 40,
                          lineColor: 'rgba(142, 84, 233, 0.5)',
                          fillColor: 'rgba(142, 84, 233, 0.3)',
                          composite: true,
                          highlightLineColor: 'rgba(0,0,0,.1)',
                          highlightSpotColor: 'rgba(0,0,0,.2)',
                      });
                  }
                  var sparklinedemo2 = jQuery("#sparklinedemo2");
                  if (sparklinedemo2.length > 0) {
                      $(sparklinedemo2).sparkline([20, 30, 25, 40, 40, 50, 56, 37, 50], {
                          type: 'line',
                          width: '100%',
                          height: '200',
                          lineWidth: 2,
                          spotRadius: 0,
                          chartRangeMax: 50,
                          lineColor: 'rgba(71, 118, 230, 1)',
                          fillColor: 'transparent',
                          highlightLineColor: 'rgba(0,0,0,.1)',
                          highlightSpotColor: 'rgba(0,0,0,.2)'
                      });
                      $(sparklinedemo2).sparkline([10, 35, 30, 60, 50, 45, 30, 24, 30], {
                          type: 'line',
                          width: '100%',
                          height: '200',
                          lineWidth: 2,
                          spotRadius: 0,
                          chartRangeMax: 40,
                          lineColor: 'rgba(142, 84, 233, 1)',
                          fillColor: 'transparent',
                          composite: true,
                          highlightLineColor: 'rgba(0,0,0,1)',
                          highlightSpotColor: 'rgba(0,0,0,1)'
                      });
                  }
                  var sparklinedemo3 = jQuery("#sparklinedemo3");
                  if (sparklinedemo3.length > 0) {
                      $(sparklinedemo3).sparkline([5, 8, 6, 7, 3, 5, 6, 8, 2, 8, 5, 10, 11, 10, 1, 6, 5, 7, 8, 10, 8, 12, 7, 9, 5, 6, 10, 7, 8, 5, 6, 8, 5, 9, 3, 7, 1, 6, 4, 8, 4, 9, 10, 13, 7, 8, 6, 4, 11, 5, 6, 4, 7, 10, 4, 7, 4, 9], {
                          type: 'bar',
                          height: '200',
                          barWidth: '10',
                          barSpacing: '3',
                          barColor: '#4776E6'
                      });
                  }
                  
                  //chart widget end

                  var sparklinedemo4 = jQuery("#sparklinedemo4");
                  if (sparklinedemo4.length > 0) {
                      $(sparklinedemo4).sparkline([5, 8, 6, 7, 3, 5, 6, 8, 4, 8, 5, 10, 11, 10, 5, 6, 5, 7, 8, 10], {
                          type: 'line',
                          width: '100%',
                          height: '200',
                          lineColor: 'rgba(142, 84, 233, 0.5)',
                          fillColor: 'rgba(142, 84, 233, 0.3)',
                          highlightLineColor: 'rgba(0,0,0,.1)',
                          highlightSpotColor: 'rgba(0,0,0,.2)'
                      });
                      $(sparklinedemo4).sparkline([5, 8, 6, 7, 3, 5, 6, 8, 2, 8, 5, 10, 11, 10, 5, 6, 5, 7, 8, 10], {
                          type: 'bar',
                          height: '200',
                          barWidth: '10',
                          barSpacing: '5',
                          composite: true,
                          barColor: '#4776E6'
                      });
                  }
                  var sparklinedemo5 = jQuery("#sparklinedemo5");
                  if (sparklinedemo5.length > 0) {
                      $(sparklinedemo5).sparkline([40, 30, 20, 10], {
                          type: 'pie',
                          width: '200',
                          height: '165',
                          sliceColors: ['#4776E6', '#8E54E9', '#ffbc1d', '#25d09a']
                      });
                  }

              };

              Sparkline();

              var resize;
              $window.resize(function(e) {
                  clearTimeout(resize);
                  resize = setTimeout(function() {
                      Sparkline();

                  }, 300);
              });
      }
  });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

  $(function(){
      var summernote = jQuery(".summernote");
      if (summernote.length > 0) {
              $('#summernote').summernote({
                  tabsize: 2,
                  height: 250
              });
      }
  });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

  $(function(){
$('#sweetalert-01').click(function(e) {
  swal({
      text: 'Any fool can use a computer',
      showCloseButton: false,
      showCancelButton: true,
  })
});


$('#sweetalert-02').click(function(e) {
  swal(
      'The Internet?',
      'That thing is still around?',
      'question'
  )
});

$('#sweetalert-03').click(function(e) {
  swal({
      type: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href>Why do I have this issue?</a>',
  })
});

$('#sweetalert-04').click(function(e) {
  swal({
      imageUrl: 'assets/img/widget/06.jpg',
      imageHeight: 596,
      imageAlt: 'A tall image'
  })
});

$('#sweetalert-05').click(function(e) {
  swal({
      title: '<i>HTML</i> <u>example</u>',
      type: 'info',
      html: 'You can use <b>bold text</b>, ' +
          '<a href="//github.com">links</a> ' +
          'and other HTML tags',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger'
  })
});

$('#sweetalert-06').click(function(e) {
  swal({
      position: 'top-end',
      type: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
  })
});

$('#sweetalert-07').click(function(e) {
  swal({
      title: 'Custom animation with Animate.css',
      animation: false,
      customClass: 'animated tada'
  })
});

$('#sweetalert-08').click(function(e) {
  swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
  }).then((result) => {
      if (result.value) {
          swal(
              'Deleted!',
              'Your file has been deleted.',
              'success'
          )
      }
  })
});

$('#sweetalert-09').click(function(e) {
  swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
      reverseButtons: true
  }).then((result) => {
      if (result.value) {
          swal(
              'Deleted!',
              'Your file has been deleted.',
              'success'
          )
      } else if (
          // Read more about handling dismissals
          result.dismiss === swal.DismissReason.cancel
      ) {
          swal(
              'Cancelled',
              'Your imaginary file is safe :)',
              'error'
          )
      }
  })
});

$('#sweetalert-10').click(function(e) {
  swal({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      animation: false
  })
});

$('#sweetalert-11').click(function(e) {
  swal({
      title: 'Custom width, padding, background.',
      width: 600,
      padding: 100,
      background: '#fff url(../images/trees.png)',
      backdrop: `
rgba(0,0,123,0.4)
url("/images/nyan-cat.gif")
center left
no-repeat
`
  })
});

$('#sweetalert-12').click(function(e) {
  swal({
      title: 'Auto close alert!',
      text: 'I will close in 5 seconds.',
      timer: 5000,
      onOpen: () => {
          swal.showLoading()
      }
  }).then((result) => {
      if (
          // Read more about handling dismissals
          result.dismiss === swal.DismissReason.timer
      ) {
          console.log('I was closed by the timer')
      }
  })
});


$('#sweetalert-13').click(function(e) {
  swal({
      title: 'Ù‡Ù„ ØªØ±ÙŠØ¯ Ø§Ù„Ø§Ø³ØªÙ…Ø±Ø§Ø±ØŸ',
      confirmButtonText: 'Ù†Ø¹Ù…',
      cancelButtonText: 'Ù„Ø§',
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      target: document.getElementById('rtl-container')
  })
});

$('#sweetalert-14').click(function(e) {
  swal({
      title: 'Submit email to run ajax request',
      input: 'email',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      preConfirm: (email) => {
          return new Promise((resolve) => {
              setTimeout(() => {
                  if (email === 'taken@example.com') {
                      swal.showValidationError(
                          'This email is already taken.'
                      )
                  }
                  resolve()
              }, 2000)
          })
      },
      allowOutsideClick: () => !swal.isLoading()
  }).then((result) => {
      if (result.value) {
          swal({
              type: 'success',
              title: 'Ajax request finished!',
              html: 'Submitted email: ' + result.value
          })
      }
  })
});

$('#sweetalert-15').click(function(e) {
  swal.setDefaults({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      progressSteps: ['1', '2', '3']
  })

  var steps = [{
          title: 'Question 1',
          text: 'Chaining swal2 modals is easy'
      },
      'Question 2',
      'Question 3'
  ]

  swal.queue(steps).then((result) => {
      swal.resetDefaults()

      if (result.value) {
          swal({
              title: 'All done!',
              html: 'Your answers: <pre>' +
                  JSON.stringify(result.value) +
                  '</pre>',
              confirmButtonText: 'Lovely!'
          })
      }
  })
});

$('#sweetalert-16').click(function(e) {
  const ipAPI = 'https://api.ipify.org?format=json'
  swal.queue([{
      title: 'Your public IP',
      confirmButtonText: 'Show my public IP',
      text: 'Your public IP will be received ' +
          'via AJAX request',
      showLoaderOnConfirm: true,
      preConfirm: () => {
          return fetch(ipAPI)
              .then(response => response.json())
              .then(data => swal.insertQueueStep(data.ip))
              .catch(() => {
                  swal.insertQueueStep({
                      type: 'error',
                      title: 'Unable to get your public IP'
                  })
              })
      }
  }])
});

});

})(window, document, window.jQuery);
(function(window, document, $, undefined){

  $(function(){
      $("#checkAll").click(function () {
          $('input:checkbox').not(this).prop('checked', this.checked);
      });
});

})(window, document, window.jQuery);
(function(window, document, $, undefined){

  $(function(){
$(function () {
  var i = -1;
  var toastCount = 0;
  var $toastlast;

  var getMessage = function () {
      var msgs = ['My name is Inigo Montoya. You killed my father. Prepare to die!',
          '<div><input class="input-small" value="textbox"/>&nbsp;<a href="http://johnpapa.net" target="_blank">This is a hyperlink</a></div><div><button type="button" id="okBtn" class="btn btn-primary">Close me</button><button type="button" id="surpriseBtn" class="btn" style="margin: 0 8px 0 8px">Surprise me</button></div>',
          'Are you the six fingered man?',
          'Inconceivable!',
          'I do not think that means what you think it means.',
          'Have fun storming the castle!'
      ];
      i++;
      if (i === msgs.length) {
          i = 0;
      }

      return msgs[i];
  };

  var getMessageWithClearButton = function (msg) {
      msg = msg ? msg : 'Clear itself?';
      msg += '<br /><br /><button type="button" class="btn clear">Yes</button>';
      return msg;
  };

  $('#closeButton').on("click", function () {
      if($(this).is(':checked')) {
          $('#addBehaviorOnToastCloseClick').prop('disabled', false);
      } else {
          $('#addBehaviorOnToastCloseClick').prop('disabled', true);
          $('#addBehaviorOnToastCloseClick').prop('checked', false);
      }
  });

  $('#showtoast').on("click", function () {
      var shortCutFunction = $("#toastTypeGroup input:radio:checked").val();
      var msg = $('#message').val();
      var title = $('#title').val() || '';
      var $showDuration = $('#showDuration');
      var $hideDuration = $('#hideDuration');
      var $timeOut = $('#timeOut');
      var $extendedTimeOut = $('#extendedTimeOut');
      var $showEasing = $('#showEasing');
      var $hideEasing = $('#hideEasing');
      var $showMethod = $('#showMethod');
      var $hideMethod = $('#hideMethod');
      var toastIndex = toastCount++;
      var addClear = $('#addClear').prop('checked');

      toastr.options = {
          closeButton: $('#closeButton').prop('checked'),
          debug: $('#debugInfo').prop('checked'),
          newestOnTop: $('#newestOnTop').prop('checked'),
          progressBar: $('#progressBar').prop('checked'),
          rtl: $('#rtl').prop('checked'),
          positionClass: $('#positionGroup input:radio:checked').val() || 'toast-top-right',
          preventDuplicates: $('#preventDuplicates').prop('checked'),
          onclick: null
      };

      if ($('#addBehaviorOnToastClick').prop('checked')) {
          toastr.options.onclick = function () {
              alert('You can perform some custom action after a toast goes away');
          };
      }

      if ($('#addBehaviorOnToastCloseClick').prop('checked')) {
          toastr.options.onCloseClick = function () {
              alert('You can perform some custom action when the close button is clicked');
          };
      }

      if ($showDuration.val().length) {
          toastr.options.showDuration = parseInt($showDuration.val());
      }

      if ($hideDuration.val().length) {
          toastr.options.hideDuration = parseInt($hideDuration.val());
      }

      if ($timeOut.val().length) {
          toastr.options.timeOut = addClear ? 0 : parseInt($timeOut.val());
      }

      if ($extendedTimeOut.val().length) {
          toastr.options.extendedTimeOut = addClear ? 0 : parseInt($extendedTimeOut.val());
      }

      if ($showEasing.val().length) {
          toastr.options.showEasing = $showEasing.val();
      }

      if ($hideEasing.val().length) {
          toastr.options.hideEasing = $hideEasing.val();
      }

      if ($showMethod.val().length) {
          toastr.options.showMethod = $showMethod.val();
      }

      if ($hideMethod.val().length) {
          toastr.options.hideMethod = $hideMethod.val();
      }

      if (addClear) {
          msg = getMessageWithClearButton(msg);
          toastr.options.tapToDismiss = false;
      }
      if (!msg) {
          msg = getMessage();
      }

      $('#toastrOptions').text('Command: toastr["'
              + shortCutFunction
              + '"]("'
              + msg
              + (title ? '", "' + title : '')
              + '")\n\ntoastr.options = '
              + JSON.stringify(toastr.options, null, 2)
      );

      var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
      $toastlast = $toast;

      if(typeof $toast === 'undefined'){
          return;
      }

      if ($toast.find('#okBtn').length) {
          $toast.delegate('#okBtn', 'click', function () {
              alert('you clicked me. i was toast #' + toastIndex + '. goodbye!');
              $toast.remove();
          });
      }
      if ($toast.find('#surpriseBtn').length) {
          $toast.delegate('#surpriseBtn', 'click', function () {
              alert('Surprise! you clicked me. i was toast #' + toastIndex + '. You could perform an action here.');
          });
      }
      if ($toast.find('.clear').length) {
          $toast.delegate('.clear', 'click', function () {
              toastr.clear($toast, { force: true });
          });
      }
  });

  function getLastToast(){
      return $toastlast;
  }
  $('#clearlasttoast').on("click", function () {
      toastr.clear(getLastToast());
  });
  $('#cleartoasts').on("click", function () {
      toastr.clear();
  });
})

});

})(window, document, window.jQuery);
(function(window, document, $, undefined){

  $(function(){
      var tootlTips = jQuery(".tooltip-wrapper");
      if (tootlTips.length > 0) {
          $('[data-toggle="tooltip"]').tooltip();
      }
  });

})(window, document, window.jQuery);
(function(window, document, $, undefined){

  $(function(){
$.validator.setDefaults({
  submitHandler: function() {
      alert("submitted!");
  }
});

$(document).ready(function() {
  $("#signupForm").validate({
      rules: {
          fname: "required",
          lname: "required",
          uname: {
              required: true,
              minlength: 2
          },
          upassword: {
              required: true,
              minlength: 5
          },
          uconfirm_password: {
              required: true,
              minlength: 5,
              equalTo: "#password"
          },
          uemail: {
              required: true,
              email: true
          },
          uagree: "required"
      },
      messages: {
          fname: "Please enter your firstname",
          lname: "Please enter your lastname",
          uname: {
              required: "Please enter a username",
              minlength: "Your username must consist of at least 2 characters"
          },
          upassword: {
              required: "Please provide a password",
              minlength: "Your password must be at least 5 characters long"
          },
          uconfirm_password: {
              required: "Please provide a password",
              minlength: "Your password must be at least 5 characters long",
              equalTo: "Please enter the same password as above"
          },
          uemail: "Please enter a valid email address",
          uagree: "Please accept our policy"
      },
      errorElement: "em",
      errorPlacement: function(error, element) {
          // Add the `help-block` class to the error element
          error.addClass("help-block");

          if (element.prop("type") === "checkbox") {
              error.insertAfter(element.parent("label"));
          } else {
              error.insertAfter(element);
          }
      },
      highlight: function(element, errorClass, validClass) {
          $(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
      },
      unhighlight: function(element, errorClass, validClass) {
          $(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
      }
  });

  $("#signupForm1").validate({
      rules: {
          firstname1: "required",
          lastname1: "required",
          username1: {
              required: true,
              minlength: 2
          },
          password1: {
              required: true,
              minlength: 5
          },
          confirm_password1: {
              required: true,
              minlength: 5,
              equalTo: "#password1"
          },
          email1: {
              required: true,
              email: true
          },
          agree1: "required"
      },
      messages: {
          firstname1: "Please enter your firstname",
          lastname1: "Please enter your lastname",
          username1: {
              required: "Please enter a username",
              minlength: "Your username must consist of at least 2 characters"
          },
          password1: {
              required: "Please provide a password",
              minlength: "Your password must be at least 5 characters long"
          },
          confirm_password1: {
              required: "Please provide a password",
              minlength: "Your password must be at least 5 characters long",
              equalTo: "Please enter the same password as above"
          },
          email1: "Please enter a valid email address",
          agree1: "Please accept our policy"
      },
      errorElement: "em",
      errorPlacement: function(error, element) {
          // Add the `help-block` class to the error element
          error.addClass("help-block");

          // Add `has-feedback` class to the parent div.form-group
          // in order to add icons to inputs
          element.parents(".col-sm-5").addClass("has-feedback");

          if (element.prop("type") === "checkbox") {
              error.insertAfter(element.parent("label"));
          } else {
              error.insertAfter(element);
          }

          // Add the span element, if doesn't exists, and apply the icon classes to it.
          if (!element.next("span")[0]) {
              $("<span class='fa fa-times form-control-feedback pr-2'></span>").insertAfter(element);
          }
      },
     
      highlight: function(element, errorClass, validClass) {
          $(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
          $(element).next("span").addClass("fa fa-times").removeClass("fa fa-check");
      },
      unhighlight: function(element, errorClass, validClass) {
          $(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
          ($(element)).next("span").addClass("fa fa-check").removeClass("fa fa-times");
      }
  });

  $("#signupForm3").validate({
      rules: {
          firstname: "required",
          lastname: "required",
          username: {
              required: true,
              minlength: 2
          },
          password: {
              required: true,
              minlength: 5
          },
          confirm_password: {
              required: true,
              minlength: 5,
              equalTo: "#password"
          },
          email: {
              required: true,
              email: true
          },
          agree: "required"
      },
      messages: {
          firstname: "Please enter your firstname",
          lastname: "Please enter your lastname",
          username: {
              required: "Please enter a username",
              minlength: "Your username must consist of at least 2 characters"
          },
          password: {
              required: "Please provide a password",
              minlength: "Your password must be at least 5 characters long"
          },
          confirm_password: {
              required: "Please provide a password",
              minlength: "Your password must be at least 5 characters long",
              equalTo: "Please enter the same password as above"
          },
          email: "Please enter a valid email address",
          agree: "Please accept our policy"
      },
      errorPlacement: function(error, element) {
          error.addClass("ui red pointing label transition");
          error.insertAfter(element.parent());
      },
      highlight: function(element, errorClass, validClass) {
          $(element).parents(".row").addClass(errorClass);
      },
      unhighlight: function(element, errorClass, validClass) {
          $(element).parents(".row").removeClass(errorClass);
      }
  });

});

});

})(window, document, window.jQuery);
(function(window, document, $, undefined){

  $(function(){
      window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);

        getSelectorFromElement: function getSelectorFromElement(element) {
          var selector = element.getAttribute('data-target');
      
          if (!selector || selector === '#') {
            selector = element.getAttribute('href') || '';
          }
      
          try {
            return document.querySelector(selector) ? selector : null;
          } catch (err) {
            return null;
          }
      }
  });


  $('.mobile-toggle').on('click', function() {
      $('body').toggleClass('sidebar-toggled');
    });

    $(document).on('click', '.mega-menu.dropdown-menu', function (e) {
      e.stopPropagation();
    });

    $('.sidebar-toggle').on('click', function() {
      $('body').toggleClass('sidebar-mini');
      $('.app-navbar').toggleClass('expand');
    });

    $('.app-navbar').hover(function() {
      if($('body').hasClass('sidebar-mini')) {
        $('.navbar-header').toggleClass('expand');
      }
    });

    $('.search').on('click', function() {
      $('.search-wrapper').fadeIn(200);
    });

     //Search Box Close 
     $('.close-btn').on('click', function() {
      $('.search-wrapper').fadeOut(200);
    });

    $('.mobile-toggle').on('click', function() {
      $('body').toggleClass('sidebar-toggled');
    });

})(window, document, window.jQuery);


var programmingLanguagesChart = jQuery('#programmingLanguagesChart');
if (programmingLanguagesChart.length > 0) {
    
    const data  = document.currentScript.dataset;
    let  most_searched_skills  = data.most_searched_skills.replace(/'/g, '"');
    most_searched_skills =JSON.parse(most_searched_skills)
    
    const labelsChart = most_searched_skills.map( item => item._id)
    const valuesChart = most_searched_skills.map( item => item.contagem)

    var options = {
        chart: {
            height: 340,
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        colors: ['#5530f7'], // Cores personalizáveis
        plotOptions: {
            bar: {
                horizontal: false,
                endingShape: 'rounded',
                columnWidth: '40%',
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        series: [ {
            name: 'Contribuições em Projetos',
            data: valuesChart
        }],
        xaxis: {
            categories: labelsChart, 
            axisBorder: {
                show: false,
            },
            labels: {
                style: {
                    colors: ['#949494'],
                    fontSize: '12px',
                    fontFamily: 'Roboto',
                    cssClass: 'apexcharts-xaxis-label',
                },
                offsetX: 0,
            }
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    colors: ['#949494'],
                    fontSize: '12px',
                    fontFamily: 'Roboto',
                    cssClass: 'apexcharts-yaxis-label',
                }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: "vertical",
                shadeIntensity: 0.6,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 100]
            }
        },
        legend: {
            fontFamily: 'Roboto',
            labels: {
                colors: ['#949494'],
                useSeriesColors: false
            },
            itemMargin: {
                horizontal: 20
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " estudantes/contribuições"
                }
            }
        },
        grid: {
            show: true,
            borderColor: '#fff',
        },
        responsive: [{
            breakpoint: 400,
            options: {
                plotOptions: {
                    bar: {
                        horizontal: false,
                        endingShape: 'rounded',
                        columnWidth: '70%',
                    },
                },
            },
        }]
    };

    var chart = new ApexCharts(
        document.querySelector("#programmingLanguagesChart"),
        options
    );

    chart.render();
}


/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Designer","Youtuber","Developer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)


