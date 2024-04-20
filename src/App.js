import './App.css';
import { FirstTable } from './components/FirstTable';
import { SecondTable } from './components/SecondTable';


function App() {

  return (
    <div className='App'>
      <div className='container'>
        <FirstTable />
        <br />
        <SecondTable />
      </div>
    </div>
  );
}

export default App;


