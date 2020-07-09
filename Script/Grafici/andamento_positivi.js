


fetch('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json')
    .then(response => response.json())
    .then((data) => {
        let jsonData = data;


        let chart_data = [["Giorno", "Totale positivi"]];
        let day;

        

        // Google char
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        for (let i = 0; i < jsonData.length; i++) {
            day = String(jsonData[i]['data']);
            
            day = day.split('T');
            day = day[0].split('-');
            if(day[2] == '01' || day[2] == '07' || day[2] == '14' || day[2] == '21' || day[2] == '28') {
                //chart_data[String(day[2] + "-" + day[1])] = jsonData[i]["totale_positivi"];
                chart_data.push([String(day[2] + "/" + day[1]), jsonData[i]["totale_positivi"]])
                
            }
        }
        
        

        function drawChart() {

            var dati = google.visualization.arrayToDataTable(chart_data)

            var options = {
                title: 'Positivi',
                titleTextStyle: {
                    color: 'white',
                    fontSize: 28
                },
                curveType: 'function',
                legend: { position: 'bottom' },
                height: 'auto',
                width: 'auto',
                colors: ['blue'],
                backgroundColor: '#101010',
                textStyle: {
                    color: 'white'
                },
                hAxis: {
                    textStyle: {
                        color: 'white'
                    }
                },
                vAxis: {
                    textStyle: {
                        color: 'white'
                    }
                },
                legend: { position: 'none'}
            };

            var chart = new google.visualization.LineChart(document.getElementById('andamento-contagi'));

            chart.draw(dati, options);
        }
        
    })


