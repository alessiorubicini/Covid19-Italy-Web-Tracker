// Fetch JSON ultimi dati per regione
fetch('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json')
  .then(response => response.json())
  .then((jsonData) => {

    let d = jsonData;

    // Data di aggiornamento
    function UltimiDati (props) {
      let data = String(props.data);
      data = data.split('T');

      return(
        <div>
          <h1 align="center">Ultimo aggiornamento<br />{data[0]} {data[1]}</h1>
        </div>
      )
    }

    let ultimoAggiornamento = <UltimiDati data = {d[0].data}/>
    ReactDOM.render(ultimoAggiornamento, document.getElementById('ultimiDati'));

    // Componente ReactJS 'Regione'
    function DatiRegione(props) {
        return(
            <div className='regione'>
                <h2>{props.nome}</h2>
                <p>- Positivi: {props.positivi}</p>
                <p>- Guariti/Dimessi: {props.guariti}</p>
                <p>- Deceduti: {props.morti}</p>
                <p>- Terapia intensiva: {props.terapia}</p>
                <p>- Tamponi: {props.tamponi}</p>
                <p>- Casi totali: {props.tot}</p>
            </div>
        )
    };

    let regioni = [];   

    for (let i = 0; i < 21; i++) {
        let regione = <DatiRegione nome={d[i].denominazione_regione} positivi={d[i].totale_positivi} guariti={d[i].dimessi_guariti} morti={d[i].deceduti} terapia={d[i].terapia_intensiva} tamponi={d[i].tamponi} tot={d[i].totale_casi} key={i}/>
        regioni.push(regione);
    }
    
    ReactDOM.render(regioni, document.getElementById('dati-regioni'));
  

    
  })
  .catch((error) => {
    // handle your errors here
    console.error(error)
  })


