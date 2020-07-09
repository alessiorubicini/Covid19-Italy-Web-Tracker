
// Fetch JSON ultimi dati nazionali
fetch('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json')
  .then(response => response.json())
  .then((jsonData) => {

    
    let dati = jsonData;

    // Calcola lunghezza array
    Object.size = function(obj) {
      let i = 0;
      for (i in obj) {
          i++;
      }
      return i;
    };

    // Prende i dati dell'ultimo giorno
    dati = dati[Object.size(dati) - 1]


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


    // Prende in input e formatta i dati
    let totale_positivi = String(dati.totale_positivi).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    let incremento_positivi = "+ " + String(dati.nuovi_positivi).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    let dimessi_guariti = String(dati.dimessi_guariti).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    let deceduti = String(dati.deceduti).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    let terapia_intensiva = String(dati.terapia_intensiva).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    let tamponi = String(dati.tamponi).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    let totale_casi = String(dati.totale_casi).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    
    // Dati totali
    ReactDOM.render(ultimoAggiornamento, document.getElementById('ultimiDati'));

    ReactDOM.render(totale_positivi, document.getElementById('numeroPositivi'));
    ReactDOM.render(dimessi_guariti, document.getElementById('numeroGuariti'));
    ReactDOM.render(deceduti, document.getElementById('numeroDeceduti'));
    ReactDOM.render(terapia_intensiva, document.getElementById('terapiaIntensiva'));
    ReactDOM.render(tamponi, document.getElementById('tamponi'));
    ReactDOM.render(totale_casi, document.getElementById('casiTotali'));


    
  })
  .catch((error) => {
    // handle your errors here
    console.error(error)
  })




