
// Fetch JSON ultimi dati per regione
fetch('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json')
  .then(response => response.json())
  .then((jsonData) => {

    let d = jsonData;

    // Data di aggiornamento
    function UltimiDati (props) {

      // Formattazione data
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
    function GiorniPrecedenti(props) {
        return(
            <div className='regione'>
                <h2>{props.giorno}</h2>
                <p>- Positivi: {props.positivi}</p>
                <p>- Guariti/Dimessi: {props.guariti}</p>
                <p>- Deceduti: {props.morti}</p>
                <p>- Terapia intensiva: {props.terapia}</p>
                <p>- Tamponi: {props.tamponi}</p>
                <p>- Casi totali: {props.tot}</p>
            </div>
        )
    };

    let giorni = [];
    let i = 0;

    

    for (let giorno in d) {
      i++;
      // Formattazione data
      let data = String(d[giorno].data);
      data = data.split('T');
      data = String(data[0] + " " + data[1])
      
      let datiGiornata = <GiorniPrecedenti giorno={data} positivi={d[giorno].totale_positivi} guariti={d[giorno].dimessi_guariti} morti={d[giorno].deceduti} terapia={d[giorno].terapia_intensiva} tamponi={d[giorno].tamponi} tot={d[giorno].totale_casi} key={i}/>
      giorni.push(datiGiornata);
    }
    
    ReactDOM.render(giorni, document.getElementById('giorni-precedenti'));
  

    
  })
  .catch((error) => {
    // handle your errors here
    console.error(error)
  })
