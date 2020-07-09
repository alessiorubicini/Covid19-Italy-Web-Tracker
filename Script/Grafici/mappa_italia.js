

function disegna_mappa() {
    let winwidth = $(window).width();
    let chart_width, chart_height;
    
    if(winwidth >= 320 && winwidth <= 360) {
        chart_width = 320;
        chart_height = 150;
    } else if (winwidth >= 375 && winwidth <= 479) {
        chart_width = 420;
        chart_height = 260;
    } else if (winwidth >= 620 && winwidth <= 739) {
        chart_width = 550;
        chart_height = 340;
    } else if (winwidth >= 740 && winwidth <= 879) {
        chart_width = 790;
        chart_height = 470;
    } else if (winwidth >= 880 && winwidth <= 1099) {
        chart_width = 800;
        chart_height = 500;
    } else if (winwidth >= 1100 && winwidth <= 1300) {
        chart_width = 900;
        chart_height = 700;
    } else if (winwidth >= 1301 && winwidth <= 1500) {
        chart_width = 900;
        chart_height = 700;
    } else if (winwidth >= 1501 && winwidth <= 1800) {
        chart_width = 1000;
        chart_height = 800;
    } else if (winwidth >= 1801 && winwidth <= 2100) {
        chart_width = 900;
        chart_height = 900;
    }

fetch('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json')
    .then(response => response.json())
    .then((data) => {
        let jsonData = data;

        let chart_data = [["Regione", "Positivi"]];

        
        for (let i = 0; i < jsonData.length; i++) {
            chart_data.push([jsonData[i]['denominazione_regione'], jsonData[i]['totale_positivi']]);
        }


        google.charts.load('current', {
            'packages':['geochart'],
            // Note: you will need to get a mapsApiKey for your project.
            // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
            'mapsApiKey': 'AIzaSyC0Xi1q8YtXAEuSXShabjW2h8cSQ-RM17g'
          });
          google.charts.setOnLoadCallback(drawRegionsMap);
          
        
          function drawRegionsMap() {
            var data = google.visualization.arrayToDataTable(chart_data);
        
            var options = {
                region: "IT",
                resolution: "provinces",
                width: chart_width,
                height: chart_height,
                colors: ['red'],
                title: 'Positivi per regione'
            };
        
            var chart = new google.visualization.GeoChart(document.getElementById('mappa'));
        
            chart.draw(data, options);
          }
    })
}

disegna_mappa();

$(window).resize(function(){
  disegna_mappa();
});