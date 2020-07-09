
// Fetch JSON ultimi dati nazionali
fetch('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json')
  .then(response => response.json())
  .then((jsonData) => {

    
    let dati = jsonData[0];

    function UltimiDati (props) {
      let data = String(props.data);
      data = data.split('T');

      return(
        <div>
          <h1 align="center">Ultimo aggiornamento<br />{data[0]} {data[1]}</h1>
        </div>
      )
    }

    let ultimoAggiornamento = <UltimiDati data = {dati.data}/>

    
    // Dati totali
    ReactDOM.render(ultimoAggiornamento, document.getElementById('ultimiDati'));

    ReactDOM.render(dati.totale_positivi, document.getElementById('numeroPositivi'));
    ReactDOM.render(dati.dimessi_guariti, document.getElementById('numeroGuariti'));
    ReactDOM.render(dati.deceduti, document.getElementById('numeroDeceduti'));
    ReactDOM.render(dati.terapia_intensiva, document.getElementById('terapiaIntensiva'));
    ReactDOM.render(dati.tamponi, document.getElementById('tamponi'));
    ReactDOM.render(dati.totale_casi, document.getElementById('casiTotali'));


    
  })
  .catch((error) => {
    // handle your errors here
    console.error(error)
  })




