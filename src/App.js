import './App.css';
import events from './data/events.json';
import Event from './components/Event';

function App() {

  const listEvents = events.map((event) => {
    return(
      <Event key={event.id} 
    title={event.title} 
    label={event.label} 
    date={event.date} 
    emailCreator={event.emailCreator} 
    description={event.description} />
    )
  })
    

  return (
    <div className="App">
      <h1>Liste des événements</h1>
      <div className='eventContainer'>

        {listEvents}

      </div>
    </div>
  );
}

export default App;
